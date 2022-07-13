<script>
// import logo from "../assets";
export default {
  data() {
    return {
      toggleMenu: false,
      menuList: [
        {
          id: 1,
          name: "Dashboard",
          icon: "grid",
          child: [
            { name: "Audit" },
            { name: "Compliance" },
            { name: "Valkyrie" },
            { name: "Reports" },
            { name: "Notifications" },
            { name: "Audit Logs" },
          ],
        },
        {
          id: 2,
          name: "Devices",
          icon: "laptop",
          child: [
            { name: "Device List", route: "device-list" },
            { name: "Bulk Installation Package", route: "bulk-installation" },
          ],
        },
        {
          id: 3,
          name: "users",
          icon: "person",
          child: [
            { name: "User List" },
            { name: "User Group" },
            { name: "Role Management" },
          ],
        },
        {
          id: 4,
          name: "Configuration templates",
          icon: "collection",
          child: [
            { name: "Profile" },
            { name: "Alerts" },
            { name: "Procedures" },
            { name: "Monitors" },
            { name: "Data Loss Prevention" },
          ],
        },
        {
          id: 5,
          name: "Security",
          icon: "shield",
          child: [
            { name: "Endpoint Security Status" },
            { name: "Security Events" },
            { name: "Blocked Threats" },
            { name: "Quarantined Threats" },
            { name: "Contained Threats" },
            { name: "Autorun Alerts" },
            { name: "File Rating" },
            { name: "File Verdicts" },
            { name: "Device Control" },
            { name: "Data Loss Prevention" },
          ],
        },
        {
          id: 5,
          name: "Network Management",
          icon: "laptop",
          child: [
            { name: "Discoveries" },
            { name: "Profiles" },
            { name: "Devices" },
            { name: "Monitors" },
          ],
        },
        {
          id: 6,
          name: "Application Store",
          icon: "basket3",
          child: [
            { name: "IOS Store" },
            { name: "Android Store" },
            { name: "Window Application Store" },
          ],
        },
        {
          id: 7,
          name: "Applications",
          icon: "hdd-stack",
          child: [
            { name: "Mobile Applications" },
            { name: "Patch Management" },
            { name: "Global Software Inventory" },
            { name: "Vulnerability Management" },
          ],
        },
        {
          id: 7,
          name: "License Management",
          icon: "files",
          child: [{ name: "License Management" }],
        },
        {
          id: 7,
          name: "Setting",
          icon: "gear",
          child: [
            { name: "System Templates" },
            { name: "Data Protection Templates" },
            { name: "Protal Set-Up" },
            { name: "Apple DEP" },
            { name: "Support" },
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="content-logo">
    <div class="logo">
      <img v-if="toggleMenu" src="../assets/EM_icon_64.png" alt="" />
      <h5 v-else>Endpoint Manger</h5>
    </div>
    <div
      class="side-content"
      :style="toggleMenu ? 'width:4rem' : 'width:18rem'"
    >
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="accordion"
        role="tablist"
      >
        <div no-body class="mb-1 tab">
          <div
            block
            href="#"
            v-b-toggle="'accordion-' + index"
            variant="info"
            class="align-items-center"
          >
            <b-icon :icon="item.icon" scale="1.5" />
            <span v-if="!toggleMenu" class="name">
              {{ item.name }}
            </span>
          </div>
          <b-collapse
            :id="'accordion-' + index"
            accordion="my-accordion"
            role="tabpanel"
          >
            <div class="side-child">
              <span v-for="(row, i) in item.child" :key="i">
                <router-link :to="row.route ? `/${row.route}` : '/'">{{
                  row.name
                }}</router-link>
              </span>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <div class="togglebtn" @click="toggleMenu = !toggleMenu">
      <b-icon
        v-if="toggleMenu"
        icon="chevron-double-right"
        pack="fas"
        scale="1"
      ></b-icon>
      <b-icon v-else icon="chevron-double-left" scale="1"></b-icon>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content-logo {
  display: flex;
  flex-direction: column;
  position: relative;

  .logo {
    background: #356399;
    color: white;
    height: 3.3rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-left: 1.5rem;
    border-right: 1px solid white;
    img {
      width: 30px;
    }
  }
  .side-content {
    background: white;
    padding: 1rem;
    // width: 18rem;
    flex-direction: column;
    flex: 1;
    .side-child {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      span {
        padding: 0.4rem;
        a {
          color: #000;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
    .accordion {
      margin-bottom: 1rem;
      .tab {
        display: flex;
        flex-direction: column;
      }
      .name {
        color: rgb(94, 89, 89);
        font-weight: 600;
        margin-left: 1rem;
        text-transform: uppercase;
      }
    }
  }
  .togglebtn {
    cursor: pointer;
    position: absolute;
    padding: 3px 10px;
    bottom: 2rem;
    right: 1rem;
    border-radius: 5px;
    font-size: 18px;
  }
  .togglebtn:hover {
    background: lightgray;
  }
}
</style>
