
import { ADD_TODO , TOGGLE_TODO , REMOVE_TODO } from './actionTypes.js'

const defaultState = [
		{
			text:'First todo',
			completed:true,
			id:0,
		},
		{
			text:'Second todo',
			completed:false,
			id:1,
		},
	]

let reducer = ( state = defaultState , action)=>{
	console.log(action)
	switch( action.type ){
		case ADD_TODO:{
			return [...state , { id:action.id , text:action.text , completed:false }]
		}
		case TOGGLE_TODO:{
			return state.map((todoItem) => {
				if( todoItem.id === action.id ) {
					return {...todoItem, completed: !todoItem.completed}
				} else{
					return todoItem;
				}
			})
		}
		case REMOVE_TODO:{
			return state.filter((todoItem) => {
				return todoItem.id !== action.id;
			})
		}
		default : return state
	}
}

export {reducer};