  Vue.component("www",{
	  //template : '<button @click="num ++">{{vname}}--{{vage}}点击了{{num}}次</button>',
	  template : '<button @click="add1">点击了{{num}}次</button>',
	  //template : '<ul><li v-for="v in vusers">{{v.name}}--{{v.sex}}</li></ul>',
	  data(){
		  return{
			  num : 0
		  }
	  },
	  //props:["vname","vage"]
	  props:{
		  vusers:{
			  type :Array,
		      default:[]
		  }
	  },
	  methods:{
		  add1(){
			  this.$emit("vadd");
		  }
	  }
	  
  });