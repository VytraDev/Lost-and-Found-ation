function ItemCard({ item }) {
  return (
    <article className="item-card">
      <span className="item-number">{item.id}</span>
      <div className="item-description">
        <h3>{item.name}</h3>
        <p>Found at {item.place}</p>
      </div>
      <time className="item-date" dateTime={item.date}>{item.date}</time>
      <span className={`item-status ${item.status}`}>{item.status}</span>
    </article>
  )
}

export default ItemCard
