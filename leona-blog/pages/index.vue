<template>
  <div class="spread container-fluid">
    <div>
      <h1>Hi there, I'm Leona</h1>
      <h5>I'm a Software Engineer and Digital Artist. </h5>
    </div>
    <div>
      Here's some things I've been working on. Feel free to follow the links and explore.
      <div>
          FEATURED PROJECT
          <div>
            <h5>{{ projectPost.title }}</h5>
            <img :src="projectPost.feature_image" alt="">
            <p>{{ projectPost.excerpt }}</p>
          </div>
          <NuxtLink to="/projects">Projects</NuxtLink>
      </div>
      <div>
          FEATURED POST
          <div>
            <h5>{{ journalPost.title }}</h5>
            <img :src="journalPost.feature_image" alt="">
            <p>{{ journalPost.excerpt }}</p>
          </div>
          <NuxtLink to="/journal">Journal</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getMostRecentPostByTag } from '~/data/ghostService';

  const { data:projectPost } = await useAsyncData('projectPost', () => getMostRecentPostByTag("Projects"));
  const { data:journalPost } = await useAsyncData('journalPost', () => getMostRecentPostByTag("Journal"));
</script>