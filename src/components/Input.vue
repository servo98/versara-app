<template>
  <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-mobile is-offset-4 is-4 is-12-mobile">
              <h5 class="title is-5 has-text-black">{{q.question}}</h5>
              <div class="field" v-show="q.type==='radio'">
                <div v-show="q.type==='radio'" class="control checkboxCustom" >
                  <label class="radio has-text-black" v-for="(answer, i) in q.answers" :key="i">
                    <input type="radio" :name="q.name" :value="answer.value" @click="change"/>
                    {{answer.string}}
                  </label>
                </div>
              </div>
              <div class="field" v-show="q.type=='text' || q.type=='email' || q.type=='phone'">
                <div class="control">
                  <input
                    class="input"
                    :name="q.name"
                    :id="q.name"
                    :type="q.type"
                    v-model="answerOfQuestion"
                    :placeholder="q.placeholder || ''"
                  />
                </div>
              </div>
              <div class="field" v-show="q.type=='number'">
                <div class="control">
                  <input
                    class="input"
                    :name="q.name"
                    :id="q.name"
                    min="0"
                    type="number"
                    v-model="answerOfQuestion"
                    :placeholder="q.placeholder || ''"

                  />
                </div>
              </div>
              <div class="field" v-show="q.type=='textarea'">
                <div class="control">
                  <textarea 
                  :name="q.name" 
                  class="textarea" 
                  :placeholder="q.placeholder || ''"
                  v-model="answerOfQuestion"></textarea>
                </div>
              </div>
              <button @click="next" class="button is-success is-large is-fullwidth">{{q.type === 'finish' ? 'Enviar' : 'Siguiente'}}</button>
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
      if(this.q.type === 'finish') {
        this.$emit('finish');
      } else {
        if(this.answerOfQuestion) {
          this.$emit('next', this.answerOfQuestion);
          this.answerOfQuestion= '';
        } else {
          alert('no has respondido esta pregunta');
          this.answerOfQuestion= '';
        }
      }
    },
    change(event){
      this.answerOfQuestion = event.target.value;
    },
  },
  watch:{
    question: function(newVal, oldVal) {
          this.q = newVal || oldVal;
          this.answerOfQuestion = '';
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