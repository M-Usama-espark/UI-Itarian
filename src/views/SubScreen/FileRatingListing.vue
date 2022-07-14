<template>
  <div class="block-content">
    <div
      v-if="tabsList.indexOf(tabValue) > 1"
      class="toggleBtn"
      @click="isToggle"
    >
      <b-icon v-if="toggle" icon="chevron-left" pack="fas" scale="1"></b-icon>
      <b-icon v-else icon="chevron-right" scale="1"></b-icon>
      <span class="fa fa-folder-tree text-primary"></span>
    </div>
    <Tabs
      v-model="tabValue"
      :tabs="tabsList"
      :tabLeft="tabsList.indexOf(tabValue) > 1 ? 3 : 0"
      @change="tabsChange"
    >
      <template v-slot:1>
        <div class="d-flex">
          <HeadIcon
            v-for="(r, i) in headIconList"
            :key="i"
            :icon="r.icon"
            :title="r.name"
          />
        </div>
        <div>
          <b-table
            :outlined="true"
            :striped="true"
            :items="items"
            :fields="fields"
            table-class="customTable"
            tbody-class="customBody"
          ></b-table>
        </div>
      </template>
      <template v-slot:2>
        <div class="d-flex">
          <HeadIcon
            v-for="(r, i) in headIconList1"
            :key="i"
            :icon="r.icon"
            :title="r.name"
          />
        </div>
        <div>
          <b-table
            :outlined="true"
            :striped="true"
            :items="device_items"
            :fields="device_fields"
          ></b-table>
        </div>
      </template>
      <template v-slot:3>
        <div class="search-input d-flex">
          <div class="mx-3 my-2">
            <span
              ><b-icon icon="laptop"></b-icon> Remove form Obsolete Files</span
            >
          </div>
          <div class="mx-3 my-2">
            <span><b-icon icon="file-arrow-up"></b-icon> Export</span>
          </div>
        </div>
        <div>
          <b-table
            :outlined="true"
            :striped="true"
            :items="device_items"
            :fields="device_fields"
          ></b-table>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../../components/SubComponents/tabs.vue";
import HeadIcon from "../../components/SubComponents/HeadIcon.vue";
export default {
  name: "file-rating",
  props: ["toggle"],
  components: { Tabs, HeadIcon },
  data() {
    return {
      tabsList: ["File Rating", "Detected Scripts", "Obsolete Files"],
      tabValue: "",
      headIconList: [
        {
          name: "File Details",
          icon: "file",
        },
        {
          name: "Change Rating",
          icon: "file-bar-graph",
        },
        {
          name: "Record",
          icon: "file-earmark-spreadsheet",
        },
        {
          name: "Export",
          icon: "file-arrow-up",
        },
        {
          name: "Import",
          icon: "file-arrow-down",
        },
      ],
      headIconList1: [
        {
          name: "File Details",
          icon: "file",
        },
        {
          name: "Change Rating",
          icon: "file-bar-graph",
        },

        {
          name: "Export",
          icon: "file-arrow-up",
        },
      ],

      fields: [
        "file_name",
        "file_path",
        "file_hash",
        "size",
        "devices",
        "comodo_rating",
        "admin_rating",
      ],
      items: [],
      device_fields: [
        "file_name",
        "file_path",
        "file_hash",
        "parent_process_name",
        "parent_process_id",
        "devices",
        "comodo_rating",
        "admin_rating",
        "script_details",
      ],
      device_items: [],
    };
  },
  methods: {
    isToggle() {
      this.$emit("isToggle", !this.toggle);
    },
    tabsChange(v) {
      let x = this.tabsList.indexOf(v) > 1;
      if (x) {
        this.$emit("isToggle", true);
      } else {
        this.$emit("isToggle", false);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.block-content {
  position: relative;
  background: white;
  .toggleBtn {
    position: absolute;
    cursor: pointer;
    padding: 0.5rem;
  }
}
</style>
