import React from 'react';

const Current = ({book}) =>  {
	if(!book) {
		return (
			<div className="Current">
				<h3>Currently Reading</h3>
				<div>Loading...</div>
				<hr />
			</div>
			)
	}

	return (
		<div className="Current">
			<h3>Currently Reading</h3>
			{book.map((el) => {
				return (
					<li key={el.id} className="booksList">
						<img src={el.imageLinks.thumbnail} alt={el.title}/>
						<select id="select">
							<option></option>
							<option>Move To...</option>
							<option>Currently Reading</option>
							<option>Want To Read</option>
							<option>Read</option>
						</select>
					</li>
					);
			})}
			<hr />
		</div>
	);

}
export default Current;