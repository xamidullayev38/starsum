<template>
  <AppLayout>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Paket tanlang ⭐</h2>
      <div class="space-y-4">
        <button
          v-for="p in packages"
          :key="p.id"
          @click="selectPackage(p)"
          class="w-full p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700"
        >
          <span>{{ p.stars }} ⭐</span>
          <span>{{ p.price }} so‘m</span>
        </button>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { useRouter } from "vue-router"
import AppLayout from "@/components/layout/AppLayout.vue"

const router = useRouter()

const packages = [
  { id: 1, stars: 50, price: "10,000" },
  { id: 2, stars: 100, price: "18,000" },
  { id: 3, stars: 250, price: "40,000" },
]

function selectPackage(pkg) {
  router.push("/buy/payment")
}
</script>
