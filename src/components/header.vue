<style scoped lang="scss" type="text/scss">
  @import "~utils";

  .header{
    width: $value-100;
  }
  .my-logo{
    img{
      width: 80px;
    }
  }
  .nav {
    background: rgba(#fff, .7);
    @include border-radius(30px);

    .ivu-menu-item,.ivu-menu-item-active {
      border-bottom: 0 none !important;
    }
    &.ivu-menu-horizontal {
      height: 40px!important;
      line-height: 40px!important;

      .ivu-menu-item:hover{
       border-bottom: 0 none;
      }
      &.ivu-menu-light:after {
        background: none !important;
      }
    }
  }
</style>
<template>
  <div class="margin-top float-left header">
    <div class="my-logo float-left">
      <img src="/static/images/logo.png" style="z-index: 2;">
    </div>
    <div class="float-right">
      <Menu mode="horizontal" :active-name="headerId" class="nav">
        <MenuItem name="home" @click.native="$router.push('/')">首页</MenuItem>
        <MenuItem name="blog" @click.native="$router.push('/blog')">博客</MenuItem>
        <MenuItem name="time" @click.native="$router.push('/time')">时光轴</MenuItem>
        <MenuItem name="about" @click.native="$router.push('/about')">关于我</MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'app-header',
      props: ['navId'],
      data () {
        return {
          headerId: this.navId
        }
      }
    }
</script>


