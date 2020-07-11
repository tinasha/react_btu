import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title } <span>({ selected.description })</span></h2>
				<p className="rating">age: {selected.age}</p>
				<div className="plot">
					<p>{selected.modified_time}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup