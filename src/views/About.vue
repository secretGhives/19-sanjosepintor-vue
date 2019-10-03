<template>
  <article class="about about-us content-wrapper">
    <SiteHeader/>

    <section id="section--about-us">
      <div class="main-content">
        <figure>
          <img :src="'./assets/images/van_' + locale + '.png'" class="company-van" alt="company vehicle" />
        </figure>
        <h2>{{$t("page.about_us.title")}}</h2>
        <div class="grouped">
          <h3>{{$t("page.about_us.mission.title")}}</h3>
          <p>{{$t("page.about_us.mission.p_1")}}</p>
          <p>{{$t("page.about_us.mission.p_2")}}</p>
        </div>

        <div class="grouped">
          <h3>{{$t("page.about_us.top_rated.title")}}</h3>
          <p>{{$t("page.about_us.top_rated.p")}}</p>
        </div>

        <div class="grouped">
          <h3>{{$t("page.about_us.guarantee.title")}}</h3>
          <p>{{$t("page.about_us.guarantee.p_1")}}</p>
          <p>{{$t("page.about_us.guarantee.p_2")}}</p>
        </div>
      </div>
    </section>

    <ContactUs/>
    
    <BookNow/>
  </article>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/basic/SiteHeader'
import ContactUs from '@/components/common/ContactUs'
import BookNow from '@/components/common/BookNow'

export default {
  name: 'about',
  components: {
    SiteHeader,
    ContactUs,
    BookNow
  },
  data: () => ({
    //
  }),
  computed: {
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// GENERAL ABOUT US TEXT
#section--about-us {
  display: flex;
  flex-direction: column;
  text-align: left;
  
  .main-content { 
    margin: 9em 1em 3em 1em;
    @media screen and (min-width: 768px) {
      margin: 9em 3em 3em 3em;
    }
  }

  h1 {margin-bottom: 2em; }
  h2 {
    margin-top: 0;
    margin-bottom: 1em;
    color: $navy_hue;
  }

  .grouped { margin-bottom: 3em; }
  img.company-van { max-width: 100%; }
}
</style>