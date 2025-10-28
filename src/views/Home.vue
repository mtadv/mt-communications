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
      <div class="max-w-[1600px] mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-light mb-20 text-center uppercase tracking-tight">
          Our Work
        </h2>

        <div
          class="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="relative cursor-pointer group overflow-hidden"
            @click="goToProject(project.slug)"
          >
            <div
              class="inline-block align-top m-[20px] cursor-pointer group overflow-hidden relative"
              :class="{
                'w-[700px] h-[450px]': project.aspect === 'landscape',
                'w-[300px] h-[420px]': project.aspect === 'portrait',
                'w-[550px] h-[450px]': project.aspect === 'square',
              }"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
              >
                <p class="text-sm font-light mb-1">{{ project.brand }}</p>
                <h3 class="text-xl md:text-2xl font-light leading-snug">
                  {{ project.title }}
                </h3>
              </div>
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
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-light mb-6 uppercase tracking-tight">
          Let’s Talk
        </h2>
        <p class="text-gray-700 text-lg mb-10">
          Have a project in mind? We'd love to hear from you.
        </p>

        <form @submit.prevent="sendMessage" class="space-y-6 text-left max-w-2xl mx-auto">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
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
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <p class="text-gray-700">
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

// Section animations
const aboutRef = ref(null)
const contactRef = ref(null)
const aboutVisible = ref(false)
const contactVisible = ref(false)

// Projects
const projects = ref([
  { id: 1, slug: '2B 25th Anniversary', image: '/work/2B25years.png', brand: '2B', aspect: 'portrait' },
  { id: 2, slug: 'La Nature', image: '/work/lanature.png', brand: 'La Nature', aspect: 'portrait' },
  { id: 3, slug: 'Rivoli', image: '/work/rivoli.png', brand: 'Rivoli', aspect: 'portrait' },
  { id: 4, slug: 'AAIMF', image: '/work/aaimf.png', brand: 'AAIMF', aspect: 'portrait' },
  { id: 5, slug: '2B Back to School', image: '/work/2bbacktoschool.png', brand: '2B', aspect: 'portrait' },
  { id: 6, slug: 'Halan Salka Song', image: '/work/halan.png', brand: 'Halan', aspect: 'portrait' },
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
