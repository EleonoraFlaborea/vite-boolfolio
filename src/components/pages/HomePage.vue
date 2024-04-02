<script>
import axios from 'axios';

import ProjectCard from '../projects/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    components: { ProjectCard },
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
    <ProjectCard />
</template>

<style scoped lang="scss"></style>
