<template>
  <div class="min-h-screen bg-cream text-slate-800 font-sans">
    <header class="text-center py-12">
      <h1 class="text-4xl font-bold">Volodymyr Melnyk</h1>
      <p class="text-xl mt-2">Frontend Developer · Vue / Nuxt · Remote</p>
    </header>

    <section class="px-6 md:px-24 py-10">
      <h2 class="text-2xl font-semibold mb-4">About Me</h2>
      <p class="mb-4">Frontend Developer with 4+ years of experience building modern web applications using Vue, Nuxt, GraphQL, and Node.js. I love turning complex logic into smooth and intuitive user experiences.</p>
      <p>I’m passionate about clean code, performance, and continuous learning. Currently based in Kalush, Ukraine — working remotely.</p>
    </section>

    <section class="px-6 md:px-24 py-10 bg-white">
      <h2 class="text-2xl font-semibold mb-4">Projects</h2>
      <ul class="space-y-6">
        <li>
          <h3 class="text-xl font-medium">TaskWave</h3>
          <p class="text-sm">Kanban-style task manager with drag & drop, filters, and animations.</p>
        </li>
        <li>
          <h3 class="text-xl font-medium">Translio</h3>
          <p class="text-sm">Translator app with history, dark/light themes, and i18n support.</p>
        </li>
        <li>
          <h3 class="text-xl font-medium">CryptoPulse</h3>
          <p class="text-sm">Real-time crypto dashboard with charts and APIs.</p>
        </li>
        <li>
          <h3 class="text-xl font-medium">PWA Notes</h3>
          <p class="text-sm">Offline-first notes app using IndexedDB and PWA tech.</p>
        </li>
      </ul>
    </section>

    <section class="px-6 md:px-24 py-10">
      <h2 class="text-2xl font-semibold mb-4">Tech Stack</h2>
      <p>Vue 3, Nuxt, GraphQL, Hasura, Node.js, REST API, TailwindCSS, Git, Docker, JWT, CI/CD</p>
    </section>

    <section class="px-6 md:px-24 py-10 bg-white">
      <h2 class="text-2xl font-semibold mb-4">Contact</h2>
      <p>Email: <a href="mailto:vovazb1232@gmail.com" class="text-blue-600">vovazb1232@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/proVject" class="text-blue-600">github.com/proVject</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/vovazb" class="text-blue-600">linkedin.com/in/vovazb</a></p>
    </section>
  </div>
</template>

<script setup>
// no additional logic yet
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
.bg-cream {
  background-color: #fefcf7;
}
</style>