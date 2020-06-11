<template>
  <div class="nav-bar-container">
    <header :class="this.scrolled||this.static ? 'scrolled': ''">
      <!-- <label for="toggle-1" class="toggle-menu">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </label>
      <input type="checkbox" id="toggle-1" /> -->

      <div @click.stop="" class="toggle-menu" :class="{'open-menu':openMenu}">    
      <button @click.stop="toggleMemu" class="x-btn">X</button>
         <ul>
          <li>
            <router-link to>
              <span @click.stop="toggleMemu" title="change language" @click="setLang()">{{$t('nav_bar.changeLang')}}</span>
            </router-link>
          </li>
          <li v-if="homePage">
            <router-link :to="`/${$i18n.locale}/contact`">
              <span @click.stop="toggleMemu">{{$t('nav_bar.contact')}}</span>
            </router-link>
          </li>
          <li v-else>
            <router-link :to="`/${$i18n.locale}/`">
              <span @click.stop="toggleMemu">{{$t('nav_bar.about')}}</span>
            </router-link>
          </li>
           <li>
            <a href="#terms-dialog">
                <span @click.stop="toggleMemu">{{$t('nav_bar.terms.link')}}</span>
            </a>
        </li>
        </ul>  
              </div>
      
      <div class="hamburger" :class="{'open-menu':openMenu}">
          <img
            @click.stop="toggleMemu"
            class="hamburger"
            :class="{'open-menu':openMenu}"
            src="../assets/svg/menu.svg"
            alt
          />
      </div>


      <nav class="nav-bar width-container flex">
        <div v-if="$route.name==='contact'" class="funcs">
          <button class="record-btn" @click="open(appLink)">
            <img src="../assets/svg/blue-circle.svg" alt="white circle" />
            <span> {{ $t('nav_bar.record')}} </span>
          </button>
          <button @click="openShareDialog()" class="share-btn">
            <img src="../assets/svg/blue-share.svg" alt="share icon" />
          </button>
          <div id="share-dialog" class="share-dialog">
            <img src="../assets/svg/close.svg" 
                alt="x" 
                class="close-icon"
                onclick="window.location='##';"
            />
            <span>{{ $t('actions-container.card2.share_dialog') }}</span>
            <ul>
              <li>
                <a :href="whatsappLink" data-action="share/whatsapp/share" target="_blank">
                  <img src="../assets/svg/whatsapp.svg" alt="whatsapp icon" />
                </a>
              </li>
              <li>
                <a :href="telegramLink" target="_blank">
                  <img src="../assets/svg/telegram.svg" alt="telegram icon" />
                </a>
              </li>
              <li>
                <a :href="facebookLink" target="_blank">
                  <img src="../assets/svg/facebook.svg" alt="facebook icon" />
                </a>
              </li>
            </ul>
          </div>
          <a href="##" class="close-popup"></a>
        </div>

        <div v-else class="spnoserd-container">
          <span>{{$t('nav_bar.spnoserd_by')}}</span>
          <img src="../assets/png/mobileye-logo.png" alt="mobileye" />
          <img src="../assets/png/intel-logo.png" alt="Intel" />
        </div>       
      </ul>
      <router-link :to="`/${$i18n.locale}/`" >
        <img id="logo" :src="logoUrl" alt="Logo"/>
      </router-link>
    

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
            <router-link :to="`/${$i18n.locale}/`">
              <span>{{$t('nav_bar.about')}}</span>
            </router-link>
          </li>
           <li>
            <a href="#terms-dialog">
                <span>{{$t('nav_bar.terms.link')}}</span>
            </a>
        </li>
        </ul>        
      </nav>
    </header>
    <div id="terms-dialog" class="terms-dialog">
        <img src="../assets/svg/close.svg" 
        alt="x" 
        class="close-icon"
        onclick="document.querySelector('.close-popup').click();"
        />
        <h4> {{$t('nav_bar.terms.title')}} </h4>

        <span> {{$t('nav_bar.terms.body.title1')}} </span>
        <p> {{$t('nav_bar.terms.body.text2')}} </p>

        <span> {{$t('nav_bar.terms.body.title2')}} </span>
        <p> {{$t('nav_bar.terms.body.text2')}} </p>

        <span> {{$t('nav_bar.terms.body.title3')}} </span>
        <p> {{$t('nav_bar.terms.body.text3')}} </p>

        <span> {{$t('nav_bar.terms.body.title4')}} </span>
        <p> {{$t('nav_bar.terms.body.text4')}} </p>

        <span> {{$t('nav_bar.terms.body.title5')}} </span>
        <p> {{$t('nav_bar.terms.body.text5')}} </p>

        <span> {{$t('nav_bar.terms.body.title6')}} </span>
        <p> {{$t('nav_bar.terms.body.text6')}} </p>

        <span> {{$t('nav_bar.terms.body.title7')}} </span>
        <p> {{$t('nav_bar.terms.body.text7')}} </p>
    </div>
    <a href="##" class="close-popup"></a>
  </div>
