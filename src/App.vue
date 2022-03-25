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
      <Projects/>
      <Contact/>
      <a href="#header" class="block text-center underline text-blue-500 pb-8">
        Go Back To Top
      </a>
    </main>
  </div>
</template>

<script setup lang="ts">
  import About from './components/About.vue'
  import Header from './components/Header.vue'
  import NavBar from './components/NavBar.vue'
  import Hackathons from './components/Hackathons.vue'
  import Projects from './components/Projects.vue'
  import Contact from './components/Contact.vue'
</script>