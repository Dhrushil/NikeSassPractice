<template>
  <v-app>
    <v-content>
      <transition name="fade" mode="out-in" >
      <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>

.fade-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
  
  
}

.fade-leave-active {
  animation-direction: reverse;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale3d(0.8, 7.3, 5.3);
  }

  100% {
    opacity: 1;
  }
}
</style>
