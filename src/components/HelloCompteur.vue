<template>
  <div class="compteur">
    <h3>Exercice 1 - COMPTEUR</h3>
    <p>{{ valeur }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloCompteur',
  computed: {
    ...mapGetters({
      valeur: 'compteur/valeur'
    })
  }
}
</script>

<style lang="scss" scoped>
  .compteur {
    background-color: #e9e9e9;
    padding: 30px 0 45px;
    margin-bottom: 30px;
  }
</style>
