function moveToSection(x){

    switch(x){
        case 'header_section_down_arrow':
            window.scroll({
                top:window.innerHeight,
                left:0,
                behavior:"smooth"

            })
            break;

        case 'about_section_down_arrow':
            window.scroll({
                top:window.innerHeight*2,
                left:0,
                behavior:"smooth"

            })
            break;

        case 'about_section_up_arrow':
            window.scroll({
                top:0,
                left:0,
                behavior:"smooth"

            })
            break;
        case 'education_section_up_arrow':
            window.scroll({
                top:window.innerHeight,
                left:0,
                behavior:"smooth"

            })
            break;
        case 'eduction_section_down_arrow':
            window.scroll({
                top:window.innerHeight*3,
                left:0,
                behavior:"smooth"

            })
            break;

        case 'contact_section_up_arrow':
            window.scroll({
                top:window.innerHeight*2,
                left:0,
                behavior:"smooth"

            })
            break;


    }

}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
