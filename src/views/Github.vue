<template>
  <div class="github">
    <h3>Exercice API</h3>
    <loading-animation v-if="loading" />
    <div class="result" v-else-if="!loading">
      <div class="langages" @click="newResult1">
        <div class="langages_box" v-for="elem in newTab" :key="elem.ied">
          <p>{{ elem.langage }}</p>
          <p>{{ elem.stars }}</p>
        </div>
      </div>
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

  data () {
    return {
      newTab: []
    }
  },

  created () {
    this.getTabResult()
  },

  computed: {
    ...mapGetters({
      tabResult: 'github/tabResult',
      loading: 'github/loading'
    }),
    test() {
      let test = [
        { langage: 'test', stars: '1' },
        { langage: 'test', stars: '1' },
        { langage: 'toto', stars: '1' },
      ]
      this.newTab = test
    }
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


