<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// All hooks must be called first at the top level
const router = useRouter()
const textVisible = ref(false)
const progressWidth = ref(0)
const stars = ref([])
const currentStep = ref(0)
const isExpanded = ref(false)
const isFullscreen = ref(false)
const viewportHeight = ref(window.innerHeight)

onMounted(() => {
  if (window.Telegram?.WebApp) {
    postTelegramEvent('web_app_ready')

    postTelegramEvent('web_app_request_viewport')

    window.Telegram.WebApp.onEvent('viewportChanged', handleViewportChange)

    setTimeout(() => {
      expandApp()
    }, 1000)

    setTimeout(() => {
      requestFullscreen()
    }, 2000)
  }

  setTimeout(() => textVisible.value = true, 500)

  setTimeout(() => {
    let width = 0
    const interval = setInterval(() => {
      width += 0.8
      progressWidth.value = width

      if (width >= 33 && currentStep.value === 0) {
        currentStep.value = 1
      } else if (width >= 66 && currentStep.value === 1) {
        currentStep.value = 2
      }

      if (width >= 100) {
        clearInterval(interval)
        setTimeout(() => goHome(), 800)
      }
    }, 60)
  }, 2000)

  stars.value = [...Array(35)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    size: Math.random() > 0.6 ? 'w-1.5 h-1.5' : 'w-1 h-1',
    opacity: Math.random() * 0.5 + 0.4,
    pulseDelay: `${Math.random() * 3}s`
  }))
})

const goHome = () => {
  router.push({ name: 'Home' })
}

const expandApp = () => {
  postTelegramEvent('web_app_expand')
  isExpanded.value = true
}

const requestFullscreen = () => {
  postTelegramEvent('web_app_request_fullscreen')
  isFullscreen.value = true
}

const exitFullscreen = () => {
  postTelegramEvent('web_app_exit_fullscreen')
  isFullscreen.value = false
}

const handleViewportChange = () => {
  if (window.Telegram?.WebApp) {
    const viewport = window.Telegram.WebApp.viewportHeight
    viewportHeight.value = viewport
    isExpanded.value = window.Telegram.WebApp.isExpanded
  }
}

const postTelegramEvent = (eventType, eventData = {}) => {
  if (window.Telegram?.WebApp) {
    // For web version - use postMessage
    if (window.parent && window.parent !== window) {
      const data = JSON.stringify({
        eventType,
        eventData
      })
      window.parent.postMessage(data, 'https://web.telegram.org')
    }
    // For desktop/mobile - use TelegramWebviewProxy
    else if (window.TelegramWebviewProxy?.postEvent) {
      const data = JSON.stringify(eventData)
      window.TelegramWebviewProxy.postEvent(eventType, data)
    }
    // For Windows Phone - use external.notify
    else if (window.external?.notify) {
      const data = JSON.stringify({
        eventType,
        eventData
      })
      window.external.notify(data)
    }
  }
}

// Onboarding steps with better mobile content
const onboardingSteps = [
  {
    title: "SumStar",
    subtitle: "KYCsiz Yulduzlar Sotib Oling",
    description: "Shaxsni tasdiqlashsiz raqamli yulduzlarni bir zumda sotib oling"
  },
  {
    title: "Tez va Xavfsiz",
    subtitle: "Bir Lahzalik Tranzaksiyalar",
    description: "Harbiy darajadagi xavfsizlik bilan chaqmoq tezligida xaridlar"
  },
  {
    title: "Global Kirish",
    subtitle: "Butun Dunyoda Mavjud",
    description: "Istalgan joydan, istalgan vaqtda - hech qanday cheklovlarsiz"
  }
]
</script>

