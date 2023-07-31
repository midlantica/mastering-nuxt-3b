<template>
  <div class="max-w-2xl prose w0full h-9">
    <h1>Log in to {{ title }}</h1>
    <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded">
      Log in with Github
    </button>
  </div>
</template>

<script setup>
  const { title } = useCourse()
</script>

<style scoped></style>