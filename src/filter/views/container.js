import React from 'react';
import {connect} from 'react-redux';
import { filterAll, filterCompleted, filterUncompleted } from '../action.js'
import './filter.css'

class Filter extends React.Component{
	render(){
		const { filter, showAll, showComplete, showUncomplete } = this.props;
		return (
			<div className="filter">
				<button onClick={showAll} className={ filter === 'all' ? 'active' : ''}>所有</button>
				<button onClick={showComplete} className={ filter === 'completed' ? 'active' : ''}>已完成</button>
				<button onClick={showUncomplete} className={ filter === 'uncompleted' ? 'active' : ''}>未完成</button>
			</div>
		)
	}
}

let mapStateToProps = (state,props)=>{
	return {
		filter:state.filter
	}
} 

let mapDispatchToProps = (dispatch,props)=>{
	return {
		showAll:()=>{
			dispatch(filterAll());
		},
		showComplete:()=>{
			dispatch(filterCompleted());
		},
		showUncomplete:()=>{
			dispatch(filterUncompleted());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)