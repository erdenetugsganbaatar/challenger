<script setup lang="ts">
const { signUp } = useFirebaseAuth();

const creds = reactive({
  email: '',
  password: '',
});

const handleSignUp = async () => {
  try {
    await signUp(creds.email, creds.password);
    navigateTo('/');
  } catch (e) {
    console.error(e);
    alert('Error while signing up');
  }
};
</script>

<template>
  <div>
    <input autocomplete="email" v-model="creds.email" type="text" />
    <input autocomplete="new-password" v-model="creds.password" type="password" />
    <button @click="handleSignUp">Sign up</button>
  </div>
</template>
