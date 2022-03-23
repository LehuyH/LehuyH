<template>
  <div>
    <nav>
      <a href="#main-content" tabindex="0" class="focus:opacity-100 active:opacity-100 left-0 top-10 opacity-0">Skip To Main Content</a>
      <NavBar />
    </nav>
    <Header/>
    <main id="main-content">
      <About />
      <Hackathons />
    </main>
  </div>
</template>

<script setup lang="ts">
  import About from './components/About.vue'
  import Header from './components/Header.vue'
  import NavBar from './components/NavBar.vue'
  import Hackathons from './components/Hackathons.vue'
</script>