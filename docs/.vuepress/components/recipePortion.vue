<!-- recipePortion.vue -->
<template>
  <div v-if="qty">
    <p><em>Ingrédients pour {{ qty }} {{ this.recette.portion_type }}</em></p>

    <ul>
      <li v-for="(ingredient, index) in recette.ingredients" :key="index">
        <strong>{{ Math.round(ingredient.qty * (qty / portion_qty) * 100) / 100 }}</strong> {{ ingredient.unity }}
        {{ ingredient.name }}  {{ ingredient.description }} ;
      </li>
    </ul>

    <a @click="changeQty('add')">➕ {{ this.recette.portion_step }} {{ this.recette.portion_type }}</a><br />
    <a @click="changeQty('remove')" v-if="qty > step">➖ {{ this.recette.portion_step }} {{ this.recette.portion_type }} </a><br />

    <em><a @click="reset">🔙 {{ this.recette.portion_qty }} {{ this.recette.portion_type }}</a></em><br />

  </div>
</template>

<script>
export default {
  props: {
    recette: Object,
  },
  data: function () {
    return {
      portion_qty: this.recette.portion_qty,
      qty: this.recette.portion_qty,
      step: this.recette.portion_step,
    }
  },
  methods: {
    changeQty(methd) {
      if (methd == 'add') {
        this.qty = this.qty + this.step;
      } else {
        this.qty = this.qty - this.step;
      }
    },
    reset() {
      this.qty = this.recette.portion_qty;
    }
  }
}
</script>

<style>
</style>
