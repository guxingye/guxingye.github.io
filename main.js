// 博客文章内容
const blogPosts = {
    1: {
        title: "✨ 从零搭建高颜值个人博客全过程",
        time: "2026-06-04",
        content: `
            <p>最近想搭建一个个人博客，记录学习心得和技术笔记。作为一个前端开发者，我决定从零开始手写一个高颜值的个人网站。</p>
            
            <h3>为什么选择手写？</h3>
            <p>虽然现在有很多优秀的博客框架（如 Hexo、Hugo、Gatsby 等），但我更想完全掌控每一个细节，实现最符合自己审美和功能需求的效果。</p>
            
            <h3>设计思路</h3>
            <p>整体风格走温柔可爱路线，选用了粉色系配色。页面结构分为：</p>
            <p>• 顶部导航栏：固定在顶部，快速跳转到各个板块</p>
            <p>• 个人简介卡片：头像、名字、打字机效果标语</p>
            <p>• 技术栈展示：使用标签云形式展示技能</p>
            <p>• 博客列表：卡片式展示，支持点击查看详情</p>
            <p>• 雪花特效：增加页面氛围感</p>
            
            <h3>技术选型</h3>
            <p>为了保持轻量化，我选择了最纯粹的技术栈：</p>
            <p>• HTML5 语义化标签</p>
            <p>• CSS3 实现动效和响应式布局</p>
            <p>• 原生 JavaScript 实现交互逻辑</p>
            
            <h3>实现亮点</h3>
            <p>打字机效果是我比较满意的功能之一，通过递归 setTimeout 实现文字的逐字显示和删除，配合多组文案循环播放，让整个页面更有生机。</p>
            <p>雪花动画使用 Canvas 绘制，每个雪花都是独立的对象，有自己的位置、大小、速度属性，通过 requestAnimationFrame 实现流畅动画。</p>
            
            <h3>后续优化</h3>
            <p>接下来我会继续添加更多功能：</p>
            <p>• 文章详情页（使用模态框展示）</p>
            <p>• 移动端响应式优化</p>
            <p>• 深色模式切换</p>
            <p>• 实际博客内容填充</p>
            
            <p>如果你也对 DIY 博客感兴趣，欢迎参考本项目的代码！</p>
        `
    },
    2: {
        title: "Vue3 新手快速入门学习笔记",
        time: "2026-06-01",
        content: `
            <p>Vue3 已经发布一段时间了，相比 Vue2 有很多重磅更新。作为前端开发者，学习和掌握 Vue3 是非常必要的。这篇笔记记录了我学习 Vue3 的核心知识点。</p>
            
            <h3>为什么要用 Vue3？</h3>
            <p>Vue3 相比 Vue2 的主要优势：</p>
            <p>• 性能更好：虚拟 DOM 重写，Tree-shaking 支持</p>
            <p>• Composition API: 更灵活的逻辑复用方式</p>
            <p>• TypeScript 支持更完善</p>
            <p>• 更小的包体积</p>
            
            <h3>核心概念</h3>
            
            <h3>refs 和 reactive</h3>
            <p>Vue3 提供了两种响应式数据创建方式：</p>
            <p>• <code>ref()</code>：用于基本类型，通过.value 访问</p>
            <p>• <code>reactive()</code>：用于对象和数组，直接访问属性</p>
            
            <h3>计算属性</h3>
            <p>computed 函数接受一个 getter 函数，返回计算结果。只有依赖数据变化时才会重新计算。</p>
            
            <h3>生命周期</h3>
            <p>Vue3 的生命周期钩子：</p>
            <p>• setup() - 组件初始化（最早执行）</p>
            <p>• onMounted() - 挂载完成</p>
            <p>• onUpdated() - 更新完成</p>
            <p>• onUnmounted() - 卸载完成</p>
            
            <h3>组件通信</h3>
            <p>父子组件通信：</p>
            <p>• props：父传子</p>
            <p>• emit：子传父</p>
            <p>• provide/inject：跨层级通信</p>
            
            <h3>实践建议</h3>
            <p>学习 Vue3 最好的方式就是动手做项目。我推荐从一个小项目开始，比如 TODO 应用或者个人博客，边做边学。遇到不懂的地方随时查阅官方文档。</p>
            <p>Vue3 的官方文档质量很高，示例清晰，是非常好的学习资源。</p>
        `
    },
    3: {
        title: "前端常见跨域问题完美解决汇总",
        time: "2026-05-28",
        content: `
            <p>跨域问题是前端开发中最常遇到的问题之一。这篇文章整理了常见的跨域场景和解决方案，希望能帮你快速解决跨域烦恼。</p>
            
            <h3>什么是跨域？</h3>
            <p>当协议、域名、端口有任何一个不同时，浏览器会认为是跨域请求，默认拦截请求结果。这是浏览器的同源策略在起作用。</p>
            
            <h3>解决方案汇总</h3>
            
            <h3>1. 开发环境：代理配置</h3>
            <p>使用开发服务器的代理功能，最常用也最简单：</p>
            <p>• Vite: vite.config.js 中配置 server.proxy</p>
            <p>• webpack-dev-server: devServer.proxy</p>
            <p>• Create React App: package.json 中添加 proxy 字段</p>
            
            <h3>2. 生产环境：CORS</h3>
            <p>后端配置 CORS 响应头：</p>
            <p>• Access-Control-Allow-Origin: * 或指定域名</p>
            <p>• Access-Control-Allow-Methods: GET, POST 等</p>
            <p>• Access-Control-Allow-Headers: Content-Type 等</p>
            
            <h3>3. Nginx 反向代理</h3>
            <p>通过 Nginx 将 API 请求转发到后端服务器，前端和后端共享同一个域名，规避跨域限制。</p>
            
            <h3>4. JSONP（不推荐）</h3>
            <p>利用 script 标签无跨域限制的特性，仅支持 GET 请求，存在安全风险，不推荐使用。</p>
            
            <h3>5. postMessage</h3>
            <p>用于 iframe 跨域通信，通过 window.postMessage() 发送消息，message 事件接收消息。</p>
            
            <h3>实际案例</h3>
            <p>最近在公司项目中遇到了跨域问题。前端在 localhost:3000，后端 API 在 api.example.com。开发时使用 Vite 代理完美解决，生产环境后端配置了 CORS，前后端配合得很好。</p>
            
            <h3>总结</h3>
            <p>跨域问题看似复杂，其实解决方案很成熟。关键是理解浏览器同源策略的原理，选择合适的方案。</p>
        `
    },
    4: {
        title: "移动端自适应布局技巧总结",
        time: "2026-05-20",
        content: `
            <p>在移动互联网时代，移动端适配已经成为前端开发的基本要求。这篇文章总结了我多年移动端适配的经验和技巧。</p>
            
            <h3>视口设置</h3>
            <p>首先要正确设置 viewport：</p>
            <p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
            <p>这行代码告诉浏览器页面宽度等于设备宽度，初始缩放比例为 1。</p>
            
            <h3>rem 布局</h3>
            <p>rem 是一种相对单位，相对于 html 根元素的 font-size。通过动态设置根元素字体大小，可以实现等比缩放。</p>
            <p>常用方案：</p>
            <p>• flexible.js 方案（淘宝团队）</p>
            <p>• 基于设计稿宽度的动态计算</p>
            <p>• 使用 postcss-pxtorem 自动转换</p>
            
            <h3>媒体查询</h3>
            <p>针对不同屏幕尺寸应用不同的样式：</p>
            <p>• @media (max-width: 768px) 适配手机</p>
            <p>• @media (min-width: 769px) and (max-width: 1200px) 适配平板</p>
            <p>• @media (min-width: 1201px) 适配桌面</p>
            
            <h3>弹性布局</h3>
            <p>Flexbox 是移动端布局的神器：</p>
            <p>• justify-content: center - 水平居中</p>
            <p>• align-items: center - 垂直居中</p>
            <p>• flex-direction: column - 纵向排列</p>
            <p>• flex-wrap: wrap - 自动换行</p>
            
            <h3>响应式图片</h3>
            <p>使用 max-width: 100% 让图片适应容器：</p>
            <p><code>img { max-width: 100%; height: auto; }</code></p>
            
            <h3>实战经验</h3>
            <p>在实际项目中，我常用的组合方案是：</p>
            <p>rem + 媒体查询 + Flexbox，三者的组合可以解决 90% 的移动端适配问题。</p>
            
            <h3>调试技巧</h3>
            <p>• Chrome DevTools 设备模拟器</p>
            <p>• 真机调试（推荐）</p>
            <p>• 使用不同尺寸的设备测试</p>
            <p>移动端适配需要不断测试和调整，多在实际设备上查看效果。</p>
        `
    }
};

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

// 5.博客模态框功能
const modalOverlay = document.getElementById('modalOverlay');
const blogItems = document.querySelectorAll('.blog-item');

blogItems.forEach(item => {
    item.addEventListener('click', () => {
        const blogId = item.getAttribute('data-blog-id');
        const post = blogPosts[blogId];
        if (post) {
            document.getElementById('modalTitle').innerText = post.title;
            document.getElementById('modalTime').innerText = '发布时间：' + post.time;
            document.getElementById('modalContent').innerHTML = post.content;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
