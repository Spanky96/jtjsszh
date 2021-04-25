const chartsinit = {
	data() {
		return {

		}
	},
	methods: {
		renderChart: function(option, containerId, tooltip) {
			var myChart = echarts.init(document.getElementById(containerId));
			myChart.setOption(option); // 为echarts对象加载数据 
			if (tooltip) {
				tools.loopShowTooltip(myChart, option, {
					loopSeries: true,
					interval: 3000
				});
			}
		},
		namevalue(name, value) {
			var nvobj = name.map((obj, i) => {
				return {
					name: obj,
					value: value[i]
				}
			})
			return nvobj
		},
		// 环形饼图
		pie1(id, title, data, color, tooltip = true) {
			var option = {
				title: {
					text: data + '%', //百分比
					textStyle: {
						color: '#fff',
						fontSize: 24
					},
					itemGap: 0,
					left: 'center',
					top: '26%',
				},
				graphic: [{
					type: 'text',
					z: 100,
					left: 'center',
					top: '85%',
					style: {
						fill: '#fff',
						text: title,
						font: '18px Microsoft YaHei'
					},
				}],
				angleAxis: {
					max: 100,
					clockwise: true, // 逆时针
					show: false,
					startAngle: 270,
				},
				radiusAxis: {
					type: 'category',
					show: true,
					axisLabel: {
						show: false,
					},
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false
					},
				},
				polar: [{
					center: ['50%', '38%'], //中心点位置
					radius: '120%' //图形大小
				}],
				series: [{
						type: 'bar',
						z: 3,
						data: [data],
						showBackground: false,
						backgroundStyle: {
							color: color,
						},
						coordinateSystem: 'polar',
						roundCap: false,
						barWidth: 10,
						itemStyle: {
							normal: {
								color: 'transparent',
								shadowColor: color,
								borderWidth: 4,
								borderColor: color,
								shadowBlur: 10
							}
						},
					},
					{
						type: 'pie',
						center: ['50%', '38%'], //中心点位置
						name: '内层细圆环',
						radius: ['72%', '68%'],
						startAngle: 270,
						hoverAnimation: false,
						clockWise: true,
						itemStyle: {
							normal: {
								color: 'transparent',
								borderColor: '#00379f',
								shadowBlur: 1
							}
						},
						tooltip: {
							show: false,
						},
						label: {
							show: false
						},
						data: [100]
					}
				]
			}
			this.renderChart(option, id, tooltip)
		},
		//环形图
		pie2(id, dataarray, namearray, tooltip = true) {
			var baseData = this.namevalue(namearray, dataarray);
			let totalSum = 0;
			for (var i = 0; i < baseData.length; i++) {
				totalSum += baseData[i].value
			}
			var bjl = parseInt(dataarray[2] / totalSum * 100);
			let color = ['#37fbed', '#ff5964', '#ffdf73', '#499df5'];
			var option = {
				tooltip: {
					trigger: 'item',
					formatter: function(params) {
						return params.name + '：' + params.value + '件<br>占比：' + params.percent.toFixed(2) +
							'%'
					},
					textStyle: {
						fontSize: 20,
					}
				},
				legend: {
					data: namearray,
					icon: 'vertical',
					right: 10,
					top: 'center',
					orient: 'vertical',
					itemWidth: 10,
					itemHeight: 6,
					textStyle: {
						color: '#fff',
						fontSize: 18,
					}

				},
				title: [{
					text: '\xa0\xa0' + '{name|' + bjl + '%}\n{val|办结率}',
					top: '32%',
					left: '19%',
					textStyle: {
						rich: {
							name: {
								fontSize: 28,
								fontWeight: 'normal',
								color: '#4ce8ff',
								padding: [5, 5, 5, 0],
							},
							val: {
								fontSize: 20,
								color: '#fff',
								padding: [0, 0, 0, 10],
							},
						}
					}
				}],

				series: [
					{
						type: 'pie',
						color: color,
						radius: ['56%', '67%'],
						center: ['35%', '50%'],
						label: {
							show: false,
							position: 'center'
						},
						data: baseData
					},
				]
			};
			this.renderChart(option, id, tooltip)
		}
	}
}
