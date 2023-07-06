<template>
  <iframe
    width="560"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video Player"
    frameborder="0"
    allow="accelorometer, autoplay, clipboard-write, gyroscope"
    allowfullscreen
  >
  </iframe>
</template>

<script setup>
  const props = defineProps({
    videoId: {
      type: Number,
      required: true
    }
  })
</script>

<style scoped></style>
