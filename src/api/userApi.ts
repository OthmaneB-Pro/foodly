import axios from "axios";

type UserType = {
  username: string;
  password: string;
  role : string;
};

export const registerUser = async (userData: UserType) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/register",
      userData
    );
    const token = res.data.token;
    localStorage.setItem("jwt", token);
  } catch (err) {
    console.error("Erreur lors de l'inscription", err);
    throw err;
  }
};

export const loginUser = async (userData: UserType) => {
  try {
    const res = await axios.post("http://localhost:8080/auth/login", userData);
    const token = res.data.token;
    localStorage.setItem("jwt", token);
  } catch (err) {
    console.error("Erreur lors de la connexion", err);
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("jwt");
};

export const getUserIdFromUsername = async (username: string): Promise<number | null> => {
  try {
    const res = await axios.get(`http://localhost:8080/user/idByUsername/${username}`);
    return res.data;
  } catch (err) {
    console.error("Erreur récupération userId", err);
    return null;
  }
};

export const getUsernameFromToken = (): string | null => {
  const token = localStorage.getItem("jwt");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.sub;
  } catch {
    return null;
  }
};

