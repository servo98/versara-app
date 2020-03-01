<template>
  <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-mobile is-offset-4 is-4 is-12-mobile">
              <h1 class="title is-1 has-text-black	">{{q.question}}</h1>
              <div class="field" v-show="q.type==='radio'">
                <div v-show="q.type ==='radio'" class="control checkboxCustom" >
                  <label class="radio" v-for="answer in q.answers" :key="answer">
                    <input type="radio" :name="q.name" />
                      {{answer.string}}
                  </label>
                </div>
                <div class="field-body" v-show="q.type==='text'">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        name="username"
                        id="username"
                        type="text"
                        placeholder="Username"
                        autofocus
                        data-validate="require"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button @click="next" class="button is-success is-large is-fullwidth">{{Siguiente}}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: "Input",
  props: {
    question: Object,
  },
  data: function() {
    return {
      q: {
        question:'',
        answers: [],
        answerOfQuestion: '',
      },
    };
  },
  methods:{
    next() {
      if(answerOfQuestion.lenght > 0) {
        this.$emit('next', answerOfQuestion);
      } else {
        alert('no has respondido esta pregunta');
      }
    }
  },
  watch:{
    question: function(newVal, oldVal) { // watch it
          this.q = !!newVal ? {
          question:'',
          answers: [],
          answerOfQuestion: '',
        } : newVal;
          this.answerOfQuestion = '';
    }
  },
  computed:{
    index: {
      get(){
        if (this.$store.getters.questionsProfile.indexOf(this.question)){
          const index = this.$store.getters.questionsProfile.indexOf(this.question);
        } else if(this.$store.getters.questionsScore.indexOf(this.question)){
          const index = this.$store.getters.questionsProfile.indexOf(this.question);
        }
      }
    }
  },
  mounted(){
    this.q = this.question;
  }
};
</script>

<style scoped>
.checkboxCustom{
  display: flex;
  flex-direction: column;
}
.radio + .radio {
  margin-left: 0;
}
</style>