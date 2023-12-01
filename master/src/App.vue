<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();

const onLogout = () => {
  auth.logout();
  router.push("/login");
};

const showAlert = () => {
  alert("Anda harus login untuk mengakses halaman ini!");
};
</script>

<template>
  
  <div class="bg-black h-screen flex flex-col container mx-auto px-12 gap-10">
    <!--Header-->
    <div class="flex justify-between bg-gray-800 p-4 text-white">
      <!--Menu-->
      <div class="flex gap-4">
        
        <router-link class="text-white hover:text-gray-300 " to="/">Home</router-link>
        <router-link class="text-white hover:text-gray-300" to="/about">About</router-link>
        <router-link v-if="auth.username" class="text-white hover:text-gray-300" to="/restricted">Restricted Page</router-link>
        <p v-else @click="showAlert" class="cursor-pointer text-white hover:text-gray-300">Restricted Page</p>
      </div>
      <!--Authenticated User-->
      <div class="flex gap-2 items-center">
        <p v-if="auth.username">{{ auth.username }}</p>
        <div v-if="auth.username">
          <button
            class="bg-red-500 text-white py-1 px-3 hover:bg-red-600"
            to="/login"
            @click="onLogout"
          >
            Logout
          </button>
        </div>

        <div v-else>
          <router-link class="bg-red-700 text-white py-1 px-3 hover:bg-red-800" to="/login">Login</router-link>
        </div>
      </div>
    </div>
    <!--Body-->
    <router-view></router-view>
  </div>
</template>

<style scoped>
a:hover {
  font-size: 110%; /* Ubah ukuran tulisan saat kursor mengarah ke tautan */
}
.container {
  padding-top: 0px;
}
</style>
