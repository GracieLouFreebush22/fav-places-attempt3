import { PlaceView } from "./PlaceView";
import {myPlaces, OnePlace} from "./PlaceData";

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
