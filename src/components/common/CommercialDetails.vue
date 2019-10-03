<template>
  <section id="section--commercial-details" class="content-wrapper" layout="column">
    <div class="content-wrap">
      <h2 class="white">{{$t("component.commercial_details.interior.title")}}</h2>
      <div class="offer-list">
        <ul layout="row" layout-wrap class="styled"
          layout-align-xs="center center"
          layout-align-sm="space-between start"
          layout-align-gt-sm="end start">
          <li>{{$t("component.commercial_details.interior.point_1")}}</li>
          <li>{{$t("component.commercial_details.interior.point_2")}}</li>
          <li>{{$t("component.commercial_details.interior.point_3")}}</li>
          <li>{{$t("component.commercial_details.interior.point_4")}}</li>
          <li>{{$t("component.commercial_details.interior.point_5")}}</li>
          <li>{{$t("component.commercial_details.interior.point_6")}}</li>
          <li>{{$t("component.commercial_details.interior.point_7")}}</li>
          <li>{{$t("component.commercial_details.interior.point_8")}}</li>
          <li>{{$t("component.commercial_details.interior.point_9")}}</li>
          <li>{{$t("component.commercial_details.interior.point_10")}}</li>
          <li>{{$t("component.commercial_details.interior.point_11")}}</li>
        </ul>
      </div>

      <!-- DIV -->

      <h2 class="white">{{$t("component.commercial_details.exterior.title")}}</h2>
      <div class="offer-list">
        <ul layout="row" layout-wrap class="styled"
          layout-align-xs="center center"
          layout-align-sm="space-between start"
          layout-align-gt-sm="end start">
          <li>{{$t("component.commercial_details.exterior.point_1")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_2")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_3")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_4")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_5")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_6")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_7")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_8")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_9")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_10")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_11")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_12")}}</li>
          <li>{{$t("component.commercial_details.exterior.point_13")}}</li>
        </ul>
      </div>

      <!--<md-button class="md-raised input-submit md-primary" flex-xs="grow" ui-sref="faq">Questions</md-button>  End of Action-Bar -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommercialDetails',
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

// COMMERCIAL DETAILS
#section--commercial-details {
  color: $navy_hue;
  display: flex;
  flex-direction: column;
  text-align: left;

  .content-wrap { 
    margin: 3em 2em;
  }
  h2 { 
    color: $navy_hue;
  }

  .offer-list {
    margin-bottom: 2em;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      @media screen and (min-width: 768px) {
      justify-content: space-between;
      align-items: flex-start;
      }
    }
  }

}
</style>