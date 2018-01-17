<style scoped lang="scss" type="text/scss">
  @import "~utils";

</style>
<template>
  <div>
    <div class="padding-main main-bg overflow-y-scroll">
      <app-header navId="blog"></app-header>
      <div class="main float-left width-100 margin-top">
        <Card shadow class="margin-bottom" v-for="item in blogList" :key="item.id">
          <h2 slot="title" class="weight-normal">
            <router-link :to="{ path: `/blog/view-${item.id}` }">
              {{ item.title }}
            </router-link>
          </h2>
          <div>
            <p>{{ item.content }}</p>
          </div>
        </Card>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/header'
  import AppFooter from '@/components/footer'

  export default {
    name: 'blog-list',
    components: {
      AppHeader,
      AppFooter
    },
    data () {
      return {
        blogList: [
          {
            id: 1,
            title: '首次发布博客',
            content: '耽误了那么久，终于可以开通博客了，虽然页面比较丑，但是内容会慢慢丰富起来的！'
          }]
      }
    }
  }
</script>

