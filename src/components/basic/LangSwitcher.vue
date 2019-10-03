<template>
  <div :class="lang">
    <!-- <pre>{{language[lang]}}</pre> -->
    <a v-for="(item,key) in language" :key="key" role="button" :class="key" @click="changeLang(key)">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      // lang: this.$i18n.locale,
      language:{
        "en":"EN",
        "es":"ES"
      }
    };
  },
  mounted() {
    this.$i18n.locale = window.localStorage.getItem("lang") || this.$i18n.locale;
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      window.localStorage.setItem("lang", lang);
      // window.location.reload();
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

  .language {
    font-size: 13px;
    a {
      display: inline-block;
      padding: 0.2em;
      margin: 0.2em;
      border-radius: 3px;
      line-height: 1;
    }
    &.es > .es { border: 1px solid }
    &.en > .en { border: 1px solid }
  }
</style>