<template>
  <div class="exercices">
    <compteur />
    <liste />
    <to-do-list />
  </div>
</template>

<script>
import Compteur from '@/components/Compteur'
import Liste from '@/components/Liste'
import ToDoList from '@/components/ToDoList'
export default {
  name: 'Exercices',
  components: {
    Compteur,
    Liste,
    ToDoList
  }
}
</script>

<style lang="scss" scoped>
</style>
