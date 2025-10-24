/*const BANNER_11A2 = document.getElementById("search")
const BANNER_11A2_TEXT = document.querySelector("#search p") // make sure to use querySelector for selecting correct tags
const BANNER_11A2_IMAGE = document.querySelector("#search img")
BANNER_11A2.addEventListener("animationstart", () => {
    BANNER_11A2_IMAGE.style.opacity = "1"; // set initial opacity to 1
})
BANNER_11A2.addEventListener("animationend", () => {
    BANNER_11A2_TEXT.style.animation = "BLINK 0.7s step-end infinite, EXTEND 2.2s steps(10) forwards";
    // remember if two animation done to1 element use comma to separate them
    BANNER_11A2_TEXT.style.borderRight = "2px solid black";
})
*/
//=====================================FLYER=========================================
const FLYER_11A2 = document.getElementsByClassName("flyer");//list of all flyer elements
const the_extend_div = document.getElementsByClassName("flyer-extender");//list of all extend div in flyer
const CIRCLE = document.getElementsByClassName("CIRCLE");//list of all div in extend div in flyer
const PICTUREinCIRCLE = document.querySelectorAll("div.CIRCLE img");
const thetrapzoid = document.getElementsByClassName("trapzoid");
function default_function(selector) {
    selector.style.backgroundColor = 'blue'; //there is smth with._funtion_ it is not the flyer it is the argument passed in
}

class Flyer {
    constructor(indexof_flyer, function_name = default_function) {
        this.indexof_flyer = indexof_flyer;
        this.function_name = function_name;
    }
    RETURNFunction(ARGUMENT) {
        return this.function_name(ARGUMENT);
    }
    set newFunction(new_function_name) {
        this.function_name = new_function_name;
    }
}

const FUNCTION_OF_EACH_FLYER = [];//array to store each flyer function
                                  // add object to array
for(let i = 0; i < FLYER_11A2.length; i++) {
    FUNCTION_OF_EACH_FLYER.push(new Flyer(i));
}

//========A function to alter function to each flyer===========
function alter_function_of_flyer(index, new_function) {
    FUNCTION_OF_EACH_FLYER[index].newFunction = new_function;
}

/*================================================*/
function first_flyer_function() {
    FLYER_11A2[0].style.backgroundColor = 'darkblue';
    the_extend_div[0].style.animation = "moving_across 2s forwards";
    the_extend_div[0].style.backgroundColor = 'aqua';
    the_extend_div[0].addEventListener("animationend", () => {
    CIRCLE[0].style.animation = "EXPAND 1s forwards, trans 0.5s forwards";
    PICTUREinCIRCLE[0].style.animation = "rotate 1s forwards, trans 0.5s forwards"
    CIRCLE[1].style.animation = "EXPAND 1s forwards, trans 0.5s forwards";
    PICTUREinCIRCLE[1].style.animation = "rotate 1s forwards, trans 0.5s forwards"
    CIRCLE[2].style.animation = "EXPAND 1s forwards, trans 0.5s forwards, rotate 1s forwards";
});
    
}
alter_function_of_flyer(0, first_flyer_function);
/*================================================*/
function second_flyer_function() {
    document.querySelector('div.flyer.background').style.animation = "trans 1s forwards"
    document.querySelector('div.GRID div.blacktag span').style.animation = "moving_upward 3s forwards"
}

alter_function_of_flyer(1, second_flyer_function)
/*================================================*/
FLYER_11A2[2].style.backgroundColor= 'blue';
function third_flyer_function() {
    thetrapzoid[0].style.backgroundColor = 'darkblue';
    thetrapzoid[1].style.backgroundColor ='red';
    thetrapzoid[2].style.backgroundColor = 'blue';
    thetrapzoid[0].style.animation = 'RIGHTSHIFT 2.2s forwards'
    thetrapzoid[2].style.animation = 'LEFTSHIFT 2.2s forwards'
    thetrapzoid[0].style.backgroundImage = "url('../image/NuclearWaste.jpg')"
}

alter_function_of_flyer(2, third_flyer_function)



//===========scroll event listener to check if in view===================/
window.addEventListener("scroll", () => {
    for (let i = 0; i < FLYER_11A2.length; i++) {
        let rect = FLYER_11A2[i].getBoundingClientRect();
        const HALF_VIEWER_HEIGHT = window.innerHeight * 1.5;
        let inViewdetermination = rect.bottom <=  HALF_VIEWER_HEIGHT;
        if (inViewdetermination) {
            FUNCTION_OF_EACH_FLYER[i].RETURNFunction(FLYER_11A2[i]); //a program allow each flyer has its unquie properties; solution:creating an OBJECT IN JS
        }
    }
});


