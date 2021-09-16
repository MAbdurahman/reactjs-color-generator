import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './../components/colors/SingleColor';

export default function App() {
	//**************** variables ****************//
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#d3d3d3').all(10));
	//**************** functions ****************//
	const handleSubmit = e => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
         setTimeout(() => {
            setError(false);
      
         }, 3000);
			setError(true);
			console.log(error);
		}
	};
	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={e => setColor(e.target.value)}
						placeholder='#d3d3d3'
						className={`${error ? 'error' : null}`}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}
