<template>
  <div class="relative h-full w-full">
    <section class="relative overflow-hidden bg-black min-h-screen py-24">
      <!-- Grid Pattern Background -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-black"
      ></div>

      <!-- Container -->
      <div
        class="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6 md:py-12 text-white"
      >
        <div>
          <!-- Title Container -->
          <div
            class="mx-auto w-full max-w-5xl px-5 py-5 md:px-10 md:py-16 lg:py-5"
          >
            <!-- Title Component -->
            <div class="flex flex-col items-stretch self-center text-center">
              <h1 class="mb-5 text-4xl font-bold md:text-6xl">
                Terms of Service
              </h1>
              <p class="mb-10 flex-col text-[#808080]">
                Please read these terms carefully to understand your rights and
                responsibilities as a SmartCart user.
              </p>
              <img
                class="lg:min-h-[30px] item-center justify-center w-40 rounded-md object-cover shadow-xl"
                src="../assets/SmartCart.3.png"
                alt="SmartCart company logo and branding"
              />
            </div>
          </div>
        </div>
        <div
          class="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-5"
        >
          <!-- Terms Component -->
          <div class="flex min-w-full flex-col items-start gap-y-5">
            <!-- Term -->
            <h4 class="mb-5 text-xl font-extrabold sm:text-xl md:text-2xl">
              Agreement to Terms
            </h4>
            <p class="mb-2 text-sm">
              This Terms of Service ("Agreement") governs your use of the
              SmartCart app ("App") and related services provided by SmartCart
              ("Company"). By accessing or using SmartCart, you agree to comply
              with and be bound by these Terms.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Services Provided
            </h4>
            <p class="mb-2 text-sm">
              SmartCart helps you create, organize, and manage grocery lists,
              track spending, and discover deals. Features may include syncing
              lists, receiving reminders, or connecting with local stores.
              SmartCart may update or modify features at any time.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              User Responsibilities
            </h4>
            <p class="mb-2 text-sm">
              You agree to provide accurate information and use SmartCart
              responsibly. You must not misuse the app to share unlawful content
              or infringe on the rights of others. You are responsible for
              keeping your account secure.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Privacy and Data
            </h4>
            <p class="mb-2 text-sm">
              SmartCart respects your privacy and handles your data according to
              our Privacy Policy. By using SmartCart, you consent to the
              collection and use of data as described in that policy.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Intellectual Property
            </h4>
            <p class="mb-2 text-sm">
              SmartCart owns all rights to the App, its content, and any related
              materials. You may not copy, modify, or distribute any part of
              SmartCart without written permission.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Limitation of Liability
            </h4>
            <p class="mb-2 text-sm">
              SmartCart is provided "as is" without warranties of any kind. We
              are not liable for any direct, indirect, or consequential damages
              resulting from your use of SmartCart.
            </p>
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Termination
            </h4>
            <p class="mb-2 text-sm">
              We reserve the right to suspend or terminate your access to
              SmartCart at any time if you violate these Terms or misuse the
              App.
            </p>
            <!-- Term -->
            <h4
              class="text-xl font-extrabold sm:text-xl md:text-2xl text-green-400"
            >
              Governing Law
            </h4>
            <p class="mb-2 text-sm">
              These Terms are governed by the laws of South Africa. Any disputes
              will be resolved in the courts of South Africa.
            </p>
            <!-- Divider -->
            <div class="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
            <p class="mb-2 text-sm">
              By accessing or using SmartCart, you confirm that you have read,
              understood, and agree to these Terms of Service and any policies
              or guidelines incorporated herein.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "SmartCart - Terms of Service",
  meta: [
    {
      name: "description",
      content:
        "Review SmartCart’s Terms of Service to understand your rights and responsibilities when using our grocery list and budget tracking app.",
    },
    {
      name: "keywords",
      content:
        "SmartCart, Terms of Service, grocery app, privacy, user agreement, grocery tracking",
    },
    { name: "author", content: "SmartCart" },
    { property: "og:title", content: "SmartCart - Terms of Service" },
    {
      property: "og:description",
      content:
        "Understand your rights and responsibilities by reading SmartCart’s Terms of Service.",
    },
    { property: "og:url", content: "https://smartcart.online/terms" },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://smartcart.online/images/SmartCartBanner.jpg", // Adjust to your actual image URL
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "SmartCart - Terms of Service" },
    {
      name: "twitter:description",
      content:
        "Read our terms to stay informed about your SmartCart usage rights.",
    },
    {
      name: "twitter:image",
      content: "https://smartcart.online/images/SmartCartBanner.jpg", // Same image as OG
    },
  ],
  link: [{ rel: "canonical", href: "https://smartcart.online/terms" }],
});
</script>
