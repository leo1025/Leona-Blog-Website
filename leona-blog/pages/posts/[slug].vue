<template>
    <div>
        <h1>{{ post.title }}</h1>
        <img :src="post.feature_image" alt="">
        <div v-html="post.html"></div>
    </div>
</template>

<script setup>
    import { getPostBySlug } from '~/data/ghostService';
    
    const route = useRoute();

    const { data:post } = await useAsyncData('post', () => getPostBySlug(route.params.slug));
</script>