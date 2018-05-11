import React, { Component, PropTypes } from 'react';
import "./set.css"

export default class Set extends Component {
    render () {
        return (
        	<div className='set'>
        		<h5>文案设置 : </h5>
        		<input type="text" value='线下体验课文案设置文案设置文案设置文案设置文案设置文' />
        		<h5>达奇数量设置 : </h5>
        		<div className='set-num'>
        			免费漂流数量 : <input type="text" value='3' />
        		</div>
        		<div className='set-num'>
        			付费漂流数量 : <input type="text" value='3' />
        		</div>
        		<button>确定</button>
        		<h5>奖品设置 : </h5>
        		<div>
        			1.<input type="text" value='线下体验课' />
        			<span>一张图</span>
        			<span>跳转链接	<input type="text"/></span>
        		</div>
        		<button>确定</button>
        	</div>
        );
    }
}
