<template>
  <div>
    <generator :generator='barGenerator' :data='graphs' :config='barConfig'></generator>
  </div>
</template>

<script>
  import { svgBar } from 'd2b'
  import { Generator } from 'vue-d2b'

  export default {
    name: 'ScoreDistribution',
    components: {
      Generator
    },
    data () {
        return {
            barGenerator: svgBar().stackBy(function (d) {
                return d.stack;
            }),
            graphs: [
                {
                label: 'Bar Graph 1',
                stack: 1,
                values: [1,2,3,4,5]
                },
                {
                label: 'Bar Graph 2',
                stack: 1,
                values: [1,2,3,4,5]
                },
                {
                label: 'Bar Graph 3',
                stack: 2,
                values: [1,2,3,4,5]
                },
                {
                label: 'Bar Graph 4',
                stack: 2,
                values: [1,2,3,4,5]
                },
                {
                label: 'Bar Graph 5',
                stack: 3,
                values: [1,2,3,4,5]
                }
            ],
            barConfig: function(bar) {
                console.log(bar())
                // bar.stackBy();
            }
        }
    }
  }
</script>