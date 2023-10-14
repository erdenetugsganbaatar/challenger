<script setup lang="ts">
const { signOut } = useFirebaseAuth();
const handleSignOut = async () => {
  await signOut();
  navigateTo('/login');
};
</script>

<template>
  <button @click="handleSignOut">Sign out</button>
</template>
