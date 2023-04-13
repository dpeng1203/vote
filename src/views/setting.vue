<template>
  <div class="setting">
    <div class="title">
      <div class="name">讲师列表</div>
      <span @click="handleSave" class="save">保存</span>
    </div>
    <van-empty description="暂无讲师" v-if="list.length == 0" />
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <span>{{ index + 1 }}、</span>
        <span class="name">{{ item }}</span>
        <span class="del" @click="handleDel(index)">删除</span>
      </div>
    </div>
    <div class="btn" v-if="list.length > 0">
      <van-button type="primary" @click="handleVote">生成评分二维码</van-button>
    </div>
    <div class="add">
      <van-field v-model="name" center clearable placeholder="请输入讲师姓名">
        <template #button>
          <van-button size="small" type="primary" @click="handleAdd"
            >添加</van-button
          >
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      list: []
    };
  },
  mounted() {
    if (localStorage.getItem("teacherList")) {
      this.list = JSON.parse(localStorage.getItem("teacherList")) || [];
    }
  },
  methods: {
    handleAdd() {
      if (this.list.indexOf(this.name) == -1) {
        this.list.push(this.name);
        this.name = "";
      } else {
        this.$toast(`${this.name}已添加`);
      }
    },
    handleDel(n) {
      this.list.splice(n, 1);
    },
    handleSave() {
      localStorage.setItem("teacherList", JSON.stringify(this.list));
      this.$toast("保存成功");
    },
    handleVote() {
      localStorage.setItem("teacherList", JSON.stringify(this.list));
      this.$router.push("/qrCode");
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;

.title {
  font-size: 32 * @s;
  font-weight: bold;
  height: 120 * @s;
  padding: 0 40 * @s;
  background: #fff;
  display: flex;
  align-items: center;
  .name {
    flex: 1;
  }
  .save {
    font-weight: normal;
  }
}
.list {
  padding: 0 40 * @s;
  background: #fff;
  .item {
    height: 100 * @s;
    font-size: 32 * @s;
    display: flex;
    align-items: center;
    border-top: 1px solid #f2f2f2;
    .name {
      flex: 1;
    }
    .del {
      color: red;
    }
  }
}
.add {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.btn {
  margin-top: 150 * @s;
  text-align: center;
}
</style>
