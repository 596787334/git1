/*
* @Author: shuangshuang
* @Date:   2017-09-13 13:53:06
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-09-13 18:29:34
*/
// let str = 'sjoejo';
// console.log(str.length);
// let a=str.charAt(2);
// console.log(a);
// let c=str.charCodeAt(1);
// console.log(c);
// let b = String.fromCharCode(106);
// console.log(b);


// function replaceAll(str,str1){    //替换字符串中所有的str1
//    let str2='';
//    str2='*'.repeat(str1.length);
//    while(str.includes(str1)){
//    	str=str.replace(str1,str2);
//    }
//    return str;
// }
// var v = replaceAll(str,'j');
// alert(v);




 var st='https://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.com';
function findAll(str,str1){            //输出baidu的位置
	let str2=[];
	let str3='*'.repeat(str1.length);
	while(str.includes(str1)){
       str2[str2.length]=str.indexOf(str1);
       str=str.replace(str1,str3);
	}
	return str2;
}
var m = findAll(st,'baidu');
alert(m);

function findAll1(str,str1){            //输出baidu的位置方法2
	let str2=[],str3=[];
	for(let i=0;i<str.length;i++){
        str2.push(str.substr(i,5));
	}
	for(let n=0;n<str2.length;n++){
		if(str2[n]==str1){
			str3.push(n);
		}
	}
	return str3;
}
var n = findAll1(st,'baidu');
alert(n);
