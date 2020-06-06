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
      <router-link :to="`/${$i18n.locale}/`" >
        <img id="logo" :src="logoUrl" alt="Logo"/>
      </router-link>

      <div v-if="$route.name==='contact'" class="funcs">
        
        <button @click="openShareDialog()" id="share-dialog-button">
          <img src="../assets/svg/share.svg" alt="share icon"/>
          {{ $t('actions-container.card2.share_btn') }}      
        </button>
        <div id="share-dialog" class="share-dialog">
          <span> {{ $t('actions-container.card2.share_dialog') }}       </span>
          <ul>
            <li>
              <a :href="whatsappLink" data-action="share/whatsapp/share" target="_blank">
                <img src="../assets/svg/whatsapp.svg" alt="whatsapp icon"/>
              </a>
            </li>
            <li>
              <a :href="telegramLink" target="_blank" >
                <img src="../assets/svg/telegram.svg" alt="telegram icon"/>
              </a>
            </li>
            <li>
            <a :href="facebookLink" target="_blank">
              <img src="../assets/svg/facebook.svg" alt="facebook icon"/>
            </a>
          </li>
        </ul>
      </div>
      <a href="##" class="close-popup"></a>

        <button class="record-btn" @click="open(appLink)">
        <img src="../assets/svg/blue-circle.svg" alt="white circle"/>
        {{ $t('nav_bar.record')}}
        </button>        
      </div>


      <div v-else class="spnoserd-container">
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

export default {
  mounted(){
    window.addEventListener('click', function(event) {
      if (event.target.id !== "toggle-1" && document.getElementById('toggle-1').checked)
        document.getElementById('toggle-1').checked = false;
    })
  },
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
       isContactPage: false
    };
  },
  computed: {
        logoUrl: function () {
        return this.scrolled||this.static ? this.logos['scrolled'][this.language] : this.logos['default'][this.language]
    },
    appLink: function () {
      switch (this.language) {
        case "he":
          return "https://corona.voca.ai/he/login";
          break;
        case "en":
          return "https://corona.voca.ai/en/login";
          break;
      }
  },
  },
  props: {
    homePage: {
      type: Boolean,
      default: true,
      required: true
    },
    language: {
      type: String,
      default: "he",
      default: true,
    },
    static: {
      type: Boolean,
      default: true,
      default: true,
    }
  },
 created() {
    this.switchLanguage(this.language)
    if (!this.static) window.addEventListener('scroll', this.handleScroll);

    // if (this.$route.path === "/:lang/contact"){
    //   this.isContactPage = true;
    //   console.log('contatct page')
    // }
    // else{
    //   console.log('NOOOOOO contatct page')
    // }
    // console.log(this.$route.path, " this.$route.path")
  },
  methods: {
    open: link => {
      window.open(link);
    },
    openShareDialog: () => {
      location.href ="#share-dialog";
      //document.getElementById('share-button').click();
    },
    setLang() {
      switch (this.language) {
        case "he":
          this.switchLanguage('en');          
          break;
        case "en":
          this.switchLanguage('he');
          break;
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

