import Map from "./../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import PlacesAutoCompleteBox from "../components/PlacesAutoCompleteBox";
import '../styles/home.scss';
import HistoryList from "../components/HistoryList";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const libraries = ['places'];
export default function Home() {
  const [currentFocusLocation,setCurrentFocusLocation] = useState('')
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const dispatch = useDispatch();
  const places = useSelector(state => state.historyPlaces.historyPlaces);
  const onItemClick = (item) =>{
    setCurrentFocusLocation(item.latlng)
  }

  useEffect(()=>{
    console.log('places detected update')
    setCurrentFocusLocation(places.length>0?places[places.length-1].latlng:'')
  },[places])

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className="home-container">
        <PlacesAutoCompleteBox />
        <HistoryList data={places} onItemClick={onItemClick}/>
        <Map latlng={currentFocusLocation} />
      </div>
    </>
  );
}
