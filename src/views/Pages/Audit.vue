<template>
  <div class="row">
    <div v-for="(r, i) in data" :key="i" :class="'col-md-6 mb-4'">
      <ChartView :data="r" />
    </div>
  </div>
</template>
<script>
import ChartView from "../../components/SubComponents/ChartView.vue";
export default {
  name: "audit-screen",
  components: {
    ChartView,
  },
  data() {
    return {
      data: [
        {
          title: "Ownership types",
          items: [
            { name: "Corporate", value: 0 },
            { name: "personal", value: 0 },
            { name: "not specified", value: 0 },
          ],
        },
        {
          title: "Operating System",
          items: [
            { name: "Android", value: 0 },
            { name: "iOS", value: 0 },
            { name: "windows", value: 0 },
            { name: "macOS", value: 0 },
            { name: "Linux", value: 0 },
          ],
        },
        {
          title: "device type",
          items: [
            { name: "Smartphone", value: 0 },
            { name: "Tablet", value: 0 },
            { name: "PC", value: 0 },
            { name: "Window Server", value: 0 },
            { name: "Unknown", value: 0 },
          ],
        },
        {
          title: "Security Client Version (Windows)",
          items: [],
        },
        {
          title: "Security Client Version (macOS)",
          items: [],
        },
        {
          title: "Mobile Client Version (Android)",
          items: [],
        },
        {
          title: "Communication Client Version (Windows)",
          items: [],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
