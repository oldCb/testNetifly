<template>
  <div class="task">
    <li v-for="(task, index) in tabList" :key="task.id" :list="tabList">
      <div class="tache">
        <input type="checkbox" name="check" v-model="task.completed">
        <label for="check" :class="{check: task.completed}">{{ task.name }}</label>
      </div>
      <button class="supp" @click="supprimer(index)">X</button>
    </li>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  props: {
    tabList: Array
  },
  data () {
    return {
      task: this.tabList
    }
  },
  methods: {
    ...mapActions({
      supprimer: 'toDoList/supprimer'
    })
  }
}
</script>

<style lang="scss" scoped>
  .task {

    & li {
      border-bottom: 1px solid;
      width: 45%;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & label {
        margin-left: 10px;
      }
    }
    & li:last-child {
      border-bottom: none;
    }
  }
  .check {
    text-decoration: line-through;
  }
  .supp {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
</style>
