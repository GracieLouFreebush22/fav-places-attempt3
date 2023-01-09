import { PlaceView } from "./PlaceView";
import {myPlaces, OnePlace} from "./PlaceData";


function AllPlacesView(): JSX.Element{
    return(<div className= "body" > Grace's Favorite Places
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
