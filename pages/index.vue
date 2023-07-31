<template>
  <div class="prose">
    <h1>Home page</h1>
    <NuxtLink class="font-medium underline" :href="firstLesson.path">
      Go to Next Lesson
    </NuxtLink>
  </div>
</template>

<script setup>
  const firstLesson = useFirstLesson()
</script>