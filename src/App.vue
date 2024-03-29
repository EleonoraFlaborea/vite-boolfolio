<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectCard },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main>
    <ProjectCard />
  </main>

</template>

<style scoped lang="scss"></style>
