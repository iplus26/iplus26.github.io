// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
    ], function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));

        var option = {
            dataRange: {
                min: 0,
                max: 5,
                calculable: false
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    // selectedMode: 'multiple',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                    data: [
                        {
                            name: '四川',
                            // selected: true,
                            value: 5
                        },
                        {
                            name: '陕西',
                            // selected: true,
                            value: 5
                        },
                        {
                            name: '江苏',
                            // selected: true
                            value: 5
                        },
                        {
                            name: '云南',
                            // selected: true
                            value: 5
                        },
                        {
                            name: '福建',
                            // selected: true
                            value: 5
                        },
                        {
                            name: '北京',
                            // selected: true
                            value: 5
                        }, {
                            name: '河北',
                            // selected: true
                            value: 3
                        }, {
                            name: '广东',
                            value: 1
                        },
                        {
                            name: '香港',
                            value: 1
                        },
                        {
                            name: '湖南',
                            value: 1
                        },
                        {
                            name: '湖北',
                            value: 1
                        }
                    ]
                }
            ]
        };

        var theme = {
            dataRange: {
                show: false,
                color: ['#80CBC4', '#BCD3DE'],

                splitNumber: 3
            },
            map: {
                mapType: 'china',
                mapLocation: {
                    x: 'center',
                    y: 'center'
                },
                showLegendSymbol: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            textStyle: {
                                color: 'transparent'
                            }
                        },
                        areaStyle: {
                            color: '#BCD3DE' //rgba(135,206,250,0.8)
                        }
                    },
                    emphasis: {
                        label: {
                            show: false,
                            textStyle: {
                                color: 'transparent'
                            }
                        },
                        areaStyle: {
                            color: '#80CBC4'
                        }
                    }
                }
            }
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        myChart.setTheme(theme);
    }
);