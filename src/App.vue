<template>
  <div id="app">
    <BBSHeader></BBSHeader>
    <div id="main">
      <router-view></router-view>
      <RightPanel></RightPanel>
    </div>
  </div>
</template>

<script>
  import BBSHeader from './components/BBSHeader.vue'
  import RightPanel from './components/RightPanel.vue'
  export default {
    name: 'app',
    components: {
      BBSHeader,
      RightPanel
    }
  }
</script>

<style>
  #main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 8px auto;
  }
  body {
    background: #e1e1e1;
  }
</style>
