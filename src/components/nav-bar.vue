<template>
  <div class="nav-bar-container">
    <header :class="this.scrolled||this.static ? 'scrolled': ''">
    <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
    <input type="checkbox" id="toggle-1">

    <nav class="nav-bar width-container flex">
      <ul class="links">

        <li>
        <router-link to>
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
        </router-link>
        </li>
        <li v-if="homePage">
          <router-link :to="`/${$i18n.locale}/contact`">
            <span>{{$t('nav_bar.contact')}}</span>
          </router-link>
        </li>
        <li v-else>
          <router-link :to="`/${$i18n.locale}/`" >
            <span>{{$t('nav_bar.about')}}</span>
          </router-link>
        </li>
      </ul>
      <img id="logo" :src="logoUrl" alt="Logo" />

      <div class="spnoserd-container">
        <span>{{$t('nav_bar.spnoserd_by')}}</span>
        <img src="../assets/png/mobileye-logo.png" alt="mobileye" />
        <img src="../assets/png/intel-logo.png" alt="Intel" />
        <img src="../assets/png/weizman-logo.png" alt="Weizmann Institute of Science" />
      </div>
    </nav>
    </header>
  </div>
</template>

<script>
import navBarStyles from '../design/components/nav-bar.scss';

// import { langService } from "../services/language.service.js";

export default {
  data() {
    return {
        logos: {
          default:{
            'he': require('../assets/svg/logo_text_white_he.svg'),
            'en': require('../assets/png/logo_text_white_en.png')
          },
          scrolled:{
            'he': require('../assets/svg/logo_text_blue_he.svg'),
            'en': require('../assets/png/logo_text_blue_en.png')
          }
        },
        scrolled: false,
    };
  },
  computed: {
      logoUrl: function () {
        return this.scrolled||this.static ? this.logos['scrolled'][this.language] : this.logos['default'][this.language]
    }
  },
  props: {
    homePage: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      default: "he"
    },
    static: {
      type: Boolean,
      default: true
    }
  },
 created() {
    this.switchLanguage(this.language)
    if (!this.static) window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    setLang() {
      switch (this.language) {
        case "he":
          this.switchLanguage('en');          
          break;
        case "en":
          this.switchLanguage('he');
          break;
        default:
        // code block
      }
    },
    switchLanguage(language) {
      this.language = language;

      const LTR_LANGUAGES = ['en'];
      const body = document.body;
      if (LTR_LANGUAGES.includes(language))
      {
          body.classList.add("ltr");
      }
      else
          body.classList.remove("ltr");
          
      this.$router.push({
          params: { lang: this.language }
      });

      this.$emit('changeLogo', this.logos['default'][this.language]);
    },
    handleScroll (event) {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ) >= 100 ) {
          this.scrolled = true;
      } 
      else {
          this.scrolled = false;
      }
    }, 
  }
};
</script>

