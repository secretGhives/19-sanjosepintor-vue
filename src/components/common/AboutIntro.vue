<template>
  <section id="section--about-intro" class="content-wrapper" layout="row" layout-xs="column">
    <div class="side-left" 
      layout="column"
      layout-align-gt-xs="center center"
      flex-gt-xs="50">
      <ul class="cities" layout="row" layout-align="space-around center">
        <li><img src="@/assets/images/nyc-icon.svg" alt="icon san jose"><span>San Jose</span></li>
        <li><img src="@/assets/images/your-city-icon.svg" alt="icon your city"><span>{{$t("component.about_intro.your_city")}}</span></li>
        <li><img src="@/assets/images/chi-icon.svg" alt="icon heredia"><span>Heredia</span></li>
      </ul>

      <h2 layout-align-gt-xs="end end">{{$t("component.about_intro.why")}} {{company}}?</h2>

      <img :src="'@/assets/images/guarantee_seal-' + locale + '.png'" class="guarantee-seal" alt="guarantee seal" hide-xs/>
    </div>

    <div class="side-right" flex-gt-xs="50">
      <p>{{$t("component.about_intro.p_1")}}</p>

      <p>{{$t("component.about_intro.p_2")}}</p>

      <div class="meta-info" hide-gt-xs>
        <ul>
          <li><img src="@/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.bonded")}}</li>
          <li><img src="@/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.trained")}}</li>
          <li><img src="@/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.eco")}}</li>
        </ul>
      </div>

      <router-link to="/residential" tag="button" class="md-button md-raised input-submit md-primary">{{$t("component.about_intro.button")}}</router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutIntro',
  components: {
    //
  },
  computed: {
    company() {
      return this.$store.state.company
    },
    cities() {
      return this.$store.state.cities
    },
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// ABOUT INTRO
#section--about-intro {
  user-select: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 2em 0;
  }

  border-bottom: 1px solid #dce1e5;

  .side-left {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      justify-content: center;
      align-items: center;
      flex: 1 1 100%;
    }
    margin: 1em;
    cursor: default;

    h2 { 
      margin: 1em 0 0 0;
      text-align: left;
      @media screen and (min-width: 768px) {
        text-align: center;
      }
    }

    ul.cities {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;

      border-bottom: 2px solid #dce1e5;
      padding: 1em 0;
      margin: 0;

      li {
        font-size: 15px;
        line-height: 1.65;
        color: #16374b;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em; 

        // &:nth-child(2) {
        //   display: none;
        //   @media screen and (min-width: 768px) { display: flex; }
        // }

        img {
          display: block;
          width: 45px;
          margin-bottom: 1em;
        }
      }
    }

    .guarantee-seal {
      display: none;
    }

  }

  .side-right {
    margin: 1em;
    text-align: left;
    @media screen and (min-width: 768px) {
      flex: 1 1 100%;
    }
    p {
      cursor: default;
    }

    .meta-info {
      margin-bottom: 0.3em;
      @media screen and (min-width: 768px) {
        display: none;
      }
      ul li {
        display: inline-block;
        margin-bottom: 15px;
        color: #16374b;

        .svg {
          margin: 0 9px 3px 0;
          height: 18px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>