import {myPlaces, type OnePlace} from "./PlaceData"
import { PlaceView } from "./PlaceView";

function AllPlacesView(): JSX.Element{
    return(<div> All places view 
        {    
        myPlaces.map(
            (placeItem:OnePlace) => (
                <PlaceView 
                onePlace= {placeItem}
                key={placeItem.id}
                />
            ))
        }
                 
    </div>)
}
    
export default AllPlacesView;
