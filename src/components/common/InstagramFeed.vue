<template>
  <section id="section--instagram-feed" class="content-wrapper" layout="column">
    <div class="text" ng-hide="offline">
      <h3>{{$t("component.instagram_feed.title")}}</h3>
      <!-- <p>{{$t("component.instagram_feed.p")}} <a :href="instagurl" target="_blank" rel="noreferrer">feed</a>.</p> -->
    </div>

    <div class="images" ng-hide="offline" layout="row" layout-xs="column" layout-align="space-around center" layout-wrap>
      <figure class="frame" v-for="(instagram, index) in instData" :key="index">
        <!-- <img :src="instagram.images.thumbnail.url" :data-large="instagram.images.standard_resolution.url" class="zoom animate image" alt="instagram thumbnail"> -->
        <img class="zoomable" alt="instagram image"
          :src="instagram.images.low_resolution.url"
          :data-original="instagram.images.standard_resolution.url">
      </figure>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Zooming from 'zooming'

export default {
  name: 'InstagramFeed',
  components: {
    //
  },
  data: () => ({
    //userid: "4808193211",
    userid: "self",
    clientid: "666e9d7296c244a2b5ad7c82671fc55e",
    token: "4808193211.666e9d7.d0668e1290a0400eb6154ff5f6f46885",
    limit: "12",
    url: "https://api.instagram.com/v1/users/",
    instData: []
  }),
  methods: {
    getInstagrams() {
      fetch(this.url + this.userid + '/media/recent/?access_token=' + this.token + '&count=' + this.limit)
      .then(response => response.json())
      .then(data => {
        // console.log(data.data)
        this.instData = data.data;
      })
      .catch( error => { new Error(error); })
      .finally(() => {
        const zooming = new Zooming({
          transitionDuration: 0.1
        });
        zooming.listen('.zoomable');
      });
    }
  },
  computed: {
    instagurl() {
      return this.$store.state.instagurl
    }
  },
  mounted() {
    // console.log('MOUNTED');
    this.getInstagrams();
    // const zooming = new Zooming({
    //   // options...
    // })
    // zooming.listen('.zoomable')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// INSTAGRAM-FEED
#section--instagram-feed {
  padding: 3em 0;

  .text { padding: 0 1em; }

  // .images {
  //   display: flex;
  //   flex-direction: column;
  //   @media screen and (min-width: 768px) {
  //     flex-direction: row;
  //     margin: 1rem;
  //   }
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  //   align-items: center;
  //   .image { vertical-align: middle; }
  // }

  // .frame {
  //   display: flex;
  //   column-count: 1;
  //   // column-gap: 1rem;
  //   @media (min-width: 768px) {
  //     column-count: 3;
  //   }
    
  //   margin: 1rem 0;
  //   padding: 0;
  //   line-height: 0;

  //   &:hover {
  //     box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  //   }

  //   img {
  //     display: block;
  //     border-radius: 6px;
  //     width: 100%;
  //     height: auto;
  //   }

  // }

  .images {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: dense;

    > .frame {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      color: #ffeead;

      > img {
        width: 100%;
        height: auto;
        border-radius: 6px;
        // object-fit: cover;
      }

    }

  }

}
</style>