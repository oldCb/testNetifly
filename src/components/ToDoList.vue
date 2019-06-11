<template>
  <div class="to-do-list">
    <h4>Exercice 3 - TODO LIST AVEC STORE</h4>
    <input type="text" placeholder="Ajouter une tâche" v-model="newTask" @keyup.enter="ajouter(newTask)">
    <button @click="ajouter(newTask)">Ajouter</button>
    <ul>
      <task :tabList="list" />
    </ul>
  </div>
</template>

<script>
import Task from '@/components/Task'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ToDoList',
  components: {
    Task
  },
  data () {
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapGetters({
      list: 'toDoList/list'
    })
  },
  methods: {
    ...mapActions({
      ajouterT: 'toDoList/ajouter'
    }),
    ajouter(task){
      this.newTask = ''
      this.ajouterT(task)
    }
  }
}
</script>

<style lang="scss" scoped>
  .to-do-list {
    background-color: #e9e9e9;
    padding: 30px 0 45px;
    margin-bottom: 30px;

    & ul {
      list-style: none;
      padding-left: 0;
    }
  }
</style>
