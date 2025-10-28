<template>
    <div class="max-w-2xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">MT Admin — Edit Home</h2>
  
      <div v-if="!user">
        <input v-model="email" placeholder="email" class="border p-2 w-full mb-2"/>
        <input v-model="password" placeholder="password" type="password" class="border p-2 w-full mb-2"/>
        <button @click="login" class="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
      </div>
  
      <div v-else>
        <label class="block">Title</label>
        <input v-model="title" class="border p-2 w-full mb-3"/>
        <label class="block">Subtitle</label>
        <textarea v-model="subtitle" class="border p-2 w-full mb-3"></textarea>
  
        <button @click="save" class="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <button @click="logout" class="px-4 py-2 ml-2 bg-gray-200">Logout</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { auth, db } from '../firebase'
  import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
  import { doc, getDoc, setDoc } from 'firebase/firestore'
  
  const email = ref('')
  const password = ref('')
  const user = ref(null)
  const title = ref('')
  const subtitle = ref('')
  
  onAuthStateChanged(auth, (u) => { user.value = u })
  
  async function login() {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    load()
  }
  
  async function load() {
    const snap = await getDoc(doc(db, 'pages', 'home'))
    if (snap.exists()) {
      const d = snap.data()
      title.value = d.title || ''
      subtitle.value = d.subtitle || ''
    }
  }
  
  async function save() {
    await setDoc(doc(db, 'pages', 'home'), {
      title: title.value,
      subtitle: subtitle.value
    }, { merge: true })
    alert('Saved — changes will appear live!')
  }
  
  async function logout() {
    await signOut(auth)
  }
  onMounted(load)
  </script>
  