import React, { Component } from 'react';

class ToastMessage extends Component{

	renderToast(){
		let toastEle = document.getElementById('snackbar');
		toastEle.className = 'show';
		setTimeout(
			function(){
				toastEle.className = toastEle.className.replace("show", "");
			},4000);
	}

	render(){
		return(
				<div id="snackbar" >
						<div id="headerTitle">{this.props.title}</div>
						<div id="subTitle">{this.props.subTitle}</div>
				</div>
			)
	}
}

export default ToastMessage;