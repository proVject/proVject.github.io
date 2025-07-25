<script setup>

const skills = [
  "Vue.js", "Node.js", "GraphQL", "Hasura", "REST API", "TypeScript",
  "CI/CD", "PWA", "Firebase", "Git", "Ant Design", "Vuetify", "Canvas",
  "Linux", "JavaScript", "Docker", "JWT", "axios"
];
</script>

<template>
  <section id="skills" class="w-full py-12 md:py-24 lg:py-32 scroll-reveal visible">
    <div class="container m-auto px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary dark:text-foreground">
          {{ $t('skills.title') }}</h2>
        <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {{ $t('skills.description') }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-3 py-8 max-w-4xl">
        <div v-for="skill of skills" :key="skill" variant="secondary" class="text-base md:text-lg py-2 px-4 rounded-lg cursor-default transition-transform hover:scale-105 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<style scoped>

</style>