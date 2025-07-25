<template>
  <div class="border-border bg-background text-foreground min-h-screen h-full font-body antialiased">
    <v-header :links="navLinks" />
    <router-view />
    <v-footer />
  </div>
</template>

<script setup>
import {useDark} from '@vueuse/core'
import VHeader from "./components/VHeader.vue";
import VMain from "./components/VMain.vue";
import VFooter from "./components/VFooter.vue";

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
isDark.value = true

const navLinks = [
  { href: "#about", label: "nav.about" },
  { href: "#experience", label: "nav.experience" },
  { href: "#skills", label: "nav.skills" },
  { href: "#projects", label: "nav.projects" },
  { href: "#contact", label: "nav.contact" },
];
</script>

<style>
</style>