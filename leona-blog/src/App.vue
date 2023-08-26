<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <div >
      <Navbar />
    </div>
  </header>

  <main>
    <div id="app">
        <router-view></router-view>
    </div>
  </main>
</template>