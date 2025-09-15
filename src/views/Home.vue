<template>
  <AppLayout>
    <div class="p-6 grid grid-cols-2 gap-4">
      <!-- Buy -->
      <router-link
        to="/buy/username"
        class="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-700"
      >
        <span class="text-3xl mb-2">⭐</span>
        <span class="font-semibold">Yulduz sotib olish</span>
      </router-link>

      <!-- Gift -->
      <router-link
        to="/gift/username"
        class="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-700"
      >
        <span class="text-3xl mb-2">🎁</span>
        <span class="font-semibold">Gift yuborish</span>
      </router-link>

      <!-- Orders -->
      <router-link
        to="/orders"
        class="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-700"
      >
        <span class="text-3xl mb-2">📦</span>
        <span class="font-semibold">Buyurtmalar</span>
      </router-link>

      <!-- Profile -->
      <router-link
        to="/profile"
        class="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-gray-700"
      >
        <span class="text-3xl mb-2">👤</span>
        <span class="font-semibold">Profil</span>
      </router-link>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "..//components/layout/AppLayout.vue"
</script>
