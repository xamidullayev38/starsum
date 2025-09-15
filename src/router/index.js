import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import OnBoarding from "../views/OnBoarding.vue";

import Orders from "../views/Orders.vue"
import Profile from "../views/Profile.vue"

// Star flow
import BuyUsername from "../views/buy/BuyUsername.vue"
import BuyStars from "../views/buy/BuyStars.vue"
import BuyPayment from "../views/buy/BuyPayment.vue"
import BuySuccess from "../views/buy/BuySucces.vue"
// gift flow
import GiftUsername from "../views/gift/GiftUsername.vue"
import GiftPackage from "../views/gift/GiftPackage.vue"
import GiftPayment from "../views/gift/GiftPayment.vue"
import GiftSuccess from "../views/gift/GiftSuccess.vue"
// User Flow Routes
const routes = [
  { path: "/", name: "Onboarding", component: OnBoarding },
  { path: "/home", name: "Home", component: Home },

  // ⭐ Sotib olish flow
  { path: "/buy/username", name: "BuyUsername", component: BuyUsername },
  { path: "/buy", name: "BuyStars", component: BuyStars },
  { path: "/buy/payment", name: "BuyPayment", component: BuyPayment },
  { path: "/buy/success", name: "BuySuccess", component: BuySuccess },

  // 🎁 Gift flow
  { path: "/gift/username", name: "GiftUsername", component: GiftUsername },
  { path: "/gift/package", name: "GiftPackage", component: GiftPackage },
  { path: "/gift/payment", name: "GiftPayment", component: GiftPayment },
  { path: "/gift/success", name: "GiftSuccess", component: GiftSuccess },

  // 📦 Orders va 👤 Profil
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/profile", name: "Profile", component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
