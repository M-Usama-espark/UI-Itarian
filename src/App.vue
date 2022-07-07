<template>
  <div id="app">
    <div class="main">
      <SideBar />
      <div class="contentWithHeader">
        <Header />
        <div class="body-content p-3">
          <div class="wrapper">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";
import Header from "./components/Header.vue";
export default {
  components: { SideBar, Header },
};
</script>
<style lang="scss">
@import url("./assets/style.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 100%;
  height: 100vh;
  background: #d8e1e8;
  color: #2c3e50;
  font-size: 13px;
  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
  }
  .contentWithHeader {
    flex: 1;
    flex-direction: column;
  }
  // .body-content {
  //   flex: 1;
  //   .wrapper {
  //     display: block;
  //     width: 100%;
  //     background: white;
  //   }
  // }
}
</style>
