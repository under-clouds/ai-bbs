<template>
  <div id="post">
    <div id="post-header">
      <p id="post-title">{{ data.title }}</p>
      <p id="post-attr"> • {{ createdDate }} • 作者 {{ data.author.loginname }} • {{ data.visit_count }} 次浏览 • 最后一次编辑是 {{ updatedDate }} </p>
    </div>
    <div id="post-content" class="markdown-body" v-html="data.content"></div>
    <div id="reply">
      <div id="reply-header">
        <p> {{ data.reply_count }} 回复</p>
      </div>
      <div id="reply-list">
        <div class="reply" v-for="item,index in data.replies">
          <div class="detail">
            <img :src="item.author.avatar_url" alt="" width="30px">
            <p class="author-name"> {{ item.author.loginname }} </p>
            <p class="detail-attr"> {{ index+1 }}楼 • {{ item.create_at | replyDate }}</p>
          </div>
          <div class="reply-content" v-html="item.content">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '../util/tools'
  export default {
    data () {
      return {
        data: null,
        id: this.$route.params.id
      }
    },
    created () {
      this.$http.get('https://cnodejs.org/api/v1/topic/' + this.id)
        .then(res => {
          this.data = res.data.data
        })
        .catch(function (err) {
          alert(err)
        })
    },
    computed: {
      createdDate () {
        return utils.formatDate(this.data.create_at)
      },
      updatedDate () {
        return utils.formatDate(this.data.last_reply_at)
      }
    },
    filters: {
      replyDate (time) {
        return utils.formatDate(time)
      }
    }
  }
</script>

<style>
  #post {
    padding: 4px;
    border-radius: 3px 3px 0 0;
    display: inline-block;
    width: calc(98% - 300px - 4px);
    margin-top: 4px;
  }
  #post-header {
    background: #fff;
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
    background: #fff;
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
  #reply {
    margin-top: 16px;
    background: #fff;
    border-radius: 3px;
  }
  #reply-header {
    padding: 10px;
    background: #eee;
  }
  .reply {
    padding: 10px;
  }
  .detail img {
    float: left;
  }
  .author-name {
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
    color: #666;
    font-weight: bold;
  }
  .reply-content p {
    margin-top: 8px;
    padding-left: 50px;
    line-height: 24px;
  }
  .detail-attr {
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
    color: #08a;
  }
</style>
