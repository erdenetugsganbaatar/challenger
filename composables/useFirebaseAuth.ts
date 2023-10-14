import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>('firebase_auth_user', () => null);

  const signUp = async (email: string, password: string) => {
    const userCreds = await createUserWithEmailAndPassword($auth, email, password);
    user.value = userCreds.user;
  };

  const signIn = async (email: string, password: string) => {
    const userCreds = await signInWithEmailAndPassword($auth, email, password);
    user.value = userCreds.user;
  };

  const signOut = async () => {
    return firebaseSignOut($auth);
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
}
