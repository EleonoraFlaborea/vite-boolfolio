<script>
import AppHeader from './components/AppHeader.vue';



export default {
  name: 'Boolfolio',
  components: { AppHeader }
}
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>

</template>

<style scoped lang="scss"></style>
