<template>
  <div class="nav-bar-container">
    <nav class="nav-bar width-container flex">
      <div class="links">
        <router-link :to="`/${$i18n.locale}/contact`">
          <span>{{$t('nav_bar.contact')}}</span>
        </router-link>
        <router-link to>
          <span>{{$t('nav_bar.about')}}</span>
        </router-link>

        <span title="change language" @click="setLang()">{{$t('nav_bar.changeLang')}}</span>

        <!-- <div class="locale-changer">
          <select v-model="$i18n.locale" @change="setLocale">
            <option
              v-for="(lang, i) in $i18n.availableLocales"
              :key="`Lang${i}`"
              :value="lang"
            >{{ lang }}</option>
          </select>
        </div>-->
      </div>

      <router-link :to="`/${$i18n.locale}/`">
        <img class="logo" src="../assets/svg/logo_with_name.svg" alt="Logo" />
      </router-link>

      <div class="spnoserd-container">
        <span>{{$t('nav_bar.spnoserd_by')}}</span>
        <img src alt="mobileye" />
        <img src alt="Intel" />
        <img src alt="Weizmann Institute of Science" />
      </div>
    </nav>
  </div>
</template>

<script>
// import { langService } from "../services/language.service.js";

export default {
  data() {
    return {
    };
  },
 created() {
    //  if(this.$route.params.lang==='en'){
    // console.log('en')
    // }
  },
  methods: {
    setLang() {
      switch (this.$route.params.lang) {
        case "he":
          this.$router.push({
            params: { lang: "en" }
          });
          break;
        case "en":
          this.$router.push({
            params: { lang: "he" }
          });
          break;
        default:
        // code block
      }
    },   
  }
};
</script>

