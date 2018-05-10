// ******************************************************** Enable and Disable Add to Cart Button *********************************************************\\
$('input[name="approvetocart"]').click(function () {
    if ($(this).is(':checked')) {
        $(".add-to-cart").prop("disabled", false);
    }
    else {
        $(".add-to-cart").prop("disabled", true);
    }
});

// ******************************************************** Change Active Element from header *********************************************************\\
$(".header-navigation a").click(function () {
    changeProcessFromHeader($(this));
})
// ******************************************************** Change Active Element from Sidebar *********************************************************\\
$(".sizebar-navigation .main-items>a").click(function () {
    changeProcessFromSideabr($(this));
})
// ******************************************************** Change Active Element from footer button *********************************************************\\
$(".process-prev-next button").click(function () {
    var getProcessName = $(this).attr("data-processname");
    // changeProcessFromHeader(getProcessName);
    // changeProcessFromSideabr(getProcessName);
    nextPrevFunction(getProcessName);
})
// ******************************************************** Documnet Dot Ready Function ***************************************************************\\
$(document).ready(function () {
    actionareaHeight();
    setHeight();
    $('.cover-upload input').change(function () {
        $('.cover-upload p').text(this.files.length + " file(s) selected");
    });
})


// ******************************************************** Functions ***************************************************************\\

//************************ Height Setting Fuctions
function actionareaHeight() {
    var getheight = $(".imagedetail-section").height();
    $(".section-actionarea,.selection-detail-options").css("height", getheight);
}
// ************************Header Highlight
function setHeight() {
    var actWidth = $(".header-navigation .active").width();
    var actPosition = $(".header-navigation .active").position();
    $(".slider").css({ left: +actPosition.left, width: actWidth });
}
// ************************Change from Header
function changeProcessFromHeader(currentElement) {
    headerHighlightFromHeader(currentElement);
    var currentStepName = currentElement.attr("data-stepName");
    $(".sizebar-navigation li").removeClass("active");
    $('.sizebar-navigation li a[data-stepName = ' + currentStepName + ']').parent().addClass('active');
    processNextFuntion(currentStepName);
}
function headerHighlightFromHeader(currentElement) {
    var position = currentElement.parent().position();
    var width = currentElement.parent().width();
    $(".slider").css({ "left": + position.left, "width": width });
}
// ************************Change from Sidebar
function changeProcessFromSideabr(currentElement) {
    var currentStepName = currentElement.attr("data-stepName");
    $(".header-navigation li").removeClass("active");
    $('.header-navigation li a[data-stepName = ' + currentStepName + ']').parent().addClass('active');
    headerHighlightFromSidebar();
    processNextFuntion(currentStepName);
}
function headerHighlightFromSidebar() {
    var position = $('.header-navigation li.active a').parent().position();
    var width = $('.header-navigation li.active a').parent().width();
    $(".slider").css({ "left": + position.left, "width": width });
}
// ************************Previous and Next button show and hide
function processNextFuntion(currentProc){
    $('.process-prev-next .pr-btns').css('display','none');
    $('.process-prev-next .pr-btns[data-stepName = ' + currentProc + ']').css('display','block');
}
// ************************Previous and Next Action
function nextPrevFunction(currentProcName){
    $(".sizebar-navigation li").removeClass("active");
    $('.sizebar-navigation li a[data-stepName = ' + currentProcName + ']').parent().addClass('active');
    $(".header-navigation li").removeClass("active");
    $('.header-navigation li a[data-stepName = ' + currentProcName + ']').parent().addClass('active');
    $(".selection-detail-options>.tab-content>.tab-pane").removeClass("active in");
    $('.tab-content .tab-pane[data-tabs = ' + currentProcName + ']').addClass("active in");
    headerHighlightFromSidebar();
    processNextFuntion(currentProcName);
}