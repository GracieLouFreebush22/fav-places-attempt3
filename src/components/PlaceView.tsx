import React from "react";
import {OnePlace} from "./PlaceData"

// can call this props potato
//was props any
//but we want it to say it has a specific type 
//props is spefici for react function component parameters
interface PlaceViewProps {
    onePlace: OnePlace;
}
export function PlaceView(props: PlaceViewProps): JSX.Element{
    return(
        <div className= "place-view">
            <h3>{props.onePlace.title}</h3>
            {props.onePlace.location}

        </div>
    )
}

// for every component make a unique 
//interface just above it to keep it clean