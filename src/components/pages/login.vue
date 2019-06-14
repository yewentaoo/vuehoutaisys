<template>
  <div class="wrapper">
      <div class="login">
        <el-row>
           <el-col :span="24"><h2>登录</h2></el-col>
        </el-row>
        <el-row>
            <el-col :span="9"><p>请选择角色</p></el-col>
            <el-col :span="12"><el-select v-model="user.type" placeholder="请选择">
    <el-option
      v-for="item in juese"
      :key="item.value"
      :label="item.name"
      :value="item.value">
    </el-option>
  </el-select></el-col>
        </el-row>
        <el-row>
            <el-col :span="9"><p>用户名</p></el-col>
            <el-col :span="12"><el-input v-model="user.name" placeholder="请输入用户名"></el-input></el-col>
        </el-row>
        <el-row>
            <el-col :span="9"><p>密码</p></el-col>
            <el-col :span="12"><el-input v-model="user.pass" placeholder="请输入密码"></el-input></el-col>
        </el-row>
        <el-row class="button">
           <el-col :span="24"><el-button type="success" plain @click='login()'>登录</el-button></el-col>
        </el-row>

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      user:{
        type:'',
        name:'',
        pass:''
      },
       juese:[
        {
          name:'超级管理员',
          value:'0'
        },
        {
          name:'普通管理员',
          value:'1'
        },
        {
          name:'用户',
          value:'2'
        }
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    login(){
      var user=this.$qs.stringify(this.user);
      this.$http({
        url:API.login,
        method:'post',
        data:user
      }).then(d=>{
        console.log(d);
        if(d.data.isok){
          this.$message({
            message: d.data.info,
            type: 'success'
          });
          localStorage.setItem('username',this.user.name)
          localStorage.setItem('isAdmin',d.data.isAdmin)
          this.$router.replace('/index')
        }
        else{
          this.$message({
            message: d.data.info,
            type: 'warning'
          });
        }
      })
      
        // this.$router.replace('/index')
    }
  },
  mounted() {
    
    
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/styl/index.styl';
.wrapper{
    background url(../../../static/img/1.jpg)
    background-size cover
    height 100vh
}
.login{
  border-radius 20px
  width 400px;
  height 250px;
  padding-top 50px;
  background $color;
  position absolute;
  top 50%;
  left 50%;
  margin-top -150px;
  margin-left -200px;
  h2{
    text-align center
    font-size 30px
    font-weight bolder
    margin-top -34px
  }
  div{
    p{
      line-height 40px
      text-align center
    }
  }
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
 .button{
     text-align center
 }
</style>