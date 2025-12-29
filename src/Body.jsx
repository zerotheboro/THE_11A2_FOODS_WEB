import Food from "./Section";
function Body(){
    return(
        <section className="body">
            <Food name="MAC&CHEESE" price="30" img_src=""/>
            <Food name="Ho lo" price="25" img_src="../picture/beef-meatball.webp"/>
            <h1>DRINKS</h1>
            <Food name="BRAZIL lemonade" price="22" img_src=""/>
            <Food name="trà bí đao" price="22" img_src=""/>
            <Food name="trà tắc" price="22" img_src="../picture/sweetlemonade.png"/>
        </section>
    )
}

export default Body;
