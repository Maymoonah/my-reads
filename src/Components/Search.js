import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			books: [],
			booksArray: []
		}
	}
	
	render() {
		return (
			<div className="search">
				<div className="input">
					<input type="text" value={this.state.input} placeholder="Search Books..." onChange={(e)=>this.onChange(e.target.value)}></input>
					<button onClick={()=>this.submit(this.state.input)}><i className="fas fa-search"></i></button>
				</div>
				<div className="booksList">
					{this.state.booksArray.map((val)=><div className="divName"  key={this.state.booksArray[val]}>{val}</div>)}
				</div>
			</div>
		);
	}
}

export default Search;