<template>
  <div class="device-group">
    <div class="toggleBtn" @click="isToggle">
      <b-icon
        v-if="toggle"
        icon="arrow-bar-left"
        scale="2"
        variant="primary"
      ></b-icon>
      <b-icon
        v-else
        icon="arrow-bar-right"
        scale="2"
        variant="primary"
      ></b-icon>
    </div>
    <Tabs :tabs="['Group Management', 'Device Management']">
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
          <HeadIcon icon="three-dots" title="more" />
        </div>
        <div class="search-input">
          <b-form-input
            v-model="text"
            placeholder="Search for Devices"
          ></b-form-input>
        </div>
        <div>
          <b-table
            :outlined="true"
            :striped="true"
            :items="device_items"
            :fields="device_fields"
          ></b-table>
        </div>
        <div class="text-center">
          <p>
            You don't have devices yet! Enroll devices to start using Endpoint
            Manager!
          </p>
          <b-button squared variant="success">Enroll Now</b-button>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../../components/SubComponents/tabs.vue";
import HeadIcon from "../../components/SubComponents/HeadIcon.vue";
export default {
  name: "DeviceGroup",
  props: ["toggle"],
  components: { Tabs, HeadIcon },
  data() {
    return {
      headIconList: [
        {
          name: "Create Group",
          icon: "arrow-down-right-square",
        },
        {
          name: "Manage Profiles",
          icon: "laptop",
        },
        {
          name: "Rename Group",
          icon: "input-cursor-text",
        },
        {
          name: "Delete Device Group",
          icon: "arrow-down-right-square",
        },
        {
          name: "Run Procedure",
          icon: "file",
        },
      ],
      headIconList1: [
        {
          name: "Enroll Device",
          icon: "arrow-down-right-square",
        },
        {
          name: "Remote Control",
          icon: "laptop",
        },
        {
          name: "File transfer",
          icon: "files",
        },
        {
          name: "Remote Tools",
          icon: "tools",
        },
        {
          name: "Run Procedure",
          icon: "file",
        },
        {
          name: "Manage Profiles",
          icon: "laptop",
        },
        {
          name: "Install or Manage Packages",
          icon: "disc",
        },
        {
          name: "Refresh Devices Information",
          icon: "arrow-clockwise",
        },
        {
          name: "Power Option",
          icon: "laptop",
        },
        {
          name: "Owner",
          icon: "people",
        },
        {
          name: "Send Message",
          icon: "envelope",
        },
        {
          name: "Passcode",
          icon: "input-cursor-text",
        },
        {
          name: "Siren",
          icon: "volume-down",
        },
        {
          name: "Wipe / Corporate",
          icon: "circle",
        },
      ],
      fields: ["name", "device", "created_by", "created"],
      items: [
        {
          name: "Testing Group",
          device: 0,
          created_by: "admin@admin.com",
          created: "2022/06/07 05:12:04 PM",
        },
        {
          name: "Testing Group",
          device: 0,
          created_by: "admin@admin.com",
          created: "2022/03/01 08:46:34 PM",
        },
      ],
      device_fields: [
        "OS",
        "Name",
        "ACTIVE COMPONENTS",
        "	VIRTUAL DESKTOP",
        "PATCH STATUS",
        "CUSTOMER",
        "LAST LOGGED IN USER",
        "LAST ACTIVITY",
      ],
      device_items: [],
    };
  },
  methods: {
    isToggle() {
      this.$emit("isToggle", !this.toggle);
    },
  },
};
</script>
<style lang="scss" scoped>
.device-group {
  position: relative;
  background: white;
  .toggleBtn {
    position: absolute;
    cursor: pointer;
    padding: 0.5rem;
  }
}
</style>
