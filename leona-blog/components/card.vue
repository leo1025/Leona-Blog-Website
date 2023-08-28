<script>
    export default {
        name: 'data',
        props: ['data']
    }   
</script>

<template>
    <NuxtLink :to="'/posts/' + data.slug">
        <div>
            <img :src="data.feature_image" alt="">
            <h3>{{ data.title }}</h3>
            <p>{{ data.excerpt }}</p>
        </div>
    </NuxtLink>
</template>