const initial_state = {
	data: null
}

const vehicles_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case 'ALL_VEHICLES':
		console.log(action.payload);
		return {
			...state,
			data: action.payload,			
		}
		default:
		return state;
	}
}

export default vehicles_reducer;