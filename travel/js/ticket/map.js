$(function(){
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(108.861481,34.058903), 12);
        var output = "从钟楼到秦岭野生动物园坐公交需要";
        var searchComplete = function (results){
            if (transit.getStatus() != BMAP_STATUS_SUCCESS){
                return ;
            }
                var plan = results.getPlan(0);
                output += plan.getDuration(true) + "\n";  //获取时间
                output += plan.getDistance(true) + "\n";  //获取距离

        }
        var transit = new BMap.TransitRoute(map, {renderOptions: {map: map},
            onSearchComplete: searchComplete,
            onPolylinesSet: function(){
                // setTimeout(function(){alert(output)},"1000");
            }}
            );
        var start=new BMap.Point(108.95343,34.263558);
        var end=new BMap.Point(108.861481,34.058903);
        transit.search(start, end);
    }
)