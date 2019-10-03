<template>
  <section id="section--our-offer" class="content-wrapper" layout="column">
    <div class="content-wrap">
      <h2 class="white">{{$t("component.our_offer.title")}}</h2>
      <div class="offer-list">
        <ul layout="row" layout-wrap layout-align="space-around start">
          <li>{{$t("component.our_offer.offer_1")}}</li>
          <li>{{$t("component.our_offer.offer_2")}}</li>
          <li>{{$t("component.our_offer.offer_3")}}</li>
          <li>{{$t("component.our_offer.offer_4")}}</li>
          <li>{{$t("component.our_offer.offer_5")}}</li>
          <li>{{$t("component.our_offer.offer_6")}}</li>
          <li>{{$t("component.our_offer.offer_7")}}</li>
          <li>{{$t("component.our_offer.offer_8")}}</li>
          <li>{{$t("component.our_offer.offer_9")}}</li>
          <li>{{$t("component.our_offer.offer_10")}}</li>
          <li>{{$t("component.our_offer.offer_11")}}</li>
          <li>{{$t("component.our_offer.offer_12")}}</li>
        </ul>
      </div>
      <!--<div class="action-bar" layout layout-align="center center">
        <md-button class="md-raised input-submit md-primary" flex-xs="grow" ui-sref="faq">Questions</md-button>
      </div>  End of Action-Bar -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurOffer',
  components: {
    // TopToolbar,
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// OUR OFFER
#section--our-offer {
  background: $navy_hue;
  color: $silver;
  display: flex;
  flex-direction: column;
  text-align: left;

  .content-wrap { margin: 3em 2em; }
  
  h2 { 
    color: $silver;
    //margin-bottom: 1.42em;
  }

  .offer-list {
    margin-bottom: 2em;
    
    ul {
      color: $silver;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    ul li {
      font-family: BrownStd,Helvetica,sans-serif;
      font-weight: 400;
      width: 222px;
      margin-bottom: 15px;
      position: relative;
      padding-left: 25px;

      &:before {
        content: '';
        height: 15px;
        margin-top: 3px;
        width: 15px;
        left: 0;
        position: absolute;
        background-image: url('~/assets/images/checkmark.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        display: inline-block
      }

    }
  }
}
</style>