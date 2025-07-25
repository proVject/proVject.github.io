<script setup>
import {ElNotification} from "element-plus";
import {useI18n} from "vue-i18n";
import {Icon} from "@iconify/vue"
import {ref} from "vue";

const {t} = useI18n()

const form = ref({})

const onSubmit = (e) => {
  const f = e.target;
  const fd = new FormData()
  fd.append('name', form.value.name)
  fd.append('email', form.value.email)
  fd.append('message', form.value.message)
  fetch('https://formspree.io/f/xovlddln', {
    method: 'POST',
    body: fd,
    headers: {
      'Accept': 'application/json',
    },
  })
      .then(response => {
        if (response.ok) {
          ElNotification({
            type: 'success',
            title: t('contact.toast.title'),
            description: t('contact.toast.description'),
          })
        } else {
        }
      })
      .catch(error => {
      })
  f.reset();
}
</script>

<template>
  <section id="contact" class="w-full py-12 md:py-24 lg:py-32 scroll-reveal visible">
    <div class="container m-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
      <div class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-secondary dark:text-foreground">
          {{ $t('contact.title') }}</h2>
        <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {{ $t('contact.description') }}
        </p>
      </div>
      <div class="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col items-center md:items-start space-y-4">
          <h3 class="text-xl font-semibold">{{ $t('contact.info.title') }}</h3>
          <div class="flex items-center gap-3">
            <icon icon="mdi-light:phone" class="h-6 w-6 text-muted-foreground"/>
            <a href="tel:+380977012990"
               class="text-muted-foreground hover:text-primary transition-colors">+380977012990</a>
          </div>
          <div class="flex items-center gap-3">
            <Icon icon="material-symbols-light:mail-outline" class="h-6 w-6 text-muted-foreground"/>
            <a href="mailto:vovazb1232@gmail.com" class="text-muted-foreground hover:text-primary transition-colors">vovazb1232@gmail.com</a>
          </div>
          <div class="flex items-center gap-3">
            <Icon icon="material-symbols-light:home-outline" class="h-6 w-6 text-muted-foreground"/>
            <span class="text-muted-foreground">{{ $t('contact.info.location') }}</span>
          </div>

          <div class="flex justify-center md:justify-start gap-6 pt-4">
            <a href="https://github.com/proVject" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <icon icon="hugeicons:github" class="h-8 w-8 text-muted-foreground transition-colors hover:text-primary"/>
            </a>
            <a href="https://www.linkedin.com/in/vovazb/" target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn">
              <icon icon="uit:linkedin-alt" class="h-8 w-8 text-muted-foreground transition-colors hover:text-primary"/>
            </a>
            <a href="https://t.me/vovazb" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <icon icon="lsicon:send-outline"
                    class="h-8 w-8 text-muted-foreground transition-colors hover:text-primary"/>
            </a>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div class="flex flex-col space-y-1.5 p-6">
            <form @submit.prevent="onSubmit" class="space-y-4" method="POST">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input v-model="form.name"
                       class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                       id="name" name="name" :placeholder="$t('contact.form.name')" required/>
                <input v-model="form.email"
                       class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                       id="email" name="email" type="email" :placeholder="$t('contact.form.email')" required/>
              </div>
              <textarea v-model="form.message" id="message" name="message"
                        class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[150px]"
                        :placeholder="$t('contact.form.message')" required/>
              <button type="submit"
                      class="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                {{ $t('contact.form.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline">
            {{ $t('contact.downloadCV') }}
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>