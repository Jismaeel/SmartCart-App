<template>
  <div class="relative h-full w-full">
    <section class="relative overflow-hidden bg-black min-h-screen py-24">
      <!-- Grid Pattern Background -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-black"
      ></div>

      <!-- Container -->
      <div class="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 md:px-6 md:py-12 text-white">
        <!-- Grid -->
        <div class="grid gap-12 sm:gap-12 md:grid-cols-2">
          <!-- Content -->
          <div class="flex flex-col items-start gap-2">
            <div class="flex items-center rounded-md bg-green-400 px-3 py-1">
              <div class="mr-1 h-2 w-2 rounded-full bg-black"></div>
              <p class="text-sm text-black">SmartCart</p>
            </div>
            <p class="text-sm text-gray-300 sm:text-xl">
              About SmartCart.
            </p>
            <!-- Title -->
            <h1 class="mb-2 text-4xl font-bold md:text-6xl md:mb-8 text-green-400">
              SmartCart.
            </h1>
            <p class="text-sm text-gray-300 sm:text-xl">
              SmartCart is a grocery list app designed to make shopping simpler, faster, and more budget-friendly. The idea behind it is to help users plan their shopping in advance, track spending, and avoid impulse buys. By organizing lists, suggesting deals, and syncing with local stores, SmartCart turns a mundane task into an efficient, money-saving habit.            </p>
            <!-- Divider -->
            <div class="mb-8 mt-8 h-px w-full bg-green-400"></div>
            <div class="mb-6 flex flex-col gap-2 text-sm text-gray-300 sm:text-base md:mb-8">
              <p><strong>2025: </strong>App was created</p>
            </div>
            <!-- Buttons -->
            <div class="flex flex-col gap-4 font-semibold sm:flex-row">
              <a
                href="mailto:infoatijdesigns@gmail.com"
                class="flex items-center gap-4 rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-green-600 transition-colors"
              >
                <p>Email Us</p>
              </a>
              <a
                href="https://www.facebook.com/share/15pu8pc7Mz/?mibextid=qi2Omg"
                class="flex gap-4 rounded-full border text-green-400 border-green-400 px-6 py-3 hover:bg-green-500 hover:text-black transition-colors"
              >
                <p>Facebook</p>
              </a>
            </div>
          </div>

          <!-- Image -->
          <img
            class="lg:min-h-[530px] w-full rounded-md object-cover shadow-xl"
            src="../assets/SmartCart.3.png"
            alt="IJ Designs company logo and branding"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
