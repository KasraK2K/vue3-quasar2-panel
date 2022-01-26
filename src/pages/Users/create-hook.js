import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { service } from "boot/service";
import { validation } from "boot/validation";

export default function userUserCreateHook(state) {
  state.name = "";
  state.email = "";
  state.password = "";
  state.access = "1111"; // FIXME: add some CRUD checkbox to create access value
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

  const onSubmit = async () => {
    try {
      await service.user.create({
        name: state.name,
        email: state.email,
        password: state.password,
        access: state.access,
      });
      $q.notify({
        progress: true,
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
      // REVIEW: is it necessary to clear this values ?
      onReset();
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
  };

  return {
    state,
    onSubmit,
    onReset,
    validation,
  };
}
