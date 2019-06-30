import React from 'react'
import {Navbar} from 'react-bootstrap'

class Header extends React.Component{
	render(){
		return(
			<div>
				<Navbar bg="dark">
			    	<Navbar.Brand href="#home"  className="text-white">
				      	My Projects
			    	</Navbar.Brand>
			  	</Navbar>
			</div>
		)
	}
}
export default Header