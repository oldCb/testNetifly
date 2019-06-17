<template>
  <div class="github">
    <h3>Exercice API</h3>
    <loading-animation v-if="loading" />
    <div class="result" v-else-if="!loading">
      <div class="elem" v-for="elem in tabResult" :key="elem.id">
        <p>Langage : {{ elem.language }}</p>
        <p>Stars : {{ elem.stars }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import LoadingAnimation from '@/components/LoadingAnimation'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Github',

  components: {
    LoadingAnimation
  },

  created () {
    this.getTabResult()
  },

  computed: {
    ...mapGetters({
      tabResult: 'github/tabResult',
      loading: 'github/loading'
    })
  },

  methods: {
    ...mapActions({
      getTabResult: 'github/getTabResult'
    })
  }
}
</script>

<style lang="scss" scoped>
  .langages {
    height: auto;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    &_box {
      width: 150px;
      height: auto;
      border: 1px solid;
    }
  }
  .elem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
    padding: 0 10px;
  }
  .elem:nth-child(2n+1){
    background-color:#efeded;
  }
</style>
