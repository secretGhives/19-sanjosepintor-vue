<template>
  <footer id="sitefooter" class="content-wrapper grid-container">

    <div class="top-bar" layout="row" layout-align="space-between center">
      <router-link to="/" :alt="company" tag="img" src="/assets/images/footer-logo.svg" class="svg logo"/>

      <Toucan class="toucan" scale="0.3"></Toucan>
        
      <ul class="icons" layout="row" layout-align="flex-end center">
        <li><img class="svg" src="@/assets/images/bucket_3.svg" alt="bucket"></li>
        <li><img class="svg" src="@/assets/images/pantone.svg" alt="pantone"></li>
        <li><img class="svg" src="@/assets/images/paint-roller_1.svg" alt="paint roller"></li>
        <li><img class="svg" src="@/assets/images/scraper.svg" alt="scraper"></li>
        <li><img class="svg" src="@/assets/images/bucket_2.svg" alt="paint bucket"></li>
      </ul>
    </div><!-- End of Top Bar -->

    <div class="mid-bar" layout-wrap layout="row" layout-xs="column" layout-align="space-around start">
      <div class="details" flex-xs="grow">
        <h5>{{$t("component.footer.moto")}}</h5>
        <div class="extra-meta">
          <span class="pink phone">{{phone}}</span>
          <span class="towns">{{cities}}</span>
        </div>
      </div><!-- END OF DETAILS -->

      <div class="links">
        <div class="company column">
          <div class="col-title">{{$t("component.footer.company.title")}}</div>
          <ul>
            <li><router-link to="/about" class="first after">{{$t("component.footer.company.about")}}</router-link></li>
            <li><router-link to="/contact" class="first after">{{$t("component.footer.company.contact")}}</router-link></li>
            <!-- <li><router-link to="/faq">{{$t("component.footer.company.faq")}}</router-link></li> -->
          </ul>
        </div><!-- END OF COMPANY -->

        <div class="services column">
          <div class="col-title">{{$t("component.footer.services.title")}}</div>
          <ul>
            <li><router-link to="/residential" class="third after">{{$t("component.footer.services.residential")}}</router-link></li>
            <li><router-link to="/commercial" class="third after">{{$t("component.footer.services.commercial")}}</router-link></li>
            <!-- <li><router-link to="/powerwash" class="third after">{{$t("component.footer.services.powerwash")}}</router-link></li> -->
          </ul>
        </div><!-- END OF SERVICES -->

        <div class="connect column">
          <div class="col-title">{{$t("component.footer.connect.title")}}</div>
          <ul>
            <!-- <li><a href="https://twitter.com/sanjosepintor" rel="noreferrer">Twitter</a></li> -->
            <li><a href="https://maps.google.com/?cid=8585301736328483035" class="second after" target="_blank" rel="noreferrer">{{$t("component.footer.connect.google")}}</a></li>
            <li><a href="http://instagram.com/sanjosepintor" class="second after" target="_blank" rel="noreferrer">{{$t("component.footer.connect.instagram")}}</a></li>
          </ul>
        </div><!-- END OF CONNECT -->
      </div><!-- END OF LINKS -->
    </div><!-- END OF MID-BAR -->

    <div class="bottom-bar" layout="row" layout-xs="column" layout-align="space-between center">
      <div class="copyright">
        <span>{{$t("component.footer.copyleft.mark")}} {{company}}</span>
        <router-link to="/terms">Terms of Service</router-link> | <router-link to="/privacy">Privacy Policy</router-link>
      </div>

      <LangSwitcher class="language"/>
    </div><!-- END OF BOTTOM-BAR -->
  </footer>
</template>

<script>
// @ is an alias to /src
import Toucan from '@/components/basic/Toucan'
import LangSwitcher from '@/components/basic/LangSwitcher'

export default {
  name: 'SiteFooter',
  components: {
    Toucan,
    LangSwitcher
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

<style lang="scss">
@import '@/assets/styles/vars.scss';

// MOBILE FIRST

#sitefooter {
  user-select: none;
  margin-top: 1em;
  display: flex;
  flex-direction: column;

  .top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $silver;
    padding: 0 1em;
  }

  .mid-bar {
    display: flex;
    flex-direction: column;
    padding: 0 1em;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .bottom-bar {
    border-top: 1px solid $silver;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo { 
    height: 45px;
    cursor: pointer;
  }

  .toucan {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .icons { 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    li:first-child {
      display: none;
      @media screen and (min-width: 768px) {
        display: flex;
      }
    }
    li { 
      flex: 1 auto;
      margin: 0;
      @media screen and (min-width: 768px) {
        margin: 0 0.5em;
      }
      line-height: 0;
    }
    li:last-child {
      @media screen and (min-width: 768px) {
        margin-right: 0;
      }
    }
    li > img { height: 27px; }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    @media screen and (min-width: 768px) {
      flex: 1 1 auto;
      border-right: 1px solid $silver;
    }

    h5 { margin: 1em 0; }

    .extra-meta {
      // float: left;
      font-family: Raleway,serif;
      font-style: italic;
      font-size: 14px;
      color: $navy_hue;
      margin-bottom: 1em;

      .phone { font-weight: 600; font-size: 18px;}
      .pink { color: $pink_600; }
      .towns:before {
        content: '|';
        position: relative;
        padding: 0 8px 0 5px;
      }
    }
  }

  .links {
    // padding: 0 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
      flex: 1 1 auto;
    }

    ul { margin: 0.5em 0; }
    ul > li { margin: 0; }

    .column { 
      margin-top: 1em;
      text-align: left;
      a { 
        font-size: 13px;
        text-decoration: none;
        color: $navy_hue;
        &:hover { color: $blue_hue; }
      }
    }

    .col-title {
      font-weight: 700;
      color: $navy_hue;
      cursor: default;
      margin-bottom: 0.5em;
    }
  }



  .copyright {
    font-size: 12px;
    color: $silver;
    text-align: left;
    flex: 1 1 auto;

    span { display:  block; }
    a { 
      text-decoration: none;
      color: $navy_hue;
      &:hover { color: $blue_hue; }
    }
  }
}
</style>