import Card from "./Card";
import { data } from "./data";

export default function ProductCards() {
  return (
    <div className="cards">
      {
        data.map(({id,title,category,price,image})=>{
          return <Card id={id} title={title} category={category} price={price} image={image}/>
        })
      }
    </div>
  );
}
