<script>
export default {
  name: "HeadIcon",
  props: ["icon", "title", "disabled"],
  data() {
    return {};
  },
};
</script>
<template>
  <div class="headIcon">
    <div class="icon">
      <b-icon :icon="icon" scale="2"></b-icon>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>
<style lang="scss" scoped>
.headIcon {
  cursor: pointer;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  .icon {
    height: 30px;
    text-align: center;
    margin-top: 1rem;
  }
  .title {
    min-width: 75px;
    max-width: 90px;
    text-align: center;
    text-transform: capitalize;
    font-size: 11px;
  }
  .avtive {
    color: red;
  }
  .disabled {
    pointer-events: none !important;
  }
}
</style>
