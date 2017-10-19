/*
* @Author: shuangshuang
* @Date:   2017-10-06 16:28:10
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-10-09 13:57:09
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
