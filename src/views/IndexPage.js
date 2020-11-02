import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';

const IndexPage = () => {
	const [
		items,
		setItems
	] = useState([]);
	useEffect(() => {
		initItems();
	}, []);

	const initItems = () => {
		const size = 15;
		const itemList = [];
		for (let index = 0; index < size; index++) {
			itemList.push(index);
		}
		setItems(itemList);
	};

	const renderItems = () => {
		return (
			<React.Fragment>
				<div className='container'>
					<div className='cards-container'>
						{items.map((item) => {
							return (
								<div className='card-item' key={item}>
									<Card />
								</div>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	};
	return (
		<React.Fragment>
			<NavBar />
			{renderItems()}
		</React.Fragment>
	);
};

export default IndexPage;
