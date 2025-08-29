function Card({ id, image, title, category, price }) {
  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "15px",
    padding: "10px",
    margin: "15px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.19)",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#ffffff",
  }

  const imgStyle = {
    width: "100%",
    height: "170px",
    objectFit: "contain",
    borderRadius: "15px",
  }

  const priceStyle = {
    margin: "0 10px",
    fontWeight: 500,
    fontSize: "16px",
    color: "black",
  }

  return (
    <div style={cardStyle} data-id={id}>
      <img src={image} alt={title} style={imgStyle} />
      <h3 style={{ margin: "0 10px", color: "black" }}>{title}</h3>
      <p style={{ margin: "0 10px", color: "black" }}>{category}</p>
      <p style={priceStyle}>${price}</p>
    </div>
  )
}

export default Card
