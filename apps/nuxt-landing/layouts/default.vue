<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">App</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    <slot />
    <footer>
      Copyright © {{ currentYear }}
    </footer>
  </div>
</template>

<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

footer {
  background-color: #eee;
  padding: 10px 0;
  text-align: center;
}

nav a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

</style>

