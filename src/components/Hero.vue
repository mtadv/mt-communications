<template>
    <section class="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <!-- Background gradient animation -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-purple-600 animate-gradient opacity-90"></div>
  
      <div class="relative z-10 max-w-3xl px-6">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          {{ title }}
        </h1>
        <p class="text-lg md:text-2xl text-white/90 mt-4">
          {{ subtitle }}
        </p>
  
        <div class="mt-10">
          <a href="#contact" class="px-8 py-3 rounded-full bg-white text-primary font-semibold hover:bg-gray-100 transition">
            Let’s Create Magic ✨
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { doc, onSnapshot } from 'firebase/firestore'
  import { db } from '../firebase'
  
  const title = ref('Creative Campaigns That Speak Loudly')
  const subtitle = ref('MT for Communications — Ideas That Move People')
  
  onMounted(() => {
    const docRef = doc(db, 'pages', 'home')
    onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        title.value = data.title || title.value
        subtitle.value = data.subtitle || subtitle.value
      }
    })
  })
  </script>
  
  <style scoped>
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }
  </style>
  