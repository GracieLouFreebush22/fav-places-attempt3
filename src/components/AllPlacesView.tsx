import { myPlaces } from "./PlaceData";
import "./AllPlacesView.css";

function AllPlacesView(): JSX.Element {
  return (
    <div className="body">
      {" "}
      <div className="ctn-header">
        <h1> My Favorite Places</h1>
      </div>
      <div className="ctn-mappedPlaces">
        {myPlaces.map((placeItem, i) => {
          return (
            <div key={i}>
              <div className="ctn-place">
                <div className="ctn-place-header">
                  <h2> {placeItem.title}</h2>
                  <h3> {placeItem.location}</h3>
                </div>
                <div className="ctn-img">
                  <img
                    src={placeItem.img}
                    alt=""
                    width="800px"
                    height="500px"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllPlacesView;
//  <PlaceView onePlace= {placeItem} key={placeItem.id}/>
