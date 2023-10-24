<template>
    <body class="container-fluid">
    <div class="container-a">
        <div class="row">
            <navBar></navBar>
            <div>
                <headPage></headPage>
            </div>
        </div>
        <div class="row" id="row2">
            <div class="col-4">
                <projectsMe></projectsMe>
            </div>
            <div class="col-8">
                <skillsMe></skillsMe>
            </div>
         </div>
     </div>
     <div>
         <footerPage></footerPage>
     </div>
   </body>
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
@import '@/components/css/media-queries.css';

.container-fluid {
    width: 100%;
    --opacidad-negro: 0.3;
    background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url('/src/img/pexels.png');
    background-size: cover;
    font-family: 'Abril Fatface', cursive;
    font-family: 'Arvo', serif;
}
.container-a{
    padding: 1% 10% 1% 10%;
}
#row2{
    margin-top: 10%;
}
.color1 {
    color: #140f07;
}
.color2 {
    color: #1b253c;
}
.color3 {
    color: #4d6099;
}
.color4 {
    color: #87a5fb;
}
.color5 {
    color: #d1f6f7;
}
</style>
