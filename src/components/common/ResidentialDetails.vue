<template>
  <section id="section--residential-details" class="content-wrapper" layout="column">
    <div class="content-wrap"
        layout="column" layout-md="row"
        layout-align-xs="center center"
        layout-align-sm="center start"
        layout-align-md="center end">

      <div class="left-side" layout="column" layout-align="center start" flex="auto">
        <h2 class="white">{{$t("component.residential_details.title")}}</h2>
        <p>{{$t("component.residential_details.p")}}</p>
      </div>

      <div class="right-side" layout="row" layout-align="space-between start" layout-wrap>
        <div class="add-item">
          <img class="svg" src="/assets/images/window.svg" alt="window">
          <div class="meta" hide-xs>
            <span class="add-on">{{$t("component.residential_details.detail.windows")}}</span>
            <!-- <span class="price">$60</span> -->
          </div>
        </div> <!-- END OF ITEM -->

        <div class="add-item">
          <img class="svg" src="/assets/images/trim.svg" alt="trim">
          <div class="meta" hide-xs>
            <span class="add-on">{{$t("component.residential_details.detail.trims")}}</span>
            <!-- <span class="price">$60</span> -->
          </div>
        </div> <!-- END OF ITEM -->

        <div class="add-item">
          <img class="svg" src="/assets/images/door.svg" alt="door">
          <div class="meta" hide-xs>
            <span class="add-on">{{$t("component.residential_details.detail.doors")}}</span>
            <!-- <span class="price">$60</span> -->
          </div>
        </div> <!-- END OF ITEM -->

        <div class="add-item">
          <img class="svg" src="/assets/images/time.svg" alt="time">
          <div class="meta" hide-xs>
            <span class="add-on">{{$t("component.residential_details.detail.extra")}}</span>
            <!-- <span class="price">++</span> -->
          </div>
        </div> <!-- END OF ITEM -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResidentialDetails',
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

// MOVING REQUESTS
#section--residential-details {
  background: $navy_hue;
  color: $silver;
  display: flex;
  flex-direction: column;
  text-align: left;

  .content-wrap { 
    margin: 3em 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-side, .right-side {
    margin: 0 2em;
    @media screen and (min-width: 768px) {
      margin: 0 3em;
    }
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 auto;
    
    h2 { color: $silver; margin-bottom: 0;}

    p {
      color: $silver;
      //margin-top: 0; margin-bottom: 60px;
      padding-top: 40px; padding-bottom: 60px;
      border-top: 0 solid $silver;
      border-bottom: 2px solid $silver;
    }
  }

  .right-side {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    .add-item {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 1em 2em 0;

      img.svg { 
        margin-right: 0.45em;
        height: 45px;
      }
    }
    .meta {
      display: none;
      @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .add-on {
        display: block;
        font-size: 13px;
        color: #fff;
        margin-bottom: 0;
      }
      .price {
        display: block;
        color: $pink_500;
        font-family: Raleway,serif;
        font-style: italic;
        font-size: 15px;
      }
    }
  }
}



// @media screen and (max-width: 740px) and (orientation: landscape) {}
// @media screen and (max-width: 1099px) and (min-width: 940px) {}
// @media screen and (max-width: 939px) and (min-width: 640px) {}
// @media screen and (max-width: 639px) {}
// @media screen and (min-width: 640px) {}
</style>