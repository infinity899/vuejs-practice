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
            label: 'Local Seo',
            backgroundColor: ['#7D879A', '#A6B1C0'],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            data: [12,  9],
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
          cutoutPercentage: 70,
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