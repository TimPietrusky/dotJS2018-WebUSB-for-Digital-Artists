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
import {LargeImage} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB DMX Controller added</h3>
    <p>When you attach the controler via USB to the computer</p>
    <p>Message in the browser that the device was added with the URL we specified in the Arduino Sketch</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/webusb_dmxcontroller_added.png"
                  alt="Added WebUSB DMX512 Controller to computer"
                style={{width: 90 + "vw"}} />
    </A>

  </Slide>
)
