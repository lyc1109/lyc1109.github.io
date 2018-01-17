<style scoped lang="scss" type="text/scss">
  @import "~utils";

</style>
<template>
  <!--<div>-->
    <div class="footer text-center float-left width-100 padding-bottom">
      <p>版权所有@lyc1109</p>
      <p>此网站已运行了{{ times }}</p>
    </div>
  <!--</div>-->
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        times: ''
      }
    },
    created () {
      this.timeDiff()
    },
    methods: {
      // 时间倒计时
      timeDiff () {
        setInterval(() => {
          let starTime = this.$moment(1516085006000)
          let endTime = this.$moment()
          let diffs = this.$moment.duration(endTime.diff(starTime))
          this.times = `${parseInt(diffs.asYears(), 10)}年
          ${parseInt(diffs.asMonths(), 10)}月
          ${parseInt(diffs.asDays(), 10)}天
          ${parseInt(diffs.asHours(), 10)}时
          ${parseInt(diffs.asMinutes()) % 60}分
          ${parseInt(diffs.asSeconds()) % 60}秒`
        }, 1000)
      }
    }
  }
</script>
