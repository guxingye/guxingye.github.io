// 1.打字机效果
const words = ["温柔写代码，认真生活✨","专注前端 · 热爱设计 · 持续进步","热爱代码，也热爱生活"];
let wIndex=0,tIndex=0,isDel=false;
const typeDom=document.getElementById("typeText");
function type(){
    let now=words[wIndex];
    if(!isDel){
        typeDom.innerText=now.substring(0,tIndex++);
        if(tIndex>now.length){isDel=true;setTimeout(type,1200);return;}
    }else{
        typeDom.innerText=now.substring(0,tIndex--);
        if(tIndex<=0){isDel=false;wIndex=(wIndex+1)%words.length;}
    }
    setTimeout(type,isDel?40:80);
}
type();

// 2.实时时间
function timeUpd(){
    let d=new Date();
    let y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();
    let h=d.getHours(),mi=d.getMinutes(),s=d.getSeconds();
    let week=["周日","周一","周二","周三","周四","周五","周六"][d.getDay()];
    document.getElementById("timeShow").innerText=`${y}年${m}月${day}日 ${week} ${h}:${mi}:${s}`;
}
setInterval(timeUpd,1000);
timeUpd();

// 3.随机访客数
let v=Math.floor(1200+Math.random()*300);
document.getElementById("visitNum").innerText=v;

// 4.温柔雪花特效
const canvas=document.getElementById("snowCanvas");
const ctx=canvas.getContext("2d");
let w=canvas.width=window.innerWidth;
let h=canvas.height=window.innerHeight;
let snowArr=[];
class Snow{
    constructor(){
        this.x=Math.random()*w;
        this.y=Math.random()*h-h;
        this.r=Math.random()*2+1;
        this.speed=Math.random()+0.5;
        this.wind=Math.random()*0.4-0.2;
    }
    move(){
        this.y+=this.speed;
        this.x+=this.wind;
        if(this.y>h){
            this.y=-10;
            this.x=Math.random()*w;
        }
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fillStyle="#ffd8e8";
        ctx.fill();
    }
}
for(let i=0;i<<60;i++) snowArr.push(new Snow());
function run(){
    ctx.clearRect(0,0,w,h);
    snowArr.forEach(s=>{s.move();s.draw();})
    requestAnimationFrame(run);
}
run();
window.onresize=()=>{w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight;}
