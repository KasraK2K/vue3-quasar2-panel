import { useStore } from "vuex";
import { USER, namespace } from "/src/store/constant";

export default function useUserListHook(state) {
  state.rows = [];
  state.breadcrumbs = [
    {
      label: "Dashboard",
      icon: "dashboard",
      component: "Dashboard",
    },
    {
      label: "Users",
      icon: "people",
      component: "",
    },
  ];
  state.columns = [
    {
      name: "id",
      required: true,
      label: "ID",
      align: "left",
      field: "id",
      sortable: false,
    },
    {
      name: "name",
      required: true,
      label: "Name",
      align: "left",
      field: "name",
      sortable: true,
    },
    {
      name: "access",
      required: true,
      label: "Access",
      align: "left",
      field: "access",
      sortable: true,
    },
    {
      name: "password",
      required: true,
      label: "Password",
      align: "left",
      field: "password",
      sortable: true,
    },
  ];

  const store = useStore();

  // REVIEW: We don't need getUsersList function outside of hook
  const getUsersList = async () => {
    await store.dispatch(namespace(USER, USER.SET_LIST));
    state.users = store.getters[namespace(USER, USER.GET_LIST)];
    state.rows = state.users.data;
  };
  getUsersList();

  return {
    state,
  };
}
