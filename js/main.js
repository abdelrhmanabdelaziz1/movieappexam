

function openSideNav() {
    $(".side-navbar").animate({ left: 0 }, 500)
    $(".open-close").removeClass("fa-align-justify")
    $(".open-close").addClass("fa-x")
    for (let i = 0; i < 6; i++) {
        $(".nav-pages li").eq(i).animate({ top: 0 }, (i + 6) * 100)
    }
}
function closeSideNav() {
    let boxWidth = $(".side-navbar .nav-items").outerWidth();

    $(".side-navbar").animate({ left: -boxWidth }, 500)
    $(".open-close").addClass("fa-align-justify")
    $(".open-close").removeClass("fa-x")
    $(".nav-pages li").animate({ top: 300 })
}
closeSideNav()
$(".side-navbar  i.open-close").click(() => {
    if ($(".side-navbar").css("left") == "0px") {
        closeSideNav()

    } else {
        openSideNav()
    }
}

)
async function searchByName(term) {
    let respone = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1${term}`)
    respone= await respone.json()
    console.log(respone);
}
searchByName("")


