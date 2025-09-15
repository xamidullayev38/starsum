<template>
  <AppLayout>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Gift paket tanlang 🎁</h2>
      <div class="space-y-4">
        <button
          v-for="g in gifts"
          :key="g.id"
          @click="selectGift(g)"
          class="w-full p-4 bg-gray-800 rounded-xl flex justify-between items-center hover:bg-gray-700"
        >
          <span>{{ g.name }}</span>
          <span>{{ g.price }} so‘m</span>
        </button>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { useRouter } from "vue-router"
import AppLayout from "@/components/layout/AppLayout.vue"

const router = useRouter()

const gifts = [
  { id: 1, name: "Mini Gift ⭐50", price: "10,000" },
  { id: 2, name: "Classic Gift ⭐100", price: "18,000" },
  { id: 3, name: "Premium Gift ⭐250", price: "40,000" },
]

function selectGift(gift) {
  router.push("/gift/payment")
}
</script>
