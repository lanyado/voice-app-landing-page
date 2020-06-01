<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
 created() {
   console.log(this.$route.params.lang)
     if(this.$route.params.lang!=='en'&&'he'){
        this.$router.push({
            params: { lang: "he" }
      });
    }  
  },
}
</script>


