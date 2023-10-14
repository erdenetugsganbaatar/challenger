import { User, createUserWithEmailAndPassword } from 'firebase/auth';

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>('firebase_auth_user', () => null);

  const registerUser = async (email: string, password: string) => {
    const userCreds = await createUserWithEmailAndPassword($auth, email, password);
    user.value = userCreds.user;
  };

  return {
    user,
    registerUser,
  };
}
