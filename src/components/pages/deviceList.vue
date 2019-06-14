<template>
  <div class="wrapper">
      <el-button type="primary" plain @click="toCreate(0)"  v-if="isAdmin!='2'">新建</el-button>
      <div class="table">
           <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="ip" label="ip" width="180"></el-table-column>
        <el-table-column prop="door" label="机房" width="90"></el-table-column>
         <el-table-column  label="状态" width="90">
           <template  slot-scope="scope">
             <span>{{scope.row.status=="1"?"空闲":"已出售"}}</span>
           </template>
         </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" v-if="isAdmin!='2'" @click="toCreate(scope.row.id)">修改</el-button>
            <el-button size="mini" type="primary"
              v-if="isAdmin=='2'"
              :disabled="scope.row.status=='0'"
             @click="shop(scope.row.id)">购买</el-button>
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
import fn from '../../common/js/fn';
export default {
  components: {},
  props: [],
  data() {
    return {
      isAdmin:'',
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    toCreate(n) {
      this.$router.push("/index/device/create/"+n);
    },
     init() {
      this.$http({
        url: API.findDevice
      }).then(d => {
        console.log(d)
        if (d.data.code == -1) {
          fn.errCallback(this, d);
        }
        this.tableData = d.data.data;
      });
    },
    del(id){
      this.$http({
        url:API.delDevice,
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
    },
    shop(id){
      this.$http({
        url:API.updateDevice,
        params:{
          id:id,
          status:'0'
        }
      }).then(d=>{
        if(d.data.code==-1){
          fn.errCallback(this,d)
        }
        if(d.data.isok){
          this.$message({
              message:"购买成功",
              type: 'success'
            });
            this.init()
        }else{
          this.$message({
              message:"购买失败，请重试",
              type: 'warning'
            });
        }
      })
    }
  },
  mounted() {
    this.init();
    this.isAdmin=localStorage.getItem('isAdmin')
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