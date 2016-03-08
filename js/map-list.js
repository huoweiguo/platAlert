function getData(index){
    var myChart4 = echarts.init(document.getElementById("platTable"));
    var json = {
        backgroundColor: '#fff',
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['安全评分','实时舆情','资金流出','成交量','投资人'],
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
                data : ['02/29','02/28','02/27','02/26','02/25','02/24','02/23']
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
                        return value + "%";
                    }
                },
                splitLine : {
                    show: false
                }
            }
        ],
        series : [
            
            {
                name: '安全评分',
                type: 'line',
                data:[]
            },
            {
                name:'实时舆情',
                type: 'line',
                data: []
            },
            {
                name: '资金流出',
                type: 'line',
                yAxisIndex: 1,
                data: []
            },
            {
                name:'成交量',
                type: 'line',
                yAxisIndex: 1,
                data: []
            },
            {
                name: '投资人',
                type: 'line',
                yAxisIndex: 1,
                data: []
            }
        ]                                 
    }

    var oUl = document.getElementById("plat-ul");
    var aLi = oUl.children;
    var yq = [], save = [], money = [], cj = [], tz= [];

    var aDiv = aLi[index].children;

    for(var i=0; i<aDiv.length; i++){
        yq.push(parseFloat(aDiv[i].children[1].innerHTML));
        save.push(parseFloat(aDiv[i].children[2].innerHTML));
        money.push(parseFloat(aDiv[i].children[3].innerHTML));
        cj.push(parseFloat(aDiv[i].children[4].innerHTML));
        tz.push(parseFloat(aDiv[i].children[5].innerHTML));
    }

    json.series[0].data = yq;
    json.series[1].data = save;
    json.series[2].data = money;
    json.series[3].data = cj;
    json.series[4].data = tz;
    

    myChart4.setOption(json);
}