import Card from "./Card";
import { data } from "./data";

export default function ProductCards() {
  const Style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }

  return (
    <div style={Style}>
      {data.map((p) => (
        <Card 
          key={p.id} 
          id={p.id} 
          title={p.title}
          category={p.category}
          price={p.price}
          image={p.image} 
        /> 
      ))}
    </div>
  )
}
