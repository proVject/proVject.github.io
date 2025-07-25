<script setup>
import {Icon} from '@iconify/vue'

const projects = [
  {
    title: "projects.cryptoview.title",
    description: "projects.cryptoview.description",
    image: "/projects/cryptoView.png",
    imageHint: "crypto dashboard",
    tags: ["Nuxt 3", "TailwindCSS", "Element Plus UI", "ApexCharts", 'Pinia', 'VueUse', 'Binance API', 'PWA', 'i18n',],
    github: "https://github.com/proVject/cryptoView",
    live: "https://crypto-view-mocha.vercel.app"
  },
  {
    title: "projects.taskwave.title",
    description: "projects.taskwave.description",
    image: "/projects/taskWave.png",
    imageHint: "task manager",
    tags: ["Vue 3", "LocalStorage", "Drag & drop", "Tailwind CSS", 'i18n', 'PWA'],
    github: "https://github.com/proVject/taskWave",
    live: "https://provject.github.io/taskWave/"
  },
  {
    title: "projects.mediumclone.title",
    description: "projects.mediumclose.description",
    image: "/projects/mediumClone.png",
    imageHint: "medium clone blog app",
    tags: ['Vue 2', 'Vue Router', 'Vuex', 'Axios'
    ],
    github: "https://github.com/proVject/mediumclone_vue",
    live: "https://provject.github.io/mediumclone_vue/"
  },
  {
    title: "projects.ais.title",
    description: "projects.ais.description",
    image: "/projects/ais.png",
    imageHint: "template manager SPA",
    tags: ["Vue 3", "Pinia", "Vue Router", "Axios", "Element Plus", "LocalStorage", "SPA"],
    github: "https://github.com/proVject/ais",
    live: "https://provject.github.io/ais/"
  }
];
</script>

<template>
  <section id="projects" class="w-full py-12 md:py-24 lg:py-32 bg-card scroll-reveal visible">
    <div class="container m-auto px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary dark:text-foreground">
          {{ $t('projects.title') }}</h2>
        <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {{ $t('projects.description') }}
        </p>
      </div>
      <div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        <div
            v-for="(project, index) of projects" :key="index"
            class="overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div class="relative aspect-video w-full">
            <img :src="project.image" :alt="$t(project.title)" class="object-cover w-full" />
          </div>
          <div class="flex flex-col space-y-1.5 p-6">
            <div class="text-2xl font-semibold leading-none tracking-tight">{{ $t(project.title) }}</div>
            <div class="text-sm text-muted-foreground">{{ $t(project.description) }}</div>
          </div>
          <div class="p-6 pt-0">
            <div class="flex flex-wrap gap-2">
              <div v-for="tag of project.tags" :key="tag" class="text-foreground">{{ tag }}</div>
            </div>
          </div>
          <div class="flex gap-4 items-center p-6 pt-0">
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="w-full">
              <button class="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                <icon icon="hugeicons:github" class="mr-2 h-4 w-4"/>
                GitHub
              </button>
            </a>
            <a :href="project.live" target="_blank" rel="noopener noreferrer" class="w-full">
              <button class="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                <icon size="20" icon="mynaui:external-link" class="mr-2 h-4 w-4"/>
                {{ $t('projects.liveDemo') }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>