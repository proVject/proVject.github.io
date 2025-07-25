<script setup>
</script>

<template>
  <section id="hero" class="w-full py-20 md:py-28 lg:py-40 scroll-reveal" :class="{ 'visible': true }">
    <div class="container m-auto px-4 md:px-6">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div
            class="flex flex-col items-center text-center lg:items-start lg:text-left justify-center space-y-4 order-2 lg:order-1">
          <div class="space-y-2">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-secondary dark:text-foreground">
              Volodymyr Melnyk
            </h1>
            <p class="text-xl md:text-2xl font-medium text-muted-foreground">{{ $t('hero.role') }}</p>
            <p class="max-w-[600px] text-muted-foreground md:text-xl">
              {{ $t('hero.tagline') }}
            </p>
          </div>
          <div class="flex flex-col gap-4 min-[400px]:flex-row pt-4">
            <router-link to="#projects">
              <button size="lg"
                      class="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                {{ $t('hero.viewProjects') }}
              </button>
            </router-link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <button size="lg"
                      class="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                {{ $t('hero.downloadCV') }}
              </button>
            </a>
          </div>
        </div>
        <div class="flex justify-center items-center order-1 lg:order-2">
          <div
              class="relative flex shrink-0 overflow-hidden rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-primary shadow-lg">
            <img
                src="/avatar.jpeg"
                alt="Volodymyr Melnyk"
                class="aspect-square h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>