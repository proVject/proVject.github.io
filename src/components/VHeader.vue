<script setup>
import Logo from "./icons/Logo.vue";
import {ref, watch} from "vue";
import {Icon} from "@iconify/vue";
import {useWindowSize} from '@vueuse/core'
import {loadLocaleMessages} from "../plugins/i18n.js";
import VThemeToggle from "./VThemeToggle.vue";

const {width} = useWindowSize()

const shownDrawer = ref(false);

const props = defineProps({
  links: {type: Array, required: true},
})

const setLocale = async (locale) => {
  await loadLocaleMessages(locale)
}

watch(width, () => {
  if (width > 768) shownDrawer.value = false
})
</script>

<template>
  <header
      class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container px-4 m-auto flex h-14 items-center">
      <div class="mr-4 hidden md:flex">
        <router-link to="/" class="mr-6 flex items-center space-x-2">
          <span class="font-bold text-lg text-secondary dark:text-foreground">
            <logo width="120"/>
          </span>
        </router-link>
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <router-link
              v-for="link of links"
              :key="link.href"
              :to="link.href"
              class="transition-colors hover:text-primary"
              :class="{'text-primary': $route.hash === link.href}"
          >
            {{ $t(link.label) }}
          </router-link>
        </nav>
      </div>


      <div class="md:hidden">
        <div class="flex">
          <button @click="shownDrawer = true"
                  class="h-10 w-10 flex items-center justify-center pinter hover:text-accent-foreground hover:bg-accent cursor-pointer">
            <icon icon="iconamoon:menu-burger-horizontal-bold" size="24"/>
          </button>
        </div>
      </div>
      <div class="flex flex-1 items-center justify-end space-x-2">
        <el-dropdown trigger="click" placement="bottom-end">
          <button
              class="text-foreground h-10 w-10 flex items-center justify-center pinter hover:text-accent-foreground hover:bg-accent cursor-pointer">
            <icon icon="tabler:language" size="24"/>
          </button>
          <template  #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="() => setLocale('en')" :disabled="$i18n.locale === 'en'">
                English
              </el-dropdown-item>
              <el-dropdown-item @click="() => setLocale('uk')" :disabled="$i18n.locale === 'uk'">
                Українська
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <v-theme-toggle />
      </div>
    </div>
  </header>
  <el-drawer v-model="shownDrawer" :show-close="false" class="min-w-[320px] !bg-background !text-foreground"
             header-class="!gap-4 h-16 !text-foreground" direction="ltr">
    <template #header>
      <div class="flex items-center">
        <router-link @click="shownDrawer = false" to="/" class="mr-6 flex items-center space-x-2">
          <span class="font-bold text-lg text-secondary dark:text-foreground">
            <logo width="120"/>
          </span>
        </router-link>
      </div>
      <button @click="shownDrawer = false"
              class="h-10 w-10 flex items-center justify-center pinter hover:text-accent-foreground hover:bg-accent cursor-pointer">
        <icon icon="mdi:close" width="24"/>
      </button>
    </template>
    <template #default>
      <nav class="flex flex-col space-y-4">
        <router-link
            v-for="link of links"
            :key="link.href"
            :to="link.href"
            :class="{'text-primary': $route.hash === link.href}"
            class="text-lg transition-colors hover:text-primary"
            @click="shownDrawer = false"
        >
          {{ $t(link.label) }}
        </router-link>
      </nav>
    </template>
  </el-drawer>
</template>

<style scoped>

</style>