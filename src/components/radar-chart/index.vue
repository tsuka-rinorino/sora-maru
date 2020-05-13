<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: {
    label: {
      type: Array,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    width: {
      default: 216,
      type: Number,
    },
    height: {
      default: 216,
      type: Number,
    },
  },
  mounted() {
    this.renderChart({
      labels: this.label,
      datasets: [
        this.data,
      ],
    },
    {
      maintainAspectRatio: false,
      scale: {
        ticks: {
          fontSize: 10,
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1,
        },
      },
    });
  },
};
</script>


<style lang="scss">
</style>
