
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

import React, { Component } from 'react';
export default class Map extends Component {
  render () {
    return (
      <Svg height='100' width='100'>
        <Circle
          cx='50'
          cy='50'
          r='45'
          stroke='blue'
          strokeWidth='2.5'
          fill='green' />
        <Rect
          x='15'
          y='15'
          width='70'
          height='70'
          stroke='red'
          strokeWidth='2'
          fill='yellow' />
      </Svg>
    )
  }
}


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ART,
//   LayoutAnimation,
//   Dimensions,
//   TouchableWithoutFeedback,
// } from 'react-native';
// 
// const {
//   Surface,
//   Group,
//   Rectangle,
//   Shape,
// } = ART;
// 
// import * as scale from 'd3-scale';
// import * as shape from 'd3-shape';
// import * as d3Array from 'd3-array';
// import AnimShape from '../art/AnimShape';
// import Theme from '../theme';
// 
// const d3 = {
//   scale,
//   shape,
// };
// 
// export default class Map extends Component {
//   constructor(props) {
//     super(props);
// 
//   } 
//   var height = 600,
//         width = 900,
//         projection = d3.geoMercator(), // 1 this is extracting the projection algo from d3
//         mexico = void 0;
// 
//     // 2 create a "path" algorithm according to a selected projection
//     var path = d3.geoPath().projection(projection);
// 
//     // 3 creating svg (canvas) by selecting a div #map and appending svg
//     // same as earlier
//     var svg = d3.select("#map")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height);
// 
//     // 4 get the actual coordinate data from a file or api
//     // 5 pass it into the callback function as data
//     d3.json("geo-data.json", function(data) {
// 
//       //6a this makes a "features object" with coordinates for each state
//       // 6b the data is all geo-data and the second arg is only the info we want with the political borders
//       // "create an array of GeoJSON objects"
//       var states = topojson.feature(data, data.objects.MEX_adm1);
// 
//       // 7 Setup how everything will scale
//       var b, s, t;
//       projection.scale(1).translate([0, 0]);
//       var b = path.bounds(states); // this is called the bounding box, more latertml
// 
//       var s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
//       var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
//       projection.scale(s).translate(t);
// 
//       //8 actually creating the map()
//       // 'g' is a tag in svg being stored in var map
//       var map = svg.append('g').attr('class', 'boundary'); // add styling by adding class
// 
//       // html(page) => svg(canvas) => g(square map) => paths(borders of mexico)
// 
//       // 9 creating map from data (four parts)
//       // A) var mexico is now an array of data
//       mexico = map.selectAll('path').data(states.features);
// 
// 
//       // B) iterate through all datapoints, attach a 'path' tag, then define the 'path' properties
//       // NB: path tags are complex lines, this is saying map all the data to corresponding paths
//       //Enter
//       mexico.enter()
//          .append('path') //append a path tag
//          .attr('d', path); //the d (data) attribute of that path tag will be var path
// 
//       // C) style it (Update)
//       mexico.attr('fill', '#eee');
// 
//       // D) Exit, gets rid of extra shit
//       mexico.exit().remove();
// 
//     });
// 
//   render() {
//     return (
//       <View >
// 
//       </View>
//     );
//   }
// }


