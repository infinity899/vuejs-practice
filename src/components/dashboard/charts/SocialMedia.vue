<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    props: ['data', 'options'],
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['Done', 'Remaining'],
        datasets: [
          {
            label: 'Social Media',
            backgroundColor: ['rgba(24, 227, 26, .2)', 'rgba(24, 227, 26, 1)'],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 4,
            data: [15,  3],
          }
        ]
      },
        {
          legend: {
            display: false
          },
          responsive: false,
          label: {
            display: false
          },
          cutoutPercentage: 80,
          scales:
            {
              yAxes: [{
                display: false
              }],
              xAxes: [{
                display: false
              }]
            }
        })
    }
  }
</script>