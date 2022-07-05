<script>
export default {
  name: "TabsGroup",
  props: ["tabs"],
  data() {
    return {
      tabValue: 1,
    };
  },
};
</script>
<template>
  <div>
    <div class="tabs">
      <div
        v-for="(t, i) in tabs"
        :key="i"
        class="tab"
        :class="i + 1 == tabValue ? 'active' : ''"
        @click="tabValue = i + 1"
      >
        {{ t }}
      </div>
    </div>
    <slot :name="tabValue"></slot>
  </div>
</template>
<style lang="scss" scoped>
.tabs {
  display: flex;
  cursor: pointer;
  gap: 1rem;
  border-bottom: 1px solid lightgray;
  margin-left: 2rem;
  .tab {
    padding: 0.5rem;
  }
  .active {
    color: green;
    border-bottom: 2px solid Green;
  }
}
</style>
