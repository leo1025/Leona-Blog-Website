<template>
    <div class="Work">
        <div v-for="post in posts">
            <card v-bind:data="post" />
        </div>
    </div>
</template>

<!-- TODO: Add functionality to advance pages once the limit is reached -->
<script setup>
    import { getNPosts } from '~/data/ghostService';
    
    var p = 1;

    const { data:posts } = await useAsyncData('posts', () => getNPosts(8, p, "Projects"));
</script>