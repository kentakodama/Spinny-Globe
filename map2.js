
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import {
  ART, 
  TouchableOpacity, 
  Button, 
  View
} from 'react-native';

const {
  Shape
} = ART;


import { geoMercator,geoOrthographic, geoPath } from "d3-geo"
import { feature } from "topojson-client"

import React, { Component } from 'react';
export default class Map2 extends Component {
  constructor() {
    super()
    this.state = {
      worldData: [],
    }
    this.handleCountryClick = this.handleCountryClick.bind(this)
  }
  projection() {
    return geoOrthographic()
      .scale(200)
      .translate([ 800 / 2, 450 / 2 ])
      .rotate([0, -40, 0])
  }
  
  getData() {
    fetch('https://unpkg.com/world-atlas@1/world/110m.json')
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worldData => {
          this.setState({
            worldData: feature(worldData, worldData.objects.countries).features,
          })
        })
      })
  }
  
  componentWillMount() {
    this.getData();
  }
  
  handleCountryClick(data) {
    console.log('data');
  }
  
  render() {
    return (
      <Svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
        <G className="countries">
          {
            this.state.worldData.map((d,i) => (
                <Path
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                  className="country"
                  fill={ `rgba(38,50,56,${1 / this.state.worldData.length * i})` }
                  stroke="#FFFFFF"
                  strokeWidth={ 0.5 }
                />
            ))
          }
        </G>
      </Svg>
    )
  }
}

