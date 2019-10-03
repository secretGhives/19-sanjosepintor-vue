<template>
  <div id="top--toolbar">

    <router-link to="/" :title="company">
      <img src="@/assets/images/logo.svg" :alt="company">
    </router-link>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/residential">Residential</router-link> |
      <router-link to="/commercial">Commercial</router-link> |
      <router-link to="/faq">FAQ</router-link> |

      <router-link to="/about">About</router-link> |
      <router-link to="/about#section--contact">Contact</router-link>
      <LangSwitcher/>
    </div>

    block {logo, phone, cities}, pages, language 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LangSwitcher from '@/components/basic/LangSwitcher'


export default {
  name: 'topToolbar',
  components: {
    // HelloWorld
    LangSwitcher
  },
  data() {
    return {

    };
  },
  methods: {
  },
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

<style lang="scss" scoped>
// remove scoped if want to use @import global file
</style>