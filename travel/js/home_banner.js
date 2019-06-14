$(function(){
    var i = 0;
    var img = $('#plantImg');
    var li = $("#imgd li");
    var sta = 1;
    var count=0;
    var imgList=
    [   
        'img/home_banner/banner02.jpg',
        'img/home_banner/banner03.jpg',
        'img/home_banner/banner04.jpg',
        'img/home_banner/banner05.jpg',
        'img/home_banner/banner06.jpg',
        'img/home_banner/banner07.jpg',
        'img/home_banner/banner08.jpg',
        'img/home_banner/banner09.jpg',
    ]
    if()
    var timer=setInterval(imgStart,2000)
    function imgStart(){
        if(timer>sta){
            img.prop('src',imgList[i+1])

        }else{
            img.prop('src',imgList[i])
        }
        i++;
        if(i<li.length){
            li[i].style.background = "green";
            li[i].previousElementSibling.style.background = "#fff";
        }else{
            li[i-1].style.background = "#fff";
            i=0;
            li[i].style.background = "green";  
        }
        
       
    } 
    var j=0
    var srcList=[
        'html/dayanta.html',
        'html/zhonglou.html',
        'html/datangfurongyuan.html',
        'html/bingmayong.html',
        'html/datangfurongyuan.html',
        'html/huashan.html',
        'html/bingmayong.html',
        'html/zhonglou.html',
        'html/huashan.html',
    ]
    var src=$('#src')
    var srcTimer=setInterval(srcStart,2000)
    function srcStart(){
        src.prop('href',srcList[j])
        j++
        if(j==srcList.length){
            j=0
        }
    }
    
    $("#imgd").mouseover(function(){
        clearTimeout(srcTimer);
        clearTimeout(timer);
        sta = timer;
    })
    $("#imgd").mouseout(function(){
        srcTimer=setInterval(srcStart,2000);
        timer=setInterval(imgStart,2000);
    })
    
    $("#imgd .left").click(function(){
        if(i>0){
            i--;
        }
        console.log(i)
        if(i>=0){
        img.prop('src',imgList[i]);
        li[i].style.background = "green";
        li[i].nextElementSibling.style.background = "#fff";
        }
    })
    $("#imgd .right").click(function(){
        if(i==li.length-1){
            i = -1;
        }
        i++;
        if(i<li.length){
        img.prop('src',imgList[i]);
        li[i].style.background = "green";
        if(i==0){
            li[li.length-1].style.background = "#fff";
        }else{
            li[i].previousElementSibling.style.background = "#fff";
        }
        
        }    
    })
})