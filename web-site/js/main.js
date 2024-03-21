const windowWidth = $(window).width();

$("body").on("click" , function (){
    let target = $(event.target)


    if (target.closest("._filter-list--text") && !target.hasClass("no-active") && target.hasClass("filter-list__el")
    ){
        let parent = target.closest("._filter-list--text");
        parent.find(".active").removeClass("active");
        parent.find("._filter-list__input-text").val(target.text())
        target.addClass("active");
        if(target.closest("._filter-body--sublist") && !target.closest("._filter-content__el--head__el").length){
            target.closest("._filter-el__body").find("._filter-item__select").text(target.text());
            $("._filter-item__subhead").removeClass("active");
            $("._filter-body--sublist").removeClass("active");
        }else if(target.closest("._filter-content__el--head__el")){
            target.closest("._filter-content__el--head__el").find("._filter__el--head").text(target.text());
            $("._filter-item__body--head").removeClass("active");
            if(windowWidth > 768){
                $("._filter-item__head").removeClass("active");
            }
            $("._filter-content__el--head__el").removeClass("active");


        }
    }
    else if(target.hasClass("_filter-item__subhead") || target.closest("._filter-item__subhead").length){
        let headSelect = target.hasClass("_filter-item__subhead") ? target : target.closest("._filter-item__subhead")
        if (!headSelect.hasClass("active")){
            $("._filter-item__subhead").removeClass("active");
            $("._filter-body--sublist").removeClass("active");
            headSelect.addClass("active")
            headSelect.next().addClass("active")

        }else{
            headSelect.removeClass("active")
            headSelect.next().removeClass("active")
        }
    }
    else if(target.hasClass("_filter-item__head") || target.closest("._filter-item__head").length){
        let headSelect = target.hasClass("_filter-item__head") ? target : target.closest("._filter-item__head")


        if (!headSelect.hasClass("active")){
            $("._filter-item__subhead").removeClass("active");
            $("._filter-body--sublist").removeClass("active");
            $("._filter-item__body").removeClass("active");
            if(windowWidth > 768){
                $("._filter-item__head").removeClass("active");
            }

            headSelect.addClass("active")
            headSelect.next().addClass("active")
        }else{
            headSelect.removeClass("active")
            headSelect.next().removeClass("active")
        }

        if(windowWidth < 768 && !target.closest("._filter-content__el--head__el").length ){
            headSelect.next().slideToggle()
        }

    }else if(!target.closest("._filter-content__el").length
            || target.closest("._filter-content__el").hasClass("_filter-content__el--no-body")){
        $("._filter-item__subhead").removeClass("active");
        $("._filter-body--sublist").removeClass("active");
        $("._filter-item__body").removeClass("active");
        if(windowWidth > 768){
            $("._filter-item__head").removeClass("active");
        }
    }

})


var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [0, 23500],
    connect: true,
    range: {
        'min': [0],
        'max': 23500
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle] ;
});

inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = stepsSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                stepsSlider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});


$(".filter-description").on("click", function (){
    $("._filter-content__inner").addClass("active");
    setTimeout(function (){
        $("._filter-content__inner__btn").addClass("active");
    },100)

})

$("._filter-content--full__cross").on("click" , function (){
    $("._filter-content__inner").removeClass("active");
    $("._filter-content__inner__btn").removeClass("active");
})


$("._filter-content__inner__btn").on("click" , function (){
    $("._filter-content__inner").removeClass("active");
    $("._filter-content__inner__btn").removeClass("active");
})






/*код вебкомпани блок готовых предложений s2-3*/
/*function solutionsElHeight(){
    let height = 0;
    $(".ready-solutions__el").not('.ready-solutions__el--w50').each(function (index , el){

        if(height < el.offsetHeight){
            height = el.offsetHeight
        }

        return height
    })
    return height
}

$(document).ready(function() {

    $(".solutions-list").each(function (index , el){
        let scrollHeight = el.scrollHeight;

        if(scrollHeight > 91){
            el.nextElementSibling.style.display = "flex";
        }
    })

    if ($(window).width() > 768){
        $(".ready-solutions__el").not('.ready-solutions__el--w50').each(function (i , el){
            el.style.height = solutionsElHeight() + "px";
        })
    }

    $(".more-example").on("click", function () {
        $(this).toggleClass("active");
        let prev = $(this).prev()
        let parent = $(this).closest(".ready-solutions__el__wrapper");


        if(prev.hasClass("active")){
            prev.animate({'height': 89}, {duration: 1000}, "linear");
            setTimeout(function (){
                parent.toggleClass("active");
            },1000)
        }else{
            prev.animate({'height': prev[0].scrollHeight}, {duration: 1000}, "linear");
            parent.toggleClass("active");
        }


        prev.toggleClass("active");
    })
});*/

