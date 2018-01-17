<style scoped lang="scss" type="text/scss">
  @import "~utils";
</style>
<template>
  <div class="padding-main main-bg overflow-y-scroll">
    <app-header navId="blog"></app-header>
    <div class="float-left width-100 bg-white padding">
      <h1>首次发布博客</h1>
      <div class="info">
        <time class="font-light">2018-01-17 15:20:46</time>
      </div>
      <div class="margin-top">
        <p class="font-m">耽误了那么久，终于可以开通博客了，虽然页面比较丑，但是内容会慢慢丰富起来的！</p>
      </div>
    </div>
    <app-footer class="margin-top"></app-footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/header'
  import AppFooter from '@/components/footer'

  export default {
    name: 'view-1',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

