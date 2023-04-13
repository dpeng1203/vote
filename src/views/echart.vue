<template>
  <div class="echart">
    <div id="myChart1" class="myChart"></div>
    <div id="myChart2" class="myChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // var echarts = require("echarts"); "#6dcd62"
      let myChart1 = echarts.init(document.getElementById("myChart1"));
      let myChart2 = echarts.init(document.getElementById("myChart2"));
      let arr1 = JSON.parse(localStorage.getItem("arr1"));
      let arr2 = JSON.parse(localStorage.getItem("arr2"));
      let arrvalue1 = JSON.parse(localStorage.getItem("arrvalue1"));
      let arrvalue2 = JSON.parse(localStorage.getItem("arrvalue2"));
      console.log(arr2, arrvalue2);
      const option1 = {
        color: ["#1b7cff"],
        title: {
          text: "维度评分分析",
          textStyle: {
            color: "#2E3A55",
            fontWeight: 500,
            fontSize: "15px"
          }
        },
        tooltip: {
          show: true
        },
        legend: {
          itemHeight: 8,
          itemWidth: 8,
          data: ["维度评分占比"],
          x: "right",
          textStyle: {
            fontSize: 10,
            color: "#B2BACC" // 图例的文字颜色
          }
        },
        radar: {
          // shape: 'circle',
          center: ["50%", "59%"], //位置
          name: {
            textStyle: {
              color: "#6A7284",
              fontSize: "12px"
            }
          },
          indicator: arr1
        },
        series: [
          {
            type: "radar",
            symbolSize: 6, // 雷达区域节点的大小
            // 雷达区域的背景颜色的样式
            areaStyle: {
              opacity: 0.2
            },
            data: [
              {
                value: arrvalue1,
                name: "维度评分占比"
              }
            ]
          }
        ]
      };
      const option2 = {
        color: ["#6dcd62"],
        title: {
          text: "指标评分分析",
          textStyle: {
            color: "#2E3A55",
            fontWeight: 500,
            fontSize: "15px"
          }
        },
        tooltip: {
          show: true
        },
        legend: {
          itemHeight: 8,
          itemWidth: 8,
          data: ["指标评分占比"],
          x: "right",
          textStyle: {
            fontSize: 10,
            color: "#B2BACC" // 图例的文字颜色
          }
        },
        radar: {
          // shape: 'circle',
          center: ["50%", "59%"], //位置
          name: {
            textStyle: {
              color: "#6A7284",
              fontSize: "12px"
            }
          },
          indicator: arr2
        },
        series: [
          {
            type: "radar",
            symbolSize: 6, // 雷达区域节点的大小
            // 雷达区域的背景颜色的样式
            areaStyle: {
              opacity: 0.2
            },
            data: [
              {
                value: arrvalue2,
                name: "指标评分占比"
              }
            ]
          }
        ]
      };
      myChart1.setOption(option1);
      myChart2.setOption(option2);
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.echart {
  background: #fff;
  padding: 30 * @s;
}
.myChart {
  width: 90vw;
  height: 400px;
}
</style>
