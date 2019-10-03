<template>
  <section id="section--booking" class="content-wrapper" layout="column">
    <div class="cta-icon">
      <img class="svg" src="@/assets/images/book-white.svg" alt="booklet">
    </div>

    <h2 class="white">{{$t("component.book_now.title")}}</h2>

    <div class="action-bar" layout layout-align="center center">
      <router-link to="/booking" tag="button" class="md-button md-raised input-submit md-outline">{{$t("component.book_now.button")}}</router-link>
    </div><!-- End of Action-Bar -->
  </section>
</template>

<script>
export default {
  name: 'BookNow',
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

// BOTTOM BOOKING
#section--booking {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $blue_500;
  padding: 3em 0em;
  user-select: none;

  .cta-icon { 
    margin: 2em 0;
    text-align: center; 
  }

  h2 { 
    color: $white;
    text-align: center;
    //margin: 0 0 2em;
    max-width: 900px;
    cursor: default;
  }

  .action-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  // .input-submit { color: $silver; }
}
</style>