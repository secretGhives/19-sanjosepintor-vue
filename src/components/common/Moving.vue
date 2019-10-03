<template>
  <section id="section--moving" class="content-wrapper" layout="row" layout-xs="column">
    <div class="left-side" flex="auto" flex-gt-xs="50">
      <div class="text">
        <h2 class="white">{{$t("component.moving.title")}}</h2>
        <p>{{$t("component.moving.p")}}</p>
      </div>
    </div>
    <div class="right-side" flex="auto"></div>
  </section>
</template>

<script>
export default {
  name: 'Moving',
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
#section--moving {
  user-select: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) { flex-direction: row; }

  .left-side {
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

  .right-side {
    flex: 1 0 auto;
    @media screen and (min-width: 768px) { 
      flex: 1 1 100%;
      order: -1;
      min-height: 500px;
    }
    min-height: 300px;

    background-image: url('~/assets/images/moving.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>