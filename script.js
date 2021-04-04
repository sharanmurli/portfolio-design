function moveToSection(x){
    //alert(x);

    switch(x){
        case 'header_section_down_arrow':
            window.scroll({
                top:680,
                left:0,
                behavior:"smooth"

            })
            break;
        
        case 'about_section_down_arrow':
            window.scroll({
                top:660*2,
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
                top:690,
                left:0,
                behavior:"smooth"

            })
            break;
        case 'eduction_section_down_arrow':
            window.scroll({
                top:660*3,
                left:0,
                behavior:"smooth"

            })
            break;
        
        case 'contact_section_up_arrow':
            window.scroll({
                top:660*2,
                left:0,
                behavior:"smooth"

            })
            break; 
           

    }

}