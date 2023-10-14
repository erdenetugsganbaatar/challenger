<script setup lang="ts">
const { user } = useFirebaseAuth();
</script>

<template>
  <RegisterUser />
  <LoginUser />
  <SignoutButton />
  {{ user }}
</template>
