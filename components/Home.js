import React from 'react';
import {Component} from 'react';

class Home extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			name: props.name
		};
	}
	
	render()
	{
		return(
		<div>
		{this.props.children}
		<hr/>
		{this.state.name}
		</div>
		);
	}
}
export default Home; 
