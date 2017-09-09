/*
* @Author: shuangshuang
* @Date:   2017-09-04 11:03:57
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-09-09 16:50:40
*/
// var i1 = prompt ('请输入您想要的行数',5);
// for(var i=0;i<i1;i++){
// 			for(var m=1;m<i1-i;m++){
// 				document.write('-');}
//             for(var j=0;j<2*i+1;j++){
// 			document.write('*');
// 		   }
// 		document.write('<br>');
// 			}

	// for(var a=0;a<i1;a++){
 //       for(var b=0;b<a;b++){
 //       	 document.write('-');
 //       }
 //       for(var c=0;c<2*(i1-a)-1;c++){
 //       	document.write('*');
 //       }
 //       document.write('<br>');
	// }

// var i=1,j=1;
// document.write(i,j);
// for(var k=0;k<=100;){
// 	k=i+j;
// 	document.write(k);
// 	document.write('&nbsp;');
// 	i=j;
// 	j=k;
// }

// var arr=[90,70,70,95,66];
// var max=0;
// for(i=0;i<arr.length;i++){
//    if(max<arr[i]){
//    	max=arr[i];
//    }
// }
// console.log(max);
// var arr=[90,70,70,95,66,42,6];
// for(var i=0;i<arr.length;i++){
// 	for(var j=i+1;j<arr.length;j++){
//       if(arr[i]<arr[j]){
//       	var n=arr[i];
//       	arr[i]=arr[j];
//       	arr[j]=n;
//       }
// 	}
// }
// document.write(arr);
// var i=1,sum=0;
// while(i<=10){
//     sum+=i;
//     i++;
// }
// do{
// 	sum+=i;
//     i++;
// }while(i<=10)
// alert(sum);
// var arr=[90,70,,70,95,,66,42,6];
// var brr=[],j=0;
// for(var i=0;i<arr.length;i++){
// 	if(arr[i]!=undefined){
//        brr[j++]=arr[i];
// 	}
// }
// console.log(brr);
// // var zhangsan=[90,70,44,95,66,42,6];
// // var lisi=[90,70,76,95,66,42,6];
// // var wangwu=[90,70,70,95,33,42,106];
// // var banji=[zhangsan,lisi,wangwu];
// var banji=[[90,70,44,95,66,42,6],[90,70,76,95,66,42,6],[90,70,70,95,33,42,106]];
// var max=0;
// for(var a=0;a<banji.length;a++){
//   for(var b=0;b<banji[a].length;b++){;
//     if(max<banji[a][b]){
//     	max=banji[a][b];
//     }
//   }
// }
// console.log(max);
// var num=1;
// var result=typeof num;
// alert( typeof result);
// var v = prompt ('请输入你想显示的行数',5);
// function fu(i1){  //函数中的i1是形参
// 	for(var i=0;i<i1;i++){
// 			for(var m=1;m<i1-i;m++){
// 				document.write('-');}
//             for(var j=0;j<2*i+1;j++){
// 			document.write('*');
// 		   }
// 		document.write('<br>');
// 			}
//     for(var a=0;a<i1;a++){
//        for(var b=0;b<a;b++){
//        	 document.write('-');
//        }
//        for(var c=0;c<2*(i1-a)-1;c++){
//        	document.write('*');
//        }
//        document.write('<br>');
// 	}
	
