<template>
  <div class="wrapper">
      <el-button type="primary" plain @click="toCreate(0)">新建</el-button>
      <div class="table">
           <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="name" label="账号" width="180"></el-table-column>
        <el-table-column prop="sex" label="性别" width="180"></el-table-column>
        <el-table-column prop="idx" label="身份证号"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
         @click="toCreate(scope.row.id)">修改</el-button>
        <v-del :idx="scope.row.id" @del='del($event)'></v-del>
      </template>
    </el-table-column>
  </el-table>
      </div>
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
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    };
  },
  watch: {},
  computed: {},
  methods: {
    toCreate(id){
      this.$router.push('/index/user/create/'+id)
    },
    init(){
      this.$http({
        url:API.findUser
      }).then(d=>{
        console.log(d)
        if(d.data.code==-1){
          fn.errCallback(this,d)
        }
        this.tableData=d.data.data
      })
    },
    del(id){
      this.$http({
        url:API.delUser,
        params:{
          id:id
        }
      }).then(d=>{
        if(d.data.code==-1){
          fn.errCallback(this,d)
        }
          if(d.data.isok){
            this.$message({
              message:d.data.info,
              type: 'success'
            });
            this.init()
          }else{
             this.$message({
              message:d.data.info,
              type: 'warning'
            });
          }
      })
    }
  },
  mounted() {
     this.init()
  }
};
</script>
<style lang="stylus" scoped>
.el-button{
    margin-left 30px;
    margin-top 20px;
}
.table{
    width 90%;
    margin 0 auto
}
</style>