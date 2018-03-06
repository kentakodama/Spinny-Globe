import React, { Component, PropTypes } from 'react';
import {
  ART
} from 'react-native';

const {
  Shape
} = ART;

import * as d3 from 'd3';

export default class Country extends Component {

  constructor(props) {
    super(props);
    this.arc = d3
                .arc()
                .outerRadius(this.props.outerRadius)
                .innerRadius(this.props.innerRadius)
                (this.props.arcData);
  }
  
  render() {
    return (
      <Shape d={this.arc} stroke='#000' strokeWidth={1} fill={this.props.color} />
    );
  }
  
}
