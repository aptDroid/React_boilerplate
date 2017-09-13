console.log("hello");
import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home';

render(<Home name="Ap T">
	<div>Header here</div>
	</Home>,document.getElementById('app'));