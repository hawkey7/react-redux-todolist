
import { FilterTypes } from './constance.js'
import {SET_FILTER} from './actionTypes.js'

export const filterAll = ()=>({
	type:SET_FILTER,
	filter:FilterTypes.ALL,
})

export const filterCompleted = ()=>({
	type:SET_FILTER,
	filter:FilterTypes.COMPLETED,
})

export const filterUncompleted = ()=>({
	type:SET_FILTER,
	filter:FilterTypes.UNCOMPLETED,
})