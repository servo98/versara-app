<template>
  <div class="container">
      <div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
</div>
    <form action>
      <div class="field">
        <label class="label">Edad</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="age" />
            Entre 18 y 25
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="age" />
            Entre 25 y 30
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="age" />
            Entre 30 y 35
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="age" />
            Entre 35 y 45
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="age" />
            Mayor a 45
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">País</label>
        <div class="control">
          <input class="input is-primary" name="country" type="text" placeholder="País" />
        </div>
      </div>

      <div class="field">
        <label class="label">Ingresos promedio al año en USD</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="income" />
            Entre 3.300 y 5.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            Entre 5.000 y 10.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            Entre 10.000 y 20.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            Entre 20.000 y 30.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            Entre 30.000 y 40.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            Superior a 40.000
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="income" />
            No recibo ingresos
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Estado Civil</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="status" />
            soltera
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            casada
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            divorciada
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            unión libre
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            viuda
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            Otro
          </label>
          <div class="control">
            <input class="input" name="status" type="text" />
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">¿Tienes hijos?</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="status" />
            Sí
          </label>
          <br />
          <label class="radio">
            <input type="radio" name="status" />
            No
          </label>
          <div class="control">
            <label class="label">¿Cuántos?</label>
            <input class="input" name="status" type="text" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Request",
  props: {
    msg: String
  },
  data: function() {
    return {
      dire: process.env.VUE_APP_SERVICE_URL
    };
  }
};
</script>
