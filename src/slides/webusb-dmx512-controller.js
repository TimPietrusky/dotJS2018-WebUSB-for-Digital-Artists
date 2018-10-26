import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'
import {ImportantLink} from '../components/links'
import {Half} from '../masters'
import {css} from 'styled-components'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>WebUSB DMX512 controller</h3>
    <p>DMX512 is a standard for professional lighting</p>
    <p>And now that we have the basics we can build our first WebUSB device and what</p>
    <p>An Arduino can be extended by using shields</p>
    <p>Which is connected to the Arduino, which you can see in the bottom</p>
    <p>I have written an detailed guide on what you have to do in order to create your own WebUSB DMX512 controller</p>
    <p>And also published a module on npm that is doing all the WebUSB code needed to control DMX</p>
    <p>With that in place we can now control the lights directly from the browser</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="DMX512"/></Title>

      <br /><br />

      <Subtitle>
        <Fragment order={0}>
          <ImportantLink style={{maxWidth: css`40vw`}} href="https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0">How to build a<br />WebUSB DMX512<br />Controller<br />by using an Arduino</ImportantLink>
        </Fragment>
      </Subtitle>
    </A>

    <B>
      <Fragment fit order={1}>
        <FitImage 
          src="media/webusb_dmx512_controller.jpg"
          alt="WebUSB DMX512 Controller"
        />
      </Fragment>
    </B>
  </Slide>
)
