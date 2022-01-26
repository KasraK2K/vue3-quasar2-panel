import { service } from "boot/service";
import useAuthorization from "/src/hooks/useAuthorization";

export default async function useAuth() {
  const { getToken, setToken, clearToken } = useAuthorization();

  const login = async (data) => {
    try {
      const response = await service.auth.login(data);
      const token = response.data.token;
      setToken(token);
      return { response, token };
    } catch (error) {
      return { error };
    }
  };

  const logout = async (token) => {
    try {
      await service.auth.logout(token);
      clearToken();
    } catch (error) {
      return { error };
    }
  };

  return { login, logout };
}
