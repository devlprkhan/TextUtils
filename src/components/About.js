import React from 'react'

export default function About(props) {

    // Set the top title
    document.title = 'TextUtils - About';
    
    let themeStylingNums = ['One', 'Two', 'Three', 'Four']

    function aboutPageStyling(aboutPageHeadingStyleNum){

        let aboutPageHeading = document.getElementsByClassName('aboutPageHeading');

        Array.from(aboutPageHeading).forEach(element => {
            for (const num of themeStylingNums) {
                if (element.classList.contains('aboutPage'+num)) {
                    element.classList.remove('aboutPage'+num);
                    element.classList.remove('aboutPageHeadingDefault');
                }
            }
            element.classList.add('aboutPage'+aboutPageHeadingStyleNum);

        });
    }

    if (props.mode === 'themeOne') {

        aboutPageStyling('One');
    } 
    else if (props.mode === 'themeTwo') {
        
        aboutPageStyling('Two');
        
    }
    else if (props.mode === 'themeThree') {
        
        aboutPageStyling('Three');
        
    } 
    else if (props.mode === 'themeFour') {
        
        aboutPageStyling('Four');
        
    }

    return (
        <div>
            <div className="container aboutContainer d-flex flex-column align-items-center justify-content-center">
                <div className="heading aboutTextUtilsHead">
                    <h1 className="aboutPageHeading aboutPageHeadingDefault">About TextUtils</h1>
                </div>
                <div className="body aboutTextUtilsBody">
                    TextUtils TextUtils sit amet consectetur adipisicing elit. Obcaecati, quae voluptatibus consequatur, maiores commodi ipsa sequi TextUtilse sed fugiat quam excepturi, cum at quia qui! Sed incidunt ea, eos autem esse quis, consequuntur delectus at assumenda animi commodi nihil placeat impedit TextUtils atque vitae. A similique dignissimos, ab quisquam quis incidunt harum ex fugiat porro, veniam maxime molestias quos facilis commodi vero TextUtilse quidem distinctio natus perspiciatis quibusdam asperiores, rem odio minus. Assumenda maxime reiciendis amet error beatae? Illum consequuntur expedita maxime ut delectus ullam ad impedit quibusdam quam omnis?
                    <br />
                    <br />
                    TextUtils Illum consequuntur expedita maxime ut delectus ullam ad impedit quibusdam quam omnis?.

                </div>
            </div>
        </div >
    )
}
