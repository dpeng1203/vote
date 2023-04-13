<template>
  <div class="vote">
    <div class="list" v-for="item in list" :key="item.title">
      <div class="title">{{ item.title }}（{{ item.vote }}分）</div>
      <div
        class="sub-list"
        v-for="subItem in item.subList"
        :key="subItem.subtitle"
      >
        <div class="sub-title">
          {{ subItem.subtitle }}（{{ subItem.vote }}分）
        </div>
        <div class="desc">
          <p v-for="(i, index) in subItem.desc" :key="index">{{ i }}</p>
        </div>
        <div class="slider">
          <span>评分：</span>
          <van-slider
            v-model="subItem.value"
            :max="subItem.vote"
            bar-height="4px"
            active-color="#ee0a24"
          >
            <template #button>
              <div class="custom-button">{{ subItem.value }}</div>
            </template>
          </van-slider>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="primary" @click="handleSubmit">提交评分</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      list: [
        {
          title: "教学准备",
          vote: 30,
          subList: [
            {
              subtitle: "教学内容",
              vote: 20,
              desc: [
                "1.基于课程标准，切合学生实际，制定合适的教学目标",
                "2.知识容量适中；难度符合学业质量水平要求",
                "3.教学重难点突出，符合新课标育人导向",
                "4.地理图文信息等教学资源科学严谨",
                "5.能给学生提供问题解决的参考（如操作流程图、项目完成指引等），形成良好的支架设计"
              ],
              value: 0
            },
            {
              subtitle: "教师素养",
              vote: 10,
              desc: [
                "1.教态亲切大方，表述规范生动",
                "2.板书板图设计精巧",
                "3.恰当地进行德育渗透",
                "4.能充分利用微课、希沃等现代信息资源及工具，体现信息技术赋能"
              ],
              value: 0
            }
          ]
        },
        {
          title: "教学成效",
          vote: 45,
          subList: [
            {
              subtitle: "学生表现性技能",
              vote: 20,
              desc: [
                "1.学生能进行文本分析，分析主题、中心思想、主旨等",
                "2.学生作品展示过程，能精准表达、使用多媒体沟通、口头汇报",
                "3.学生参与调研，能提出或设计问题，规划并展开调查，提出假设",
                "4.学生表现出分析和整合技能"
              ],
              value: 0
            },
            {
              subtitle: "课堂主体",
              vote: 5,
              desc: [
                "1.学生表达、探究等学生深度学习时间约占40%以上",
                "2.学习任务以表现性任务为主"
              ],
              value: 0
            },
            {
              subtitle: "素养达成",
              vote: 20,
              desc: [
                "1.区域认知：可对地理事象进行时空描述",
                "2.综合思维：能结合材料进行事象演绎、分析、归纳",
                "3.地理实践力：在户外考察、社会调查、模拟实验等",
                "4.人地协调观：能够正确认识地理环境与人类活动的关系"
              ],
              value: 0
            }
          ]
        },
        {
          title: "教学氛围",
          vote: 5,
          subList: [
            {
              subtitle: "教学氛围",
              vote: 5,
              desc: [
                "1.情境创设：创设合理、生动的地理教学情境，激发学生探究兴趣",
                "2.学生体验：课堂气氛和谐轻松，学生自然出现笑声等情绪投入表现"
              ],
              value: 0
            }
          ]
        },
        {
          title: "教育评价",
          vote: 20,
          subList: [
            {
              subtitle: "评价方式",
              vote: 5,
              desc: ["以表现性任务为主，让学生思维可视化可评价"],
              value: 0
            },
            {
              subtitle: "评价工具",
              vote: 5,
              desc: [
                "1.采取师生互评、生生互评、自评等多元化评价方式",
                "2.对任务呈现评价量表，利于自评与他评",
                "3.评价重视增值性评价，提升学生学习成就感"
              ],
              value: 0
            },
            {
              subtitle: "评价反馈",
              vote: 10,
              desc: [
                "针对学生表现，教师进行完整、有层次的反馈，进行有效教学补救，实现“教—学—评—改”一体化"
              ],
              value: 0
            }
          ]
        },
        {
          title: "附加分",
          vote: 10,
          subList: [
            {
              subtitle: "教学结构模式创新",
              vote: 10,
              desc: [
                "对教学结构或模式进行创新（如大单元重构、教材多版本整合、项目式、跨学科等），丰富学生学习体验"
              ],
              value: 0
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      let flag = true;
      this.list.forEach(ele => {
        ele.subList.forEach(e => {
          if (e.value == 0) {
            flag = false;
          }
        });
      });
      if (!flag) {
        this.$toast("还有未评分项");
        return;
      }
      Dialog.confirm({
        title: "提示",
        message: "确定全部评分完毕，并提交？"
      })
        .then(() => {
          // on confirm
          let arr1 = [];
          let arrvalue1 = [];
          let arr2 = [];
          let arrvalue2 = [];
          this.list.forEach(ele => {
            arr1.push({
              name: ele.title,
              max: ele.vote
            });
            let total = 0;
            ele.subList.forEach(i => {
              total += i.value;
              arr2.push({
                max: i.vote,
                name: i.subtitle
              });
              arrvalue2.push(i.value);
            });
            arrvalue1.push(total);
          });
          // let arr = this.list.map(ele => {
          //   let param = {
          //     max: ele.vote,
          //     value: 0,
          //     name: ele.title,
          //     sub: []
          //   };
          //   ele.subList.forEach(i => {
          //     param.value += i.value;
          //     param.sub.push({
          //       vote: i.vote,
          //       value: i.value,
          //       title: i.subtitle
          //     });
          //   });
          //   return param;
          // });
          console.log(arr1);
          console.log(arr2);
          console.log(arrvalue1);
          console.log(arrvalue2);
          localStorage.setItem("arr1", JSON.stringify(arr1));
          localStorage.setItem("arr2", JSON.stringify(arr2));
          localStorage.setItem("arrvalue1", JSON.stringify(arrvalue1));
          localStorage.setItem("arrvalue2", JSON.stringify(arrvalue2));
          this.$router.push("/echart");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.list {
  background: #fff;
  padding: 0 30 * @s 30 * @s;
  border-radius: 20 * @s;
  margin-top: 30 * @s;
  .title {
    height: 100 * @s;
    line-height: 100 * @s;
    font-weight: bold;
    font-size: 32 * @s;
  }
  .sub-list {
    padding-top: 30 * @s;
    padding-left: 30 * @s;
    margin-bottom: 30 * @s;
    border-top: 1px solid #ccc;
    .sub-title {
      font-size: 32 * @s;
      // height: 80 * @s;
      // line-height: 80 * @s;
      margin-bottom: 30 * @s;
      font-weight: bold;
    }
    .desc {
      color: #333;
      font-size: 28 * @s;
    }
    .slider {
      margin: 30 * @s 0;
      padding-right: 20 * @s;
      display: flex;
      align-items: center;
      span {
        flex-shrink: 0;
        margin-right: 20 * @s;
        font-weight: bold;
        font-size: 32 * @s;
      }
    }
  }
}
.vote {
  padding: 0 30 * @s;
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
.btn {
  padding: 100 * @s 0;
  text-align: center;
}
</style>
