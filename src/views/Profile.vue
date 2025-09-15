<template>
  <AppLayout :username="username" :balance="balance">
    <template #default="{ balance, username }">
      <div class="p-6 flex flex-col items-center space-y-6">
        <!-- Avatar -->
        <div class="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-4xl">
          👤
        </div>

        <!-- Username va balans -->
        <div class="text-center">
          <h2 class="text-xl font-bold">{{ username }}</h2>
          <p class="text-gray-400">
            Balans: <span class="text-white font-semibold">{{ balance }} ⭐</span>
          </p>
        </div>

        <!-- Sozlamalar -->
        <div class="w-full space-y-4 mt-6">
          <button
            class="w-full p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700"
          >
            <span>⚙️ Sozlamalar</span>
            <span>›</span>
          </button>

          <button
            class="w-full p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700"
          >
            <span>💳 To‘lov usullari</span>
            <span>›</span>
          </button>

          <button
            class="w-full p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700 text-red-400"
          >
            <span>🚪 Chiqish</span>
          </button>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/layout/AppLayout.vue"

const username = "@saidkamol"
const balance = 120
</script>
