<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import SinglProjectPage from './components/pages/SingleProjectPage.vue';



export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage, SinglProjectPage }
}
</script>

<template>
  <AppHeader />
  <main>
    <HomePage />
    <SinglProjectPage />

  </main>

</template>

<style scoped lang="scss"></style>
