<template>
  <div class="main">
      <v-left></v-left>
      <v-right></v-right>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import vLeft from './left'
import vRight from './right'
export default {
  components: {
      vLeft,vRight
  },
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
.main{
    flex 1
    display flex
}
</style>