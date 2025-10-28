<template>
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-12">Our Work</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="p in portfolio" :key="p.title" class="relative group overflow-hidden rounded-2xl shadow-lg">
            <img :src="p.image" class="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div class="text-white">
                <h3 class="font-semibold text-lg">{{ p.title }}</h3>
                <p class="text-sm text-gray-200">{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { doc, onSnapshot } from 'firebase/firestore'
  import { db } from '../firebase'
  
  const portfolio = ref([
    { title: 'Brand Identity for X', desc: 'Full rebranding journey', image: 'https://picsum.photos/600/400?1' },
    { title: 'Digital Campaign Y', desc: 'Awareness meets conversion', image: 'https://picsum.photos/600/400?2' },
    { title: 'TV Spot Z', desc: 'Creative storytelling for engagement', image: 'https://picsum.photos/600/400?3' },
  ])
  
  onMounted(() => {
    const docRef = doc(db, 'pages', 'home')
    onSnapshot(docRef, (snap) => {
      if (snap.exists() && snap.data().portfolio) {
        portfolio.value = snap.data().portfolio
      }
    })
  })
  </script>
  