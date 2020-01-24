// ALL VEHICLES
export const all_vehicles = () => {
	return (dispatch, getState) => {
		dispatch({type: 'ALL_VEHICLES', payload: dispatch});
	}
}