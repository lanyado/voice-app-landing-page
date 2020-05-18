<template>
  <div>
    <nav-bar />

    <div class="welcome-container">
      <h1>הקול שלך יכול לנצח את הקורונה</h1>
      <h2>תרומת קול של דקה תוכל לעזור לקדם כלי איתור חינמי, מהיר וזמין לכולם</h2>
      <img src="../assets/svg/logo_big.svg" alt="Logo" />
      <button>הקליקו עכשיו!</button>
    </div>assets/svg/how_it_works_3.svg
    <div class="illustration-container"></div>

    <div class="explanation-container">
      <h3>איך זה עובד?</h3>
      <ul>
        <li>
          <img src="../assets/svg/how_it_works_3.svg" />
          <div>חוזרים לשגרה</div>
          <span>מפתחים אבחון לקורונה</span>
          <span>וחוזרים לשגרה</span>
        </li>

        <li>
          <img src="../assets/svg/how_it_works_2.svg" />
          <div>מקליטים</div>
          <span>מקליטים את הקול</span>
          <span>וממלאים עוד כמה פרטים</span>
        </li>

        <li>
          <img src="../assets/svg/how_it_works_1.svg" />
          <div>נכנסים</div>
          <span>נכנסים לאתר פעם ביום ועוד</span>
          <span>קצת מילים אולי</span>
        </li>
      </ul>

      <button>קרא עוד</button>
    </div>

    <div class="actions-container">
      <h2>קחו חלק במאבק בקורונה!</h2>

      <div>
        <img src="../assets/svg/hearts.svg" />
        <span>גם כן- יחד אנחנו חזקים יותר</span>
        <span>עודדו את המשפחה והחברים להקליט</span>
        <button>
          שתפו
          <img src />
        </button>
      </div>

      <div>
        <img src="../assets/svg/calendar.svg" />
        <span>תקדם את היוזמה אפילו יותר</span>
        <span>הקלטה יומית למשך כשבוע</span>
        <button>
          קבעו תזכורת ביומן
          <img src />
        </button>
      </div>
    </div>

    <div class="sponsors-container">
      <h4>המיזם שלנו מתקיים בזכותם</h4>
      <ul>
        <li>
          <div>Platinum</div>
          <img src alt />
        </li>

        <li>
          <div>Gold</div>
          <img src alt />
        </li>

        <li>
          <div>Silver</div>
          <img src alt />
        </li>
      </ul>
    </div>

    <div class="members-container">
      <h5>מי אנחנו</h5>
      <ul class="special-members">
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
      </ul>

      <ul class="members-names">
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
      </ul>
      <button>לפרטים נוספים</button>
    </div>

    <main-footer />
  </div>
</template>

<script>
import navBar from "../components/nav-bar";
import mainFooter from "../components/main-footer";

export default {
  name: "Home",
  components: {
    navBar,
    mainFooter
  }
};
</script>
