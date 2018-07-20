import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import WantTo from './WantTo';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: []
		}
	}

	onChange(e) {
		this.setState({query: e});

		BooksAPI.search(this.state.query)
		.then(response => {
			this.setState({results: response});
		});
	}

	submit(el) {
		console.log(el);
	}

	render() {
		const result = this.state.results;

		if(!result) {
			return (
				<div className="search">
					<div className="input">
						<input type="text" value={this.state.query} placeholder="Search Books..." onChange={(e)=>this.onChange(e.target.value)}></input>
						<button onClick={() =>this.submit(this.state.results)}><i className="fas fa-search"></i></button>
					</div>
					<div id="searchResults">
						Loading...
					</div>
				</div>
			);
		}

		return (
			<div className="search">
				<div className="input">
					<input type="text" value={this.state.query} placeholder="Search Books..." onChange={(e)=>this.onChange(e.target.value)}></input>
					<button onClick={() =>this.submit(this.state.results)}><i className="fas fa-search"></i></button>
				</div>
				<div id="searchResults">
					{result.map((res) => {
						return (
							<li key={res.id} className="booksList">
								<img src={res.imageLinks.smallThumbnail} />
							</li>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Search;