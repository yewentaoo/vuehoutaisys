<template>
  <div class="wrapper">
      <el-button type="primary" plain @click="toCreate(0)">新建</el-button>
      <div class="table">
           <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="账号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="prop"
      label="属性"
      width="180">
    </el-table-column>
    <el-table-column  label="时间">
          <template slot-scope="scope">
            <span>{{scope.row.time.substr(0,10)}}</span>
          </template>
        </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
         @click="toCreate(scope.row.id)">修改</el-button>
        <v-del :idx='scope.row.id' @del='del($event)'></v-del>
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
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    toCreate(n){
      this.$router.push('/index/manage/create/'+n)
    },
    del(id){
      fn.ajax(this,API.delManage,'get',{id:id},d=>{
         this.$message({
              message:d.data.info,
              type: 'success'
            });
            this.init()
      })
      // this.$http({
      //   url:API.delManage,
      //   params:{
      //     id:id
      //   }
      // }).then(d=>{
      //     if(d.data.code==-1){
      //     fn.errCallback(this,d)
      //      }  
      //     if(d.data.isok){
      //       this.$message({
      //         message:d.data.info,
      //         type: 'success'
      //       });
      //       this.init()
      //     }else{
      //        this.$message({
      //         message:d.data.info,
      //         type: 'warning'
      //       });
      //     }
      // })
    },
    init(){
      fn.ajax(this,API.findManage,'get',{},d=>{
        this.tableData=d.data.data
        
      })
      // this.$http({
      //   url:API.findManage
      // }).then(d=>{

      //   if(d.data.code==-1){
      //     fn.errCallback(this,d)
      //   }
      //   this.tableData=d.data.data
      // })
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