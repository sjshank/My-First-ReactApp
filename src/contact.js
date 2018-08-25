import React, { Component } from 'react';
import PropTypes from "prop-types";

import ContactDetails from "./contactDetails";

import Expand from "./assets/images/expand.png";
import Collapse from "./assets/images/collapse.png";

class Contact extends Component {

	constructor(props){
		super(props);
		this.state = {
			isCollapsed: props.isCollapseAll,
			contact : props.contact
		};
		this.toggleSection = this.toggleSection.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.isCollapseAll !== this.props.isCollapseAll){
	    	this.setState({
	    	 isCollapsed: this.props.isCollapseAll
	    	});
    	}
    	//console.log(this.props.contact);
  	}
	displayHiddenSection(){
		let isCollapsed = this.state.isCollapsed;
		let contact = this.state.contact;

		if(!isCollapsed){
			return (
					<div>
						<ContactDetails contact={this.props.contact} updateContact={this.props.updateContact}/>
						<div className="clear-both"></div>
					</div>
				)
		}
	}

	toggleSection(e){
		if(e)
			e.preventDefault();
		this.setState({
			isCollapsed: !this.state.isCollapsed
		});
		this.displayHiddenSection();
	}





	render() {
		const isCollapsed = this.state.isCollapsed;
		let anchorLink = '';
		if(isCollapsed){
			anchorLink = <img src={Expand} onClick={this.toggleSection} alt="expand"/>
			
		}else{
			anchorLink = <img src={Collapse} onClick={this.toggleSection} alt="collapse"/>
			
		}		

		return (
				<div className="each-contact-row" >
					<div className="each-contact" onClick={this.toggleSection}>
						<span className="contact-name" id={this.state.contact.id}>{this.state.contact.name}</span>
					</div>
					{anchorLink}
					<div className="clear-both"></div>
					{this.displayHiddenSection()}
				</div>
			);
	}
}

Contact.propTypes  = {
	contact : PropTypes.object.isRequired
}

export default Contact;