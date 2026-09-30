import { useState } from 'react'
import items from './data.js'
import ItemCard from './ItemCard.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [hideClaimed, setHideClaimed] = useState(false)

  return (
    <div className="site">
      <header className="site-header">
        <div className="brand-mark" aria-hidden="true">L&amp;F</div>
        <span>Campus property desk</span>
        <span className="header-note">Found in the foundation.</span>
      </header>

      <main>
        <section className="intro">
          <p className="intro-label">Campus recovery log</p>
          <h1>Lost <span>&amp;</span><br />Found-ation<span className="period">.</span></h1>
          <p className="intro-copy">A record of items found around campus. Check the place and date to see if something is yours.</p>
          <div className="intro-rule" aria-hidden="true"><span>↘</span></div>
        </section>

        <section className="records" aria-labelledby="records-title">
          <div className="records-heading">
            <div>
              <p className="records-label">The register</p>
              <h2 id="records-title">Handed in</h2>
            </div>
            <span className="records-badge">{items.length} items, {items.filter((item) => item.status === 'claimed').length} claimed</span>
          </div>
          <div className="toolbar">
            <input type="search" aria-label="Search items" placeholder="Search by item name" value={query} onChange={(event) => setQuery(event.target.value)} />
            <label><input type="checkbox" checked={hideClaimed} onChange={(event) => setHideClaimed(event.target.checked)} /> Hide claimed</label>
          </div>
          <div className="list-head" aria-hidden="true">
            <span>No.</span>
            <span>Item / place</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          <div className="item-list">
            {items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && 
            (!hideClaimed || item.status !== 'claimed')).map((item) => <ItemCard key={item.id} item={item} />)}
          </div>
        </section>
      </main>
      <footer>Lost &amp; Found-ation <span>Campus property desk</span></footer>
    </div>
  )
}

export default App
