<template>
  <div class="row">
    <div v-if="isSearch" class="col-md-2">
      <SideSearch />
    </div>
    <div :class="[isSearch ? 'col-md-10' : 'col-md-12']">
      <FileRatingListing :toggle="isSearch" @isToggle="(v) => (isSearch = v)" />
    </div>
  </div>
</template>
<script>
import SideSearch from "../../components/SubComponents/SideSearch.vue";
import FileRatingListing from "../SubScreen/FileRatingListing.vue";
export default {
  name: "file-rating",
  components: {
    SideSearch,
    FileRatingListing,
  },
  data() {
    return {
      isSearch: false,
    };
  },
};
</script>
<style lang="scss" scoped></style>
