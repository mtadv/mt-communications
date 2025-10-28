<template>
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-12 text-gray-900">What We Do Best</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="s in services" :key="s.title" class="p-8 bg-white rounded-2xl shadow hover:shadow-2xl transition">
            <div class="text-5xl mb-4">{{ s.icon }}</div>
            <h3 class="text-xl font-semibold mb-2">{{ s.title }}</h3>
            <p class="text-gray-600">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { doc, onSnapshot } from 'firebase/firestore'
  import { db } from '../firebase'
  
  const services = ref([
    { icon: '💡', title: 'Creative Strategy', desc: 'Ideas that connect brands with people.' },
    { icon: '📊', title: 'Digital Marketing', desc: 'Performance-driven campaigns with real impact.' },
    { icon: '🎬', title: 'Production & Design', desc: 'Crafting visuals that inspire and engage.' },
  ])
  
  onMounted(() => {
    const docRef = doc(db, 'pages', 'home')
    onSnapshot(docRef, (snap) => {
      if (snap.exists() && snap.data().services) {
        services.value = snap.data().services
      }
    })
  })
  </script>
  