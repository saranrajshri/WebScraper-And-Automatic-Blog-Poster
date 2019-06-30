import React from 'react'
import axios from 'axios'
import {Button,Form,Container} from 'react-bootstrap'

class Blog extends React.Component{
	constructor(){
		super()
		this.state={
			quote:"",
			quotes:[]
		}

	}
	post=()=>{
		var newArr=this.state.quotes.slice()
		newArr.push(this.state.quote)
		this.setState({
			quotes:newArr
		})
		axios.post('http://localhost:8000/addPost',{
			quote:this.state.quote
		})
	}

	updateState=(e)=>{
		this.setState({
			quote:e.target.value
		})
	}
	render(){
		return(
			<div className="mt-3">
				<Container>	
					<h3 className="text-dark">Automatic Blog Poster</h3>
					<h5 className="small text-secondary">Add a blog post</h5>
					<hr/>
					<Form.Group controlId="exampleForm.ControlTextarea1">
	    				<Form.Label>Enter Your Message</Form.Label>
	    				<Form.Control as="textarea" rows="3" onChange={this.updateState} className="quote-body" />
	  				</Form.Group>
					<br/>
					<Button variant="primary" onClick={this.post} className="post-btn">Post</Button>

					<h5 className="mt-4">Blog Posts</h5>
					<hr/>
					{(this.state.quotes).slice(0).reverse().map((value,index)=>{
						return(
							<div key={index}>
								<h6>{value}</h6>
								<hr/>
							</div>
						)
					})}
				</Container>
			</div>
		)
	}
}
export default Blog