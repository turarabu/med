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
                label: 'Поступившие',
                backgroundColor: 'RGB(227, 117, 118)',
                borderColor: 'RGB(227, 117, 118)',
                fill: false,
                data: [58, 82, 10, 46, 82, 76, 31, 82, 76]
            }, {
                label: 'Выписанные',
                fill: false,
                backgroundColor: '#3498db',
                borderColor: '#3498db',
                data: [40, 15, 15, 20, 56, 15, 25, 5, 15],
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
        title: 'Отчёт, о неврологических заболевающих по региону',
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
    margin 32px
    position relative

#chart
    width 100% !important
    height 320px !important

</style>
