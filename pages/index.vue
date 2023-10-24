<script setup lang="ts">
const { user } = useFirebaseAuth();
</script>

<template>
  {{ user }}
  <div v-if="user">
    Content will be here
    <SignoutButton />
  </div>
</template>
