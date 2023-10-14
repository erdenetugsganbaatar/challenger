<script setup lang="ts">
const { signOut } = useFirebaseAuth();
</script>

<template>
  <button @click="signOut">Sign out</button>
</template>
