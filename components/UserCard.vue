<template>
  <div v-if="user" class="flex items-center p-3 space-x-3 bg-white rounded">
    <img :src="profile" alt="" class="w-12 h-12 border-2 border-blue-400 rounded-full">
    <div class="text-right">
      <div class="font-med">{{ name }}</div>
      <button class="text-sm underline text-slate-500">Logout</button>
    </div>
  </div>
</template>

<script setup>
  const user = useSupabaseUser()

  const name = computed(
    () => user?.value.user_metadata.full_name
  )

  const profile = computed(
    () => user?.value.user_metadata.avatar_url
  )
</script>

<style scoped></style>