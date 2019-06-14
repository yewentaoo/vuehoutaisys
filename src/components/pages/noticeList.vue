<template>
  <div class="wrapper">
      <el-button type="primary" plain @click="toCreate(0)" v-if="isAdmin!='2'">新建</el-button>
      <div class="table">
           <el-table
    :data="tableData"
    style="width: 100%">
     <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="tit" label="题目" width="180"></el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">
            <span>{{scope.row.time.substr(0,10)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button  size="mini" type='primary' @click='toCreate(scope.row.id)'>查看</el-button>
            <v-del :idx='scope.row.id' @del='del($event)'
               v-if="isAdmin!='2'"
            ></v-del>
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
      tableData: [],
      isAdmin:''
    };
  },
  watch: {},
  computed: {},
  methods: {
     toCreate(n){
      this.$router.push('/index/notice/create/'+n)
    },
    init(){
       this.$http({
        url:API.findNews
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
        url:API.delNews,
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
    this.isAdmin=localStorage.getItem('isAdmin')
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