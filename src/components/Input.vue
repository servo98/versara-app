<template>
  <div class="input">
      <label class="label">{{q.question}}</label>
        <div class="control checkboxCustom" >
          <label class="radio" v-for="answer in q.answers" :key="answer.string">
            <input type="radio" :name="q.name" />
              {{answer.string}}
          </label>
        </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  props: {
    questions: Array,
  },
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