<template>
  <div class="left">
      <router-link to='/index/manage' active-class='select'  v-if="isAdmin=='0'">管理员管理</router-link>
      <router-link to='/index/user' active-class='select' v-if="isAdmin!='2'">用户管理</router-link>
      <router-link to='/index/notice' active-class='select'>通知</router-link>
      <router-link to='/index/device' active-class='select'>设备管理</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
 data () {
    return {
      isAdmin:''
    };
  },
  watch: {},
  computed: {},
  methods: {
    
  },
  mounted() {
    
    this.isAdmin=localStorage.getItem('isAdmin')
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/styl/index.styl';
.left{
    width 150px
    background $color2
    padding 20px 10px
    a{
        color #333
        display block
        text-align center
        line-height 40px
        &:hover{
            background $color3
        }
    }
    .select{
        background $color3
    }
}
</style>