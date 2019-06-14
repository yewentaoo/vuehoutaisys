<template>
  <div class="right">
      <h2 class="h2">{{$route.name}}</h2>
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
    
    
  }
};
</script>
<style lang="stylus" scoped>
.right{
    flex 1
    background #fff
}
.h2{
  font-size 35px;
  color #409EFF;
  padding-left 30px;
  padding-top 30px;
}
</style>