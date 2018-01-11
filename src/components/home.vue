<style scoped lang="scss" type="text/scss">
  @import "~utils";

  #home-bg{
    width: 100%;
    height: 100%;
    position: fixed;
    background: url("/static/images/home-bg.jpg") no-repeat;
    background-size: cover;
  }
  .home-main{
    z-index: 2;
    position: relative;
    height: 100%;
    background-color: rgba(#520000,.9);

    &>div{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      text-align: center;

      img{
        width: 100px;
        height: 100px;
        @include border-radius(50%);
        @include border(3px,#fff);
      }
      .blog-name{
        font-weight: normal;
        color: $white;
      }
      .btn{
        border-radius: 20px;
        @include border(1px,$white);
        color: $white;
        background: none;
      }
    }
  }
</style>
<template>
  <div id="home-bg">
    <div class="home-main">
      <div>
          <img src="/static/images/avatar.jpg">
          <h1 class="text-center blog-name">
            <span>LYC</span>
          </h1>
          <button type="button" class="btn btn-primary weight-normal">My Blog</button>
      </div>
    </div>
    <!--<div class="home-bg"></div>-->
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {}
    }
  }
</script>

