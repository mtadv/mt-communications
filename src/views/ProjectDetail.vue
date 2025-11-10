<template>
    <section class="project-detail py-20 text-black bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div v-if="project">
          <!-- Hero -->
          <div class="mb-10">
            <video
              v-if="project.type === 'video'"
              :src="project.image"
              autoplay
              loop
              muted
              playsinline
              class="w-full h-[720px] object-cover rounded-2xl"
            ></video>
            <img
              v-else
              :src="project.image"
              class="w-full h-[720px] object-cover rounded-2xl"
              :alt="project.title"
            />
          </div>
  
          <!-- Info -->
          <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
          <h2 class="text-xl text-gray-600 mb-6">{{ project.brand }}</h2>
          <p class="text-lg leading-relaxed mb-12 whitespace-pre-line">
            {{ project.description }}
          </p>
  
          <!-- Gallery -->
<div v-if="project.gallery?.length" class="grid grid-cols-2 md:grid-cols-3 gap-6">
  <component
    v-for="(item, i) in project.gallery"
    :key="i"
    :is="isVideo(item) ? 'video' : 'img'"
    :src="item"
    class="w-full h-[400px] object-cover rounded-xl"
    v-bind="isVideo(item) ? { autoplay: true, loop: true, muted: true, playsinline: true } : {}"
  />
</div>

        </div>
  
        <div v-else class="text-center text-gray-500">
          <p>Project not found.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { projectsData } from '@/data/projectsData.js'

const route = useRoute()
const slug = route.params.slug

// Make sure variable name matches template
const project = ref(projectsData.find((p) => p.slug === slug))

// Helper to detect video files
const isVideo = (url) => {
  return url.match(/\.(mp4|webm|ogg)$/i)
}
  </script>
  
  <style scoped>
  .project-detail {
    min-height: 100vh;
  }
  </style>
  