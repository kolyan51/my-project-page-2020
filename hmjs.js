var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

    $("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});/*топ скрипт для плавной прокруутки*/

function loadMenu(){
    li_index = 0;
    if(document.documentElement.clientWidth<576){
        var mainPhotoDiv = document.getElementById("mainPhoto");
        mainPhotoDiv.classList.add("order-first");
    }
    $("#carousel").on('slid.bs.carousel', function () {
        changeActiveLi(getActiveSlideIndex());
      })
    var navbar = document.getElementsByClassName("navbar-nav")[0];
    navbar.addEventListener("click", navChange, event)
}

function darkTheme(){
    var checkbox = document.getElementById("check");
    var divs = document.getElementsByClassName("style-changable");
    var modeLabel = document.getElementById("mode-label");
    if(checkbox.checked == true)
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.add("dark");
            modeLabel.innerText="Перейти в дневной режим";
        }
    else{
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.remove("dark");
            modeLabel.innerText="Перейти в ночной режим";
        }
    }
}