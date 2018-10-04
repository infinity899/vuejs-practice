<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: ['data', 'options'],
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['January',  'June', 'July', 'November', 'December'],
        datasets: [
          {
            label: 'Social Media',
            backgroundColor: 'rgba(24, 227, 26, .2)',
            borderColor: 'rgba(24, 227, 26, 1)',
            data: [5,  7, 2, 13, 14],
          },
          {
            label: 'Search Engines',
            backgroundColor: 'rgba(64, 139, 248, .2)',
            borderColor: 'rgba(64, 139, 248, 1)',
            data: [7,  8, 4, 15, 15],
          },
          {
            label: 'Local SEO',
            backgroundColor: 'rgba(255, 184, 18, .2)',
            borderColor: 'rgba(255, 184, 18, 1)',
            data: [10,  12, 7, 18, 18],
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