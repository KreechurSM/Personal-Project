<template>
  <div class="Home">
    <div class="row justify-content-center">
      <h3 id="intro">Turning Coffee Into Code Since 2015!</h3>
    </div>
    <h1>Steve Martin</h1>
    <p>Full stack developer (BSc in Computer Science)</p>
    <section>
      <div class="container-fluid">
        <div class="row">
          <h3 class="section-title">Work</h3>
        </div>
        <div class="row">
          <div class="work-row col-12 justify-content-start">
            <p>
              Steve's first professional role was at SAP based in Dublin. This
              role consisted of interacting with customers to help them debug
              various access based issues they were having. Also during my time
              at SAP i worked in a team of 6 to develop a quiz platform for
              internal learning using the Sails MVC framework. Once he graduated
              he took on a role with DOCOsoft where he worked as part of a team
              on an insurance claims document management system using the
              Microsoft stack. Steve then went on to join Davra. At Davra, Steve
              utilises numerous microservices to interact with the Davra
              platform to provide IoT data insights visualised through a VueJS
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bio-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3>Bio</h3>
          </div>
        </div>
        <div class="row bio-row justify-content-start">
          <div class="col-1">
            <span class="bold">1996</span>
          </div>
          <div class="col-11">Born in Wicklow, Ireland.</div>
        </div>
        <div class="row bio-row justify-content-start">
          <div class="col-1">
            <span class="bold">2018</span>
          </div>
          <div class="col-11">HCM Product Support iXp Intern at SAP.</div>
        </div>
        <div class="row bio-row justify-content-start">
          <div class="col-1">
            <span class="bold">2019</span>
          </div>
          <div class="col-11">
            Graduated with First Class Honors BSc Computer Science from
            Technology University Dublin. Awarded Most Original Project for my
            final year project 'LogoViz'.
          </div>
        </div>
        <div class="row bio-row justify-content-start">
          <div class="col-1">
            <span class="bold">2019</span>
          </div>
          <div class="col-11">Software Developer at DOCOsoft.</div>
        </div>
        <div class="row bio-row justify-content-start">
          <div class="col-1"><span class="bold">2021</span></div>
          <div class="col-11">Software Engineer at Davra.</div>
        </div>
      </div>
    </section>
    <section>
      <h3 class="section-title">I <span id="heart">♥</span></h3>
      <span>
        Programming, Music, Sailing, Video Games, Photography, Machine Learning,
        Cars and Coffee
      </span>
    </section>
    <section>
      <h3 class="section-title">On the web</h3>
      <div class="row">
        <button type="button" class="btn btn-dark">LinkedIn</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style scoped>
#intro {
  background-color: rgb(49 49 52);
  border-radius: 5px;
  padding: 0.5em;
  width: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.bold {
  font-weight: bold;
  width: auto;
}

.work-row {
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  text-align: start;
}

.work-row p {
  padding-left: 12px;
}

.bio-row {
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  text-align: start;
}

.bio-section h3 {
  position: relative;
  text-align: start;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  --webkit-text-decoration: underline;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
}

section {
  margin-top: 20px;
  margin-bottom: 20px;
}

.section-title {
  position: relative;
  text-align: start;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  --webkit-text-decoration: underline;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
}

h3 {
  font-size: 1.5em;
}

#heart {
  font-size: 1.5em;
  color: red;
}
</style>
