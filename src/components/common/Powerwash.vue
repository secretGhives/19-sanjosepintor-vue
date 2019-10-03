<template>
  <section id="section--powerwash" class="content-wrapper" layout="row" layout-xs="column">
    <div class="left-side" flex="auto"></div>
    <div class="right-side" flex="auto" flex-gt-xs="50">
      <div class="text">
        <h2>{{$t("component.powerwash.title")}}</h2>
        <p>{{$t("component.powerwash.p")}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Powerwash',
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
#section--powerwash {
  user-select: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) { flex-direction: row; }

  .left-side {
    flex: 1 0 auto;
    @media screen and (min-width: 768px) { 
      flex: 1 1 100%;
      order: -1;
      min-height: 500px;
    }
    min-height: 300px;
    background-image:url('~/assets/images/powerwash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .right-side {
    background-color: $silver;
    color: $navy_hue;
    padding: 1em 0;
    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    @media screen and (min-width: 768px) { 
      flex: 1 1 100%;
      order: 1;
    }

    .text {
      margin: 1em;
      @media screen and (min-width: 640px) {
        margin: 3em;
      }
    }
  }
}
</style>