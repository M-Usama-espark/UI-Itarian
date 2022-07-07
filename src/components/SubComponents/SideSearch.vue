<script>
import VJstree from "vue-jstree";
export default {
  components: { VJstree },
  data() {
    return {
      treeData: [
        {
          text: "Default Customer",
          // icon: "fa fa-folder icon-state-default",
          children: [
            {
              text: "Default Group - Default Customer",
            },
            {
              text: "Test Group",
            },
            // {
            //   text: "custom icon",
            //   icon: "fa-solid fa-coffee fa-2xs",
            // },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="side-search block-content">
    <div class="search-input">
      <b-input-group size="sm">
        <b-form-input placeholder="Search Group Name"></b-form-input>
      </b-input-group>
    </div>
    <div class="show-all">
      <b-icon icon="files"></b-icon>
      <span> Show All </span>
    </div>
    <v-jstree :data="treeData"></v-jstree>
  </div>
</template>
<style lang="scss" scoped>
.side-search {
  background: #eef2f5;
  .search-input {
    background: #c7cdd5;
    padding: 0.5rem;
  }
  .show-all {
    padding: 0.5rem;
    text-align: center;
    border-bottom: 1px solid rgb(204, 203, 203);
  }
  .folder-tree {
    padding: 1rem;
  }
}
.fa-2xs {
  width: 0.85rem !important;
}
</style>
