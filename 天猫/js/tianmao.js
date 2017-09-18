
	window.onload=function(){
	let a = document.getElementById('aside');
	let b = a.getElementsByClassName('zhaoshuang');
    let c = a.getElementsByTagName('li');
    for(let i=0;i<c.length;i++){
    	c[i].onmouseover=function(){
    		b[i].style.display='block';
    	}
    	c[i].onmouseout=function(){
    		b[i].style.display='none';
    	}
    }
    let ban2 = document.getElementsByClassName('ban2');
    let yuan = document.getElementsByClassName('yuan');
    let yuan1 = yuan[0].getElementsByClassName('yuan2');
    // console.log(yuan1);
    for(let j=0;j<7;j++){
    	
        yuan1[j].onclick=function(){
       	    console.log(yuan1[j]);
            ban2[j].style.display='block';
           for(let i=0;i<yuan1.length;i++){
           	if(i!=j){
           		ban2[i].style.display='none';
           	}
           }
       }
    }
	}







