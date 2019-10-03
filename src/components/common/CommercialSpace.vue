<template>
  <section id="section--commercial" class="content-wrapper" layout="row" layout-xs="column">
    <div class="left-side" 
      layout="column" layout-align="center center"
      flex="auto" flex-gt-xs="50" flex-order-gt-xs="-1">
      <div class="text">
        <h2 class="white">{{$t("component.commercial.title")}}</h2>
        <router-link to="/commercial" tag="a" class="cta-link white" title="Commercial painting details">{{$t("component.commercial.link")}}</router-link>
      </div>
    </div>
    <div class="right-side" flex="auto"></div>
  </section>
</template>

<script>
export default {
  name: 'CommercialSpace',
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

// COMMERCIAL REQUESTS
#section--commercial {
  user-select: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) { flex-direction: row; }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    @media screen and (min-width: 768px) { 
      flex: 1 1 100%;
      order: -1;
    }
    background-color: $navy_hue;
    padding: 1em 0;
    text-align: left;

    .text {
      padding: 0 1em;
      color: #fff;
      margin: 1em;
    }

    h2 { 
      color: $silver; 
      cursor: default;
    }

    a {
      font-family: Raleway,serif;
      font-weight: 400;
      font-style: italic;
      color: $silver;
      text-decoration: none;
      margin-bottom: 1em;
      display: block;

      &:hover { color: #fff; }
      &:after {
        content: '';
        height: 10px;
        width: 18px;
        background-image: url('~/assets/images/cta-arrow-white.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        display: inline-block;
        margin-left: 15px;
        transition: transform 250ms 0s ease;
      }
    }
  }

  .right-side {
    flex: 1 0 auto;
    @media screen and (min-width: 768px) { 
      flex: 1 1 100%;
      // order: -1;
      min-height: 500px;
    }
    min-height: 300px;
    background-image: url('~/assets/images/commercial.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>