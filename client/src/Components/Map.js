import React from "react";
import { longdo, map, LongdoMap } from "./LongdoMap";
import Navbar from "./Navbar";
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 3%;
  margin-left: 5%;
`
const Map = () => {
  

  const initMap = () => {
    map.Layers.setBase(longdo.Layers.GRAY);
    
  }
  const mapKey = "b7b229a68e411d16531ba9a08812cccd";

  return (
    <div className="App">
      <Navbar/>
      <Title>SUPERB STORE</Title>
      <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
    </div>
  );
}


export default Map;
