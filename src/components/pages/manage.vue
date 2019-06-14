<template>
  <div class="wrapper">
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    
  },
  mounted() {
    
    
  },
  beforeRouteEnter(to,from,next){
    var isAdmin=localStorage.getItem('isAdmin');
    if(isAdmin=='0'){
      next()
    }else{
      window.open('http://localhost:8080','_self')
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-button{
    margin-left 30px;
    margin-top 20px;
}
.table{
    width 80%;
    margin 0 auto
}
</style>