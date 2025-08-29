import Card from "./Card"
import useFetch from "./useFetch"

export default function ProductCards() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="cards">
      {data.map(({ id, title, category, price, image }) => (
        <Card
          key={id}
          id={id}
          title={title}
          category={category}
          price={price}
          image={image}
        />
      ))}
    </div>
  )
}
