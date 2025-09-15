<template>
  <div class="bg-black min-h-screen flex items-center justify-center text-white">
    <div class="w-full max-w-sm p-6 flex flex-col justify-between">
      <!-- Slider -->
      <div class="flex flex-col items-center">
        <!-- Lottie container -->
        <div ref="lottieContainer" class="w-64 h-64 mb-6"></div>

        <h2 class="text-xl font-bold mb-2">{{ slides[current].title }}</h2>
        <p class="text-gray-400 text-center">{{ slides[current].desc }}</p>
      </div>

      <!-- Indicator -->
      <div class="flex justify-center space-x-2 my-6">
        <span
          v-for="(s, i) in slides"
          :key="i"
          class="w-2 h-2 rounded-full"
          :class="i === current ? 'bg-blue-500' : 'bg-gray-600'"
        ></span>
      </div>

      <!-- Button -->
      <button
        v-if="current === slides.length - 1"
        class="w-full py-3 bg-blue-600 rounded-xl font-semibold"
        @click="startApp"
      >
        Boshlash 🚀
      </button>
      <button
        v-else
        class="w-full py-3 bg-gray-800 rounded-xl font-semibold"
        @click="nextSlide"
      >
        Keyingi →
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import router from "../router"
import lottie from "lottie-web"
import animationData from "../../public/animations/lotties.json" 

const slides = [
  {
    lottie: animationData,
    title: "Yulduzlarni sotib oling",
    desc: "Oson va tez to‘lov orqali yulduzlaringizni ko‘paytiring.",
  },
  {
    lottie: animationData,
    title: "Do‘stlarga sovg‘a yuboring",
    desc: "Istalgan Telegram foydalanuvchisiga yulduz sovg‘a qiling.",
  },
  {
    lottie: animationData,
    title: "Boshlashga tayyormisiz?",
    desc: "Keling, birgalikda boshlaymiz 🚀",
  },
]

const current = ref(0)
const lottieContainer = ref(null)
let animation = null

function loadAnimation(data) {
  if (animation) {
    animation.destroy()
  }
  animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: data, // path emas, balki json obyektni berasan
  })
}

onMounted(() => {
  loadAnimation(slides[current.value].lottie)
})

watch(current, (newIndex) => {
  loadAnimation(slides[newIndex].lottie)
})

function nextSlide() {
  if (current.value < slides.length - 1) {
    current.value++
  }
}

function startApp() {
  router.push("/home")
}
</script>
