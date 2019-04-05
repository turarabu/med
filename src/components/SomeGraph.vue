<template lang="pug">
    div( class='container block chart-container' )
        canvas#chart
</template>

<script>
import '@/assets/chart.js'
import { setTimeout } from 'timers';

export default {
    mounted: create
}


function createConfig(gridlines, title) {
    return {
        type: 'line',
        data: {
            labels: ['1 января', '15 января', '25 января',
            '1 февраля', '15 февраля', '25 февраля',
            '1 марта', '15 марта', '25 марта'],
            datasets: [{
                label: 'Удачные',
                backgroundColor: 'RGB(227, 117, 118)',
                borderColor: 'RGB(227, 117, 118)',
                fill: false,
                data: [58, 82, 76, 66, 82, 76, 99, 82, 76]
            }, {
                label: 'Неудачные',
                fill: false,
                backgroundColor: '#3498db',
                borderColor: '#3498db',
                data: [10, 15, 15, 10, 2, 15, 25, 5, 15],
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: true,
                text: title
            },
            scales: {
                xAxes: [{
                    gridLines: gridlines
                }],

                
                yAxes: [{
                    beginAtZero:true,
                    gridLines: gridlines,
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10
                    }
                }]
            }
        }
    };
}

function create () {
    var self = this;
    [{
        title: 'Статистика по принятым решениям за прошедшие 3 месяца',
        gridLines: {
            display: true
        }
    }].forEach(function(details) {
        var container = self.$el;
        var canvas = self.$el.querySelector('#chart');

        container.appendChild(canvas);

        var ctx = canvas.getContext('2d');
        var config = createConfig(details.gridLines, details.title);
        var chart = new Chart(ctx, config);
        chart.onbeforeprint = function () {
            setTimeout(chart.resize, 500)
        }
    });
};
	

</script>

<style lang="stylus" scoped>

.container
    margin-right 16px
    position relative

#chart
    width 100% !important
    height 320px !important

</style>
