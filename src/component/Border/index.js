// CSS3 边框 
// index.js

import React, {Component}from 'react';
import './border.less';

export default class Border extends Component {
	render() {
		return (
			<div className="border">
				border-radius 属性允许您向元素添加圆角。
			</div>
		);
	}
}