<template>
  <div id="app">

    <!-- <TopToolbar/> -->

    <transition name="fade">
      <router-view layout="column"/>
    </transition>

    <SiteFooter/>

  </div>
</template>

<script>
import '@/assets/styles/index.scss'
// import TopToolbar from '@/components/basic/TopToolbar'
import SiteFooter from '@/components/basic/SiteFooter'

export default {
  name: 'App',
  components: {
    // TopToolbar,
    SiteFooter
  },
  data: () => ({
    //
  }),
  computed: {
    author() {
      return this.$store.state.author
    },
    company() {
      return this.$store.state.company
    },
    cities() {
      return this.$store.state.cities
    },
    phone() {
      return this.$store.state.phone
    },
    email() {
      return this.$store.state.email
    }
  }
}
</script>


<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>