<template>
  <div id="right-panel">
    <div id="user-panel">
      <p>52-AI : 人工智能专业中文社区</p>
      <button>登录</button>
      <button>注册</button>
    </div>
    <div id="ads">
      <img src="https://dn-cnode.qbox.me/Fh-dDBC360-fT8gaefK0p_hmx_zv" alt="">
      <img src="https://dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="">
      <img src="https://dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG" alt="">
    </div>
    <div id="friends">
      <div id="friends-header">
        <p>友情链接</p>
      </div>
      <img src="https://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt="">
      <img src="https://o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="">
      <img src="https://o4j806krb.qnssl.com/public/images/phphub-logo.png" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style>
  #right-panel {
    display: inline-block;
    float: right;
    width: 300px;
    padding: 4px;
  }
  #user-panel {
    background-color: #fff;
    border-radius: 3px;
    height: 100px;
  }
  #user-panel p {
    padding: 16px 8px;
  }
  #user-panel button {
    margin-left: 8px;
    background: #5bc0de;
    border: none;
    color: #fff;
    padding: 3px 10px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    transition-duration: 0.25s;
  }
  #user-panel button:hover {
    background: #2f96b4;
  }
  #ads {
    margin: 12px 0;
    background: #fff;
    border-radius: 3px;
  }
  #ads img {
    width: 280px;
    margin: 4px 10px;
  }
  #friends {
    background: #fff;
  }
  #friends img {
    width: 150px;
    margin: 8px 10px;
  }
  #friends-header {
    padding: 12px 8px;
    background: #eee;
    font-size: 15px;
  }
</style>
