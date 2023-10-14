<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

const { user } = useFirebaseAuth();
</script>

<template>
  {{ user }}
  <div v-if="user">
    Content will be here
    <SignoutButton />
  </div>
</template>
