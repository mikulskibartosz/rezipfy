<template>
  <div>
    <Header />
    <invite />
    <SearchBox class="search-box"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Invite from './components/Invite.vue'
import Footer from './components/Footer.vue'
import SearchBox from './components/SearchBox.vue'

export default {
  name: 'app',
  components: {
    Header,
    Invite,
    Footer,
    SearchBox
  }
}
</script>

<style>
body, html {
  height: 100%;

  background-image: url("assets/background.jpg");

  height: 100%; 

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.search-box {
  padding-left: 10%;
  width: 50%;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
