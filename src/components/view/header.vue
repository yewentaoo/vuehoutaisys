<template>
  <div class="header">
        <el-button @click='logout()'>退出登录</el-button>
      <span>欢迎,{{name}}</span>

  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      name:''
    };
  },
  watch: {},
  computed: {},
  methods: {
    logout(){
      this.$http({
        url:API.exit
      }).then(d=>{
        this.$message({
            message: d.data.info,
            type: "success"
          });
        this.$router.replace('/login')
        console.log(d)
      })
    }
  },
  mounted() {
     this.name=localStorage.getItem('username')
    
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/styl/index.styl';
.header{
    height  80px
    background-color $color3
    span,.el-button{
      float right 
    }
    span{
      line-height 80px;
      margin-right 30px;
    }
    .el-button{
      margin-top 20px;
      margin-right 30px
    }
}
</style>