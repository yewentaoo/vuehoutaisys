<template>
  <div class="wrapper">
     <el-form ref="form" label-width="80px">
        <el-form-item label="账号">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="confirm"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="user.sex" label="男">男</el-radio>
        <el-radio v-model="user.sex" label="女">女</el-radio>
      </el-form-item>

      <el-form-item label="身份证号">
        <el-input v-model="user.idx" :disabled="id!='0'"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="user.des"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker type="date" v-model="user.time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
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
    return {
      id:'',
      user: {
        name: "",
        pass: "",
        tel: "",
        email: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
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
          url: API.addUser,
          params: this.user
        }).then(d => {
          if (d.data.code == -1) {
            fn.errCallback(this, d);
          }
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.replace("/index/user");
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
        url: API.updateUser,
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
          this.$router.replace("/index/user");
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
    if (this.id == "0") {
      //新建
    } else {
       this.$http({
        url: API.findUser,
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