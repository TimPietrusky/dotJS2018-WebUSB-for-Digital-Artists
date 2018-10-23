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
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB DMX512 controller</h3>
    <p>The fully assembeled controller, connected to the DMX512 universe with the DMX cable and connected to the Browser over WebUSB</p>
    <p>Put code onto the Arduino</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url("media/webusb_dmx_controller.jpg")`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}
  </Slide>
)
