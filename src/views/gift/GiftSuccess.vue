<template>
  <AppLayout>
    <div class="p-6 flex flex-col items-center justify-center text-center">
      <div class="text-6xl mb-4">🎉</div>
      <h2 class="text-xl font-bold mb-2">Gift yuborildi!</h2>
      <p class="text-gray-400 mb-6">Do‘stingiz sovg‘ani tez orada qabul qiladi.</p>
      <router-link
        to="/home"
        class="w-full py-3 bg-blue-600 rounded-xl font-semibold"
      >
        Bosh sahifaga qaytish
      </router-link>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/layout/AppLayout.vue"
</script>
