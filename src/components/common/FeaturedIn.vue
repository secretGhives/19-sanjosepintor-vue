<template>
  <section id="section--featured" class="content-wrapper" layout="column">
    <h4>{{$t("component.featured_in.title")}}</h4>
    <div class="logo-wrapper" 
      layout="row" 
      layout-align="space-around center" 
      layout-wrap>
      <img src="@/assets/images/sponsor_lanacion.png" alt="la nacion">
      <img src="@/assets/images/sponsor_lateja.png" alt="la teja">
      <img src="@/assets/images/sponsor_teletica.png" alt="teletica">
      <img src="@/assets/images/sponsor_ticotimes.png" alt="tico times">
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedIn',
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

// FEATURED IN
#section--featured {
  display: flex;
  flex-direction: column;
  user-select: none;

  h4 {
    text-align: center; 
    cursor: default;
    margin-top: 3em;
  }

  .logo-wrapper {
    padding: 0 1em;
    margin-bottom: 3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    img { padding: 1em; max-width: 160px; }
  }
}
</style>