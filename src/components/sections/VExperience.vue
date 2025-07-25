<script setup>

const experiences = [
  {
    role: "experience.freelance.role",
    company: "experience.freelance.company",
    period: "experience.freelance.period",
    description: "experience.freelance.description",
  },
  {
    role: "experience.secureon.role",
    company: "experience.secureon.company",
    period: "experience.secureon.period",
    description: "experience.secureon.description",
  },
  {
    role: "experience.productCompany.role",
    company: "experience.productCompany.company",
    period: "experience.productCompany.period",
    description: "experience.productCompany.description",
  }
]
</script>

<template>
  <section id="experience" class="w-full py-12 md:py-24 lg:py-32 scroll-reveal visible">
    <div class="container m-auto px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary dark:text-foreground">
          {{ $t('experience.title') }}</h2>
        <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {{ $t('experience.description') }}
        </p>
      </div>
      <div class="relative">
        <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
        <div v-for="(exp, index) of experiences"
             :key="index"
             class="flex items-center w-full mb-8"
             :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
        >
          <div
              class="w-1/2"
              :class="index % 2 === 0 ? 'pr-8' : 'pl-8'"
          >
            <div class="relative rounded-lg border bg-card text-card-foreground shadow-sm" :class="index % 2 === 0 ? 'text-left' : 'text-right'">
              <div
                  class="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary"
                  :class="index % 2 === 0 ? '-right-2.5' : '-left-2.5'"
              ></div>
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="text-2xl font-semibold leading-none tracking-tight">{{ $t(exp.role) }}</div>
                <div class="text-sm text-muted-foreground">{{ $t(exp.company) }} | {{ $t(exp.period) }}</div>
              </div>
              <div>
                <p class="p-6 pt-0">{{ $t(exp.description) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>