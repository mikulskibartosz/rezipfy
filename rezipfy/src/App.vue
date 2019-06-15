<template>
  <div>
    <Header />
    <invite v-if="view === 'default'"/>
    <SearchBox v-if="view === 'default'" class="search-box"/>
    <About v-if="view === 'about'" class="search-box"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Invite from './components/Invite.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import SearchBox from './components/SearchBox.vue'

export default {
  name: 'app',
  components: {
    Header,
    Invite,
    About,
    Footer,
    SearchBox
  },
  data: function() {
    return {
      view: 'about'
    }
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

a {
  color: #495057 !important;
}
</style>
