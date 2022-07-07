<template>
  <div class="row">
    <div v-if="isSearch" class="col-md-2">
      <SideSearch />
    </div>
    <div :class="[isSearch ? 'col-md-10' : 'col-md-12']">
      <DeviceGroup :toggle="isSearch" @isToggle="(v) => (isSearch = v)" />
    </div>
  </div>
</template>
<script>
import SideSearch from "../../components/SubComponents/SideSearch.vue";
import DeviceGroup from "../SubScreen/DeviceGroup.vue";
export default {
  name: "device-list",
  components: {
    SideSearch,
    DeviceGroup,
  },
  data() {
    return {
      isSearch: true,
    };
  },
};
</script>
<style lang="scss" scoped></style>
