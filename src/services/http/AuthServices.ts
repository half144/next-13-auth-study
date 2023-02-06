import api from "../api";

export const AuthServices = {
  login: async (username: string, password: string) => {
    try {
      const data = await api.post("/auth/login", { username, password });
      return data;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  },
};
