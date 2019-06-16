//等待页面加载完毕
$(function(){
    var imgList = $("#imgd img");
    var liList = $("#imgd li")
    var index = 0;
    var timer = setInterval(autoPlay,2000);
    function autoPlay(){
        //当前图片隐藏
        imgList[index].style.display = "none";
        liList[index].style.background = "rgba(0,0,0,0)";
        index ++;
        if(index == imgList.length){
            index = 0;
        }
        //元素显示
        imgList[index].style.display = "block";
        liList[index].style.background = "#fff";
    }
    $("#imgd").mouseover(function (){
        clearInterval(timer);
    })
    $("#imgd").mouseout(function (){
        timer = setInterval(autoPlay,2000);
    })
    //向左翻动
    $("#imgd .left").click(function(){
        if(index>0){
            index--;
            imgList[index].style.display = "block";
            imgList[index+1].style.display = "none";
            liList[index].style.background = "#fff";
            liList[index+1].style.background = "rgba(0,0,0,0)";
        }else{
            imgList[index].style.display = "none";
            liList[index].style.background = "rgba(0,0,0,0)";
            index = liList.length-1;
            imgList[index].style.display = "block";
            liList[index].style.background = "#fff";
        }
    })
    //向右翻动
    $("#imgd .right").click(function(){
        if(index==liList.length-1){
            index = -1;
        }
        index++;
        if(index<liList.length&&index>0){
            liList[index].style.background = "#fff";
            liList[index-1].style.background = "rgba(0,0,0,0)";
            imgList[index].style.display = "block";
            imgList[index-1].style.display = "none";
        }
        if(index==0){
            liList[liList.length-1].style.background = "rgba(0,0,0,0)";
            liList[index].style.background = "#fff";
            imgList[index].style.display = "block";
            imgList[liList.length-1].style.display = "none"
        }
    })
    for(var i=0;i<imgList.length;i++){
        $(liList[i]).click(function(){
            $(this).css("background","#fff");
            liList[index].style.background = "rgba(0,0,0,0)"
            imgList[index].style.display = "none";
            for(var j=0;j<liList.length;j++){
                //点击后同步更改下标
                if(liList[j].style.background=="rgb(255, 255, 255)"){
                    index = j;
                    console.log(index)
                }
            }
            imgList[index].style.display = "block";    
        })
    }

    $("#tour #search2 img").mouseover(function(){
        $(this).attr('src',"./img/home_banner/search2.png")
    })
    $("#tour #search2 img").mouseout(function(){
        $(this).attr('src',"./img/home_banner/search1.png")
        $(this).prev().css('outline','none')
    })
})