</template>

<script>
import navBarStyles from "../design/components/nav-bar.scss";

export default {
  
  mounted() {
    window.addEventListener("click", function(event) {
        if (this.openMenu){
          console.log("clicked")
            toggleMemu();
        }
        //event.target.id !== "toggle-1" &&
        //document.getElementById("toggle-1").checked
        //document.getElementById("toggle-1").checked = false;
    });
    document.body.addEventListener("click",this.handleClick)
  },
  destroyed(){
    document.body.removeEventListener("click",this.handleClick)
  },
  data() {
    return {
      logos: {
        default: {
          he: require("../assets/svg/logo_text_white_he.svg"),
          en: require("../assets/png/logo_text_white_en.png")
        },
        scrolled: {
          he: require("../assets/svg/logo_text_blue_he.svg"),
          en: require("../assets/png/logo_text_blue_en.png")
        }
      },
      scrolled: false,
      isContactPage: false,
      ltrLangs : ["en"],
      isLtr : false,
      // isActive: false,
      openMenu: false,
    };
  },
  computed: {
    isLtr: function() {
      return this.ltrLangs.includes(this.$route.params.lang);      
    },
    appLink: function() {
      switch (this.language) {
        case "he":
          return "https://corona.voca.ai/he/login";
          break;
        case "en":
          return "https://corona.voca.ai/en/login";
          break;
      }
    },
    whatsappLink: function() {
      switch (this.language) {
        case "he":
          return "whatsapp://send?text=גם אני תרמתי את הקול שלי לטובת המאבק בקורונה ואחזור לתרום גם מחר - זה לוקח רק דקה. https://corona.voca.ai/he/login";
          break;
        case "en":
          return "whatsapp://send?text=I donated my voice to fight COVID-19 and I will donate again tomorrow - It only takes a minute. Sign in and record - It is our responsibility https://corona.voca.ai/login";
          break;
      }
    },
    telegramLink: function() {
      switch (this.language) {
        case "he":
          return "https://telegram.me/share/url?url=https://corona.voca.ai/he/login&text=גם אני תרמתי את הקול שלי לטובת המאבק בקורונה ואחזור לתרום גם מחר - זה לוקח רק דקה.";
          break;
        case "en":
          return "https://telegram.me/share/url?url=https://corona.voca.ai/he/login&text=I donated my voice to fight COVID-19 and I will donate again tomorrow - It only takes a minute. Sign in and record - It is our responsibility.";
          break;
      }
    },
    facebookLink: function() {
      switch (this.language) {
        case "he":
          return "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcorona.voca.ai%2Fhe%2Flogin&amp;src=sdkpreparse";
          break;
        case "en":
          return "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcorona.voca.ai%2Fhe%2Flogin&amp;src=sdkpreparse";
          break;
      }
    },
    logoUrl: function() {
      return this.scrolled || this.static
        ? this.logos["scrolled"][this.language]
        : this.logos["default"][this.language];
    }
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
      default: true
    },
    static: {
      type: Boolean,
      default: true,
      default: true
    }
  },
  created() {
    if (!this.static) window.addEventListener("scroll", this.handleScroll);  
    
    this.switchLanguage(this.$route.params.lang);
    // if (this.ltrLangs.includes(this.$route.params.lang)) { //english mode 
    //   console.log('en mode')
    //   this.isLtr=true

    //   } else this.isLtr=false; //hebrow mode  
  },
  methods: {
    handleClick(){
      if (this.openMenu) {
        this.toggleMemu();
      }
      
    },
    toggleMemu() {
      console.log('toggle Menu');
      this.isActive = false;
      this.openMenu = !this.openMenu;
      document.body.classList.toggle("menu-open");
    },
    open: link => {
      window.open(link);
    },
    openShareDialog: () => {
      location.href = "#share-dialog";
      //document.getElementById('share-button').click();
    },
    setLang() {
      console.log("setLang()")
      switch (this.$route.params.lang) {
        case "he":
          this.switchLanguage("en");
          break;
        case "en":
          this.switchLanguage("he");
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
    handleScroll(event) {
      if (
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0) >= 100
      ) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }

    }, 
    openTermsDialog: () => {
      location.href ="#terms-dialog";
      //document.getElementById('share-button').click();
    }
  }
};
</script>