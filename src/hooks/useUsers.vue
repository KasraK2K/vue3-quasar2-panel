<script>
import { ref } from "vue";
import { service } from "/src/boot/service";

export default async function useUsers() {
  const response = await service.user.find();
  const users = ref(response.data);

  return { users };
}
</script>
