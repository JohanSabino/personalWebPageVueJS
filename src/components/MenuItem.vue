<script setup>
const props = defineProps(['item', 'href', 'social', 'collapsed']);
</script>
<template>
    <a :href="[props.item.href]">
        <div class="item">
            <div class="icon">
                <font-awesome-icon
                    :icon="['fa-solid', props.item.icon]"
                    size="2x"
                />
            </div>
            <div class="title" v-if="!collapsed">{{ props.item.title }}</div>
        </div>
    </a>
</template>
<style scoped>
a {
    color: #d1f6f7;
    text-decoration: none;
    display: block;
}
a:hover {
    background-color: white;
    color: black;
}
.item {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
}
.item .icon {
    width: 80px;
    display: flex;
    justify-content: center;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    a {
        color: #d1f6f7;
        text-decoration: none;
        display: block;
    }
    a:hover {
        background-color: white;
        color: black;
    }
    .item {
        display: flex;
        align-items: center;
        padding: 0px;
        margin: 15px 0;
        gap: 0px;
    }
    .item .icon {
        width: 70px;
        display: flex;
        justify-content: center;
    }
}
</style>
