import React, { Component } from 'react';
import { ExerciseService } from "../services/exercise";
import { scaleLinear, select, axisLeft, axisBottom } from "d3";
import { Box } from "@material-ui/core";

export class Game extends Component {

  state = {
    exercise: {}
  }

  createGame = async () => {

    const exercise = await ExerciseService.getExercise();

    this.setState({ exercise });

    const {
      initialRange,
      targetUpperLimit,
      targetLowerLimit
    } = this.state.exercise;

    const warnLine = {
      lineValue: targetUpperLimit,
      label: 'Upper limit'
    }

    const successLine = {
      lineValue: targetLowerLimit,
      label: 'Lower limit'
    }

    let margin = { top: 5, right: 5, bottom: 5, left: 5 },
      width = window.innerWidth - margin.left - margin.right, // Use the window's width 
      height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    const yScale = scaleLinear()
      .domain([targetLowerLimit - 80, targetUpperLimit + 10]) // input 
      .range([height, 0]); // output

    window.yScale = yScale;

    const xScale = scaleLinear()
      .domain([0, 1]) // input
      .range([0, width]); // output

    const svg = select('#game').append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
      .attr("class", "y axis")
      .call(axisLeft(yScale)); // Create an axis component with d3.axisLeft

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(xScale)); // Create an axis component with d3.axisBottom

    svg.append('line')
      .attr('x1', xScale(0))
      .attr('y1', yScale(warnLine.lineValue))
      .attr('x2', xScale(1))
      .attr('y2', yScale(warnLine.lineValue))
      .attr('class', 'warn-line');

    svg.append('text')
      .attr('x', xScale(1))
      .attr('y', yScale(warnLine.lineValue))
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text(warnLine.label)
      .attr('class', 'warn-line-text');

    svg.append('line')
      .attr('x1', xScale(0))
      .attr('y1', yScale(successLine.lineValue))
      .attr('x2', xScale(1))
      .attr('y2', yScale(successLine.lineValue))
      .attr('class', 'success-line');

    svg.append('text')
      .attr('x', xScale(1))
      .attr('y', yScale(successLine.lineValue))
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text(successLine.label)
      .attr('class', 'success-line-text');
  }

  componentDidMount = async () => {
    await this.createGame();

  }

  render() {
    return (
      <Box id="game"></Box>
    )
  }

}