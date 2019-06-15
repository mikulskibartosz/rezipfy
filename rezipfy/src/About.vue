<template>
  <div>
    <Header />
    <About  class="search-box"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'about',
  components: {
    Header,
    About,
    Footer
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

@media all and (max-width: 900px) {
 .search-box {
  padding-left: 2%;
  width: 100%;
  } 
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}

a {
  color: #495057;
}

a.link {
  color: #495057;
}
a.link:hover {
  color: #495057;
}
</style>
