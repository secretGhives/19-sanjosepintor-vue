<template>
  <div id="section--contact-us" class="content-wrapper">
    <div class="contact-info" layout="column" layout-align="center start">
      <h2>{{$t("component.contact_us.title")}}</h2>
      <span class="contact-option phone">
        <img src="@/assets/images/telephone.svg" alt="phone-icon">
        <a :href="'tel:' + phone" title="Phone">{{phone}}</a>
      </span>
      <span class="contact-option email">
        <img src="@/assets/images/email.svg" alt="email-icon">
        <a :href="'mailto:' + email" title="email">{{email}}</a>
      </span>

      <div class="grouped">
        <h3>{{$t("component.contact_us.sub_title")}}</h3>
        <p>{{$t("component.contact_us.p")}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {
    // TopToolbar,
  },
  data: () => ({
    //
  }),
  computed: {
    author() {
      return this.$store.state.author
    },
    company() {
      return this.$store.state.company
    },
    cities() {
      return this.$store.state.cities
    },
    phone() {
      return this.$store.state.phone
    },
    email() {
      return this.$store.state.email
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// CONTACT DETAILS
#section--contact-us {
  background: $navy_hue;
  color: $silver;
  display: flex;
  flex-direction: column;
  text-align: left;

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 3em 2em;
    @media screen and (min-width: 768px) {
      margin: 3em 3em;
    }
  }

  .contact-option {
    margin-bottom: 1em;
    img { 
      vertical-align: middle;
      margin-right: 0.45em;
      width: 40px;
    }
  }
  a {
    font-size: 15px;
    color: $silver;
    text-decoration: none;
    &:hover { color: $blue_500; }
  }
  h2, h3 { color: $silver; }
  .grouped { 
    margin-top: 1em; 
    p { margin-top: 0; color: $silver; }
  }
}
</style>