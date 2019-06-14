<template>
  <div class="wrapper">
     <el-form ref="form" label-width="80px">
        <el-form-item label="账号">
             <el-input v-model="user.name" :disabled="id!='0'"></el-input>
        </el-form-item>
        <el-form-item label="密码">
             <el-input v-model="user.pass" type="password" :disabled="id!='0'"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
             <el-input v-model="confirm" type="password" :disabled="id!='0'"></el-input>
        </el-form-item>
        <el-form-item label="属性">
             <el-input v-model="user.prop"></el-input>
        </el-form-item>
        <el-form-item label="时间">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;" v-model="user.time"></el-date-picker>
        </el-form-item>
        <div class="center">
            <el-button type="primary" plain @click="add()" v-if="id=='0'">新建</el-button>
            <el-button type="primary" plain @click="update()" v-if="id!=='0'">修改</el-button>
            <v-back></v-back>
        </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import fn from "../../common/js/fn";
export default {
  components: {},
  props: [],
  data() {
    return{
      id:'',
      user:{
        name:'',
        pass:'',
        prop:'',
        time:''
      },
      confirm: ""
    }
  },
  watch: {},
  computed: {},
  methods: {
    add() {
      if (this.user.pass != this.confirm) {
        this.$message({
          message: "密码和确认密码不一致",
          type: "warning"
        });
      } else {
        this.$http({
          url: API.addManage,
          params: this.user
          
        }).then(d => {
          console.log(d);
          
          if (d.data.code == -1) {
            fn.errCallback(this, d);
          }
          
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.replace("/index/manage");
          } else {
            this.$message({
              message: d.data.info,
              type: "warning"
            });
          }
        });
      }
    },
    update() {
      delete this.user._id;
      this.$http({
        url: API.updateManage,
        params: this.user
      }).then(d => {
if(d.data.code==-1){
          fn.errCallback(this,d)
           } 
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.replace("/index/manage");
        } else {
          this.$message({
            message: d.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    
    if (this.id == "0") {
      //新建
    } else {
      //修改
      this.$http({
        url: API.findManage,
        params: {
          id: this.id
        }
      }).then(d => {
        this.user = d.data.data[0];
        this.confirm = this.user.pass;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper{
    width 90%
    margin 20px auto
}
.center{
    text-align center
}
</style>