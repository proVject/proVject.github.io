<script setup>
import { useDark, useToggle } from '@vueuse/core'
import {Icon} from "@iconify/vue";

const isDark = useDark()
const toggleDark = useToggle(isDark)

const onChange = () => {
  toggleDark()
}
</script>

<template>
  <button @click="onChange" class="text-foreground h-10 w-10 flex items-center justify-center pinter hover:text-accent-foreground hover:bg-accent cursor-pointer">
    <icon v-if="isDark" icon="solar:moon-bold" size="20" />
    <icon v-else icon="mingcute:sun-fill" size="20" />
  </button>
</template>

<style scoped>

</style>