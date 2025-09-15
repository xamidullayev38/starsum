<template>
  <nav
    class="bg-gray-900 border-t border-gray-800 flex justify-around py-3 fixed bottom-0 left-0 right-0"
  >
    <router-link
      to="/home"
      class="flex flex-col items-center"
      :class="{ 'text-blue-500': $route.path.startsWith('/home') }"
    >
      <span>🏠</span>
      <span class="text-xs">Home</span>
    </router-link>

    <router-link
      to="/buy/username"
      class="flex flex-col items-center"
      :class="{ 'text-blue-500': $route.path.startsWith('/buy') }"
    >
      <span>⭐</span>
      <span class="text-xs">Buy</span>
    </router-link>

    <router-link
      to="/gift/username"
      class="flex flex-col items-center"
      :class="{ 'text-blue-500': $route.path.startsWith('/gift') }"
    >
      <span>🎁</span>
      <span class="text-xs">Gift</span>
    </router-link>

    <router-link
      to="/profile"
      class="flex flex-col items-center"
      :class="{ 'text-blue-500': $route.path.startsWith('/profile') }"
    >
      <span>👤</span>
      <span class="text-xs">Profile</span>
    </router-link>
  </nav>
</template>
