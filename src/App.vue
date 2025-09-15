<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { isTMA, init, viewport } from '@telegram-apps/sdk'

onMounted(async () => {
  // Initialize Telegram Mini App for fullscreen experience
  try {
    if (isTMA()) {
      // Initialize the SDK
      init()

      // Mount and expand viewport for fullscreen
      if (viewport.mount.isAvailable()) {
        await viewport.mount()
        viewport.expand()
      }

      // Request fullscreen if available
      if (viewport.requestFullscreen.isAvailable()) {
        await viewport.requestFullscreen()
      }
    }
  } catch (error) {
    console.log('[TMA] Not running in Telegram environment or initialization failed:', error)
  }
})
</script>

<style lang="scss" scoped>

</style>
