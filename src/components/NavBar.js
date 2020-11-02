import Button from '@enact/moonstone/Button';
import IconButton from '@enact/moonstone/IconButton';
import React from 'react';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className='nav-bar'>
				<div className='nav-bar-container'>
					<div className='nav-left'>
						<div>
							<IconButton>search</IconButton>
						</div>
						<div>
							<Button>Home</Button>
						</div>
						<div>
							<Button selected>Movies</Button>
						</div>
						<div>
							<Button>Comedy Clips</Button>
						</div>
						<div>
							<Button>Video Clips</Button>
						</div>
						<div>
							<Button> Profile</Button>
						</div>
					</div>
					<div className='nav-right'>
						<div className='login'>
							<Button>
								<p>Login</p>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
