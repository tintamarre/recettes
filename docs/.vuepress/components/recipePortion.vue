<!-- recipePortion.vue -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Ingrédients</th>
          <th>Qté</th>
        </tr>
      </thead>

      <tr v-for="(ingredient, index) in recette.ingredients" :key="index">
        <td>{{ ingredient.name }}</td>
        <td class="qty">{{ Math.round(ingredient.qty * (qty / portion) * 100) / 100 }} {{ ingredient.unity }}</td>
      </tr>

    </table>

    <ul>
      <li>Qté de la recette: {{ portion }}</li>
      <li>Qté demandée: {{ qty }}</li>

    </ul>

    <a @click="changeQty('add')">++</a>
    <a @click="changeQty('remove')">--</a>
    <a @click="reset">Reset</a>

  </div>
</template>

<script>
export default {
  props: {
    recette: Object,
  },
  data: function () {
    return {
      portion: this.recette.portion,
      qty: this.recette.portion,
    }
  },
  methods: {
    changeQty(methd) {
      if (methd == 'add') {
        this.qty++;
      } else {
        this.qty--;
      }
    },
    reset() {
      this.qty = this.recette.portion;
    }
  }
}
</script>

<style>
.qty {
  text-align: right;
  },
  table {
    float:left;
    background:yellow;
    margin-left:10px;
  }
  </style>
