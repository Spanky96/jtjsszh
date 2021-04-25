var  leftApp=new Vue({
    el: '#rightApp',
    data(){
      return {
		  
	  }
    },
    methods: {
		chart1: function (elid) {
			var myChart = echarts.init(document.getElementById(elid));
			var option = {
				backgroundColor: '',
				tooltip: { //提示框组件
					trigger: 'axis',
					formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
					axisPointer: {
						type: 'shadow',
						label: {
							backgroundColor: '#6a7985'
						}
					},
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 14,
					}
				},
				grid: {
					left: '5%',
					right: '5%',
					bottom: '5%',
					top: '15%',
					containLabel: true,
				},
				legend: {//图例组件，颜色和名字
					right: '5%',
					top: '5%',
					itemGap: 16,
					itemWidth: 18,
					itemHeight: 10,
					data: [{
						name: '计划',
						//icon:'image://../wwwroot/js/url2.png', //路径
					},
					{
						name: '完成',
					}],
					textStyle: {
						color: '#ffffff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 15,
					}
				},
				yAxis: [
					{
						type: 'category',
						//	boundaryGap: true,//坐标轴两边留白
						data: ['路线工程', '立交工程', '路基工程', '桥涵工程', '隧道工程', '交通工程'],
						axisLabel: { //坐标轴刻度标签的相关设置。
							textStyle: {
								color: '#B4E4FF',
								fontStyle: 'normal',
								fontFamily: '微软雅黑',
								fontSize: 12,
							},
							// rotate:50,
						},
						axisTick: {//坐标轴刻度相关设置。
							show: false,
						},
						axisLine: {//坐标轴轴线相关设置
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						splitLine: { //坐标轴在 grid 区域中的分隔线。
							show: true,
							lineStyle: {
								color: ['#fff'],
								opacity: 0.2
							}
						}
					}
				],
				xAxis: [
					{
						type: 'value',
						axisLabel: {
							textStyle: {
								color: '#B4E4FF',
								fontStyle: 'normal',
								fontFamily: '微软雅黑',
								fontSize: 12,
							},
                        },
                        interval: 1,
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#fff'],
								opacity: 0.2
							}
						}

					}
				],
				series: [
					{
						name: '计划',
						type: 'bar',
						data: [8, 7, 10, 4, 4, 2],
						barWidth: 10,
						barGap: 0,//柱间距离
						itemStyle: {
							normal: {
								show: true,
								color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: '#2b48a580'
								}, {
									offset: 1,
									color: '#3ca6b3ee'
								}]),

							}
						},
					},
					{
						name: '完成',
						type: 'bar',
						data: [7, 6, 5, 1, 2, 1],
						barWidth: 10,
						barGap: 0,//柱间距离
						itemStyle: {
							normal: {
								show: true,
								color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
									color: '#63804080'
								}, {
									offset: 1,
									color: '#ca840dee'
								}]),
							}
						},
					}
				]
			};
			myChart.setOption(option);
			// myChart.resize();
			tools.loopShowTooltip(myChart, option, { loopSeries: true });
		}
    },
	mounted() {
		setTimeout(() => {
            this.chart1('chart-gcjd');
        }, 300);
	},
 });
  