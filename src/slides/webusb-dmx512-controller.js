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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB DMX512 controller</h3>
    <p>An Arduino can be extended by using shields</p>
    <p>I created a WebUSB DMX512 controller by using a DMX512 shield, which you can see in the top</p>
    <p>Which is connected to the Arduino, which you can see in the bottom</p>
    <p>I have written an detailed guide on what you have to do in order to create your own WebUSB DMX512 controller</p>
    <p>And also published a module on npm that is doing all the WebUSB code needed to control DMX</p>
    <p>With that in place we can now control the lights directly from the browser</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url("media/webusb_dmx512_controller.jpg")`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>
        <Fragment order={0}>
          <ImportantLink href="https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0">medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino</ImportantLink>
        </Fragment>
      </Subtitle>
      <br /><br />
    </A>
  </Slide>
)
