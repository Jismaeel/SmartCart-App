<template>
  <section>
    <div
      class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20"
    >
      <div
        class="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10"
      >
        <h1
          class="mx-auto text-center font-bold text-green-400 text-3xl lg:text-4xl"
        >
          Frequently Asked Questions
        </h1>
        <p
          class="font-inter mt-4 max-w-xl px-5 text-center text-base font-light text-gray-500 lg:max-w-lg"
        >
          Frequently Asked Questions that we can answer.
        </p>
      </div>

      <!-- FAQs -->
      <div class="mt-10 flex w-full max-w-4xl flex-col">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="relative my-3 w-full rounded-3xl bg-gray-900 px-12 py-4 transition-all duration-300"
        >
          <div class="max-w-3xl">
            <h2 class="font-bold text-green-400 text-xl">
              {{ faq.question }}
            </h2>
            <p
              v-show="faq.open"
              class="font-inter mt-4 text-base font-light text-gray-500"
            >
              {{ faq.answer }}
            </p>
          </div>
          <button @click="toggleFAQ(index)" class="relative right-5 top-9">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="white" />
              <path
                d="M7 12H17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                v-if="!faq.open"
                d="M12 7V17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p class="font-inter mx-auto mt-12 text-center text-base text-green-400">
        Can’t find the answer you’re looking for? Reach out to our
        <a  href="mailto:infoatijdesigns@gmail.com" class="text-gray-500 font-bold"> customer support team. </a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Is it free?",
    answer:
      "Yes! 100% free. If you want to give a donation towards the app, you can.",
    open: false,
  },
  {
    question: "Is it secure?",
    answer: "Yes, we use modern security protocols to protect your data.",
    open: false,
  },
  {
    question: "Does it work offline?",
    answer:
      "Some features work offline, like viewing saved data. Internet is needed for syncing.",
    open: false,
  },
  {
    question: "How to reset my password?",
    answer:
      'You can reset your password via the login page by clicking "Forgot Password".',
    open: false,
  },
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
