$(function(){   
    var winHeight = $(document).scrollTop();
 
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
 
        if (scrollY > 150){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('#main_demo').addClass('hiddened');
        } 
        else {
            $('#main_demo').removeClass('hiddened');
        }
 
        if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
            $('#main_demo').removeClass('showed');
        } 
        else {
            $('#main_demo').addClass('showed');
        }               
 
     });
});

// document.write("It works.");
// document.write("It works.");
// document.write("It works.");