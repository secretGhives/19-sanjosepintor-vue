<template>
  <article id="commercial-painting" class="commercial">
    <section id="section--commercial-painting-hero">

      <div class="content-wrapper hero"
        layout="column" 
        layout-align-xs="center center"
        layout-align-sm="center start"
        layout-align-md="center end">

        <SiteHeader/>

        <div class="text">
          <h2>{{$t("page.commercial.hero.title")}}</h2>

          <p>{{$t("page.commercial.hero.p")}}</p>

          <router-link to="/booking" tag="button" class="md-button md-raised input-submit md-primary" flex-xs="grow">{{$t("page.commercial.hero.button")}}</router-link>
        </div>
      </div>

      <!-- BG Gradient -->
      <div class="bg-gradient"></div>
    </section>

    <OurOffer/>
    
    <BeforeAfter before="/assets/images/before-after/commercial_before_0.jpg"
                 after="/assets/images/before-after/commercial_after_0.jpg"/>

    <CommercialDetails/>

    <Powerwash/>

    <BookNow/>
  </article>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/basic/SiteHeader'
import OurOffer from '@/components/common/OurOffer'
import BeforeAfter from '@/components/common/BeforeAfter'
import CommercialDetails from '@/components/common/CommercialDetails'
import Powerwash from '@/components/common/Powerwash'
import BookNow from '@/components/common/BookNow'

export default {
  name: 'commercial',
  components: {
    SiteHeader,
    OurOffer,
    BeforeAfter,
    CommercialDetails,
    Powerwash,
    BookNow
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

#commercial-painting {
  display: flex;
  flex-direction: column;

  // HERO
  #section--commercial-painting-hero {
    min-height: 600px;
    height: 90vh;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;

    background-image: url('~/assets/images/commercial_blur.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60% top;

    .content-wrapper.hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }

    .text {
      margin: 2em;
      @media screen and (min-width: 768px) {
        margin: 3em;
      }
      text-align: left;
    }
  }
}
</style>