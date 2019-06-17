<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <hello-compteur />
    </div>
  </div>
</template>

<script>
import HelloCompteur from '@/components/HelloCompteur'
export default {
  name: 'About',
  components: {
    HelloCompteur
  }
}
</script>
