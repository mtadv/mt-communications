<template>
  <section class="relative w-full h-screen overflow-hidden bg-white font-galyon">
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover "
    >
      <source src="/videos/agency-intro.mp4" type="video/mp4" />
    </video>

    <!-- White overlay for light background, fades video slightly -->
    <div class="absolute inset-0 bg-white/70"></div>

    <!-- Hero Text Content (White Text over Video) -->
    <div
      class="relative z-10 flex flex-col justify-center items-center h-full text-center"
    >
      <h1 class="text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
        Crafting the Future of Brands
      </h1>
      <p class="mt-6 text-xl font-light max-w-2xl text-white drop-shadow">
        We are a creative agency blending strategy, design, and technology to build iconic experiences.
      </p>
      
    </div>
  </section>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
@font-face {
  font-family: "Galyon";
  src: url("/fonts/Galyon-Book.woff2") format("woff2"),
       url("/fonts/Galyon-Book.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.font-galyon {
  font-family: "Galyon", serif;
}

/* Keep background white and clean */
section {
  background-color: #ffffff;
}

/* Make sure only the hero text stays white */
h1, p {
  color: white;
}

/* Slight text shadow to keep white text readable over bright areas */
h1, p {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
</style>
