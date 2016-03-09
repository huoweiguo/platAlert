var myChart2 = echarts.init(document.getElementById('main'));
myChart2.setOption({
    backgroundColor: '#3f4a58',
    color: ['gold','aqua','lime'],
    title : {
        text: '预警分布图',
        x:'left',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    
    series : [
        {
            name: '全国',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            
            //城市坐标定位
            geoCoord: {
                '上海-8家平台': [121.4648,31.2891],
                '北京-9家平台': [116.4551,40.2539],
                '江苏-5家平台': [118.8062,31.9208],
                '广西-2家平台': [108.479,23.1152],
                '江西': [116.0046,28.6633],
                '福建': [118.1689,24.6478],
                '安徽-7家平台': [117.29,32.0581],
                '内蒙古': [111.4124,40.4901],
                '黑龙江': [127.9688,45.368],
                '天津-2家平台': [117.4219,39.4189],
                '广东-13家平台': [113.5107,23.2196],
                '西藏': [91.1865,30.1465],
                '浙江-6家平台': [119.5313,29.8773],
                '湖北-5家平台': [114.3896,30.6628],
                '辽宁': [123.1238,42.1216],
                '山东-9家平台': [117.1582,36.8701],
                '海南': [110.3893,19.8516],
                '河北-3家平台': [114.4995,38.1006],
                '福建': [119.4543,25.9222],
                '陕西': [109.1162,34.2004],
                '贵州': [106.6992,26.7682],
                '河南-2家平台': [113.4668,34.6234],
                '重庆': [107.7539,30.1904],
                '吉林': [125.8154,44.2584],
                '湖南': [113.0823,28.2568],
                '山西-1家平台': [112.3352,37.9413],
                '云南-1家平台': [102.9199,25.4663]
            }
        },

        {
            name: '',
            type: 'map',
            mapType: 'china',
            data:[],
           
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/20 // 显示圆圈的大小
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        label:{position:'top'}
                    }
                },
                data : [
                    {name:'湖北-5家平台',value:""},
                    {name:'浙江-6家平台',value:""},
                    {name:'河南-2家平台',value:""},
                    {name:'河北-3家平台',value:""},
                    {name:'江苏-5家平台',value:""},
                    {name:'广西-2家平台',value:""},
                    {name:'广东-13家平台',value:""},
                    {name:'天津-2家平台',value:""},
                    {name:'云南-1家平台',value:""},
                    {name:'山西-1家平台',value:""},
                    {name:'山东-9家平台',value:""},
                    {name:'安徽-7家平台',value:""},
                    {name:'北京-9家平台',value:""},
                    {name:'上海-8家平台',value:""}
                ]
            }
        }
    ]

});



function getPlatName(mk){
    var myChart3 = echarts.init(document.getElementById("com-list"));
    var json3 = {
        backgroundColor: 'transparent',
        title : {
            text: '',
            x:'50',
            y:'35',
            textStyle : {
                fontSize: 12,
                fontFamily:'Microsoft Yahei',
                color: '#666'
            }    
        },
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        grid : {
           borderWidth : 0
        },
        xAxis : [
            {
                type : 'category',
                //boundaryGap : false,
                data : ['02/23','02/24','02/25','02/26','02/27','02/28','02/29'],
                axisLine : {
                    lineStyle : {
                        width:0
                    }
                },
                splitLine : {
                    lineStyle : {
                        width : 0
                    }
                },
                axisTick : {
                    show : false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine : {
                    lineStyle : {
                        width:0
                    }
                },
                splitLine : {
                    lineStyle : {
                        type : "dashed"
                    }    
                }
            }
        ],
        series : [
            {
                name:'实时舆情',
                type:'line',
                data:[]
            }
        ]                 
    };

    var arr3 = [
        {
            name : '拍拍贷',
            data : [-11.85,0,0,0,-54.5,-36.8,-24.36]
        },

        {
            name : '信融财富',
            data : [0,0,0,0,-51.9,-34.85,-23.07]
        },

        {
            name : '点融网',
            data : [-42,-56.03,-55.15,-37.55,-25.56,-17.41,-11.5]
        },

        {
            name : '融金所',
            data : [0,0,0,0,0,0,-42.45]
        },

        {
            name : '恒融财富',
            data : [0,0,0,-43.36,-29.53,-20.11,-13.3]
        },

        {
            name : '礼德财富',
            data : [0,0,0,0,0,0,-56.26]
        },

        {
            name : '网利宝',
            data : [0,0,-56.03,-38.15,-25.96,-17.69,-11.7]
        },

        {
            name : '天玑汇富',
            data : [0,0,0,0,0,0,-56.26]
        },

        {
            name : '和诚德在线',
            data : [0,0,-54.93,-37.4,-25.46,-17.34,-56.61]
        },

        {
            name : 'e路同心',
            data : [0,0,0,0,0,0,-35.12]
        }
        
    ];
    json3.title.text = arr3[mk].name;
    json3.series[0].data = arr3[mk].data;
    myChart3.setOption(json3);
}


var myChart5 = echarts.init(document.getElementById("yqqs"));
myChart5.setOption({
    backgroundColor: '#fff',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['舆情','资金净流入（亿）','历史待还'],
        x : "right"
    },
    xAxis : [
        {
            type : 'category',
            position: 'bottom',
            boundaryGap: true,
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },

            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                //rotate: 45,
                margin: 8,
                formatter: '{value}'  
            },

            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            data : ['2015/3','2015/4','2015/5','2015/6','2015/7','2015/8','2015/9','2015/10','2015/11','2015/12','2016/1','2016/2']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'right',
            //min: 0,
            //max: 300,
            //splitNumber: 5,
            //boundaryGap: [0,0.1],
            
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                margin: 18,
                formatter: '{value}',    // Template formatter!
                textStyle: {
                    color: '#1e90ff',
                    fontFamily: 'verdana',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                }
            },
            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dotted',
                    width: 2
                }
            }
        },
        {
            type : 'value',
            splitNumber: 10,
            axisLabel : {
                formatter: function (value) {
                    // Function formatter
                    return value;
                }
            },
            splitLine : {
                show: false
            }
        }
    ],
    series : [
        
        {
            name: '舆情',
            type: 'line',
            data:[-2.95822,-3.10065,-4.16509,-6.86557,-7.16122,-3.53289,-4.645786,-2.778433,-6.26143,-3.952158,-3.802651,-3.145889]
        },
        {
            name:'资金净流入（亿）',
            type: 'line',
            yAxisIndex: 1,
            data: [323.45, 288.31, 389.18, 489.94, 339.13, 406.55, 378.01, 304.54, 155.12, 174.58, 239.53, 271.96]
        },
        {
            name: '历史待还',
            type: 'line',
            yAxisIndex: 1,
            data: [1518.03,1757.56,1932.14,2087.26,2391.8,2769.81,3176.36,3515.49,4005.43,4394.61,4682.92,5006.37]
        }
    ]                                 
});



