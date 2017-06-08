<template>
  <div id="Header">
    <div id="header-inline">
      <img src="http://www.daqianduan.com/wp-content/uploads/2015/01/logo.png" alt="" height="40px">
      <div id="right-list">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/">反馈</router-link>
          </li>
          <li>
            <router-link to="/">关于</router-link>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  #Header {
    width:100%;
    background-color: #444;
    height:50px;
  }
  #header-inline {
    width: 90%;
    margin: 0 auto;
    padding: 4px 0;
  }
  #right-list {
    display: inline-block;
    float: right;
    padding-top:10px
  }
  #right-list > ul > li {

    display: inline-block;
  }
  #right-list > ul > li > a {
    line-height: 20px;
    padding:10px 15px;
    color: #CCC;
  }
  #right-list > ul > li > a:hover {
    color:white
  }
  .clear:after {
    display: table;
    content: " ";
    clear: both;
  }
</style>