// }
// fu(v);
// var arr=[1,2,3,4,5,6,7,8];
// fn(arr,'a','b','c');
// function fn(arr){
//    for(var i=1;i<arguments.length;i++){
//    	arr[arr.length]=arguments[i];
//    }
//   console.log(arr);
// }
// var arr=[1,2,3,4,5,6,7,8];
// fn(arr,'a','b','c');
// function fn(arr,...value){
//   console.log(value);
// }
// function filter(arr){
// 	var arr1=[]
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]%2==0){
//          arr1[arr1.length]=arr[i];
// 		}
// 	}
// 	arr=arr1;
// 	return arr;
// }
// var a=[1,2,3,4,5,6,7,8,9];
// alert(filter(a));
// function fn(arr,str){
//   str=str==undefined?'-':str;
//   var string1='';
//   for(var i=0;i<arr.length;i++){
//   	if(i<arr.length-1){
//       string1+=arr[i]+str;
//   	}else{
//       string1+=arr[i];
//   	}
//   }
//   return string1;
// }
// var arr=[1,2,3,4,5,6,7,8,9];
// alert(fn(a,'*'));
  // function aa(n1,n2){
  //   return n1+n2;
  // }
  // function bb(n1,n2){
  //   return n1*n2;
  // }
  // function ff(n1,n2,fn){
  // 	return fn(n1,n2);
  // }
  // var ee=ff(1,2,bb);
  // alert(ee);


  // var arr=[1,2,3,4,5]
  // function map(arr,fn){
  // 	var newarr=[];
  // 	for(i=0;i<arr.length;i++){
  // 		newarr[newarr.length]=fn(arr[i]);
  // 	}
  // 	return newarr;
  // }
  // var result= map (arr,function(value){
  // 	 return value*2;
  // })
  // console.log(result);
  // function fn(arr,str){   // 元素最后一次出现的位置
  //  for(var i=0;i<arr.length;i++){
  //  	if(arr[i]==str){
  //  		return i;
  //  	}
  //  }
  //  return -1;
  // }
  // var a=[1,2,4,3,5,3];
  // var w=fn(a,9);
  // alert(w);
  
  // function fnl(arr,num){              // 元素最后一次出现的位置
  // 	for(var i=arr.length;i>=0;i--){
  // 		if(arr[i]==num){
  // 			return i;
  // 		}
  // 	}
  // 	return -1;
  // }
  // var b=[1,2,3,5,4,6,7];
  // var n=fnl(b,5);
  // alert(n);
  
 //  function reverse(arr){ //翻转数组
 //   var arr1=[];
 //   for(var i=arr.length-1;i>=0;i--){
 //   	push(arr1,arr[i]); //这里添加的是arr的元素，注意是arr[i]
 // }
 //   return arr1;
 //  }
 //  function push(arr,...rest){
 //  	for(var i=0;i<rest.length;i++){
 //  		arr[arr.length]=rest[i];
 //  	}
 //  }
 //  var ee=[1,2,3,4,5,6];
 //  var b=reverse(ee);
 //  alert(b);
 // function delete1(arr,sit,num){     //万能删除
 // 	var arr1=[];
 // 	for(var i=0;i<arr.length;i++){
 // 		if(sit<=i&&i<sit+num){   //注意&&
 // 			continue;
 // 		}
 //    arr1[arr1.length]=arr[i];
 // 	}
 // 	return arr1;
 // }
 // var ee=[1,2,3,4,5,6];
 //  var b= delete1(ee,1,4);
 //  alert(b);
 //  function add1(arr,sit,...rest){   //万能添加1
 //  	var arr1=[];
 //  	for(var i=0;i<arr.length;i++){
 //  		if(i==sit){
 //  		for(var n=0;n<rest.length;n++){
 //         arr1[arr1.length]=rest[n];
 //  		}
 //  		}
 //  		arr1[arr1.length]=arr[i];
 //  	}
 //  	return arr1;
 //  }
 //  var ee=[1,2,3,4,5,6];
 //  var b= add1(ee,1,'d','e','f');
 //  alert(b);

 //  function add2(arr,sit,...rest){   //万能添加2
 //  	var arr1=[];
 //  	for(var i=0;i<sit;i++){
 //  		arr1[arr1.length]=arr[i];
 //  	}
 //  	for(var n=0;n<rest.length;n++){
 //  		arr1[arr1.length]=rest[n];
 //  	}
 //  	for(var m=sit;m<arr.length;m++){
 //  		arr1[arr1.length]=arr[m];
 //  	}
 //  	return arr1;
 //  }
 //  var ee=[1,2,3,4,5,6];
 //  var b= add2(ee,1,'a','b','c');
 //  alert(b);

 //  function fun(arr,sit,num,...rest){
 //  	var arr1=[];
 //  	arr1=delete1(arr,sit,num);
 //  	if(rest.length>0){
 //    arr1+=add1(arr1,sit,...rest);}
 //    return arr1;
 //  }
 // var arr=[1,2,3,4,5,6,7]
 // function filter(arr,fn){
 // 	var arr1=[];
 // 	for(i=0;i<arr.length;i++){
 // 		if(fn(arr[i])){
 //       arr1[arr1.length]=arr[i];
 // 		}
 // 	}
 // 	return arr1;
 // }
 // var b = filter(arr,function(value){
 // 	return value>2;
 // })
 // alert(b);
 // function some(arr,fn){
 // 	for(var i=0;i<arr.length;i++){
 // 		if(fn(arr[i])){
 // 			return true;
 // 		}
 // 	}
 // 	return false;
 // }
 // function every(arr,fn){
 // 	for(var i=0;i<arr.length;i++){
 // 		if(!fn(arr[i])){
 // 			return false;
 // 		}
 // 	}
 // 	return true;
 // }
    var a=[1,2,3,['a','b','v']];
    function copy(arr){
      var arr1=[];
      if(typeof arr[i]=='object'){
      	arr1[i]=copy(arr[i]);
      }else{
      for(var i=0;i<arr.length;i++){
        arr1[i]=arr[i];
      }
     }
     return arr1;
    }
    var b=copy(a);
    a[1]=10;
    alert(a);
    alert(b);