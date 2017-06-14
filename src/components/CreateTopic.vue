<template>
  <div id="editor">
    <select id="select-tab" v-model="tab">
      <option value="none">请选择</option>
      <option value="share">分享</option>
      <option value="ask">问答</option>
      <option value="job">分享</option>
      <option value="dev">分享</option>
    </select>
    <input type="text" id="title" placeholder="请输入标题" v-model="title">
    <mavon-editor v-model="content" style="height: 450px"></mavon-editor>
    <button id="commit" @click="create">提交</button>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'editor',
    components: {
      mavonEditor
    },
    data () {
      return {
        title: '',
        content: '',
        tab: 'none'
      }
    },
    methods: {
      create () {
        this.$http.post('https://cnodejs.org/api/v1/topics', {
          accesstoken: 'cc66d4f2-e14f-491b-8ac2-637775302b6e',
          title: this.title,
          tab: this.tab,
          content: this.content
        })
          .then(function (res) {
            console.log(res.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style>
  #title {
    border: 1px solid #ccc;
    padding: 7px 0px;
    border-radius: 3px;
    padding-left:5px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    margin: 12px;
    width: 95%;
  }
  #title:focus {
    border-color: #66afe9;
    outline: 0;
  }
  #editor {
    background: #fff;
    height: 500px;
    display: inline-block;
    width: calc(98% - 300px - 4px);
    margin-top: 4px;
  }
  #commit {
    margin-left: 8px;
    background: #08c;
    border: none;
    color: #fff;
    padding: 3px 10px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    transition-duration: 0.25s;
    float: right;
    margin-top: 12px;
  }
  #commit:hover {
    background: #07a;
  }
  #select-tab {
    border: solid 1px #ccc;
    width:220px;
    margin: 8px;
    height: 30px;
    line-height: 30px;
    padding: 1px 6px;
    border-radius: 4px;
    font-weight: 400;
    color: #555;
    vertical-align: middle;
    padding-right: 14px;
  }
</style>
