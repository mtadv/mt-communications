<template>
  <div class="relative">
    <!-- Hero Section -->
    <HeroVideo />

    <!-- Who We Are -->
    <section
      ref="aboutRef"
      :class="aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      class="transition-all duration-700 py-24 bg-white"
    >
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Who We Are</h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          MT for Communications is a creative agency that builds powerful digital identities through
          strategy, design, and storytelling.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-10">Our Clients</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            @click="scrollToSection(service.id)"
            class="cursor-pointer group p-8 bg-white rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <h3 class="text-xl font-semibold mb-2 group-hover:text-primary">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section id="clients" class="py-10 bg-white relative overflow-hidden">
      <div class="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div class="overflow-hidden">
        <div class="scroll-track flex items-center space-x-24">
          <div class="flex items-center space-x-1000 px-10">
            <img src="/logos/aaimf.png" alt="Client 1" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/2b.png" alt="Client 2" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/penta.png" alt="Client 3" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/lanature.png" alt="Client 4" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/Naasar Diamonds.png" alt="Client 5" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/rivoli.png" alt="Client 6" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
          </div>

          <div class="flex items-center space-x-1000 px-10">
            <img src="/logos/aaimf.png" alt="Client 1 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/2b.png" alt="Client 2 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/penta.png" alt="Client 3 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/lanature.png" alt="Client 4 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/Naasar Diamonds.png" alt="Client 5 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
            <img src="/logos/rivoli.png" alt="Client 6 duplicate" class="h-14 w-auto opacity-70 hover:opacity-100 transition" />
          </div>
        </div>
      </div>
    </section>

<!-- Work Section -->
<section id="work" class="py-28 bg-white text-black">
  <div class="max-w-[1700px] mx-auto px-8 md:px-12">
    <h2
      class="text-4xl md:text-5xl font-light mb-20 text-center uppercase tracking-tight"
    >
      Our Work
    </h2>

    <!-- Fluid Grid -->
    <div class="work-grid">
  <div
    v-for="(project, index) in projects"
    :key="project.id"
    class="relative group overflow-hidden cursor-pointer rounded-2xl"
    :class="[
      project.aspect,
      project.type === 'video' ? 'video-item' : 'image-item',
    ]"
    @click="openProject(project.slug)"
  >
    <component
      :is="project.type === 'video' ? 'video' : 'img'"
      :src="project.image"
      :alt="project.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      v-bind="project.type === 'video' ? { 
    autoplay: true, 
    loop: true, 
    muted: true, 
    playsinline: true, 
    poster: project.poster || '/default-poster.jpg'
  } : {}"
      @mouseenter="e => e.target.play?.()"
      @mouseleave="e => e.target.pause?.()"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

    <!-- Text -->
    <div class="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
      <p class="text-sm font-light mb-1">{{ project.brand }}</p>
      <h3 class="text-xl md:text-2xl font-light leading-snug">{{ project.title }}</h3>
    </div>
  </div>
</div>

  </div>
</section>



 <!-- Contact Section -->
<section
  id="contact"
  ref="contactRef"
  :class="contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  class="transition-all duration-700 py-28 bg-gray-50"
>
  <div class="contact-container max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-light mb-6 uppercase tracking-tight">
      Let’s Talk
    </h2>
    <p class="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
      Have a project in mind? We'd love to hear from you.
    </p>

    <form @submit.prevent="sendMessage" class="space-y-8 text-left">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-black focus:outline-none bg-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-black focus:outline-none bg-white"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="6"
          class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-black focus:outline-none resize-none bg-white"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="px-10 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </form>

    <p class="text-gray-700 mt-12 text-lg">
      Or email us directly at
      <a
        href="mailto:marketing@mtadv.com"
        class="text-black font-medium underline hover:no-underline"
        >marketing@mtadv.com</a
      >
    </p>
  </div>
</section>
  </div>
</template>

<script setup>
import HeroVideo from '@/components/HeroVideo.vue'
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'
import { projectsData } from '@/data/projectsData.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const projectData = projectsData

