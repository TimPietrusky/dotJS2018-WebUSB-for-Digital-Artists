import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import Text, {Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
import {slide} from '@dekk/animation'
import {LargeImage, Spacer} from '../components'
import styled from 'styled-components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>USB descriptors</h3>
    <p>Before we can jump into the next part we have to get some USB terms sorted out</p>
    <p>Device: basic information like USB version, vendor and product id</p>
    <p>Configuration: how the device is powered, maximum power consumption</p>
    <p>Interface: Combines the endpoints into functional groups to perform a single feature of the device</p>
    <p>Endpoints: An interface can have multiple endpoints (send control messages or transfer data)</p>
  </Notes>
)


const StyledBox = styled.div`
  --h: ${({hue}) => hue};
  --color: ${({color}) => color};
  --width: ${({width}) => width};

  background-color: hsl(var(--h), 60%, 40%);
  color: var(--color);
  padding: .25em;
  border: 0.1em solid hsl(var(--h), 60%, 50%);
  width: var(--width);
  margin: 0 0 .25em 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

StyledBox.defaultProps = {
  hue: 0,
  color: 'white'
}

const Rapppper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
`


export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USB descriptors</Subtitle>

      <br />
      <Rapppper>

        <Fragment order={1} animation={slide.normal}>
          <StyledBox width="100vw">
            <Subtitle>Device</Subtitle>
            <Spacer />
            <Text>USB Version, vendor, productid</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={2} animation={slide.normal}>
          <StyledBox width="80vw" hue="90">
            <Subtitle>Configurations</Subtitle>
            <Spacer />
            <Text>How to power the device, max power consumption</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={3} animation={slide.normal}>
          <StyledBox width="60vw" hue="180">
            <Subtitle>Interfaces</Subtitle>
            <Spacer />
            <Text>Combination of Endpoints</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={4} animation={slide.normal}>
          <StyledBox width="40vw" hue="270">
            <Subtitle>Endpoints</Subtitle>
            <Spacer />
            <Text>A feature</Text>
          </StyledBox>
        </Fragment>

      </Rapppper>
    </A>

  </Slide>
)
