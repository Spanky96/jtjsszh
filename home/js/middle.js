var  middleApp=new Vue({
    el: '#middleApp',
    data(){
      return {
		  active:false,
	  }
    },
	mounted() {
		setTimeout(()=>{
			this.active=true;
		},300)
		// this.createLine(40,'#44e4e9',10,2,5,250,100,0);
	},
    methods: {
         
        
       
    },
 });
  