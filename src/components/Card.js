import React from 'react';
import Item from '@enact/moonstone/Item';
import bg from '../../assets/bg.jpg';

const Card = () => {
	return (
		<React.Fragment>
			<div className='card'>
				<Item>
					<div className='card-content'>
						<div className='poster'>
							<img src={bg} alt='' />
						</div>
						<div className='info'>
							<p className='catg'>Movie Catrgory</p>
							<p className='name'>Movie Name</p>
						</div>
					</div>
				</Item>
			</div>
		</React.Fragment>
	);
};

export default Card;
