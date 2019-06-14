<template>
  <div class="wrapper">
      <h2>欢迎使用<Br />红牛后台管理系统</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      
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
.wrapper{
    text-align center;
    height 100%;
    margin-top -30px;
    background url(../../../static/img/39.jpg) no-repeat;
    background-size 40%
    background-position 0 80%
    overflow hidden
    h2{
        margin-top 150px;
        font-size 60px;
        line-height 100px;
        font-weight bolder;
        color #FF0000
    }
}
</style>