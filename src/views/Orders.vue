<template>
  <AppLayout>
    <div class="p-6 space-y-4">
      <h2 class="text-xl font-bold mb-4">Buyurtmalar tarixi 📦</h2>

      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
      >
        <div>
          <p class="font-semibold">
            {{ order.type === 'buy' ? '⭐ Sotib olish' : '🎁 Gift yuborish' }}
          </p>
          <p class="text-gray-400 text-sm">
            {{ order.date }}
          </p>
        </div>
        <div class="text-right">
          <p class="font-bold">{{ order.amount }} ⭐</p>
          <p class="text-gray-400 text-sm">{{ order.price }} so‘m</p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/layout/AppLayout.vue"

const orders = [
  { id: 1, type: "buy", amount: 100, price: "18,000", date: "2025-09-10" },
  { id: 2, type: "gift", amount: 50, price: "10,000", date: "2025-09-12" },
  { id: 3, type: "buy", amount: 250, price: "40,000", date: "2025-09-14" },
]
</script>
