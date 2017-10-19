let head1 = document.querySelectorAll('.head1');
let body = document.querySelector('body');
let next = 0;
let now = 0;
let first = document.querySelectorAll('.first');
let wh = first[0].offsetWidth;
let first3 = document.querySelector('.first3');
setInterval(function(){
	    next++;
    	if(next==first.length){
    		next=0;
    	}
        first[next].style.left = wh+'px';
        animate(first[now],{left:-wh});
        animate(first[next],{left:0});
        now = next;
},3000);
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
let photo = document.querySelector('.photo');
let photo2 = document.querySelector('.photo2');
photo.onmouseover = function(){
    photo2.style.display = 'none';
}
photo.onmouseout = function(){
    photo2.style.display = 'block';
}
let photo1 = document.querySelectorAll('.photo1');
let photo22 = document.querySelectorAll('.photo2');
for(let i = 0;i<photo1.length;i++){
    photo1[i].onmouseover = function(){
    photo22[i+1].style.display = 'none';
}
   photo1[i].onmouseout = function(){
    photo22[i+1].style.display = 'block';
}
}
let end1 = document.querySelector('.end');
end1.onmousewheel = function(e){
    if(e.wheelDelta==120){
    animate(head1[0],{top:0});}
}