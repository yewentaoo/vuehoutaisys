<template>
  <div class="wrapper">
     <v-header></v-header>
     <v-main></v-main>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import vHeader from '../view/header'
import vMain from '../view/main'
export default {
  components: {
      vHeader,vMain
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
.wrapper{
    width 100vw
    height 100vh
    display flex
    flex-direction column
}
</style>