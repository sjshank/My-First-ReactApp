import React, { Component } from 'react';
import avatar from './avatar.png';


class ContactDetails extends Component{

	constructor(){
		super();

		this.state = {
			isEdit : false
		}

		this.handleEdit = this.handleEdit.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleEdit(e){
		e.preventDefault();
		this.setState({
			isEdit : !this.state.isEdit
		})
	}

	handleSave(e){
		e.preventDefault();
		this.setState({
			isEdit : !this.state.isEdit
		})
		const contact = {
			id: this.props.contact.id,
			name : this.refs.contactName.value,
			designation : this.refs.contactDesignation.value,
			place : this.refs.contactPlace.value,
			phone : this.refs.contactPhone.value
		}		
		this.props.updateContact(contact);
	}

	// Method for rendering buttons add contact/close based on condition
	renderSaveButtonSection(){
		if(!this.state.isEdit){
			return (
					<button name="edit" className="btn btn-light" onClick={this.handleEdit}>Edit</button>
				)
		}else{
			return (
					<button name="save" className="btn btn-primary" onClick={this.handleSave}>Save</button>
				)
		}
	}	


	render(){
		let isEditAllow = this.state.isEdit;
		let buttonEle = this.renderSaveButtonSection();
		return (
				<div style={{display: "flex"}}>
					<div className="avatar-div">
						<img src={avatar} alt="avatar" />
					</div>
					
					<div className="contact-details-section">
						<ul>
							<li>
								<span>Name :</span>
								{ !isEditAllow ? 
									(<span>{this.props.contact.name}</span>) :
									(<input type="text" defaultValue={this.props.contact.name} ref="contactName"/>)
								}
							</li>
							<li>
								<span>Designation :</span>
								{ !isEditAllow ? 
									(<span>{this.props.contact.designation}</span>) :
									(<input type="text" defaultValue={this.props.contact.designation} ref="contactDesignation"/>)
								}
							</li>
							<li>
								<span>Place of Birth :</span>
								{ !isEditAllow ? 
									(<span>{this.props.contact.place}</span>) :
									(<input type="text" defaultValue={this.props.contact.place} ref="contactPlace"/>)
								}
							</li>
							<li>
								<span>Phone :</span>
								{ !isEditAllow ? 
									(<span>{this.props.contact.phone}</span>) :
									(<input type="text" defaultValue={this.props.contact.phone} ref="contactPhone"/>)
								}
							</li>
						</ul>
					</div>
					<div className="edit-contact-section">
						{buttonEle}
					</div>
				</div>
			)
	}
}

export default ContactDetails;