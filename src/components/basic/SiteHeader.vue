<template>
  <header id="siteheader" class="header" :class="{ open: showMobileMenu }" layout="row">
    <div class="logo-wrapper" layout="row" layout-align="start center">
      <router-link to="/" :title="company">
        <img src="@/assets/images/logo_brush_small.png" :alt="company"/>
      </router-link>
      <div class="extra-meta" layout="column">
        <span class="pink phone">{{phone}}</span>
        <span class="towns">{{cities}}</span>
      </div>
    </div><!-- /logo-wrapper -->

    <nav class="main-nav" role="navigation"
      layout="row"
      layout-align="end center"
      hide-xs>

      <img src="@/assets/images/burger.svg" class="burger mobile burger_open" @click="showMobileMenu = !showMobileMenu" alt="open mobile menu" />
      <img src="@/assets/images/burger_close.svg" class="burger mobile burger_close" @click="showMobileMenu = !showMobileMenu" alt="open mobile menu" />

      <ul>
        <li class="nav-item"><router-link to="/residential" class="first after">{{$t("component.header.link.residential")}}</router-link></li>
        <li class="nav-item"><router-link to="/commercial" class="second after">{{$t("component.header.link.commercial")}}</router-link></li>
        <li class="nav-item mobile"><router-link to="/about">{{$t("component.footer.company.about")}}</router-link></li>
        <li class="nav-item mobile"><router-link to="/contact">{{$t("component.footer.company.contact")}}</router-link></li>
        <li class="nav-item mobile"><a href="https://maps.google.com/?cid=8585301736328483035" target="_blank" rel="noreferrer">{{$t("component.footer.connect.google")}}</a></li>
        <li class="nav-item mobile"><a href="http://instagram.com/sanjosepintor" target="_blank" rel="noreferrer">{{$t("component.footer.connect.instagram")}}</a></li>
      </ul>
    </nav><!-- /main-nav -->

    <!-- <LangSwitcher class="language"/> -->
  </header>
</template>

<script>
// @ is an alias to /src
// import LangSwitcher from '@/components/basic/LangSwitcher'

export default {
  name: 'SiteHeader',
  components: {
    // LangSwitcher
  },
  data: () => ({
    showMobileMenu: false
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
@import '@/assets/styles/vars.scss';

#siteheader {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 1em;
  user-select: none;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    .mobile { display: none !important; }
  }

  img.burger_close { display: none; }

  &.open {
    bottom: 0;
    background: white;
    z-index: 9;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;

    nav.main-nav ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      height: 100%;
      width: 100%;
    }
    nav.main-nav li {
      margin: 0;
      align-self: stretch;
    }

    img.burger_open { display: none; }
    img.burger_close { display: block; }
  }

  .logo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    a { display: inline-block; outline: none;}
    img {
      height: 78px;
      width: auto;
    }

    .extra-meta {
      //font-family: Raleway,serif;
      font-style: italic;
      font-size: 12px;
      color: $blue_hue;
      cursor: default;
      display: flex;
      flex-direction: column;
    }
    .pink { color: $pink_500; }
    .phone { font-size: 23px; font-weight: 600; }
  }

  nav.main-nav {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    img.burger {
      width: 36px;
      // align-self: flex-start;
      position: absolute;
      top: 1em;
      right: 1em;
    }

    ul {
      display: none;
      @media screen and (min-width: 768px) { display: flex; }
      margin: 0;
      padding: 0 1em;
      background: rgba(240, 248, 255, 0.33);
      border-radius: 3px;
    }
    ul li {
      display: inline-block;
      margin-bottom: 0;
    }
    li:first-child { margin-left: 0; }
    .nav-item { margin-left: 1.45em;}
    a {
      line-height: 39px;
      font-size: 18px;
      text-decoration: none;
      color: $navy_hue;
      display: block;
      //transition: color 250ms 0s ease-in-out;
      &:hover { color: $blue_hue; }
    }
  }
}
</style>