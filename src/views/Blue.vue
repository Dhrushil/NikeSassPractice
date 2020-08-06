<template>
  <v-app class="main">
    <v-container class="bg" fluid>
      <v-app-bar prominent dark color="transparent" flat class="navbar">
        <h2 class="nike"><v-btn text x-large style="font-size:100%" href="http://www.nike.com/">NIKE</v-btn></h2>
        <v-spacer></v-spacer>
        <v-btn text icon>
          <v-icon x-large>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- LEFT SIDE -->
      <v-container class="left" fluid style="width: 5%">
        <h2 class="vertical">
          SHOP NOW
          <v-icon color="white" x-large>mdi-cart</v-icon>
        </h2>
      </v-container>

            

      <!-- RIGHT SIDE -->
      <v-container class="right" fluid style="width: 5%">
        <h2 class="vertical">COLOURS
          <v-btn x-small fab color="red" elevation="0" href="/red"></v-btn>
          <v-btn x-small fab color="blue" elevation="0" href="/blue"></v-btn>
        </h2>
        <div style="display:inline-block; width: 50%; top: 70%; position: absolute; right: 50%">
          <v-btn icon text color="purple" class="pa-md-10">
            <v-icon x-large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon text color="orange" class="pa-md-10">
            <v-icon x-large>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon text color="blue" class="pa-md-10">
            <v-icon x-large>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-container>


      <!-- CENTER SIDE -->
      <v-container class="center" fluid style="width:80%">
        <v-card height="80%" width="100%" color="transparent" flat>
          <v-card-title class="subtitle" style="font-size:500%">NIKE AIR_</v-card-title>
          <v-card-title class="maintitle" style="font-size:2900%">VORTEX</v-card-title>
          <v-img src="../assets/bluevortex.png" style="top: -30%; right: -10%; width: 80%"></v-img>
        </v-card>
        <p v-for="shoedesc in nike" v-bind:key="shoedesc" class="shoetext">{{shoedesc.text}}</p>
        <v-rating
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          hover
          size="48"
          style="top:4%; position: relative"
        ></v-rating>
      </v-container>


      <!-- BOTTOM SIDE -->
      <v-container class="bottom" fluid style="width: 97%">
        <v-btn text x-large color="white">b a c k</v-btn>
        <h2 class="bottom-title">THE VORTEX</h2>
      </v-container>



    </v-container>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data: () => ({
    nike: [
      { text: "The Nike Vortex gets remixed to conquer wet." },
      {
        text:
          "A water-repellent upper helps keep your feet dry. Reflective elements along with an outsole"
      },
      {
        text:
          "designed for wet surfaces let you run with confidence despite the weather."
      }
    ],
    rating: 4.3
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
.bg {
  background-color: #69a0f2;
  height: 100%;
}
.nike {
  position: relative;
  top: 3%;
  left: 1%;
  font-family: "Fugaz One", cursive;
  font-size: 200%;
  color: white;
  text-decoration: none;
  text-decoration-color: white;
}
.navbar {
  position: relative;
  top: 3%;
}
.left {
  position: absolute;
  height: 80%;
  overflow: hidden;
}
.right {
  position: absolute;
  height: 80%;
  right: 2%;
  overflow: hidden;
}
.center {
  position: absolute;
  height: 70%;
  right: 11%;
}
.bottom {
  position: absolute;
  height: 10%;
  bottom: 0;
  overflow: hidden;
}
.vertical {
  position: relative;
  top: 20%;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 280%;
}
.bottom-title {
  position: relative;
  left: 50%;
  top: -50%;
  color: white;
  font-family: "Open Sans", sans-serif;
}
.main {
  overflow: hidden;
}
.maintitle {
  position: relative;
  top: 35%;
  font-family: "Oswald", sans-serif;
  color: rgba(0, 0, 0, 0.151);
}
.subtitle {
  position: relative;
  top: 6%;
  font-family: "Work Sans", sans-serif;
  color: white;
  right: -67%;
}
p {
  line-height: 0.3;
}
.shoetext {
  position: relative;
  top: 4%;
  font-size: 130%;
  color: white;
  font-family: "Oswald", sans-serif;
}
</style>