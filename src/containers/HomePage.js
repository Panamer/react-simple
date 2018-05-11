import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {Link} from 'react-router';
import * as Actions from '../actions/HomeAction.js';
import Deposit  from '../component/deposit';
import '../style/homepage.css';

class App extends Component {
    render () {
        return (
            <div className='homepage'>
                <h2>达奇漂流后台工具</h2>
                <div className="centerp">
                	<span className="centerp-left">机构漂流管理
                	</span><div className='centerp-right'>漂流中的达奇 :
                		<span>5</span>台
                		<Link className='centerp-set' to="/set">设置</Link>
                	</div>
                </div>
                <Deposit />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    HomeMessage: state.home
});

const mapActionCreators = (dispatch) => ({
    actions: bindActionCreators({...Actions}, dispatch)
});
export default connect(mapStateToProps, mapActionCreators)(App);
