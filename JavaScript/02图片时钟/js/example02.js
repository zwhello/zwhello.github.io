var yfrist = document.getElementById('yFrist');
var ysecond = document.getElementById('ySecond');
var ythrid = document.getElementById('yThrid');
var yfourth = document.getElementById('yFourth');
var mfrist = document.getElementById('mFrist');
var msecond = document.getElementById('mSecond');
var dfrist = document.getElementById('dFrist');
var dsecond = document.getElementById('dSecond');
var hfrist = document.getElementById('hFrist');
var hsecond = document.getElementById('hSecond');
var miufrist = document.getElementById('miuFrist');
var miusecond = document.getElementById('miuSecond');
var sedfrist = document.getElementById('sedFrist');
var sedsecond = document.getElementById('sedSecond');



setInterval(function() { 
var date=new Date();
var y = date.getFullYear();

/*var yfri = y.toString().substring(0,1);
yfrist.style.backgroundImage = 'url(img/'+yfri+'.jpg)';

var ysed = y.toString().substring(1,2);
ysecond.style.backgroundImage = 'url(img/'+ysed+'.jpg)';

var ythr = y.toString().substring(2,3);
ythrid.style.backgroundImage = 'url(img/'+ythr+'.jpg)';

var yfou = y.toString().substring(3);
yfourth.style.backgroundImage = 'url(img/'+yfou+'.jpg)';*/

var m = date.getMonth()+1;
if (m<10) {
	m='0'+m;
}
/*var mfri = m.toString().substring(0,1);
mfrist.style.backgroundImage = 'url(img/'+mfri+'.jpg)';

var msed = m.toString().substring(1,2);
msecond.style.backgroundImage = 'url(img/'+msed+'.jpg)';*/

var d = date.getDate();
if (d<10) {
	d='0'+d;
}
/*var dfri = d.toString().substring(0,1);
dfrist.style.backgroundImage = 'url(img/'+dfri+'.jpg)';

var dsed = d.toString().substring(1,2);
dsecond.style.backgroundImage = 'url(img/'+dsed+'.jpg)';*/

var h = date.getHours();
if(h<10) {
	h='0'+h;
}
/*var hfri = h.toString().substring(0,1);
hfrist.style.backgroundImage = 'url(img/'+hfri+'.jpg)';

var hsed = h.toString().substring(1,2);
hsecond.style.backgroundImage = 'url(img/'+hsed+'.jpg)';*/

var miu = date.getMinutes();
if(miu<10) {
	miu='0'+miu;
}
/*var miufri = miu.toString().substring(0,1);
miufrist.style.backgroundImage = 'url(img/'+miufri+'.jpg)';

var miused = miu.toString().substring(1,2);
miusecond.style.backgroundImage = 'url(img/'+miused+'.jpg)';*/

var sed = date.getSeconds();
if(sed<10) {
	sed='0'+sed;
}
/*var sedfri = sed.toString().substring(0,1);
sedfrist.style.backgroundImage = 'url(img/'+sedfri+'.jpg)';

var sedsed = sed.toString().substring(1,2);
sedsecond.style.backgroundImage = 'url(img/'+sedsed+'.jpg)';*/

var timer = new Array();
var time = [y,m,d,h,miu,sed];
time=time.join('');
timer=time.split('');
//把字符串分割成字符串数组
// for (var i=0;i<=time.length;i++) {
// 	timer[i] = time.substring(i,i+1);		
// }


yfrist.style.backgroundImage = 'url(img/'+timer[0]+'.jpg)';
ysecond.style.backgroundImage = 'url(img/'+timer[1]+'.jpg)';
ythrid.style.backgroundImage = 'url(img/'+timer[2]+'.jpg)';
yfourth.style.backgroundImage = 'url(img/'+timer[3]+'.jpg)';
mfrist.style.backgroundImage = 'url(img/'+timer[4]+'.jpg)';
msecond.style.backgroundImage = 'url(img/'+timer[5]+'.jpg)';
dfrist.style.backgroundImage = 'url(img/'+timer[6]+'.jpg)';
dsecond.style.backgroundImage = 'url(img/'+timer[7]+'.jpg)';
hfrist.style.backgroundImage = 'url(img/'+timer[8]+'.jpg)';
hsecond.style.backgroundImage = 'url(img/'+timer[9]+'.jpg)';
miufrist.style.backgroundImage = 'url(img/'+timer[10]+'.jpg)';
miusecond.style.backgroundImage = 'url(img/'+timer[11]+'.jpg)';
sedfrist.style.backgroundImage = 'url(img/'+timer[12]+'.jpg)';
sedsecond.style.backgroundImage = 'url(img/'+timer[13]+'.jpg)';


},1000);








