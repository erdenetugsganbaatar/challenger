<script setup lang="ts">
const { registerUser } = useFirebaseAuth();

const creds = reactive({
  email: '',
  password: '',
});

const handleSignup = async () => {
  try {
    await registerUser(creds.email, creds.password);
    alert('Signed up');
  } catch (e) {
    console.error(e);
    alert('Error while signing up');
  }
};
</script>

<template>
  <div>
    <div>
      <input v-model="creds.email" type="text" />
      <input v-model="creds.password" type="password" />
      <button @click="handleSignup">Sign up</button>
    </div>
  </div>
</template>
