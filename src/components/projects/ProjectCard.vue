<script>
export default {
    name: 'ProjectCard',
};
</script>

<template>

    <section class="container pt-4">
        <h1>Boolfolio</h1>

        <ul>
            <li v-for="project in projects" :key="project.id">
                <h3 v-text="project.title"></h3>
            </li>
        </ul>
    </section>

</template>

<style scoped lang="scss"></style>