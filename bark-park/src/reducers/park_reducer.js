import cuid from "cuid";

export default function parkReducer(
  state = {
    parks: [
      {
        name: "Wriggly Field Dog Friendly Area",
        address: "2645 N Sheffield Ave, Chicago, IL 60614",
        id: cuid(), 
        count: 1
      }
    ], 
    editingParks: false, 
  },
  action
) {
  switch (action.type) {
    case "ADD_PARK":
      console.log(action.payload); //{name: "test", address: "test"}
      const park = { ...action.payload, id: cuid(), count: 0 }; //{name: "test", address: "test", id: "cjmkq4hx100003b5x1m6mdqyu", count: 0}
      console.log("returning", { parks: state.parks.concat(park) });
      return { parks: state.parks.concat(park) };
    case "DELETE_PARK":
      const parks = state.parks.filter( park => park.id !== action.parkId)
      console.log('after delete parks are', {parks: parks} )
      return {parks: parks};
    case 'EDITING_PARK':
      console.log('in editing parks');
      return {parks: state.parks, editingParks: true}
    default:
      return state;
  }
}
