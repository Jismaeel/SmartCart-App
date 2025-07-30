<script setup>
import { useHead } from "@vueuse/head";
import Hero from "../components/Hero.vue";
import Team from "../components/Team.vue";
import FAQ from "../components/FAQ.vue";
import Grid from "../components/Grid.vue";

// SEO Meta Tags
useHead({
  title: "SmartCart - Shop Smarter Not Harder | Free Mobile Shopping App",
  meta: [
    {
      name: "description",
      content:
        "SmartCart revolutionizes your shopping experience. Download our free mobile app from Google Play Store or get the APK directly. Smart shopping made easy with advanced features.",
    },
    {
      name: "keywords",
      content:
        "SmartCart, smart shopping, mobile app, shopping assistant, Android app, free download, shopping list, price comparison, shopping experience",
    },
    // Open Graph tags
    {
      property: "og:title",
      content: "SmartCart - Shop Smarter Not Harder | Free Mobile Shopping App",
    },
    {
      property: "og:description",
      content:
        "SmartCart revolutionizes your shopping experience. Download our free mobile app from Google Play Store or get the APK directly. Smart shopping made easy with advanced features.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://smartcart-app.github.io/",
    },
    {
      property: "og:image",
      content: "https://smartcart-app.github.io/src/assets/Dark mode.png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "SmartCart App Logo",
    },
    // Twitter Cards
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "SmartCart - Shop Smarter Not Harder",
    },
    {
      name: "twitter:description",
      content:
        "SmartCart revolutionizes your shopping experience. Download our free mobile app from Google Play Store or get the APK directly.",
    },
    {
      name: "twitter:image",
      content: "https://smartcart-app.github.io/src/assets/Dark mode.png",
    },
    {
      name: "twitter:image:alt",
      content: "SmartCart App Logo",
    },
    // Additional SEO meta tags
    {
      name: "application-name",
      content: "SmartCart",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "SmartCart",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://smartcart-app.github.io/",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SmartCart",
        description:
          "SmartCart is a free mobile shopping app that helps you shop smarter, not harder. Available for Android devices.",
        applicationCategory: "ShoppingApplication",
        operatingSystem: "Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        downloadUrl: [
          "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME",
          "https://smartcart-app.github.io/SmartCartBetav1.0.0.apk",
        ],
        author: {
          "@type": "Organization",
          name: "SmartCart Team",
        },
        publisher: {
          "@type": "Organization",
          name: "SmartCart Team",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          ratingCount: "100",
          bestRating: "5",
          worstRating: "1",
        },
        screenshot: "https://smartcart-app.github.io/src/assets/Dark mode.png",
        softwareVersion: "1.0.0",
        releaseNotes: "Initial beta release with core shopping features",
      }),
    },
  ],
});
</script>

<template>
  <Hero />
  <Grid />
  <Team />
  <FAQ />
</template>
