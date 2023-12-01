<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const username = ref("");
const password = ref("");
const router = useRouter();

// Check if both username and password are not empty
const isFormValid = () => {
  return username.value.trim() !== "" && password.value.trim() !== "";
};

const onLogin = () => {
  if (isFormValid()) {
    auth.login(username.value); // You may adjust this part according to your authentication logic
    router.push("/");
  } else {
    // Handle invalid login attempt, e.g., show an error message
    alert("Please enter username and password");
  }
};
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl font-bold mb-4">Login Page</h1>
    <div class="flex flex-col gap-4 max-w-xs">
      <input
        type="text"
        required
        v-model="username"
        class="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Username"
      />
      <input
        type="password"
        required
        v-model="password"
        class="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Password"
      />
      <button
        @click="onLogin"
        :disabled="!isFormValid"
        class="bg-red-700 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>

