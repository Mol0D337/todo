<template>
  <div class="body">
    <vue-scratchable
            style="
              width: 440px; height: 600px;"
            v-slot="{ init }"
            :brushOptions="brush"
            :hideOptions="hide"
            getPercentageCleared
            @percentageUpdate="updatePoints"
    >
      <div class="wrapper">
        <img style="width: 440px; height: 600px; border-radius: 10px"
             :src="require('../assets/image/mehmet-turgut-kirkgoz-vnayhPykN5Q-unsplash.jpg')"
              @load="init()"
        >
      </div>
    </vue-scratchable>

    </div>
</template>

<script>
  import VueScratchable from 'vue-scratchable';
  import paperPattern from '../assets/image/natural-paper-texture.jpg';
  export default {
    name: 'Scratchable',
    components: { VueScratchable },
    data() {
      return {
        percentage: 0,
        hide: {
          type: 'pattern',
          src: paperPattern,
          repeat: 'repeat',
        },
        brush: {
          size: 100,
          shape: 'round',
        },
      };
    },
    methods: {
      updatePoints(percentage) {
        this.percentage = percentage;
      },
    },
  };
</script>

<style scoped lang="sass">


</style>
