<script>
import { ref, computed } from "vue";
import { api } from "/src/boot/axios";

export default async function useUsers() {
  const response = await api.get("https://jsonplaceholder.typicode.com/users");
  const users = ref(response.data);

  return { users };
}
</script>
