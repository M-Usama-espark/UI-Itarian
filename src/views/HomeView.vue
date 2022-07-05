<template>
  <div class="">Home</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",

  computed: {
    ...mapGetters(["getData"]),
  },
  mounted() {
    this.$store.dispatch("set_Data");
  },
};
</script>
