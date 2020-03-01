<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="field">
              <label class="label">Monto</label>
              <div class="control">
                <input v-model="amount" class="input" type="number" />
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="field">
              <label class="label">Plazo(meses)</label>
              <div class="control">
                <input v-model="time" class="input" type="number" />
              </div>
            </div>
            <button @click="calcular" class="button is-large is-link is-fullwidth">Calcular crédito</button>
          </div>
        </div>
        <div class="has-text-centered table-container" v-if="message!=''">
          <br />
          <div class="columns">
            <div class="column notification is-success is-6 is-offset-3">{{this.message}}</div>
          </div>
          <br>
          <table class="table">
            <thead>
              <tr>
                <th>Mes</th>
                <th>Abono a intereses</th>
                <th>Abono a capital</th>
                <th>Cuota</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in table" :key="i">
                <td>{{row[0]}}</td>
                <td>{{row[1]}}</td>
                <td>{{row[2]}}</td>
                <td>{{row[3]}}</td>
                <td>{{row[4]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CALCULATE_CREDIT } from "../store/actions/credit";
export default {
  name: "Credit",
  data() {
    return {
      amount: "",
      time: "",
      table: [],
      message: ""
    };
  },
  methods: {
    async calcular() {
      const result = await this.$store.dispatch(CALCULATE_CREDIT, {
        time: this.time,
        amount: this.amount
      });
      this.table = result.table;
      this.message = result.message;
      console.log(a);
      //   this.credito = "";
      //   this.monto = "";
    }
  }
};
</script>

<style>
 .table {
      margin-left: auto;
      margin-right: auto;
    }
</style>