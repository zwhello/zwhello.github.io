var test1=document.getElementById('test1');
test1.innerHTML='<h1>hello world!</h1>';

var test2=document.getElementById('test2');
test2.innerText='<h1>hello world!</h1>';

test2.onclick=function() {   //event handler  事件处理程序
	test2.innerHTML='嘿嘿嘿';
}

test2.onmouseover=function() {
	test2.innerHTML='哈哈哈';
}

test2.onmouseout=function() {
	test2.innerHTML='呵呵呵';
}


var bdlink = document.getElementById('bdlink');
bdlink.target='_blank';
bdlink.href='http://www.163.com';
bdlink.innerHTML='网易';//或者innerText

bdlink.style.textDecoration='none';//去掉中横线，大写中横线后首字母
bdlink.style.fontSize='30px';
bdlink.style.backgroundColor='red';
bdlink.style.color='#fff';
bdlink.style.display='block';
bdlink.style.width='200px';


//给HTML添加元素
var Parent = document.getElementById('parent');
var child = document.createElement('button');
var childTxt = document.createTextNode('按钮');
child.appendChild(childTxt);
Parent.appendChild(child);

//删除元素
var Parent = document.getElementById('parent');
var myspan=document.getElementById('mySpan');
Parent.removeChild(myspan);






//bom方法
var test3 = document.getElementById('test3');
test3.onclick = function() {
	window.open('http://www.baidu.com');
}

// 电子时钟
/*setInterval(function() {
    var clock = document.getElementById('myClock');
    var date = new Date();
    var h=date.getHours();
    if(h<10) {
	    h='0'+h;
    }
    var miu=date.getMinutes();
    if(miu<10) {
	    miu='0'+miu;
    }
    var sed=date.getSeconds();
    if(sed<10) {
	    sed='0'+sed;
    }
    clock.innerHTML=h+':'+miu+':'+sed;
},1000)*/




//电子时钟升级版
    var clock = document.getElementById('myClock');
    var date = new Date();
    
    
    setInterval(function(){
        date.setSeconds(date.getSeconds()+1);
        var h=date.getHours();
        if(h<10) {
            h='0'+h;
        }
        var miu=date.getMinutes();
        if(miu<10) {
            miu='0'+miu;
        }
        var sed=date.getSeconds();
        if(sed<10) {
            sed='0'+sed;
        }

        clock.innerHTML=h+':'+miu+':'+sed;

    },900)
    
     
    


var DianM = document.getElementById('DianM');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var newp = document.getElementById('newP');
var timer;

// var members = ['阿衰','阿娜','小爽','阿叶','娟娟','美云','小燕'];
var members = ['盖浇饭','面条','拌饭','麻辣烫','拉面','黄焖鸡','hamburger'];
start.onclick = function() {
	// start.disabled='disabled';//button不可用  第一种方法
	if (timer) {   //第2种方法
        // console.log(timer);
        return; //1.中断程序执行    2.返回函数执行结果

	}
    timer=setInterval( function() {
	    var mem = parseInt(Math.random()*7);
        DianM.innerHTML = members[mem];
    },100);
}
stop.onclick = function() {
	// start.disabled='';
    clearInterval(timer);
    timer = undefined;
}
//第三种方法
/*start.onclick = function() {
    if (start.innerHTML=='开始') {
        timer=setInterval( function() {
	        var mem = parseInt(Math.random()*7);
            DianM.innerHTML = members[mem];
        },100);
        start.innerHTML='停止';
    }
    else {
    	clearInterval(timer);
        start.innerHTML='开始';
    }
}*/