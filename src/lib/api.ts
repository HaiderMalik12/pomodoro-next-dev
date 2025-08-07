import type { RegisterInput, LoginInput } from "./types";

export const registerUser = async (data: RegisterInput) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (data: LoginInput) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // <- this is required
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getProfile = async (data: { token: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  return res.json();
};

export const logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  return res.json();
};

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    ...options,
    credentials: "include",
  });

  console.log("Response status:", res);

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return res.json();
};
