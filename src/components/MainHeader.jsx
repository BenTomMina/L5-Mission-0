import React from 'react'
import "./MainHeader.css"

export default function MainHeader() {
  return (
    <section className="main">
      <div className="mainContent">
        <h1>Lorem ipsum <br/> dolor sit amet</h1>
        <div className="searchBar">
          <input type="text" placeholder="Search..."/>
          <button>SEARCH</button>
        </div>
      </div>
    </section>
  )
}
