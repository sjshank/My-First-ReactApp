import React, { Component } from 'react';

import Contact from "./contact";
import SearchContact from "./searchContact";
import CreateContact from "./createContact";
import ToastMessage from "./toastMessage";

import Expand from "./assets/images/expand.png";
import Collapse from "./assets/images/collapse.png";

const contactList = [
  {
    'id': 1, 'name': 'Saurabh Shankariya',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  },
  {
    'id': 2, 'name': 'Prasad Mahajan',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  },
  {
    'id': 3, 'name': 'Vickky Bhede',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  },
  {
    'id': 4, 'name': 'Tushar Bante',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  },
  {
    'id': 5, 'name': 'Fanish Singh',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  },
  {
    'id': 6, 'name': 'Rahul Nandurkar',
    'designation': 'SME', 'phone': 12345,
    'place': 'Nagpur, Maharashtra'
  }
];

class ContactList extends Component{

	constructor(props){
		super(props);
		this.title = '';
		this.subTitle = '';
		this.state = {
			contactList,
			originalContactList: contactList,
			isCollapseAll : true,
			isAddContact : false
		};

		this.toggleAllSection = this.toggleAllSection.bind(this);
		this.toggleCreateContactModal = this.toggleCreateContactModal.bind(this);
		this.updateContact = this.updateContact.bind(this);
	}

	// Method for handling search contact action
	searchContact(searchStr){
		let filteredContacts = this.state.originalContactList.filter( c => c.name.toLowerCase().indexOf(searchStr) > -1);
		this.setState({
			contactList : filteredContacts
		});
	}

	// Method for handling all div expand collapse action
	toggleAllSection(e){
		e.preventDefault();
		this.setState({
			isCollapseAll : !this.state.isCollapseAll
		});
	}

	// Method for show/hide contact modal
	toggleCreateContactModal(e){
		e.preventDefault();
		this.setState({
			isAddContact : !this.state.isAddContact
		});
	}

	// Method for rendering buttons add contact/close based on condition
	renderCloseSection(){
		if(this.state.isAddContact){
			return (
					<button name="Close" className="btn btn-light add-contact-btn" onClick={this.toggleCreateContactModal}>Close</button>
				)
		}else{
			return (
					<button name="Add Contact" className="btn btn-light add-contact-btn" onClick={this.toggleCreateContactModal}>Add Contact</button>
				)
		}
	}

	// Method for pushing new contact into an existing list
	createContact(contact){
		let tempOrgList = this.state.originalContactList.slice(0);
		let tempContList = this.state.contactList.slice(0);
		tempOrgList.unshift(contact);
		tempContList.unshift(contact);

		this.setState({
			originalContactList : tempOrgList,
			contactList : tempContList
		});
		this.title = "Success !";
		this.subTitle = "Contact has been added successfully.";
		this.toastMessage.renderToast();
	}	


	// Method for updating a contact into an existing list
	updateContact(contact){
		this.state.originalContactList.forEach( (c) => {
			if(c.id === contact.id){
				c['name'] = contact['name'];
				c['designation'] = contact['designation'];
				c['place'] = contact['place'];
				c['phone'] = contact['phone'];
			}
		});
		this.state.contactList.forEach( (c) => {
			if(c.id === contact.id){
				c['name'] = contact['name'];
				c['designation'] = contact['designation'];
				c['place'] = contact['place'];
				c['phone'] = contact['phone'];
			}
		});
				
		this.setState({
			originalContactList : this.state.originalContactList,
			contactList : this.state.contactList
		});
		this.title = "Success !";
		this.subTitle = "Contact has been updated successfully.";	
		this.toastMessage.renderToast();	
	}	

	// Render method for render HTML element of component
	render(){
		const isCollapseAll = this.state.isCollapseAll;
		let anchorLink = '';
		if(this.state.contactList.length > 0){
			if(isCollapseAll){
				anchorLink = <div className="expand-collapse-all" >
								<span><a href="" style={{marginTop: "10px"}} className="each-expand-collapse" onClick={this.toggleAllSection}>Expand All</a>
								</span>
								<span>
									<img src={Expand} onClick={this.toggleAllSection} alt="expand"/>
								</span>
							</div>
			}else{
				anchorLink = <div className="expand-collapse-all">
								<span>
									<a href="" style={{marginTop: "10px"}}  className="each-expand-collapse" onClick={this.toggleAllSection}>Collapse All</a>
								</span>
								<span>
									<img src={Collapse} onClick={this.toggleAllSection} alt="collapse"/>
								</span>
							</div>
			}
		}
		const buttonEle = this.renderCloseSection();
		const showContactModal = this.state.isAddContact;
		let filterRecords = this.state.contactList.length;
		let originalRecords = this.state.originalContactList.length;
		let title = this.title;
		let subTitle = this.subTitle;	

		return (
				<div>
				   	<ToastMessage ref={instance => { this.toastMessage = instance; }}
				   					title={title}
				   					subTitle={subTitle} />				
					<SearchContact searchContact={this.searchContact.bind(this)}/>
					<div style={{margin: "10px"}}> 
						<span className="search-summary-span">Showing {filterRecords} of {originalRecords} contacts</span>
						{buttonEle}
						{anchorLink}
					</div>
					<div className="clear-both"></div>
					
					{ showContactModal ? <CreateContact createContact={this.createContact.bind(this)}/> : ''}

					{ filterRecords > 0 ? (this.state.contactList.map(c => 
						<Contact isCollapseAll={this.state.isCollapseAll} 
								 key={c.id} contact={c} 
								 updateContact={this.updateContact} />)) : 
						(
							<div className="empty-records">
								No contacts found.
							</div>
						) }
					
				</div>
			)
	}
}

export default ContactList;