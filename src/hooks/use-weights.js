import { ref, computed } from "vue";

export default function useWeights(
  initialWeight = 0,
  initialWeightType = "KG"
) {
  const weight = ref(initialWeight);
  const weightType = ref(initialWeightType);

  const lbs = computed(() =>
    weightType.value === "LBS" ? weight.value : weight.value * 2.20462262185
  );
  const kg = computed(() =>
    weightType.value === "KG" ? weight.value : lbs.value * 0.45359237
  );
  const mt = computed(() => kg.value * 0.001);
  const st = computed(() => lbs.value / 2000);

  return {
    weight,
    weightType,
    lbs,
    mt,
    st,
    kg,
  };
}