function openProject(slug) {
  router.push(`/work/${slug}`)
}
// Section animations
const aboutRef = ref(null)
const contactRef = ref(null)
const aboutVisible = ref(false)
const contactVisible = ref(false)

// Projects
const projects = ref([
  { id: 1, slug: '2B-Black-Friday', image: '/work/2Bblackfriday.mp4', brand: '2B', type: 'video', aspect: 'landscape' }, 
  { id: 2, slug: 'LaNature', image: '/work/lanature.mp4', brand: 'La Nature', type: 'video', aspect: 'square' },
  { id: 3, slug: '2B25years', image: '/work/2B25years.png', brand: '2B', type: 'image', aspect: 'square' },
  { id: 4, slug: 'Rivoli', image: '/work/rivolivideo.mp4', brand: 'Rivoli', type: 'video', aspect: 'landscape' },
  { id: 5, slug: 'AAIMF', image: '/work/aaimfvideo.mp4', brand: 'AAIMF', type: 'video', aspect: 'square' },
  { id: 6, slug: '2BBackToSchool', image: '/work/2bbacktoschool.mp4', brand: '2B', type: 'video', aspect: 'square' },
  { id: 7, slug: 'HalanSalka', image: '/work/halan.mp4', brand: 'Halan', type: 'video', aspect: 'square' },
])


// Contact form data
const form = ref({
  name: '',
  email: '',
  message: '',
})

// EmailJS integration
const sendMessage = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all fields.')
    return
  }

  try {
    const result = await emailjs.send(
      'service_lxms7gq',     // replace with your service ID
      'template_0kak6ur',    // replace with your template ID
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      'AsYVbvk0CDeYMrFrF'      // replace with your EmailJS public key
    )

    alert('✅ Message sent successfully!')
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error(error)
    alert('❌ Failed to send message. Please try again later.')
  }
}

// Animate sections on scroll
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) aboutVisible.value = true
  }, { threshold: 0.3 })
  if (aboutRef.value) observer.observe(aboutRef.value)

  const obs2 = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) contactVisible.value = true
  }, { threshold: 0.3 })
  if (contactRef.value) obs2.observe(contactRef.value)
})
</script>
<style scoped>
/* === Refined Editorial Grid (Tighter 1200px Version) === */
.work-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr; /* balanced tighter ratio */
  grid-auto-rows: 450px; /* shorter and elegant */
  gap: 1.5rem;
  align-items: stretch;
  max-width: 1200px; /* narrower grid */
  margin: 0 auto; /* center the grid */
  padding: 0 1.5rem; /* soft side padding */
}

/* Shape variations */
.landscape {
  grid-column: span 2;
}
.square {
  grid-column: span 1;
}
.portrait {
  grid-column: span 1;
  grid-row: span 2; /* taller, elegant vertical cards */
}

/* Smooth hover feel */
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
#work img,
#work video {
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

/* Overlay transition */
.work-grid .absolute.inset-0.bg-black\/0 {
  pointer-events: none;
}

/* Responsive behavior */
@media (max-width: 1280px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 380px;
    max-width: 950px;
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  #work {
    height: auto !important;
    overflow: visible !important;
    display: block !important;
  }

  @media (max-width: 768px) {
  .work-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    max-width: 90%;
    gap: 1.25rem;
  }

  .work-grid > div.landscape,
  .work-grid > div.portrait,
  .work-grid > div.square {
    grid-column: span 1 !important;
    grid-row: auto !important;
  }
}


  #work > div,
  #work > section,
  #work .max-w-7xl {
    height: auto !important;
    overflow: visible !important;
  }

  #work .work-grid > * {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
}

  
</style>

<style scoped>
/* === Clean, Centered Contact Layout === */
.contact-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Input field consistency */
input,
textarea {
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #000;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

/* Responsive design */
@media (max-width: 1024px) {
  .contact-container {
    max-width: 700px;
  }
}
@media (max-width: 768px) {
  .contact-container {
    max-width: 90%;
    padding: 0 1rem;
  }
}
</style>
