<template>
  <div class="container">
    <Input v-show="!isFinish" :question="selectedQuestion" @next="catchNext" @finish="onFinish" />
    <div v-show="isFinish" class="">
      <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title h1 has-text-black">Tu score obtenido es :</h1>
            <h2 class="subtitle has-text-black">{{newScore}}</h2>
            <progress class="progress is-large is-success" :value="newScore" max="100"></progress>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { FIND_QUESTIONS } from "../store/actions/question";
import { CREATE_PROSPECTUS } from "../store/actions/prospectus";

import Input from "../components/Input.vue";
export default {
  name: "Request",
  props: {
    msg: String
  },
  components: {
    Input
  },
  data: function() {
    return {
      selectedQuestion: null,
      type: "profile",
      prospect: {
        email: "",
        name: "",
        address: "",
        phone: "",
        age: 0,
        country: "",
        income: "",
        status: "",
        children: ""
      },
      score: 0,
      newScore: 0,
      isFinish: false
    };
  },
  computed: {
    questionsProfile: {
      get() {
        return this.$store.getters.questionsProfile;
      }
    },
    questionsScore: {
      get() {
        return this.$store.getters.questionsScore;
      }
    }
  },
  methods: {
    async getQuestions() {
      await this.$store.dispatch(FIND_QUESTIONS).catch(e => console.log(e));
      this.selectedQuestion = this.$store.getters.questionsProfile[0];
    },
    catchNext(answerOfQuestion) {
      if (this.type === "profile") {
        this.prospect[this.selectedQuestion.name] = answerOfQuestion;
        this.selectedQuestion = this.setSelectedQuestion();
      } else {
        this.score += parseInt(answerOfQuestion);
        this.selectedQuestion = this.setSelectedQuestion();
      }
    },
    setSelectedQuestion() {
      let change = false;
      if (this.type === "profile") {
        const index = this.$store.getters.questionsProfile.indexOf(
          this.selectedQuestion
        );
        if (this.$store.getters.questionsProfile[index + 1]) {
          return this.$store.getters.questionsProfile[index + 1];
        }
        change = true;
        this.type = "score";
      }
      const index = change
        ? 0
        : this.$store.getters.questionsScore.indexOf(this.selectedQuestion);
      if (this.$store.getters.questionsScore[index + 1]) {
        return this.$store.getters.questionsScore[index + 1];
      }
      return {
        question: "",
        type: "finish",
        answers: []
      };
    },
    async onFinish() {
      this.prospect["score"] = this.score / 9;
      await this.$store
        .dispatch(CREATE_PROSPECTUS, this.prospect)
        .then(res => {
          this.newScore = res.score;
          alert("Solicitud enviada con éxito");
          isFinish = true;
        })
        .catch(() => {
          alert("Hubo un error con tu solicitud. Reinicia tu solitud");
        });
    }
  },
  mounted() {
    this.getQuestions();
  }
};
</script>

