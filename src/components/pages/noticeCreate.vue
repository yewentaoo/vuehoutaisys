<template>
  <div class="wrapper">
     <el-form ref="form" label-width="80px">
        <el-form-item label="题目">
             <el-input v-model='user.tit' :disabled="isAdmin=='2'"></el-input>
        </el-form-item>
        <el-form-item label="内容">
             <el-input  v-model='user.con' :disabled="isAdmin=='2'"></el-input>
        </el-form-item>

        <el-form-item label="时间">
            <el-date-picker :disabled="isAdmin=='2'" type="date" placeholder="选择日期" style="width: 100%;" v-model='user.time'></el-date-picker>
        </el-form-item>
        <div class="center">
             <el-button type="primary" @click="add()" v-if="id=='0'">发布</el-button>
      <el-button type="primary" @click="update()" v-if="id!='0'"
        :disabled="isAdmin=='2'"
      >修改</el-button>
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
      isAdmin:'',
      user:{
        tit:'',
        con:'',
        time:''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    add() {
        this.$http({
          url: API.addNews,
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
            this.$router.replace("/index/notice");
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
        url: API.updateNews,
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
          this.$router.replace("/index/notice");
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
     this.isAdmin=localStorage.getItem('isAdmin')
     this.id = this.$route.params.id;
     if (this.id == "0") {
      //新建
    } else {
      //修改
       this.$http({
        url: API.findNews,
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