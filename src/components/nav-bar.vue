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
        <!-- <router-link to="" > -->
        <span title="change language" @click="setLocale(i18n.locale)">{{$t('nav_bar.changeLang')}}</span>
        <!-- </router-link> -->

        <ul>
          <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
            {{locale}}
          </li>
        </ul>






        <!-- <select name="LeaveType" @change="onChange($event)" class="form-control" v-model="key">
          <option value="1">Annual Leave/ Off-Day</option>
          <option value="2">On Demand Leave</option>
        </select>-->

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
export default {
  data() {
    return {
      langs: ["he", "en"],
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    };
  },
  methods: {
    setLocale(x) {
      // this.$18n.locale= locale
      console.log("localeeeeeeee", x);
      ///לגלות מה השפה לפי הURL PARAM כמו בMAIN.JS
    },
   switchLocale(locale){
     if(this.i18n.locale!==false){
       this.i18n.locale=locale;
       const to = this.$router.resolve({ paprams: {locale}})
     }
   }
  }
};
</script>

