<template>
    <div id="body">
    <div class="container">
        <div class="row">
            <navBar></navBar>
            <div >
                <headPage></headPage>
                <projectsMe></projectsMe>
            </div>
        </div>
        <div>
            <skillsMe></skillsMe>
        </div>
    </div>
   <div>
    <footerPage></footerPage>
   </div>
</div>
</template>
<script setup>
// eslint-disable-next-line
import navBar from '@/components/navbar/nav-bar.vue'
import headPage from '@/components/head/headPage.vue'
import projectsMe from '@/components/projects/projectsMe.vue'
import skillsMe from '@/components/skills/skillsMe.vue'
import footerPage from '@/components/footer/footerPage.vue'
</script>

<style scoped>

@import '@/components/css/normalize.css';
@import '@/components/css/style.css';
@import '@/components/css/media-queries.css';
</style>
