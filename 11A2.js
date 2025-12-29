function animation_with_settime(){
const header_h1 = document.getElementById("HERO")

const observer = new IntersectionObserver((entries) => {
    (entries[0].isIntersecting) ?
     entries[0].target.classList.add("show") 
     : entries[0].target.classList.remove("show")
}, 
{

});
observer.observe(header_h1)
}

setTimeout(animation_with_settime, 100)





/*======================== --lightblue: #6DE1D2;
    --energetic--yellow: #FFD63A;
    --passion-orange: #FFA955;
    --tomato: #F75A5A;
    --complement-of-yellow: #203E5F;
    --darker-black: #1A2634;
    --notso-energetic-yellow: #EEC550;
========================*/


