import React, { Component } from 'react';

class SearchContact extends Component{

	constructor(){
		super();
		this.state = {
			isCollapsed: true
		}
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e){
		e.preventDefault();
		this.props.searchContact(this.refs.searchInput.value);
	}


	render(){

		return(
				<div className="search-input">
					<input type="search" name="searchText"
					 	placeholder="Search Contact"
					 	onChange={this.handleSearch}
					 	ref="searchInput"/>
					
				</div>
			)
	}
}

export default SearchContact;