<template>
  <div class="row">
    <draggable
      class="row"
      v-model="data"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <!-- <div v-for="(element, i) in data" :key="i">{{ element }}</div> -->
      <div v-for="(r, i) in data" :key="i" :class="'col-md-6 mb-4'">
        <ChartView :data="r" :key="r.title" />
      </div>
    </draggable>
  </div>
</template>
<script>
import ChartView from "../../components/SubComponents/ChartView1.vue";
import draggable from "vuedraggable";
export default {
  name: "audit-screen",
  components: {
    ChartView,
    draggable,
  },
  data() {
    return {
      data: [
        {
          title: "Ownership types",
          items: [
            { name: "Corporate", value: 2 },
            { name: "personal", value: 3 },
            { name: "not specified", value: 6 },
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
