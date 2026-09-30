function ItemCard({ item }) {
  const parts = item.date.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const shortDate = Number(parts[2]) + ' ' + months[Number(parts[1]) - 1]
  return (
    <article className="item-card">
      <span className="item-number">{item.id}</span>
      <div className="item-description">
        <h3>{item.name}</h3>
        <p>Found at {item.place}</p>
      </div>
      <time className="item-date" dateTime={item.date}>{shortDate}</time>
      <span className={`item-status ${item.status}`}>{item.status}</span>
    </article>
  )
}

export default ItemCard

