<template>
  <div class="has-text-centered" style>
    <figure class="image image has-image-centered">
      <img src="/logo.png" />
    </figure>
    <h1 class="title h1 has-text-black">VERSARA</h1>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <router-link to="/request">
          <button class="button is-rounded is-warning is-fullwidth is-large">Solicitar crédito</button>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <router-link to="/payments">
          <button class="button is-rounded is-info is-fullwidth is-large">Pagar</button>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <router-link to="/credit">
          <button class="button is-rounded is-link is-fullwidth is-large">Simulador</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
.image {
  max-width: 300px;
}
.h1 {
  font-family: "Aleo Light";
}
</style>