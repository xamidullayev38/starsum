<template>
  <AppLayout>
    <div class="p-6 flex flex-col space-y-6">
      <h2 class="text-xl font-bold">Gift to‘lovi 💳</h2>
      <p class="text-gray-400">Tanlangan gift: <span class="text-white">Classic Gift ⭐100</span></p>
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
  setTimeout(() => {
    router.push("/gift/success")
  }, 1000)
}
</script>
