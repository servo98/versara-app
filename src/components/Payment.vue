<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-mobile is-offset-4 is-4 is-12-mobile">
              <h1 class="title is-1 has-text-black	"># de crédito</h1>
              <div class="field">
                <div class="control">
                  <input v-model="credito" class="input is primary" type="text" placeholder="#######" />
                </div>
              </div>
              <h1 class="title is-1 has-text-black	">Monto</h1>
              <div class="field">
                <div class="control">
                  <input v-model="monto" class="input is primary" type="number" placeholder="$12345.00" />
                </div>
              </div>
              <button @click="pagar" class="button is-success is-large is-fullwidth">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { PAY_CREDIT } from '../store/actions/credit';
export default {
  name: "Payment",
  data() {
    return {
      credito: '',
      monto: ''
    }
  },
  methods: {
    async pagar() {
       await this.$store.dispatch(PAY_CREDIT, {credito: this.credito, monto: this.monto})
       this.credito = ''
       this.monto = ''
    }
  }
};
</script>
