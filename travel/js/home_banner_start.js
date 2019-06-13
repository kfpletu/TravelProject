window.onload=function(){
    var i=0
    var imgList=
    [   'img/home_banner/banner01.jpg',
        'img/home_banner/banner02.jpg',
        'img/home_banner/banner03.jpg',
        'img/home_banner/banner04.jpg',
        'img/home_banner/banner05.jpg',
        'img/home_banner/banner06.jpg',
        'img/home_banner/banner07.jpg',
        'img/home_banner/banner08.jpg',
        'img/home_banner/banner09.jpg',
    ]
    var img=document.getElementById('plantImg')
    var timer=setInterval(imgStart,2000)
    function imgStart(){
        img.src=imgList[i]
        i++
        if(i==imgList.length){
            i=0
        }
    }
    img.onmouseover=function(){clearTimeout(timer)}
    img.onmouseout=function(){timer=setInterval(imgStart,2000)}
}


