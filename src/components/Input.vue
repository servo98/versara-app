<template>
  <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-mobile is-offset-4 is-4 is-12-mobile">
              <h1 class="title is-1 has-text-black">{{q.question}}</h1>
              <div class="field" v-show="q.type==='radio'">
                <div v-show="q.type ==='radio'" class="control checkboxCustom" >
                  <label class="radio" v-for="(answer, i) in q.answers" :key="i">
                    <input type="radio" :name="q.name" :value="answer.string" @click="change"/>
                      
                  </label>
                </div>
                <div class="field-body" v-show="q.type==='text'">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        :name="q.name"
                        :id="q.name"
                        type="text"
                        :placeholder="q.placeholder || ''"
                        autofocus
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button @click="next" class="button is-success is-large is-fullwidth">Siguiente</button>
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
      },
      answerOfQuestion: '',
    };
  },
  methods:{
    next() {
      if(this.answerOfQuestion > 0) {
        this.$emit('next', this.answerOfQuestion);
      } else {
        alert('no has respondido esta pregunta');
      }
    },
    change(event){
      console.log("click,",event.target.value);
      this.answerOfQuestion = event.target.value;
    },
  },
  watch:{
    question: function(newVal, oldVal) {
          this.q = newVal || oldVal;
          this.answerOfQuestion = '';
    }
  },
  computed:{
    canNext: {
      get(){
       return true;
      }
    }
  },
  mounted(){
    this.$set(this.q, this.question ? {
          question:'',
          answers: [],
        } : this.question);
    this.answerOfQuestion = '';
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