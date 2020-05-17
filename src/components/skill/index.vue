<template>
  <div class="skill">
    <div class="skill__list">
      <div class="skill__item">
        <v-radar-chart
          :data="front.data"
          :label="front.label"
        />
      </div>
      <div class="skill__item">
        <v-radar-chart
          :data="back.data"
          :label="back.label"
        />
      </div>
      <div class="skill__item">
        <v-radar-chart
          :data="other.data"
          :label="other.label"
        />
      </div>
    </div>
  </div>
</template>


<script>
import RadarChart from '../radar-chart/index.vue';

export default {
  components: {
    'v-radar-chart': RadarChart,
  },
  data() {
    return {
      front: {
        label: ['HTML', 'CSS', 'Scss', 'jQuery', 'Vue.js', 'TypeScript'],
        data: {
          label: 'フロントエンド',
          backgroundColor: 'rgba(247, 131, 172, 0.2)',
          borderColor: 'rgba(247, 131, 172, 1)',
          pointBackgroundColor: 'rgba(247, 131, 172, 1)',
          pointBorderColor: '#fafafa',
          pointHoverBackgroundColor: '#fafafa',
          pointHoverBorderColor: 'rgba(247, 131, 172, 1)',
          data: [5, 5, 5, 5, 5, 2],
          pointRadius: 3.5,
          borderWidth: 1,
        },
      },
      back: {
        label: ['PHP', 'MySQL', 'Word Press', 'EC-CUBE', 'Laravel', 'Contentful'],
        data: {
          label: 'バックエンド',
          backgroundColor: 'rgba(77, 170, 247, 0.2)',
          borderColor: 'rgba(77, 170, 247, 1)',
          pointBackgroundColor: 'rgba(77, 170, 247, 1)',
          pointBorderColor: '#fafafa',
          pointHoverBackgroundColor: '#fafafa',
          pointHoverBorderColor: 'rgba(77, 170, 247, 1)',
          data: [2, 1, 3, 4, 2, 2],
          pointRadius: 3.5,
          borderWidth: 1,
        },
      },
      other: {
        label: ['Photoshop', 'Illustrator', 'Adobe XD', 'Git', 'Docker', 'AWS'],
        data: {
          label: 'その他',
          backgroundColor: 'rgba(255, 169, 77,0.2)',
          borderColor: 'rgba(255, 169, 77,1)',
          pointBackgroundColor: 'rgba(255, 169, 77,1)',
          pointBorderColor: '#fafafa',
          pointHoverBackgroundColor: '#fafafa',
          pointHoverBorderColor: 'rgba(255, 169, 77,1)',
          data: [5, 5, 4, 3, 1, 2],
          pointRadius: 3.5,
          borderWidth: 1,
        },
      },
    };
  },
};
</script>


<style lang="scss">
.skill {

  &__list {
    pointer-events: none;
    display: flex;
    justify-content: space-between;
  }

  &__item {
  }
}
</style>
