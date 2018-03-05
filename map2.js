
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import AnimShape from '../art/AnimShape';
import Theme from '../theme';

const d3 = {
  scale,
  shape,
};

export default class Map extends Component {
  constructor(props) {
    super(props);

  } 
  var height = 600,
        width = 900,
        projection = d3.geoMercator(), // 1 this is extracting the projection algo from d3
        mexico = void 0;

    var path = d3.geoPath().projection(projection);

    var svg = d3.select("#map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.json("geo-data.json", function(data) {

      var states = topojson.feature(data, data.objects.MEX_adm1);

      var b, s, t;
      projection.scale(1).translate([0, 0]);
      var b = path.bounds(states); // this is called the bounding box, more latertml

      var s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
      var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
      projection.scale(s).translate(t);


      var map = svg.append('g').attr('class', 'boundary'); // add styling by adding class

      mexico = map.selectAll('path').data(states.features);

      mexico.enter()
         .append('path') 
         .attr('d', path); 

      mexico.attr('fill', '#eee');

      mexico.exit().remove();

    });

  render() {
    return (
      <View >

      </View>
    );
  }
}
