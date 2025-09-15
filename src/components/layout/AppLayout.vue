<template>
  <div class="bg-black min-h-screen text-white flex flex-col">
    <Header :username="username" :balance="balance" />
    <main class="flex-1 pb-16">
      <slot :balance="balance" :username="username" />
    </main>
    <BottomNav />
  </div>
</template>

<script setup>
import Header from "./Header.vue"
import BottomNav from "./Bottom.vue"

defineProps({
  username: {
    type: String,
    default: "@saidkamol",
  },
  balance: {
    type: Number,
    default: 0,
  },
})
</script>
