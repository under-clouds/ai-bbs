<template>
  <div id="post">
    <div id="post-header">
      <p id="post-title">2017，我们来聊聊 Node.js</p>
      <p id="post-attr"> • 发布于 2 个月前 • 作者 i5ting • 23816 次浏览 • 最后一次编辑是 5 天前 • 来自 分享</p>
    </div>
    <div id="post-content" class="markdown-body" v-html="content"></div>
    <div id="reply"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: null,
        id: this.$route.params.id
      }
    },
    created () {
      this.$http.get('https://cnodejs.org/api/v1/topic/' + this.id)
        .then(res => {
          this.content = res.data.data.content
        })
        .catch(function (err) {
          alert(err)
        })
    }
  }
</script>

<style>
  #post {
    padding: 4px;
    background: #fff;
    border-radius: 3px 3px 0 0;
    display: inline-block;
    width: calc(98% - 300px - 4px);
    margin-top: 4px;
  }
  #post-header {
    padding: 16px;
  }
  #post-title {
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: bold;
    line-height: 130%;
  }
  #post-attr {
    font-size: 12px;
    color: #838383
  }
  #post-content {
    border-top: 1px solid #e5e5e5;
  }
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 16px;
  }
  .markdown-body ul {
    list-style-type: disc;
  }
</style>
