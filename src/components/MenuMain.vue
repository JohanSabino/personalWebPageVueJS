<script setup>
import { ref } from 'vue';
import MenuItem from './MenuItem.vue';
import menuItems from './menuItems';
import '@/components/css/style.css';
import '@/components/css/media-queries.css';
const collapsed = ref(false);
</script>
<template>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="images&icons/Doge.icon" />
    <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/mediaqueries.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
    />
    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
        <div class="header">
            <button class="menu-button" @click="collapsed = !collapsed">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </button>
        </div>
        <div class="profile">
            <img :src="menuItems.profile.image" alt="" />
            <div class="profile-name" v-if="!collapsed">
                {{ menuItems.profile.name }}
            </div>
        </div>
        <div class="menu-items">
            <ul>
                <MenuItem
                    v-for="menuItem in menuItems.items"
                    :key="menuItem.id"
                    :item="menuItem"
                    :collapsed="collapsed"
                />
            </ul>
        </div>
        <div class="social-link">
            <ul>
                <li>
                    <a href="https://github.com/JohanSabino" target="_blank"
                        ><font-awesome-icon icon="fa-brands fa-linkedin"
                    /></a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/johanandressabino/"
                        target="_blank"
                        ><font-awesome-icon icon="fa-brands fa-github"
                    /></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.menu {
    background-color: rgb(20, 15, 7, 0.9);
    transition: width 0.5s;
    width: auto;
    margin: 0;
    padding: 0 10px;
    color: white;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
}

.header {
    display: flex-end;
    padding: 10px;
}
.menu-button {
    border: none;
    background-color: transparent;
    color: white;
    padding: 10px;
}
.menu-items {
    color: white;
}
/* we will explain what these classes do next! */
.collapsed {
    width: 4%;
}
.expanded {
    width: 10%;
}
.profile {
    padding: 10px;
    text-align: center;
    margin: 0;
    padding: 0;
}
.profile img {
    border-radius: 50%;
    min-width: 50px;
    max-width: 300px;
    width: 50%;
    margin: 0;
    padding: 0%;
}
.profile-name {
    text-align: center;
    margin: 5px 0;
    font-size: 18px;
    transition: width 0.5s;
}
.menu-items ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.social-link {
    color: #82a4a5;
    font-size: 20px;
    text-align: end;
    margin: 0;
    padding: 0;
}
.social-link ul {
    list-style: none;
    text-align: center;
    padding-left: 0;
    margin: auto;
}

.social-link ul li {
    width: 100%;
    margin: 5px auto;
}
.social-link ul li a {
    color: #d1f6f7;
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;
    font-size: 40px;
    padding: 0;
}
.expanded .social-link ul li a {
    color: #d1f6f7;
    text-decoration: none;
    display: block;
    transition: 0.5s;
    font-size: 40px;
    padding: 0;
}
.social-link ul li a:hover {
    background-color: white;
    color: black;
    font-size: 40px;
    padding: 0;
}
</style>
