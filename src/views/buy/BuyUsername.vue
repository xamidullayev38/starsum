<template>
  <AppLayout>
    <div class="p-6 flex flex-col space-y-6">
      <h2 class="text-xl font-bold">Kim uchun yulduz sotib olasiz? ✨</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Telegram username (@username)"
        class="w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none"
      />
      <button
        @click="nextStep"
        :disabled="!username"
        class="w-full py-3 bg-blue-600 rounded-xl font-semibold disabled:opacity-50"
      >
        Davom etish →
      </button>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import AppLayout from "@/components/layout/AppLayout.vue"

const router = useRouter()
const username = ref("")

function nextStep() {
  router.push("/buy")
}
</script>
