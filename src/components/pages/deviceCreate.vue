<template>
  <div class="wrapper">
     <el-form ref="form" label-width="80px">
        <el-form-item label="ip">
        <el-input v-model="user.ip"></el-input>
      </el-form-item>
      <el-form-item label="机房">
        <el-input v-model="user.door"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="user.num"></el-input>
      </el-form-item>
      <el-form-item label="宽带">
        <el-input v-model="user.width"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio v-model="user.status" label="1">空闲</el-radio>
        <el-radio v-model="user.status" label="0">已出售</el-radio>
      </el-form-item>
        <div class="center">
             <el-button type="primary" @click="add()" v-if="id=='0'">新建</el-button>
      <el-button type="primary" @click="update()" v-if="id!='0'">修改</el-button>
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
      id: "",
      user: {
        ip: "",
        num: "",
        width: "",
        door: "",
        status: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
     add() {
     
        this.$http({
          url: API.addDevice,
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
            this.$router.replace("/index/device");
          } else {
            this.$message({
              message: d.data.info,
              type: "warning"
            });
          }
        });
    },
    update() {
      delete this.user._id;
      this.$http({
        url: API.updateDevice,
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
          this.$router.replace("/index/device");
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
    } else {
      //修改
       this.$http({
        url: API.findDevice,
        params: {
          id: this.id
        }
      }).then(d => {
        this.user = d.data.data[0];
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