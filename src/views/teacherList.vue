<template>
  <div class="setting">
    <div class="title">
      <div class="name">讲师列表</div>
    </div>
    <van-empty description="暂无讲师" v-if="list.length == 0" />
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <span>{{ index + 1 }}、</span>
        <span class="name" @click="handleVote">{{ item }}</span>
      </div>
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
    handleVote() {
      this.$router.push("/vote");
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
</style>
