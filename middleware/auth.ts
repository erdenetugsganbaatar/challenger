export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useFirebaseAuth();
  if (!user.value) {
    return navigateTo('/login');
  }
});
