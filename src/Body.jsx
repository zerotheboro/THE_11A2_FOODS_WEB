import Food from "./Section";
function Body(){
    return(
        <section className="body">
            <Food name="MAC&CHEESE" price="30" img_src="" side=""/>
            <Food name="Hồ lô nướng" price="25" img_src="../picture/beef-meatball.webp" side="right"/>
            <h1>DRINKS</h1>
            <Food name="BRAZIL lemonade" price="22" img_src="" side="left"/>
            <Food name="trà bí đao" price="22" img_src="" side="right"/>
            <Food name="trà tắc" price="22" img_src="../picture/sweetlemonade.png" side="left"/>
        </section>
    )
}

export default Body;
