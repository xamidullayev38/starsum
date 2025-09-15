<template>
  <AppLayout>
    <div class="p-6 flex flex-col space-y-6">
      <h2 class="text-xl font-bold">To‘lov qilish 💳</h2>
      <p class="text-gray-400">Tanlangan paket: <span class="text-white">100 ⭐</span></p>
      <button
        @click="pay"
        class="w-full py-3 bg-blue-600 rounded-xl font-semibold"
      >
        Click orqali to‘lov qilish
      </button>
    </div>
  </AppLayout>
</template>

<script setup>
import { useRouter } from "vue-router"
import AppLayout from "@/components/layout/AppLayout.vue"

const router = useRouter()

function pay() {
  // bu yerda payment API ishlatiladi
  setTimeout(() => {
    router.push("/buy/success")
  }, 1000)
}
</script>
