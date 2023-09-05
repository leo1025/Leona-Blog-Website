<script>
    export default {
        name: 'data',
        props: ['data']
    }   
</script>

<template>
    <NuxtLink :to="'/posts/' + data.slug">
        <div class="">
            <img :src="data.feature_image" alt="">
            <h3>{{ data.title }}</h3>
        </div>
    </NuxtLink>
</template>

<style>
    NuxtLink {
        background-color: rgb(13, 107, 0);
    }
</style>