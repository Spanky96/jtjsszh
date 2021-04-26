var  rightApp=new Vue({
    el: '#rightApp',
	mixins:[],
    data(){
      return {
		list: [
			{name: '开州南互通', active: false, type: '新建'},
			{name: '原路加宽段', active: false, type: '改建'}
		]
	  }
    },
	methods: {
		showProjectDetail: function (item) {
			parent.vueObj.showProjectDetail(item);
		},
		pieChart: function (id, data) {
			var myChart = echarts.init(document.getElementById(id));
			var option = {
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)',
					backgroundColor: '#6a7985aa',
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 14,
					}
				},
				grid: {
					left: '5%',
					right: '15%',
					bottom: '15%',
					top: '10%',
					containLabel: true,
				},
				legend: {//图例组件，颜色和名字
					right: 'right',
					top: '5%',
					orient: 'vertical',
					itemGap: 16,
					itemWidth: 10,
					itemHeight: 10,
					data: data.map(n => n.name),
					textStyle: {
						color: '#b4e4ff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 15
					}
				},
				series: [
					{
						type: 'pie',
						name: '总长',
						radius: [0, 90],
						center: ['43%', '50%'],
						data: [{name: '总长', value: '50'}],
						hoverAnimation: false,
						itemStyle: {
							color: 'rgba(180, 228, 255, 0.1)'
						},
						label: {show: false}
					},
					{
						name: '总长（KM）',
						type: 'pie',
						radius: [20, 80],
						center: ['43%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 5
						},
						label: {
							fontSize: 12,
							color: '#b4e4ff'
						},
						labelLine: {
							lineStyle: {
								color: '#b4e4ff'
							}
						},
						data: data
					},
					{
						type: 'pie',
						name: '总长',
						radius: [0, 10],
						center: ['43%', '50%'],
						data: [{name: '总长', value: '50'}],
						hoverAnimation: false,
						itemStyle: {
							color: '#ffffff'
						},
						label: {show: false}
					},
					{
						type: 'pie',
						name: '总长',
						radius: [10, 22],
						center: ['43%', '50%'],
						data: [{name: '总长', value: '50'}],
						hoverAnimation: false,
						itemStyle: {
							color: '#000000'
						},
						label: {show: false}
					},
					
				]
			};
			myChart.setOption(option);
			// myChart.resize();
			tools.loopShowTooltip(myChart, option, { loopSeries: true });
			// setTimeout(function (){
			// 	window.onresize = function () {
			// 		myChart.resize();
			// 	}
			// }, 1000);
		},
		pieChartJg: function (id, label, value, total) {
			var myChart = echarts.init(document.getElementById(id));
			var option = {
				grid: {
					left: '5%',
					right: '5%',
					bottom: '5%',
					top: '5%',
				},
				series: [{
					type: 'gauge',
					progress: {
						show: true,
						width: 18
					},
					axisLine: {
						lineStyle: {
							width: 18
						}
					},
					pointer: {show: false},
					axisTick: {
						show: false
					},
					splitLine: {
						show:false,
					},
					axisLabel: {
						show:false,
					},
					anchor: {
						show:false,
					},
					title: {
						show: false
					},
					detail: {
						show: false,
					},
					data: [
					{
						value: value / total * 100
					}]
				}]
			};
			myChart.setOption(option);
		}
    },
	mounted() {
		this.pieChart('pieChartBridge', [
			{name: '特大桥', value: 12},
			{name: '大桥', value: 12},
			{name: '中桥', value: 18},
			{name: '小桥', value: 5},
			{name: '涵洞', value: 3},
		]);
		this.pieChartJg('chartJg1', '桥梁工程', 22, 50);
		this.pieChartJg('chartJg2', '隧道工程', 5, 50);
		this.pieChartJg('chartJg3', '路基工程', 23, 50);
	},
  
  });
  