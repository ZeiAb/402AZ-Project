import {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  resetPassword,
  confirmResetPassword,
  fetchAuthSession,
} from "aws-amplify/auth";

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  return await signUp({
    username: email,
    password,
    options: {
      userAttributes: {
        email,
        name,
      },
    },
  });
}
export async function loginUser(email: string, password: string) {
  return await signIn({
    username: email,
    password,
  });
}

export async function logoutUser() {
  return await signOut();
}

export async function getLoggedInUser() {
  try {
    return await getCurrentUser();
  } catch {
    return null;
  }
}

export async function getIdToken() {
  const session = await fetchAuthSession();
  return session.tokens?.idToken?.toString() || "";
}

export async function startForgotPassword(email: string) {
  return await resetPassword({
    username: email,
  });
}

export async function finishForgotPassword(
  email: string,
  code: string,
  newPassword: string
) {
  return await confirmResetPassword({
    username: email,
    confirmationCode: code,
    newPassword,
  });
}