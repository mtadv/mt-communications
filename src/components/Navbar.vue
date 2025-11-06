<template>
  <nav class="nav">
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="/logo.png" alt="MT Logo" />
      </router-link>

      <!-- Desktop Links -->
      <div class="nav-links" v-if="!mobile">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About Us</a>
        <a href="#clients" class="nav-link">Clients</a>
        <a href="#work" class="nav-link">Our Work</a>
        <a href="#contact" class="nav-link">Contact Us</a>
      </div>

      <!-- Hamburger button (mobile) -->
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

    <!-- Mobile menu (collapses) -->
    <div class="mobile-menu" v-show="menuOpen">
      <a @click="closeMenu" href="#home" class="mobile-link">Home</a>
      <a @click="closeMenu" href="#about" class="mobile-link">About Us</a>
      <a @click="closeMenu" href="#clients" class="mobile-link">Clients</a>
      <a @click="closeMenu" href="#work" class="mobile-link">Our Work</a>
      <a @click="closeMenu" href="#contact" class="mobile-link">Contact Us</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const mobile = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

/* simple resize detector to hide desktop/mobile specific DOM if you want */
/* this keeps the desktop links present only on wider screens */
const onResize = () => {
  mobile.value = window.innerWidth <= 768
}
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* Navbar base */
.nav {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 50;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 40px 18px 60px; /* increased left padding */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo (bigger) */
.logo img {
  height: 56px; /* <-- bigger logo, change this value if you want larger/smaller */
  display: block;
  object-fit: contain;
}

/* Desktop links */
.nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
}
.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .02em;
  transition: color .2s ease;
}
.nav-link:hover { color: #666 }

/* Hamburger button (hidden on desktop) */
.hamburger {
  display: none; /* shown on mobile via media query */
  width: 48px;
  height: 40px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  z-index: 90; /* make sure it sits above other elements */
}

/* the three lines: centered and absolutely positioned */
.hamburger .line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;        /* visible width */
  height: 3px;
  background: #000;
  border-radius: 3px;
  transition: transform .25s ease, opacity .25s ease;
  box-sizing: border-box;
}

/* vertical positions for each line */
.hamburger .line1 { top: calc(50% - 9px); }
.hamburger .line2 { top: calc(50% - 0px); }
.hamburger .line3 { top: calc(50% + 9px); }

/* transform to X when open */
.hamburger.open .line1 {
  transform: translateX(-50%) rotate(45deg);
  top: calc(50% - 1px);
}
.hamburger.open .line2 {
  opacity: 0;
  transform: translateX(-50%);
}
.hamburger.open .line3 {
  transform: translateX(-50%) rotate(-45deg);
  top: calc(50% - 1px);
}

/* Mobile menu (hidden on desktop) */
.mobile-menu {
  display: none; /* shown via media query on mobile when v-show true */
  width: 100%;
  background: #fff;
  border-top: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  position: absolute;
  left: 0;
  top: calc(100% + 0px);
  padding: 16px 12px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  z-index: 80;
}
.mobile-link {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
}

/* Desktop first: hide mobile UI */
@media (min-width: 769px) {
  .hamburger { display: none; }
  .mobile-menu { display: none !important; }
}

/* Mobile: hide desktop links, show hamburger & mobile menu */
@media (max-width: 768px) {
  .nav-inner { padding: 12px 16px; }
  .nav-links { display: none; }
  .hamburger { display: inline-flex; align-items: center; justify-content: center; }

  /* mobile menu shown only when v-show true; base display should be none */
  .mobile-menu { display: flex; position: absolute; }
}

/* small polish */
@media (max-width: 420px) {
  .nav-inner { padding: 12px; }
  .mobile-link { font-size: 16px; }
}
</style>
