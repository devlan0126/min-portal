<template>
  <div class="container">
    <div class="search">
      <el-input size="mini" placeholder="请输入搜索内容" v-model="search">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="create">
      <el-button type="primary" size="mini" @click="create">新建</el-button>
      <el-button type="primary" size="mini" @click="hrefTest"
        >跳转测试</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search-Row',
  props: {
    create: Function,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    hrefTest() {
      this.$router.push('chart');
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 3px;
  box-sizing: border-box;
  padding: 0 20px;
}
.search {
  width: 230px;
}
</style>
