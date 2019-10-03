<template>
  <section id="section--testimonials" class="content-wrapper" layout="row" layout-xs="column">
    <div class="left-side" ng-hide="offline"
      layout="column" layout-align="center center" flex-xs="grow" flex-gt-xs="40">
      <a :href="google_url" target="_blank" class="google-logo">
        <img src="/assets/images/google.png">
      </a>
      <!-- <star-rating :score="rating" stars="5"></star-rating> -->
      <span class="extra">{{rating}} {{$t("component.gallery.rating.value")}}</span>
      <a href="https://search.google.com/local/writereview?placeid=ChIJc-CJWmX7oI8R21BnO3EeJXc" target="_blank" class="md-button md-raised input-submit md-primary">{{$t("component.gallery.rating.button")}}</a>
    </div>

    <!-- <md-content class="right-side" ng-hide="offline">
      <md-list>
        <md-list-item class="md-3-line" ng-repeat="review in reviews | limitTo:2">
          <img :src="review.profile_photo_url" class="md-avatar" :alt="review.author_name">
          <div class="md-list-item-text">
            <h4>{{review.author_name}}</h4>
            <star-rating :score="review.rating" stars="5"></star-rating>
            <p>{{review.text}}</p>
          </div>
          <md-divider md-inset ng-if="!$last"></md-divider>
        </md-list-item>
      </md-list>
    </md-content> -->

    <!-- <div class="right-side" layout="column" layout-align="center center">
      <img class="svg" src="/assets/images/smile.svg">
      <h3>{{$t("component.gallery.hiring.title")}}</h3>
      <p>{{$t("component.gallery.hiring.p")}}</p>
      <a href="mailto:{{email}}?subject=SJOPintor%20Painter%20Application" class="">{{$t("component.gallery.hiring.button")}}</a>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  components: {
    // TopToolbar,
  },
  data: () => ({
    //
    google_url: 'google.com',
    rating: 5
  })
}

  // $scope.email = store.email;

  // store.getReviews()
  // .then(response => {
  //   // console.info('Google API');
  //   // console.table(response);
  //   // console.info('^ Google API ^');
  //   if (response.data) {
  //     console.log('SUCCESS GOOGLE');
  //     $scope.google_url = response.result.url;

  //     //temp until another review been added to check the value
  //     $scope.rating = response.result.reviews[0].aspects[0].rating;
  //     $scope.reviews = response.result.reviews;
  //     //console.table($scope.reviews);
  //   } else {
  //     $scope.offline = true;
  //     console.log('GOOGLE API OFFLINE');
  //   }
  // });
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// TESTIMONIALS
#section--testimonials {
  user-select: none;

  .left-side {
    padding: 1.6em;
    border-bottom: 1px solid #dce1e5;

    .google-logo {
      margin-bottom: 1.5em;
      display: block;
      max-width: 69px;
      outline: none;
      img {width: 100%}
    }

    .stars {
      margin-bottom: 1em;
    }

    .extra {
      margin-bottom: 2em;
      cursor: default;
    }

  }

  md-content.right-side {
    padding: 1.6em;

    md-list-item { padding: 1em 0; }
    star-rating { zoom: 0.45; }
  }

}

// @media screen and (max-width: 740px) and (orientation: landscape) {}
// @media screen and (max-width: 1099px) and (min-width: 940px) {}
// @media screen and (max-width: 939px) and (min-width: 640px) {}
// @media screen and (max-width: 639px) {}
// @media screen and (min-width: 640px) {}
</style>