import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {CodeJs} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>What is happening?</h3>
    <p>So what exactly is happening?</p>
    <p>We know how the WebUSB DMX Controller works</p>
    <p>So let's look at WebUSB in the browser</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/dmx512_controller_communication_webusb.svg"
                  alt="WebUSB DMX Controller communication"
                  style={{height: 60 + "vh"}} />
    </A>

  </Slide>
)
