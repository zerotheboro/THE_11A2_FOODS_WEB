



function section_of_each_food(props){
    return(
        <div className={`food_div ${props.side || "left"}`}>
            <h1>{props.name}</h1>
            <h2>PRICE: {props.price}K/cup</h2>
            <p>{props.para}</p>
            <img src={props.img_src}/>
        </div>)
}

export default section_of_each_food;