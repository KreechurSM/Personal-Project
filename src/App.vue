<template>
  <div id="nav">
    <router-link to="/" class="nav-name">Steve Martin</router-link> |
    <router-link to="/experience">Experience</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/about">Posts</router-link>
  </div>
  <!-- <Hero></Hero> -->
  <div class="container">
    <img class="hero" src="@/assets/placehold.gif" />
    <router-view />
  </div>
</template>

<script>
// import Hero from "@/components/HeroImage.vue";

export default {
  name: "App",
  components: {
    // Hero,
  },
};
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
  background: #202023;
}

body {
  margin: 0;
}

html {
  height: 100%;
}

#nav {
  padding: 20px;
  width: 100%;
  position: fixed;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #eeeeee;
}

#nav a.router-link-exact-active {
  color: #f5ccad;
}

#nav-name {
  color: #eeeeee;
}

div #id {
  padding-top: 20px;
}

.content {
  padding-top: 50px;
}

.hero {
  padding-top: 5em;
  margin-bottom: 0.5em;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
}
</style>
