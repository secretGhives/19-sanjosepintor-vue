<template>
  <article id="home" class="home">
    <section id="section--home-hero">

      <div class="content-wrapper hero"
        layout="column"
        layout-align-xs="end center"
        layout-align-sm="center center"
        layout-align-md="center center">
        

        <SiteHeader/>

        <div class="text">
          <h2 class="large">{{$t("page.home.hero.title_1")}} <img src="/assets/images/paint-roller_5.svg" class="svg brush" alt="paint roller"></h2>
          <h2 class="large"> <img src="/assets/images/coffee-break.svg" class="svg" alt="coffee break">{{$t("page.home.hero.title_2")}}</h2>
        </div>

        <router-link to="/booking" tag="button" class="md-button md-raised input-submit md-primary" flex-xs="grow">
          <span>{{$t("page.home.hero.button.text")}}</span>
          <span class="estimate-amount price">{{ price }}</span>
          <span class="size">{{$t("page.home.hero.button.size")}}<sup>2</sup></span>
        </router-link>
      </div>

      <!-- Meta Information in header -->
      <div class="meta-info" hide-xs>
        <ul>
          <li><img src="/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.bonded")}}</li>
          <li><img src="/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.trained")}}</li>
          <li><img src="/assets/images/star-outline.svg" class="svg" alt="star">{{$t("page.home.hero.eco")}}</li>
        </ul>
      </div>

      <!-- BG Gradient -->
      <div class="bg-gradient"></div>
    </section>

    <AboutIntro/>

    <Steps/>

    <CommercialSpace/>

    <!-- <testimonials id="section--testimonials" class="content-wrapper" layout="row" layout-xs="column"></testimonials> -->
    <!-- <Testimonials/> -->

    <Calculator/>

    <BookNow/>

    <FeaturedIn/>
  </article>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/basic/SiteHeader'
import AboutIntro from '@/components/common/AboutIntro'
import Steps from '@/components/common/Steps'
import CommercialSpace from '@/components/common/CommercialSpace'
import FeaturedIn from '@/components/common/FeaturedIn'
// import Testimonials from '@/components/common/Testimonials'
import Calculator from '@/components/common/Calculator'
import BookNow from '@/components/common/BookNow'

export default {
  name: 'home',
  components: {
    SiteHeader,
    AboutIntro,
    Steps,
    CommercialSpace,
    FeaturedIn,
    // Testimonials,
    Calculator,
    BookNow
  },
  computed: {
    price() {
      return this.$store.state.price
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

#home {
  display: flex;
  flex-direction: column;

  // HERO
  #section--home-hero {
    min-height: 420px;
    height: 81vh;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    user-select: none;

    background-image: url('~/assets/images/home-hero_orig.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 52% top;

    .content-wrapper.hero {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    .text {
      cursor: default;
      margin-bottom: 3em;
      h2 { margin: 0; }
      img { 
        vertical-align: middle;
        height: 45px;
        margin: 0 20px 0 0;
        &.brush { margin-right: 0; }
      }
    }

    .input-submit {
      display: flex;
      align-items: flex-end;
    }
    .price {
      font-size: 24px;
      font-weight: 700;
      vertical-align: middle;
      position: relative;
      margin-left: 1em;
      margin-right: 0.2em;
      display: inline-block;
      &:before {
        content: '$';
        position: absolute;
        top: 0;
        margin-top: -5px;
        margin-left: -8px;
        left: 0;
        font-size: 10px;
      }
    }
    .size {
      sup {
        margin-left: 0.2em;
      }
    }

    .meta-info {
      cursor: default;
      display: none;
      @media screen and (min-width: 768px) { display: block; }
      z-index: 1;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      ul li {
        display: flex;
        margin: 0;
        align-items: center;
        font-size: 81%;
        margin: 0 1em;
      }
      img {
        margin: 0 9px 3px;
        height: 18px;
        vertical-align: middle;
      }
    }
  }

}
</style>