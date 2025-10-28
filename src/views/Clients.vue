<template>
  <section id="clients" class="relative w-full bg-white py-20 overflow-hidden">
    <!-- Title -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-[Galyon] text-black tracking-wide">Our Clients</h2>
      <p class="text-gray-600 mt-3 text-lg font-light">
        We partner with brands that shape industries and inspire change.
      </p>
    </div>

    <!-- Scrolling logo bar -->
    <div class="relative border-t border-b border-gray-200 py-10">
      <div class="flex animate-scroll space-x-20">
        <!-- First set -->
        <div class="flex space-x-20 items-center">
          <img
            v-for="(logo, index) in logos"
            :key="'set1-' + index"
            :src="logo"
            alt="Client Logo"
            class="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
          />
        </div>

        <!-- Second set (duplicate for seamless loop) -->
        <div class="flex space-x-20 items-center">
          <img
            v-for="(logo, index) in logos"
            :key="'set2-' + index"
            :src="logo"
            alt="Client Logo"
            class="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  '/logos/aaimf.png',
  '/logos/2b.png',
  '/logos/penta.png',
  '/logos/lanature.png',
  '/logos/Naasar Diamonds.png',
];
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 35s linear infinite;
  width: max-content;
  display: flex;
  align-items: center;
}
</style>
