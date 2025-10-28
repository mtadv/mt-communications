<template>
    <footer class="bg-gray-900 text-gray-200 py-8">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-3">
   
    </div>
    
    <div class="text-sm">© MT for Communications  <span id="year"></span></div>
    </div>
    </footer>
    </template>
    
    <script setup>
    // small script to set year
    if (typeof window !== 'undefined') {
    const el = document.getElementById('year')
    if (el) el.textContent = new Date().getFullYear()
    }
    </script>