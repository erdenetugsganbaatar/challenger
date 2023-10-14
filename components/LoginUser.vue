<script setup lang="ts">
const { signIn } = useFirebaseAuth();

const creds = reactive({
  email: '',
  password: '',
});

const handleLogin = async () => {
  try {
    await signIn(creds.email, creds.password);
    alert('Logged in');
  } catch (e) {
    console.error(e);
    alert('Error while Logging in');
  }
};
</script>

<template>
  <div>
    <input autocomplete="email" v-model="creds.email" type="text" />
    <input autocomplete="current-password" v-model="creds.password" type="password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>
