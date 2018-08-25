import React, { Component } from 'react';

class CreateContact extends Component{
	constructor(){
		super();

		this.createContact = this.createContact.bind(this);

	}

	flushForm(){
		this.refs.contactName.value = '';
		this.refs.contactDesignation.value = '';
		this.refs.contactPlace.value = '';
		this.refs.contactPhone.value = '';
	}

	createContact(e){
		e.preventDefault();
		const contact = {
			id: Math.floor((Math.random() * 100) + 1),
			name : this.refs.contactName.value,
			designation : this.refs.contactDesignation.value,
			place : this.refs.contactPlace.value,
			phone : this.refs.contactPhone.value
		}
		this.props.createContact(contact);
		this.flushForm();
	}

	render(){
		return (
					<div className="add-contact-section">
						<h3>Add New Contact</h3>
							<form>
								<div>
										<ul className="form-ul">
											<li>
												Name:<br />
										  		<input type="text" name="name" placeholder="Enter Name" 
										  			ref="contactName"/>
											</li>
											<li>
												Designation:<br />
										  		<input type="text" name="designation" placeholder="Enter Designation"
										  			ref="contactDesignation"/>
											</li>
										</ul>
								</div>
								<div>
										<ul className="form-ul">
											<li>
												Place of Birth:<br />
										  		<input type="text" name="place" placeholder="Enter Place of Birth"
										  			ref="contactPlace"/>
											</li>
											<li>
												Phone:<br />
										  		<input type="text" name="phone" placeholder="Enter Phone"
										  			ref="contactPhone"/>
											</li>
										</ul>								
								</div>
							  <button name="Submit" onClick={this.createContact} className="btn btn-primary btn-submit">Submit</button>
							</form>						
					</div>
			)
	}	
}

export default CreateContact;