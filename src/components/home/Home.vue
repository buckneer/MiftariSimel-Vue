<template>
  <Hero></Hero>
  <div class="container">
    <Skills></Skills>
  </div>
  <Contact></Contact>
  <div class="container">
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Portfolio from "@/components/home/Portfolio";

export default {
  name: "Home",
  components: {Portfolio, Contact, Skills, Hero}
}
</script>

<style scoped>

</style>
