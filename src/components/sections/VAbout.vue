<script setup>
</script>

<template>
  <section id="about" class="w-full py-12 md:py-24 lg:py-32 bg-card">
    <div class="container m-auto px-4 md:px-6 scroll-reveal visible">
    <div class="flex flex-col items-center justify-center space-y-6 text-center">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary dark:text-foreground">{{$t('about.title')}}</h2>
        <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {{$t('about.description')}}
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>

</style>