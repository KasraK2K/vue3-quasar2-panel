import useAuth from "./auth-hook";

export default function useLoginHook(state) {
  state.userName = "asd";
  state.password = "";

  const onSubmit = async () => {
    const { login } = await useAuth();
    await login(state);
  };

  const onReset = () => {
    state.userName = "";
    state.password = "";
  };

  return { onSubmit, onReset };
}
