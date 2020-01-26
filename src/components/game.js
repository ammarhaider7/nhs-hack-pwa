import React, { Component } from 'react';
import { ExerciseService } from "../services/exercise";
import { scaleLinear, select, axisLeft, axisBottom, extent, min } from "d3";
import { Box, Typography } from "@material-ui/core";
import { DeviceOrientation } from './device-orientation.component';

export class Game extends Component {

  state = {
    exercise: {},
    beta: 0
  }

  formatAngleData(val) {
    return Number(val).toFixed(0);
  }

  gameBootstrapped = false;

  yScale;

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

    const initialRangeLine = {
      lineValue: initialRange,
      label: 'Initial range'
    }

    let margin = { top: 1, right: 1, bottom: 1, left: 1 },
      width = window.innerWidth - margin.left - margin.right, // Use the window's width 
      height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    const yDomain = extent([targetLowerLimit - 80, targetUpperLimit + 10]);

    this.yScale = scaleLinear()
      .domain([targetLowerLimit - 80, targetUpperLimit + 10]) // input 
      .range([height, 0]); // output

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
      .call(axisLeft(this.yScale)); // Create an axis component with d3.axisLeft

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(xScale)); // Create an axis component with d3.axisBottom

    svg.append('line')
      .attr('x1', xScale(0))
      .attr('y1', this.yScale(warnLine.lineValue))
      .attr('x2', xScale(1))
      .attr('y2', this.yScale(warnLine.lineValue))
      .attr('class', 'warn-line');

    svg.append('text')
      .attr('x', xScale(1))
      .attr('y', this.yScale(warnLine.lineValue))
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text(warnLine.label)
      .attr('class', 'warn-line-text');

    svg.append('line')
      .attr('x1', xScale(0))
      .attr('y1', this.yScale(successLine.lineValue))
      .attr('x2', xScale(1))
      .attr('y2', this.yScale(successLine.lineValue))
      .attr('class', 'success-line');

    svg.append('text')
      .attr('x', xScale(1))
      .attr('y', this.yScale(successLine.lineValue))
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text(successLine.label)
      .attr('class', 'success-line-text');

    svg.append('line')
      .attr('x1', xScale(0))
      .attr('y1', this.yScale(initialRangeLine.lineValue))
      .attr('x2', xScale(1))
      .attr('y2', this.yScale(initialRangeLine.lineValue))
      .attr('class', 'initial-line');

    svg.append('text')
      .attr('x', xScale(1))
      .attr('y', this.yScale(initialRangeLine.lineValue))
      .attr('dy', '1em')
      .attr('text-anchor', 'end')
      .text(initialRangeLine.label)
      .attr('class', 'initial-line-text');

    // Ball
    svg.append('circle')
      .attr('cx', xScale(0.5))
      .attr('cy', this.yScale(min(yDomain)))
      .attr('r', 30)
      .attr('class', 'circle');

    this.gameBootstrapped = true;
  }

  updateBall(_beta) {
    select('.circle')
      .attr('cy', this.yScale(_beta));
    select('.ball-beta')
      .text(`${_beta}°`);
  }

  componentDidMount = async () => {
    await this.createGame();
  }

  render() {
    return (
      <Box id="game">
        <DeviceOrientation>
          {({ beta }) => {
            const formattedBeta = this.formatAngleData(beta)
            if (this.gameBootstrapped) this.updateBall(formattedBeta);
            return (
              <span></span>
            )
          }}
        </DeviceOrientation>
      </Box>
    )
  }

}