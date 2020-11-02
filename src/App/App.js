import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panels from '@enact/moonstone/Panels';
import React from 'react';
import IndexPage from '../views/IndexPage';
import css from './App.module.less';
import '../Global.less';

const App = () => {
	return <IndexPage />;
};

export default MoonstoneDecorator(App);
