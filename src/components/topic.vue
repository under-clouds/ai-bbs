<template>
  <div id="topic">
    <div id="content">
      <div id="tab">
        <ul>
          <li><router-link to="/">全部</router-link></li>
          <li><router-link to="/">精华</router-link></li>
          <li><router-link to="/">问答</router-link></li>
          <li><router-link to="/">分享</router-link></li>
        </ul>
      </div>
      <div id="post-list">
        <div class="post" v-for="(item,index) in topicsList">
          <img :src="item.author.avatar_url" alt="" width="30px" height="30px" class="avatar">
          <span class="post-tab">{{ item.tab }}</span>
          <router-link :to="{name:'post',params:{id:item.id}}">{{item.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    created () {
      if (this.topicsList.length === 0) {
        this.$store.dispatch('getTopicList')
      }
    },
    computed: {
      ...mapGetters({
        topicsList: 'getTopicsList'
      })
    }
  }
</script>

<style>
  #topic {
    display: inline-block;
    width:calc(98% - 300px - 4px);
    padding:4px;
  }
  #tab {
    background: #f6f6f6;
    -webkit-border-radius: 3px 3px 0 0;
    -moz-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
  }
  #tab > ul {
    padding:8px;
  }
  #tab > ul li {
    display: inline-block;
    line-height:20px;
    margin-left: 16px;
  }
  #post-list {
    min-height: 500px;
    background: #FFF;
  }
  #post-list {
    -webkit-border-radius: 0 0 3px 3px;
    -moz-border-radius: 0 0 3px 3px;
    border-radius: 0 0 3px 3px;
  }
  .post {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 30px;
    border-bottom: 1px solid #f0f0f0;
    width: auto;
  }
  .post a {
    color: #333;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .avatar {
    border-radius: 3px;
  }
  .post-tab {
    margin: 0 8px;
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
</style>
