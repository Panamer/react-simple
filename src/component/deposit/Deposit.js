import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as Action from '../../actions/depositAction.js';
import axios from '../../actions/axios.js';


import "./deposit.css"

class Deposit extends Component {
  constructor(){
      super();
      this.state = { current:0}
    }
  
  componentDidMount () {
    const { actions } = this.props;
    actions.getPkgsList(2);  
  }

  
  
  handleClick(index){
      this.setState({ current:index});
      this.props.actions.getPkgsList(index);
  }
  currentClass(index){
      return this.state.current === index ? 'current' : '';
  }
    render () {
      console.log(this);
        return (
          <div className='deposit'>
            <div>
              { this.props.Deposlist.list.map( (val,index ) => {
                      return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} val={val} key={index} index={index} /> )
                }) }
            </div>
            <table>
              <thead>
                <th>家长姓名</th>
                <th>孩子姓名</th>
                <th>手机号</th>
                <th>邀请人</th>
                <th>已邀请</th>
                <th>漂流状态</th>
                <th>操作</th>
              </thead>
              <tbody>
                
                  { this.props.Deposlist.contentlist.map( ( val,index ) => {
                          return ( <Content key={index} val={val} index={index} /> )
                    })}

                
              </tbody>
            </table>
          </div>
        );
    }
}

class List extends Component{
    handleClick(){
       this.props.handleClick(this.props.index);
    }
    render(){
      return(
          <span className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}</span>
      )
    }
}

class Content extends Component{
    render(){
        return(
          <tr>
            <td >{this.props.val.realname}</td>
            <td >{this.props.val.child_name}</td>
            <td >{this.props.val.mobile}</td>
            <td >{this.props.val.inviter_realname}</td>
            <td >{this.props.val.invite_num}</td>
            <td >{this.props.val.status}</td>
          <Link className='info-btn' to="/page2">详情</Link>
            </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    Deposlist: state.deposit
});

const mapActionCreators = (dispatch) => ({
    actions: bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapActionCreators)(Deposit);