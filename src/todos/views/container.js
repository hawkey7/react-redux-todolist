import React from 'react';
import {connect} from 'react-redux';
import { addTodo , toggleTodo , removeTodo } from '../action.js'
import './todos.css';


class Todos extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text:''
		}
		this.onHandleInput = this.onHandleInput.bind(this);
		this.onAddText = this.onAddText.bind(this);
	}
	onHandleInput(ev){
		this.setState({
			text:ev.target.value
		})
	}
	onAddText(){
		if( !this.state.text ) return ;
		const { addTodo } = this.props
		addTodo(this.state.text);
		this.setState({
			text:''
		})
	}
	render(){
		const { todos ,toggleTodo ,removeTodo , filter } = this.props;
		return (
			<div className="todos">
				<div className="add">
					<p><input type="text" onChange={this.onHandleInput} value={this.state.text}/></p>
					<button onClick={this.onAddText}>添加</button>
				</div>
				<ul>
					{
						todos.filter((item,index)=>{
							return  filter === 'all' || ( filter ===  'completed' ? item.completed === true : item.completed === false );
						}).map((item,index)=>{
							return (
							<li key={item.id}> 
								<span>{item.text} </span>
								<span className="status">{item.completed ? '已经完成' : '未完成'}</span>  
								<p>
									<button onClick={toggleTodo.bind(null,item.id)}>更改状态</button>
									<button onClick={removeTodo.bind(null,item.id)}>删除本条</button>
								</p>
							</li>)
						})
					}
				</ul>
			</div>
		)
	}
}

let mapStateToProps = (state,props) =>{
	return {
		todos:state.todos,
		filter:state.filter,
	}
}

let mapDispatchToProps = (dispatch,props) =>{
	return {
		addTodo:(text)=>{
			dispatch(addTodo(text))
		},
		toggleTodo:(id)=>{
			dispatch(toggleTodo(id))
		},
		removeTodo:(id)=>{
			dispatch(removeTodo(id))
		},
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos) 