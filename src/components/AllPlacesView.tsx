import { myPlaces } from "./PlaceData";

function AllPlacesView(): JSX.Element {
  return (
    <div className="body">
      {" "}
      Grace's Favorite Places
      {myPlaces.map((placeItem, i) => {
        return (
          <div key={i}>
            <div>
              <h2> {placeItem.title}</h2>
              <h3> {placeItem.location}</h3>
              <img src={placeItem.img} alt="" width="500px" height="500px" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlacesView;
//  <PlaceView onePlace= {placeItem} key={placeItem.id}/>
