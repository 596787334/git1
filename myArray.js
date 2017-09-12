/*
* @Author: shuangshuang
* @Date:   2017-09-12 18:03:44
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-09-12 19:01:34
*/
 let arr=new myArray('a','b','c','v');
 arr.push(1,2,3,4,1);
 let b=arr.some(function(value){
 		return typeof value == 'number';
 })
 var a=arr.first(1);
 var c=arr.reverse(arr);
 var d=arr.last(2);
 var e=arr.filter(function(value){
 	  return value>2;
 })
 var f=arr.link1(arr);
 var g=arr.map(function(value){
 	 return value*2;
 })
 console.log(g);
 console.log(f);
 console.log(e);
 console.log(d);
 console.log(c);
 console.log(a);
 console.log(arr);
 console.log(b);



 function myArray(){
  	  for(let i=0;i<arguments.length;i++){
  	  	this[i]=arguments[i];
  	  }
  	  this.length=arguments.length;               //push
  	  this.push=function(){
  	  	for(let i=0;i<arguments.length;i++){
  	  		this[this.length]=arguments[i];
  	  		this.length++;
  	  	}
  	  }
  	  this.some=function(fn){              //some
  	  	for(let i=0;i<this.length;i++){
  	  		if(fn(this[i])){
  	  		return true;
  	  	}
  	  	}
  	  	return false;
  	  }
  	  this.first=function(value){            // 元素第一次出现的位置
        for(let i=0;i<this.length;i++){
        	if(this[i]==value){
        		return i;
        	}
        }
  	  }
  	  this.last=function(value){            // 元素最后一次出现的位置
        for(let i=this.length-1;i>=0;i--){
        	if(this[i]==value){
        		return i;
        	}
        }
  	  }
  	  this.reverse=function(){               //翻转数组
  	  	var newarr=[];
  	  	for(let i=this.length-1;i>=0;i--){
  	  		newarr[newarr.length]=this[i];
  	  	}
        return newarr;
  	  }
  	  this.filter=function(fn){             //filter
  	  	 let arr1=[];
         for(let i=0;i<this.length;i++){
         	if(fn(this[i])){
              arr1[arr1.length]=this[i];
         	}
         }
         return arr1;
  	  }
  	  this.link1=function(){                 //数组转化成字符串
  	  	let arr1='';
  	  	for(let i=0;i<this.length-1;i++){
  	  		arr1+=this[i];
  	  		arr1+='-';
  	  	}
  	  	arr1+=this[this.length-1];
  	  	return arr1;
  	  }
  	  this.map=function(fn){
  	  	var arr1=[];
  	  	for(let i=0;i<this.length;i++){	
         arr1[arr1.length]=fn(this[i]);
  	  	}
  	  	return arr1;
  	  }
   }  
 