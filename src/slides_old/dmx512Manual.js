import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Manual + Channels</h3>
    <p>You find the amount of channels in the manual. Also: What is the task of each channel?</p>
    <p>My moving head has 14 channels</p>
    <p>Each channel can control a specific property of the fixture</p>
  </Notes>
)

import styled from 'styled-components'

const FancyTable = styled.table`
  height: 90vh;
  border-spacing: 0;
`

const StyledTr = styled.tr`
  background: ${({isActive}) => isActive && '#d9fffd'};
`

const StyledTd = styled.td`
  padding: .15em;
  border-bottom: 3px solid #eee;
`

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <FancyTable>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>

          <Sequence order={0} steps={3}>{
            (index, time, timeline) => {
              return (
              <React.Fragment>
                <StyledTr isActive={index === 0}>
                  <StyledTd>1</StyledTd>
                  <StyledTd>Pan</StyledTd>
                  <StyledTd>Horizontal movement within 540°</StyledTd>
                </StyledTr>
              <StyledTr>
                <StyledTd>2</StyledTd>
                <StyledTd>Pan 16 bit</StyledTd>
                <StyledTd>Higher resolution for Pan</StyledTd>
              </StyledTr>
              <StyledTr isActive={index === 1}>
                <StyledTd>3</StyledTd>
                <StyledTd>Tilt</StyledTd>
                <StyledTd>Vertical movement within 230°</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>4</StyledTd>
                <StyledTd>Tilt 16 bit</StyledTd>
                <StyledTd>Higher resolution for Tilt</StyledTd>
              </StyledTr>

              <StyledTr>
                <StyledTd>5</StyledTd>
                <StyledTd>Pan / Tilt Speed</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>6</StyledTd>
                <StyledTd>Dimmer / Strobe</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr isActive={index === 2}>
                <StyledTd>7</StyledTd>
                <StyledTd>Red</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr isActive={index === 2}>
                <StyledTd>8</StyledTd>
                <StyledTd>Green</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr isActive={index === 2}>
                <StyledTd>9</StyledTd>
                <StyledTd>Blue</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>10</StyledTd>
                <StyledTd>White</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>11</StyledTd>
                <StyledTd>Color Macros</StyledTd>
                <StyledTd>Predefined set of colors</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>12</StyledTd>
                <StyledTd>RGBW Speed</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>13</StyledTd>
                <StyledTd>Motion Macros</StyledTd>
                <StyledTd>Predefined set of movements</StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd>14</StyledTd>
                <StyledTd>Gobo / Gobo Shake</StyledTd>
                <StyledTd></StyledTd>
              </StyledTr>

            </React.Fragment>
          )}
          }</Sequence>

        </tbody>
      </FancyTable>
    </A>

  </Slide>
)
