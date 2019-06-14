<template>
  <div class="wrapper">
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  watch: {},
  computed: {},
  methods: {
    
  },
  mounted() {
    
    
  }
};
</script>
<style lang="stylus" scoped>
.el-button{
    margin-left 30px;
    margin-top 20px;
}
.table{
    width 80%;
    margin 0 auto
}
</style>