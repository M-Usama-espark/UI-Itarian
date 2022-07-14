<script>
export default {
  name: "ChartView",
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<template>
  <div class="chart">
    <b-card header-tag="header">
      <template #header>
        <div
          class="d-flex justify-content-between align-items-center text-muted text-capitalize"
        >
          <span class="title">{{ data.title }} </span>
          <div>
            <!-- <b-icon
              icon="arrow-repeat"
              class="icon-blue mx-4 cursor-pointer"
              scale="2"
            ></b-icon>
            <b-icon
              icon="grid-fill"
              class="cursor-all-scroll"
              scale="2"
            ></b-icon> -->
            <i
              class="fa-solid fa-arrows-rotate fa-2x mx-3 icon-blue cursor-pointer"
            ></i>
            <i class="fa-solid fa-grip-vertical fa-2x cursor-all-scroll"></i>
          </div>
        </div>
      </template>
      <div class="d-flex gap">
        <div class="demo-chart">No Data</div>
        <div class="chart-items">
          <div
            v-for="(r, i) in data.items"
            :key="i"
            class="chart-item text-blue"
          >
            <div class="d-flex align-items-center">
              <div :class="'donut donut-' + (i + 1)"></div>
              <label class="text-muted text-capitalize">{{ r.name }}</label>
            </div>
            <span>0</span>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>
<style lang="scss" scoped>
.chart {
  .title {
    font-size: 18px;
    font-weight: 600;
    padding-left: 1rem;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-all-scroll {
    cursor: all-scroll;
  }
  .fa-2x {
    font-size: 1.2rem;
  }
  .demo-chart {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #edf2f6;
    border: 5rem solid #cbcbcb;
    border-radius: 100%;
    width: 25rem;
    height: 25rem;
    font-size: 18px;
  }
  .gap {
    gap: 1rem;
  }
  .chart-items {
    flex: 1;
    .chart-item {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid lightgray;
      padding: 1rem 1.5rem;
      .donut {
        border: 3px solid black;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        margin-right: 1rem;
      }
      .donut-1 {
        border-color: rgb(42, 202, 42);
      }
      .donut-2 {
        border-color: rgb(55, 55, 155);
      }
      .donut-3 {
        border-color: skyblue;
      }
      .donut-4 {
        border-color: slateblue;
      }
      .donut-5 {
        border-color: purple;
      }
    }
    .chart-item:hover {
      background: #edf2f6;
      .donut {
        border-width: 5px;
      }
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
