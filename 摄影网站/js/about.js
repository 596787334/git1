/*
* @Author: shuangshuang
* @Date:   2017-10-06 16:28:10
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-10-07 16:11:18
*/
function $(select,ranger){
    ranger = ranger || document;
    var first = select.charAt(0);
    if(first=='.'){
       return getClass(select.substring(1),ranger);
    }
    else if(first=='#'){
       return ranger.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
      return ranger.getElementsByTagName(select);
    }
   }
function getClass(classname,ranger){
    ranger = ranger?ranger:document;
    if(document.getElementsByClassName){
        return ranger.getElementsByClassName(classname);
    }else{
        var newarr = [];
    var all=ranger.getElementsByTagName('*');
    for(var i=0;i<all.length;i++){
      if(checkClass(all[i].className,classname)){
        newarr.push(all[i]);
            }
        }
      return newarr;
    }
}
function checkClass(className,classname){
    var arr = className.split(' ');
    for(var i=0;i<arr.length;i++){
        if(arr[i]==classname){
            return true;
        }
    }
  return false;
}
let head1 = document.querySelectorAll('.head1');
let body = document.querySelector('body');
let next = 0;
let now = 0;
let flag = true;
for(let i=0;i<head1.length;i++){
head1[i].onmousewheel = function(e){
    if(e.wheelDelta==-120){
        if(!flag){
        return;
        }
        animate(head1[i],{top:-1300},function(){
            flag = true;
        });
        flag = false;
    }
    else if(e.wheelDelta==120){
        if(!flag){
        return;
        }
        console.log(1);
       animate(head1[i+1],{top:0},function(){
            flag = true;
        })
        flag = false;
    }
  }
}
let red1 = document.querySelector('.red1');
let end1 = document.querySelector('.end');
end1.onmousewheel = function(e){
    if(e.wheelDelta==120){
    animate(head1[0],{top:0});}
}