<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexChart", VueApexCharts);
export default {
  name: "ChartView1",
  props: ["data"],
  data() {
    return {
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        labels:
          this.data.items.length > 0
            ? this.data.items.map((r) => r.name)
            : [""],
        // title: {
        //   text: "Gradient Donut with custom Start-angle",
        // },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      // series: [44, 55, 41, 17, 15, 11],
      series:
        this.data.items.length > 0 ? this.data.items.map((r) => r.value) : [0],
    };
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
            <i
              class="fa-solid fa-arrows-rotate fa-2x mx-3 icon-blue cursor-pointer"
            ></i>
            <i class="fa-solid fa-grip-vertical fa-2x cursor-all-scroll"></i>
          </div>
        </div>
      </template>
      <div v-if="series.reduce((a, c) => a + c) != 0" id="chart">
        <apexChart
          type="donut"
          width="100%"
          height="300px"
          :options="chartOptions"
          :series="series"
        ></apexChart>
      </div>
      <div v-else class="d-flex gap">
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
    width: 19rem;
    height: 19rem;
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
  ::v-deep #chart {
    .apexcharts-legend {
      padding: 0;
      .apexcharts-legend-series {
        border-bottom: 1px solid lightgray !important;
        display: flex;
        align-items: center;
        padding: 0.5rem 2rem;
        margin: 0 !important;
        .apexcharts-legend-marker {
          margin-right: 1rem;
          padding: 0.75rem;
          position: relative;
        }
        .apexcharts-legend-marker::before {
          content: "";
          position: absolute;
          background: white;
          width: 1rem;
          height: 1rem;
          top: 4px;
          right: 4px;
          border-radius: 100%;
        }
        .apexcharts-legend-text {
          color: gray !important;
          text-transform: capitalize;
        }
      }
      .apexcharts-legend-series:hover {
        background: #edf2f6;
        .apexcharts-legend-marker::before {
          width: 0.8rem;
          height: 0.8rem;
          top: 5px;
          right: 5px;
        }
      }
    }
  }
}
</style>
