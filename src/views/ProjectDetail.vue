<template>
  <section class="project-detail bg-white text-black">
    <div class="max-w-[1400px] mx-auto px-8 md:px-12 py-28">
      <div v-if="project">
        <!-- Title Section -->
        <!-- Title Section -->
        <div class="max-w-[1200px] mx-auto mb-14 px-4">
  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-2 text-left">
    {{ project.title }}
  </h1>
  <h2 class="text-base md:text-lg lg:text-xl text-gray-500 font-medium leading-snug text-left">
    {{ project.brand }}
  </h2>
</div>



        <!-- Hero -->
        <div class="mb-16 rounded-2xl overflow-hidden shadow-lg">
          <video
            v-if="project.type === 'video'"
            :src="project.image"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-[720px] object-cover"
          ></video>
          <img
            v-else
            :src="project.image"
            class="w-full h-[720px] object-cover"
            :alt="project.title"
          />
        </div>

        <!-- Description -->
        <div class="max-w-[1200px] mx-auto mb-24 px-4 text-left">
  <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
    {{ project.description }}
  </p>
</div>

        <!-- Gallery (exactly like Home Work Section) -->
  <!-- Gallery -->
<div v-if="project.gallery?.length" class="work-grid mt-20">
  <div
    v-for="(item, i) in project.gallery"
    :key="i"
    class="relative group overflow-hidden cursor-pointer rounded-2xl"
    :class="[item.aspect, isVideo(item.src) ? 'video-item' : 'image-item']"
  >
    <component
      :is="isVideo(item.src) ? 'video' : 'img'"
      :src="item.src"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      v-bind="isVideo(item.src) ? { autoplay: true, loop: true, muted: true, playsinline: true } : {}"
      @mouseenter="e => e.target.play?.()"
      @mouseleave="e => e.target.pause?.()"
    />

    <!-- Overlay for hover -->
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
  </div>


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
const project = ref(projectsData.find((p) => p.slug === slug))

// Detect if media is a video
const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url)

// Optional: keep random grid variety
const getAspect = () => {
  const aspects = ['landscape', 'square', 'portrait']
  return aspects[Math.floor(Math.random() * aspects.length)]
}
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
}

/* === Work Grid copied from Home page === */
.work-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-auto-rows: 450px;
  gap: 1.5rem;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Aspect variations */
.landscape {
  grid-column: span 2;
}
.square {
  grid-column: span 1;
}
.portrait {
  grid-column: span 1;
  grid-row: span 2;
}

/* Rounded cards with smooth hover */
.work-grid > div {
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  background: #000;
  height: 100%;
}
.work-grid > div:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

/* Image & video styling */
.work-grid img,
.work-grid video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.group:hover img,
.group:hover video {
  transform: scale(1.05);
}

/* Responsive grid behavior */
@media (max-width: 1280px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 380px;
    max-width: 950px;
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 340px;
    max-width: 90%;
    gap: 1.25rem;
  }
}

.project-detail h1 {
  /* fallback for exact control */
  font-size: clamp(18px, 2vw, 30px); /* responsive scaling */
  line-height: 1.0;
}

.project-detail h2 {
  font-size: clamp(14px, 2vw, 20px);
  line-height: 1.3;
  color: #1e1f20; /* Tailwind gray-500 */
}

</style>
