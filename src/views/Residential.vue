<template>
  <article id="residential-painting" class="residential">
    <section id="section--residential-painting-hero">

      <div class="content-wrapper hero"
        layout="column"
        layout-align-xs="center center"
        layout-align-sm="center start"
        layout-align-md="center start">

        <SiteHeader/>

        <div class="text">
          <h2>{{$t("page.residential.hero.title")}}</h2>

          <p>{{$t("page.residential.hero.p")}}</p>

          <router-link to="/booking" tag="button" class="md-button md-raised input-submit md-primary" flex-xs="grow">{{$t("page.residential.hero.button")}}</router-link>
        </div>
      </div>

      <!-- BG Gradient -->
      <div class="bg-gradient"></div>
    </section>

    <InteriorSteps/>

    <Moving/>

    <ExteriorSteps/>

    <ResidentialDetails/>

    <BeforeAfter before="/assets/images/before-after/residential_before_0.jpg"
                   after="/assets/images/before-after/residential_after_0.jpg"/>

    <InstagramFeed/>

    <BookNow/>
  </article>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/basic/SiteHeader'
import InteriorSteps from '@/components/common/InteriorSteps'
import Moving from '@/components/common/Moving'
import ExteriorSteps from '@/components/common/ExteriorSteps'
import ResidentialDetails from '@/components/common/ResidentialDetails'
import BeforeAfter from '@/components/common/BeforeAfter'
import InstagramFeed from '@/components/common/InstagramFeed'
import BookNow from '@/components/common/BookNow'

export default {
  name: 'residential',
  components: {
    SiteHeader,
    InteriorSteps,
    Moving,
    ExteriorSteps,
    ResidentialDetails,
    BeforeAfter,
    InstagramFeed,
    BookNow
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

#residential-painting {
  display: flex;
  flex-direction: column;
  
  // HERO
  #section--residential-painting-hero {
    min-height: 600px;
    height: 90vh;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;

    background-image: url('~/assets/images/residential-interior.jpg');
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