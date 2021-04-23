var  rightApp=new Vue({
    el: '#rightApp',
	mixins:[chartsinit],
    data(){
      return {
		  list: [],
		  tags: [
			  {name: '高速公路', active: false},
			  {name: '特大桥', active: false},
			  {name: '特长隧道', active: false},
			  {name: '港口码头', active: false},
			  {name: '航道', active: false},
			  {name: '船闸', active: false}
			]
	  }
    },
	methods: {
		showProjectDetail: function (item) {
			parent.vueObj.showProjectDetail(item);
		},
        selectTag: function (item) {
			this.list = [];
			this.tags.forEach(e => {
				e.active = false;
			});
			item.active = true;
			if (item.name == '高速公路') {
				this.list = [
					{name: '开州至梁平高速公路', active: false},
					{name: '奉建路', active: false}
				];
			}
		}
    },
	mounted() {
	   this.pie1('bjl','办结率',9,'#06b0d2');
	   this.pie1('jbl','即办率',39,'#48b6a7');
	   this.pie1('myl','满意率',79,'#b8a556');
	   this.pie1('tjl','退件率',99,'#b66b81');
	   this.pie2('wggl',[20,20,20,10],['在办', '待办','办结','超期'])
	   this.selectTag(this.tags[0]);
	},
  
  });
  