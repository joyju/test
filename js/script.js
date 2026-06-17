$(document).ready(function(){
    //topBtn을 클릭하면 위로 올라가는 애니메이션 만들기
    $('.topBtn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        })
    })
    // 창업상담문의 열기
    $('.buzQnaBtn').click(function(){
        $('.buzQna').show()
    })
    //창업상담문의 닫기
    $('.buzQna .close').click(function(){
        $('.buzQna').hide()
    })
    //lang 부분과 fSite부분 
    /* var icon = 0
    $('.lang > a').click(function(){
        //랭귀지 창 열고 닫기
        $('.lang ul').toggle()
        //icon class 교체하기
        if(icon == 0){
            $('.lang a i').removeClass().addClass('fas fa-chevron-up')
            icon = 1
        }else{
            $('.lang a i').removeClass().addClass('fas fa-chevron-down')
            icon = 0
        }
    }) */
    $('.lang > a, .fSite > a').click(function(){
        $(this).siblings('ul').toggle()
        var cls = $(this).children('i').attr('class')//attr()메서드는 속성의 값을 가지고 옴
        //alert(cls)
        if(cls == 'fas fa-chevron-down'){
            $(this).find('i').removeClass().addClass('fas fa-chevron-up')
        }else{
            $(this).find('i').removeClass().addClass('fas fa-chevron-down')
        }
    })
    //서브네비게이션 나오기 들어가기
    $('.navBar').hover(function(){
        $('.mainNav .subNav').stop().slideToggle()
    })

    //스크롤이 되면
    $(window).scroll(function(){
        var scr = $(window).scrollTop()
        //topBtn 부분
        if(scr >= 800){
            $('.topBtn').show()
        }else{
            $('.topBtn').hide()
        }
        //header 고정
        
        console.log(scr)
        if(scr >= 55){
            $('header').addClass('fix')
        }else{
            $('header').removeClass()
        }
        //오른쪽에 따라다니는 창업상담문의 창
        $('.buz').stop().animate({
            top: scr + 100
        }, 500)
    })

    //tab부분
    $('.tabBtn li').click(function(){
        var idx = $(this).index()
        //alert(idx)
        $('.tabCon div').eq(idx).show().siblings().hide()
        $(this).css({backgroundPositionY: '-5px'}).siblings().css({backgroundPositionY: '-95px'})
    })
    $('.tabCon .close').click(function(){
        //tabCon 부분
        $('.tabCon div').hide()
        //버튼 부분
        $('.tabBtn li').css({backgroundPositionY: '-5px'})
    })
})