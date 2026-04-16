type User = {
  name: string;
  email: string;
  password: string;
};

const USERS_KEY = "ecoconnect_users";
const CURRENT_USER_KEY = "ecoconnect_current_user";

function getUsers(): User[] {
  const storedUsers = localStorage.getItem(USERS_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(user: User) {
  const users = getUsers();

  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  users.push(user);
  saveUsers(users);

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      name: user.name,
      email: user.email,
    })
  );
}

export function loginUser(email: string, password: string) {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      name: user.name,
      email: user.email,
    })
  );
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
}

export function isLoggedIn() {
  return !!localStorage.getItem(CURRENT_USER_KEY);
}

export function resetPassword(email: string, newPassword: string) {
  const users = getUsers();

  const userIndex = users.findIndex((u) => u.email === email);

  if (userIndex === -1) {
    throw new Error("No account found with this email.");
  }

  users[userIndex].password = newPassword;

  saveUsers(users);
}