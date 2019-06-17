<template>
  <div class="kanye">
    <loading-animation v-if="loading" />
    <div v-if="!loading">
      <p>Kanye dit: "{{ citation }}"</p>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from '@/components/LoadingAnimation'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Kanye',
  components: {
    LoadingAnimation
  },
  created () {
    this.getCitation()
  },
  methods: {
    ...mapActions({
      getCitation: 'kanye/getCitation'
    })
  },
  computed: {
    ...mapGetters({
      citation: 'kanye/citation',
      loading: 'kanye/loading'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
