<template>
  <nav class="nav">
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="MT Logo" />
      </router-link>

      <!-- Desktop Links -->
      <div class="nav-links" v-if="!mobile">
        <a class="nav-link" @click.prevent="goToSection('home')">Home</a>
        <a class="nav-link" @click.prevent="goToSection('about')">About Us</a>
        <a class="nav-link" @click.prevent="goToSection('clients')">Clients</a>
        <a class="nav-link" @click.prevent="goToSection('work')">Our Work</a>
        <a class="nav-link" @click.prevent="goToSection('contact')">Contact Us</a>
      </div>

      <!-- Hamburger button -->
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
        aria-expanded="menuOpen.toString()"
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" v-show="menuOpen">
      <a class="mobile-link" @click.prevent="goToSection('home')">Home</a>
      <a class="mobile-link" @click.prevent="goToSection('about')">About Us</a>
      <a class="mobile-link" @click.prevent="goToSection('clients')">Clients</a>
      <a class="mobile-link" @click.prevent="goToSection('work')">Our Work</a>
      <a class="mobile-link" @click.prevent="goToSection('contact')">Contact Us</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const menuOpen = ref(false)
const mobile = ref(false)
const router = useRouter()
const route = useRoute()

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }

const goToSection = (id) => {
  closeMenu()
  if (route.path !== '/') {
    // Navigate to home page with hash
    router.push({ path: '/', hash: `#${id}` })
  } else {
    // Scroll to section smoothly
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

// Detect mobile
const onResize = () => { mobile.value = window.innerWidth <= 768 }
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)

  // Handle hash scrolling if page loads with hash
  if (route.hash) {
    const el = document.getElementById(route.hash.replace('#',''))
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
  }
})
onBeforeUnmount(() => { window.removeEventListener('resize', onResize) })
</script>

<style scoped>
/* Keep all your existing CSS exactly the same */
.nav { width: 100%; background: #fff; position: relative; z-index: 50; border-bottom: 1px solid rgba(0,0,0,0.04); }
.nav-inner { max-width: 1280px; margin: 0 auto; padding: 18px 40px 18px 60px; display: flex; align-items: center; justify-content: space-between; }
.logo img { height: 56px; display: block; object-fit: contain; }
.nav-links { display: flex; gap: 28px; align-items: center; }
.nav-link { color: #000; text-decoration: none; font-size: 16px; font-weight: 400; letter-spacing: .02em; transition: color .2s ease; }
.nav-link:hover { color: #666 }
.hamburger { display: none; width: 48px; height: 40px; padding: 0; border: none; background: transparent; cursor: pointer; position: relative; z-index: 90; }
.hamburger .line { position: absolute; left: 50%; transform: translateX(-50%); width: 30px; height: 3px; background: #000; border-radius: 3px; transition: transform .25s ease, opacity .25s ease; }
.hamburger .line1 { top: calc(50% - 9px); }
.hamburger .line2 { top: calc(50% - 0px); }
.hamburger .line3 { top: calc(50% + 9px); }
.hamburger.open .line1 { transform: translateX(-50%) rotate(45deg); top: calc(50% - 1px); }
.hamburger.open .line2 { opacity: 0; transform: translateX(-50%); }
.hamburger.open .line3 { transform: translateX(-50%) rotate(-45deg); top: calc(50% - 1px); }
.mobile-menu { display: none; width: 100%; background: #fff; border-top: 1px solid rgba(0,0,0,0.04); box-shadow: 0 8px 30px rgba(0,0,0,0.06); position: absolute; left: 0; top: calc(100% + 0px); padding: 16px 12px 22px; flex-direction: column; gap: 12px; align-items: center; z-index: 80; }
.mobile-link { color: #000; text-decoration: none; font-size: 18px; font-weight: 500; }
@media (min-width: 769px) { .hamburger { display: none; } .mobile-menu { display: none !important; } }
@media (max-width: 768px) { .nav-inner { padding: 12px 16px; } .nav-links { display: none; } .hamburger { display: inline-flex; align-items: center; justify-content: center; } .mobile-menu { display: flex; position: absolute; } }
@media (max-width: 420px) { .nav-inner { padding: 12px; } .mobile-link { font-size: 16px; } }
.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .02em;
  transition: color .2s ease;
  cursor: pointer; /* add this */
}
.nav-link:hover { color: #666 }

.mobile-link {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer; /* add this */
}

</style>
