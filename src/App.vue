<template>
  <div class="bg-[#E5E5E5] relative lg:h-screen">
    <div class="p-4 lg:p-8">
      <!-- header -->
      <div class="flex justify-between items-start lg:max-w-[1280px] lg:mx-auto">
        <div>
          <h1 class="text-4xl text-gray-800 tracking-wide">Start now</h1>
          <p class="text-4xl text-gray-800 tracking-wide">your
            <span class="font-bold text-black">free plan</span>
          </p>
        </div>
        <button class="bg-primary text-white py-2 px-4 rounded-sm tracking-widest ring-offset-2 ring-primary active:bg-primary-dark active:ring-4 duration-100"
        @click="login()">
          LOGIN
        </button>
      </div>
      <!-- main -->
      <div class="mt-8 lg:grid lg:grid-cols-3 lg:justify-evenly lg:gap-8 lg:max-x-[1280px] lg:mx-auto">
        <!-- card -->
        <div class="w-full p-8 mt-8 bg-secondary rounded-2xl shadow-2xl hover:scale-105 duration-300">
          <p class="text-3xl font-bold">
            Free $0
            <span class="text-base text-gray-600 font-medium">per month</span>
          </p>
          <div class="w-[30px] h-[3px] bg-primary mt-4"></div>

          <p class="font-bold mt-8 text-lg">Plan includes:</p>
          <ul class="text-lg mb-20">
            <li class="flex items-center mt-6" v-for="n in 5" :key="n" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 stroke-current text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                /></svg>item bla bla bla
            </li>
          </ul>

          <a href="#" class="w-full mb-8 block font-bold text-center">
            >view all the feaures
          </a>
          <button class="w-full bg-primary py-3 text-lg text-white tracking-wide rounded-lg">
            Subscribe
          </button>
        </div>

        <div class="w-full p-8 mt-8 bg-primary rounded-2xl shadow-2xl hover:scale-105 duration-300">
          <p class="text-3xl font-bold text-white">
            Standard $20
            <span class="text-base font-medium">per month</span>
          </p>
          <div class="w-[30px] h-[3px] bg-primary mt-4"></div>

          <p class="font-bold mt-8 text-lg text-white">Plan includes:</p>
          <ul class="text-lg mb-20">
            <li class="flex items-center text-white mt-6" v-for="n in 5" :key="n" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-4 stroke-current text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              /></svg>item bla bla bla
            </li>
          </ul>

          <a href="#" class="w-full mb-8 block font-bold text-center text-white">
            >view all the feaures
          </a>
          <button class="w-full bg-white py-3 text-lg tracking-wide rounded-lg">
            Subscribe
          </button>
        </div>

        <div class="w-full p-8 mt-8 bg-secondary rounded-2xl shadow-2xl hover:scale-105 duration-300">
          <p class="text-3xl font-bold">
            Pro $90
            <span class="text-base text-gray-600 font-medium">per month</span>
          </p>
          <div class="w-[30px] h-[3px] bg-primary mt-4"></div>

          <p class="font-bold mt-8 text-lg">Plan includes:</p>
          <ul class="text-lg mb-20">
            <li class="flex items-center mt-6" v-for="n in 5" :key="n" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 stroke-current text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                /></svg>item bla bla bla
            </li>
          </ul>

          <a href="#" class="w-full mb-8 block font-bold text-center">
            >view all the feaures
          </a>
          <button class="w-full bg-primary py-3 text-lg text-white tracking-wide rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <!-- model -->
    <div class="absolute top-0 left-0 right-0 w-full h-full bg-black/70 flex justify-center items-start duration-100 lg:items-center"
    :class="{ 'show': !model.isOpen }">
      <div class="w=[90px] p-4 bg-white mt-[150px] rounded-lg lg:mt-0 lg:w-[500px]">
        <p class="text-3xl my-4 font-medium text-center">LOGIN</p>
        <div class="mb-8">
          <label for="username">Username</label>
          <input type="text" name="username" class="w-full border-gray-300 border-2 h-[50px] px-3 mt-1 rounded-lg focus:border-primary focus:ring-primary" />
        </div>
        <div class="mb-8">
          <label for="password">Password</label>
          <input type="password" name="password" class="w-full border-gray-300 border-2 h-[50px] px-3 mt-1 rounded-lg focus:border-primary focus:ring-primary" />
        </div>
        <div class="mb-8">
          <label for="region">Region</label>
          <select class="w-full border-gray-300 border-2 h-[50px] px-3 mt-1 rounded-lg focus:border-primary focus:ring-primary">
            <option value="TW">Taiwan</option>
            <option value="SG">Singapore</option>
          </select>
        </div>

        <div class="mb-8 flex items-center">
          <input type="checkbox" name="checkbox" class="mr-2 text-primary focus:ring-primary" />
          <label for="checkbox">Remember my username</label>
        </div>

        <button class="w-full bg-primary py-3 text-lg text-white tracking-wide rounded-lg mt-4" @click="login()">
          login
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue'

const model = reactive({ isOpen: false })

function login() {
  model.isOpen = !model.isOpen
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>