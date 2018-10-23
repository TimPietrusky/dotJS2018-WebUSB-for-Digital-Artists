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
// import {SuperTimer} from '../components'
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Arduino Sketch</h3>
    <p>Use the Arduino IDE to upload code, the code is inspiried by C</p>
    <p>Sketch defines what happens on the Arduino</p>
    <p>Code gets uploaded via USB to the Arduino</p>
    <p>Let's break this down in detail</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/arduino_ide_webusb_sketch.png"
                  alt="Arduino IDE: Sketch for WebUSB & DMX512"
                 style={{height: 105 + "vh"}} />
    </A>

  </Slide>
)
