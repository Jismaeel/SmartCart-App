<template>
        <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-4"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only"></span>
            <img
              class="h-auto w-40"
              src="../assets/Dark mode.png"
              alt="SmartCart logo"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6 text-white active:bg-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            :class="activeSection(item.to)"
            >{{ item.name }}</RouterLink
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            class="text-sm/6 font-semibold text-white hover:text-green-400"
            >Download<span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="py-6">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-50"
                  >{{ item.name }}</RouterLink
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-50"
                  >Download</a
                ><a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">SmartCart</span>
                  <img
                    class="h-auto w-40"
                    src="../assets/Dark mode.png"
                    alt="SmartCart Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const mobileMenuOpen = ref(false);

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/About" },
  { name: "Policy", to: "/Policy" },
  { name: "Ij-Designs", to: "#" },
];

const activeSection = (path) => {
  return route.path === path
    ? "text-sm font-semibold rounded-full px-3 py-0.5 text-white bg-gray-700"
    : "text-sm font-semibold rounded-full px-3 py-0.5 text-white hover:bg-gray-700";
};
</script>
