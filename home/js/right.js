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
    },
	mounted() {
	},
  
  });
  