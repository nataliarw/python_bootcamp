$(document).ready(function () {
    $("div#text1").hover(function () {

        $("div#text2").toggle();

    })
    $("#img").dblclick(function() {
        $("#img").css({width: "100%"})
    })
    $("#img").mouseout(function() {
        $("#img").css({width: "20%"})
    })
    $("#caja3").dblclick(function() {
        $("#caja3").css("font-size","32px")
        
    })
    $("#caja3").mouseout(function() {
        $("#caja3").css("font-size","16px")
        
    })
});
















