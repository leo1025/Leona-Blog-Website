<template>
  <div class="container-fluid w-75">
    <div class="row text-left p-5 vh-100">
      <div class="col">
        <h1>Hi there, I'm <strong>Leona</strong></h1>
        <p>I'm a Software Engineer and Digital Artist. </p>
      </div>
      <div class="col">

      </div>
    </div>
    <div class="row p-1">
      <div class="text-center py-2 my-3 sub-title">
        <h3>Recent Projects and Posts</h3>
      </div>
      <div class="col">
          <card v-bind:data="projectPost" />
      </div>
      <div class="col">
          <card v-bind:data="journalPost" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getMostRecentPostByTag } from '~/data/ghostService';

  const { data:projectPost } = await useAsyncData('projectPost', () => getMostRecentPostByTag("Projects"));
  const { data:journalPost } = await useAsyncData('journalPost', () => getMostRecentPostByTag("Journal"));
</script>