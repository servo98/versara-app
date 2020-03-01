<template>
  <div class="container">
    <Input :question="selectedQuestion" @next="catchNext"/>
  </div>
</template>

<script>
import { FIND_QUESTIONS } from '../store/actions/question';
import Input from "../components/Input.vue";
export default {
  name: "Request",
  props: {
    msg: String
  },
  components: {
    Input,
  },
  data: function() {
    return {
      selectedQuestion: null,
      type: 'profile',
    };
  },
  computed: {
    questionsProfile: {
      get() {
        return this.$store.getters.questionsProfile;
      },
    },
    questionsScore: {
      get() {
        return this.$store.getters.questionsScore;
      },
    },
  },
  methods: {

    async getQuestions(){
      await this.$store.dispatch(FIND_QUESTIONS)
        .catch(e => console.log(e));
      this.selectedQuestion = this.$store.getters.questionsProfile[0];
    },
    catchNext(answerOfQuestion) {
      debugger;
    },
    setSelectedQuestion(selected, type = 'profile') {
        if (type === 'profile') {
          const index = this.$store.getters.questionsProfile.indexOf(selected);
          return this.$store.getters.questionsProfile[index + 1];
        };
        const index = this.$store.getters.selectedQuestion.indexOf(selected);
        return this.$store.getters.selectedQuestion[index + 1];
    }
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

