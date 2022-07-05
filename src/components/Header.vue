<template>
  <div class="_headerLink">
    <b-button squared variant="success">License Option</b-button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "header-com",
  computed: {
    ...mapGetters(["getSearchBar"]),
  },
  watch: {
    value(nV) {
      this.$store.dispatch("set_qry", nV);
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="scss" scoped>
._headerLink {
  background-color: #356399;
  color: white;
  display: flex;
  justify-content: end !important;
  align-items: center !important;
  align-items: baseline;
  justify-content: space-between;
  height: 4rem;
  top: 0;
  left: 0;
  z-index: 999;
  text-transform: uppercase;
  padding: 1rem;
  margin: 0;
}

a {
  font-weight: bold;
  color: #398a6a;
  text-decoration: none;
}
.searchInput {
  margin-left: 2rem;
}
</style>
