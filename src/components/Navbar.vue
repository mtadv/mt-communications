<template>
  <nav class="w-full px-12 py-6 flex items-center justify-between bg-white z-50 relative">
    <!-- Left: Logo -->
    <div class="flex items-center">
      <router-link to="/" class="flex items-center">
        <img src="/logo.png" alt="MT Logo" class="h-8 w-auto object-contain" />
      </router-link>
    </div>

    <!-- Right: Navigation Links -->
    <div class="nav-links flex items-center">
      <a href="#home" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About Us</a>
      <a href="#clients" class="nav-link">Clients</a>
      <a href="#work" class="nav-link">Our Work</a>
      <a href="#contact" class="nav-link">Contact Us</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Galyon', sans-serif;
  letter-spacing: 0.05em;
}

/* Add spacing between the links manually */
.nav-links a + a {
  margin-left: 1rem; /* roughly same as Tailwind's space-x-12 */
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #666;
}
</style>
