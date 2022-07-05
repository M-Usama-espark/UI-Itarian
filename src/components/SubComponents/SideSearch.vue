<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="side-search">
    <div class="search-input">
      <b-input-group size="sm">
        <b-form-input placeholder="Search Group Name"></b-form-input>
      </b-input-group>
    </div>
    <div class="show-all">
      <b-icon icon="files"></b-icon>
      <span> Show All </span>
    </div>
    <div class="folder-tree">
      <div>option 1</div>
      <div>option 2</div>
      <div>option 3</div>
    </div>
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
</style>
