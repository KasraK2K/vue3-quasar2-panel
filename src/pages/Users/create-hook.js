import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { service } from "boot/service";
import { validation } from "boot/validation";

export default function userUserCreateHook(state) {
  state.name = "";
  state.email = "";
  state.password = "";
  state.selection = [];
  state.access = "";
  state.breadcrumbs = [
    {
      label: "Dashboard",
      icon: "dashboard",
      component: "Dashboard",
    },
    {
      label: "Users",
      icon: "people",
      component: "UsersList",
    },
    {
      label: "Create User",
      icon: "add",
    },
  ];

  const $q = useQuasar();
  const router = useRouter();

  const selectionToAccess = () => {
    state.access = "";
    let selectionSum = 0;
    state.selection.forEach((item) => {
      selectionSum += item;
    });
    const selectionSumLength = String(selectionSum).length;
    for (let i = 0; i < 4 - selectionSumLength; i++) state.access += "0";
    state.access += String(selectionSum);
  };

  const onSubmit = async () => {
    try {
      selectionToAccess();
      const data = {
        name: state.name,
        email: state.email,
        password: state.password,
        access: state.access,
      };
      await service.user.create(data);
      $q.notify({
        progress: true,
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
      router.push({ name: "UsersList" });
    } catch (error) {
      $q.notify({
        progress: true,
        color: "red-4",
        textColor: "white",
        icon: "cloud_off",
        message: error.message,
      });
    }
  };

  const onReset = () => {
    state.name = "";
    state.email = "";
    state.password = "";
    state.selection = [];
    state.access = "";
  };

  return {
    state,
    selectionToAccess,
    onSubmit,
    onReset,
    validation,
  };
}
