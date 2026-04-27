import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


import { useState } from 'react';

class EditorNotification extends Component {
	
	constructor(props) {
		super(props);
		
		this.value="";
		this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};

		this.formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline',
		    'list', 'bullet',
		    'align',
		    'color', 'background'
	  	];

	  	this.state = {
			//comments: ''
		}

		this.rteChange = this.rteChange.bind(this);
	}


	rteChange = (content, delta, source, editor) => {
		console.log(editor.getHTML()); // rich text
		this.value=editor.getHTML();
		//alert(this.value);
		this.props.cuerpo(editor.getHTML());
	//	console.log(editor.getText()); // plain text
	//	console.log(editor.getLength()); // number of characters
	//return editor.getHTML();
	}

	render() {
		
		return (
	      <div>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
				style={{height:400}} id={"editor"} 
				value={this.value || this.props.defcuerpo}/>
			
	      </div>
	    );
	}

}

export default EditorNotification;