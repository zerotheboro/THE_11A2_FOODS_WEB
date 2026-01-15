import Food from "./Section";
const images = import.meta.glob("../picture/*.{png,jpg,jpeg,webp,gif,svg,mp4}", { eager: true,  import: "default", });
/*return an object of file */
/*const imageFiles = Object.entries(images).map(([path, module]) => ({
  path,
  url: module.default
}));
/*convert it back to another form of object */

function image_importor(name)  {
  // find first path that contains the given name
  const entry = Object.entries(images).find(([path]) =>
    path.toLowerCase().includes(name.toLowerCase())
  );

  if (!entry) {
    console.warn(`imageUrl: Image not found for name "${name}"`);
    return "";
  }

  const url = entry[1]; // because import: "default", entry[1] is the URL string
  return url;
}







function Body(){
    return(
        <section className="body">
            <Food name="Há cảo" price="30" img_src="" side="right" para="HEY I LOVE YOU FOR"/>
            <Food name="Hồ lô nướng" price="25" img_src={image_importor("beef-meatball")} side="right" para="HEY I LOVE YOU FOR"/>
            <h1>DRINKS</h1>
            <Food name="sương sáo hạt chia" price="22" img_src={image_importor("beef-meatball")} side="left" para="HEY I LOVE YOU FOR"/>
            <Food name="trà bí đao" price="22" img_src={image_importor("BISDAO")} side="right" para="HEY I LOVE YOU FOR"/>
            <h1>OTHER PROJECTS</h1>
            <Food name="BOX" price="22" img_src="../picture/sweetlemonade.png" side="left" para="HEY I LOVE YOU FOR"/>
        </section>
    )
}

export default Body;
