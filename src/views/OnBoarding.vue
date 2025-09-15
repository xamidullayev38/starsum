  <!-- SplashScreen.vue -->
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import Lottie from 'lottie-web'
  import Home from './Home.vue'

  const textVisible = ref(false)
  const progressWidth = ref(0)
  const stars = ref([])
  const router = useRouter()


  const floatingLotties = [
    { src: '/animations/skullflower-12626.json', top: '15%', left: '10%', size: 'w-12 h-12 sm:w-16 sm:h-16', bgColor: 'bg-purple-500' },
    { src: '/animations/skullflower-12626.json', top: '25%', right: '12%', size: 'w-12 h-12 sm:w-16 sm:h-16', bgColor: 'bg-gray-400' },
    { src: '/animations/skullflower-12626.json', bottom: '30%', left: '8%', size: 'w-12 h-12 sm:w-16 sm:h-16', bgColor: 'bg-amber-600' },
    { src: '/animations/skullflower-12626.json', bottom: '20%', right: '10%', size: 'w-12 h-12 sm:w-16 sm:h-16', bgColor: 'bg-yellow-500' },
  ]

  // FloatingLottie refs
  const lottieRefs = floatingLotties.map(() => ref(null))
  const goHome = () => {
    router.push({ name: 'Home' }) // yoki router.push('/home')
  }
  onMounted(() => {
    // Text animation
    setTimeout(() => textVisible.value = true, 500)

    // Progress bar
    setTimeout(() => {
      let width = 0
      const interval = setInterval(() => {
        width += 2
        progressWidth.value = width
        if (width >= 100) {
            clearInterval(interval)
            goHome()
        }
      }, 30)
    }, 1000)

    // Stars
    stars.value = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }))

    // Load Lotties
    floatingLotties.forEach((lottie, index) => {
      fetch(lottie.src)
        .then(res => res.json())
        .then(data => {
          if (lottieRefs[index].value) {
            Lottie.loadAnimation({
              container: lottieRefs[index].value,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: data,
            })
          }
        })
        .catch(err => console.log('[v0] Failed to load Lottie:', err))
    })
  })
  </script>

  <template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      <!-- Floating Lotties -->
      <div
        v-for="(lottie, index) in floatingLotties"
        :key="index"
        :class="`absolute ${lottie.size}`"
        :style="{ top: lottie.top, bottom: lottie.bottom, left: lottie.left, right: lottie.right }"
        :ref="el => lottieRefs[index] = el"
      >
        <div :class="`${lottie.bgColor} rounded-2xl w-full h-full animate-float`"></div>
      </div>


      <!-- Center Text & Progress -->
      <div class="relative flex flex-col items-center space-y-4 sm:space-y-6 z-10 px-4">
        <div
          class="text-center transition-all duration-1000 ease-out"
          :class="{ 'opacity-100 translate-y-0': textVisible, 'opacity-0 translate-y-4': !textVisible }"
        >
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight animate-shimmer">
            SumGift
          </h1>
        </div>

        <div class="transition-all duration-1000 delay-300" :class="{ 'opacity-100': textVisible, 'opacity-0': !textVisible }">
          <div class="w-48 sm:w-56 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden animate-breathe">
            <div
              class="h-full bg-white rounded-full transition-all duration-150 ease-out"
              :style="{ width: `${progressWidth}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Stars -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="(star, i) in stars"
          :key="i"
          class="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          :style="{ left: star.left, top: star.top, animationDelay: star.delay }"
        ></div>
      </div>
    </div>
  </template>

  <style scoped>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 3s ease-in-out infinite; }

  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  .animate-twinkle { animation: twinkle 2s infinite; }

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  .animate-shimmer { background: linear-gradient(90deg, #fff, #eee, #fff); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 2s infinite; }

  @keyframes breathe {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.05); }
  }
  .animate-breathe { animation: breathe 2s ease-in-out infinite; }
  </style>
