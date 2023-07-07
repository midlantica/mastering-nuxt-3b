<template>
  <div class="flex flex-col items-center h-full min-h-screen p-12 mb-4 bg-gray-200">

    <div class="mb-6 prose">
      <h1>
        <span class="font-medium text-purple-600">
          Course: <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div
          class="flex flex-col mb-4 space-y-1"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >

        <h4 class="text-gray-800">{{ chapter.title }}</h4>
        <NuxtLink
          v-for="(lesson, index) in chapter.lessons"
          :key="lesson.slug"
          class="flex flex-row px-3 py-2 space-x-1 font-normal prose-sm no-underline border border-transparent rounded-md hover:text-purple-700 hover:border-purple-200 hover:border "
          :class="{
            'text-purple-700': lesson.path === $route.fullPath,
            'text-gray-500': lesson.path !== $route.fullPath,
          }"
          :to="lesson.path"
        >
          <span class="text=gray-500">{{ index + 1 }}.</span>
          <span>{{ lesson.title }}</span>
        </NuxtLink>

        </div>
      </div>

      <div class="prose p-8 bg-white rounded-md w-[65ch]">
        <NuxtPage />
      </div>

    </div>

  </div>
</template>

<script setup>
  const { chapters } = useCourse()
</script>

<style scoped>
  .router-link-active {
    @apply bg-yellow-100;
  }
</style>