<template>
  <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      :style="{ height: isFullscreen ? '100vh' : `${viewportHeight}px` }"
  >

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
          v-for="(star, i) in stars"
          :key="i"
          :class="`absolute ${star.size} bg-white rounded-full star-twinkle`"
          :style="{
          left: star.left,
          top: star.top,
          opacity: star.opacity,
          animationDelay: star.pulseDelay
        }"
      ></div>

      <div class="absolute inset-0">
        <div class="floating-star" style="left: 20%; top: 15%; animation-delay: 0s;">⭐</div>
        <div class="floating-star" style="left: 80%; top: 25%; animation-delay: 1s;">✨</div>
        <div class="floating-star" style="left: 15%; top: 70%; animation-delay: 2s;">🌟</div>
        <div class="floating-star" style="left: 85%; top: 80%; animation-delay: 1.5s;">💫</div>
      </div>
    </div>

    <div class="absolute top-4 right-4 z-20 flex space-x-2" v-if="window.Telegram?.WebApp">
      <button
          @click="expandApp"
          v-if="!isExpanded"
          class="px-3 py-1 bg-blue-600 text-white text-xs rounded-full opacity-70 hover:opacity-100"
      >
        Kengaytirish
      </button>
      <button
          @click="isFullscreen ? exitFullscreen() : requestFullscreen()"
          class="px-3 py-1 bg-purple-600 text-white text-xs rounded-full opacity-70 hover:opacity-100"
      >
        {{ isFullscreen ? 'Chiqish' : 'To\'liq ekran' }}
      </button>
    </div>

    <div class="relative flex flex-col items-center justify-center min-h-screen z-10 px-8 max-w-sm mx-auto text-center">

      <div
          class="transition-all duration-1000 ease-out mb-8"
          :class="{ 'opacity-100 translate-y-0': textVisible, 'opacity-0 translate-y-8': !textVisible }"
      >
        <h1 class="text-7xl font-black mb-6 shimmer-logo tracking-tight leading-none">
          {{ onboardingSteps[currentStep].title }}
        </h1>

        <div class="space-y-4">
          <p class="text-xl text-yellow-400 font-bold">
            {{ onboardingSteps[currentStep].subtitle }}
          </p>

          <p class="text-base text-gray-300 leading-relaxed px-2">
            {{ onboardingSteps[currentStep].description }}
          </p>
        </div>
      </div>

      <div
          class="transition-all duration-1000 delay-300 w-full"
          :class="{ 'opacity-100': textVisible, 'opacity-0': !textVisible }"
      >
        <div class="flex justify-center space-x-2 mb-6">
          <div
              v-for="(step, index) in onboardingSteps"
              :key="index"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="index <= currentStep ? 'bg-yellow-400' : 'bg-gray-600'"
          ></div>
        </div>

        <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
              class="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${progressWidth}%` }"
          ></div>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-400">{{ Math.round(progressWidth) }}% Yuklanmoqda...</span>
          <span class="text-xs text-gray-500">{{ currentStep + 1 }}/3 Qadam</span>
        </div>
      </div>

      <div
          class="mt-8 transition-all duration-1000 delay-500"
          :class="{ 'opacity-100': textVisible, 'opacity-0': !textVisible }"
      >
        <div class="flex justify-center space-x-6 text-xs text-gray-500">
          <div class="flex items-center space-x-1">
            <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
            <span>KYCsiz</span>
          </div>
          <div class="flex items-center space-x-1">
            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            <span>Tezkor</span>
          </div>
          <div class="flex items-center space-x-1">
            <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
            <span>Xavfsiz</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -300px 0;
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    background-position: 300px 0;
    opacity: 0.8;
  }
}

.shimmer-logo {
  background: linear-gradient(
      90deg,
      #666 0%,
      #fff 20%,
      #fff 40%,
      #ffd700 50%,
      #fff 60%,
      #fff 80%,
      #666 100%
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  text-shadow: 0 0 40px rgba(255, 215, 0, 0.3);
}

@keyframes star-twinkle {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

.star-twinkle {
  animation: star-twinkle 2.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

.floating-star {
  position: absolute;
  font-size: 1.2rem;
  animation: float 4s ease-in-out infinite;
  pointer-events: none;
}
</style>
