<template>
  <section class="relative w-full h-screen overflow-hidden bg-white font-galyon">
    <!-- Background Video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="hero-video absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/agency-intro.mp4" type="video/mp4" />
    </video>

    <!-- Soft White Overlay -->
    <div class="absolute inset-0 bg-white/60"></div>

    <!-- Hero Text -->
    <div
      class="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
    >
      <h1
        class="hero-title text-5xl sm:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
      >
        Crafting the Future of Brands
      </h1>
      <p
        class="hero-subtitle mt-4 sm:mt-6 text-lg sm:text-xl font-light max-w-md sm:max-w-2xl text-white drop-shadow"
      >
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

/* Video always covers fully — responsive fix */
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

/* White text always visible */
.hero-title,
.hero-subtitle {
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

/* Adjust text for mobile screens */
@media (max-width: 768px) {
  section {
    height: 50vh;
  }

  .hero-title {
    font-size: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 0.75rem;
    max-width: 90%;
  }

  .hero-video {
    object-fit: cover;
    object-position: center top; /* ensures better mobile framing */
  }
}
</style>
