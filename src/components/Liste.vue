<template>
  <div class="liste">
    <h3>Exercice 2 - LISTE OBJET</h3>
    <ul>
      <li v-for="(article, index) in listeObjets" :key="index" @click="montrerProduit(index)">
        {{ article. nom }} -- {{ article.prix }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      listeObjets: [
        {
          id: 1,
          prix: 10,
          nom: 'chaussures'
        },
        {
          id: 3,
          prix: 15,
          nom: 'chaussette'
        },
        {
          id: 4,
          prix: 10,
          nom: 'pantalon'
        }
      ]
    }
  },
  methods: {
    montrerProduit (index) {
      alert(this.listeObjets[index].nom)
    }
  }
}
</script>

<style lang="scss" scoped>
  .liste {
    background-color: #e9e9e9;
    padding: 30px 0 45px;
    margin-bottom: 30px;
  }
</style>
