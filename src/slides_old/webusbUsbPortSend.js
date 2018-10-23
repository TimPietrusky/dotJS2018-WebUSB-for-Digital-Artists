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
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // write
    select([0, 0], [1, 0])
  ],
  [ // send data to USB device
    select([1, 0], [3, 0]),
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `send(data) {
  // Send data (ArrayBuffer) to the USB device on Endpoint 4
  return device.transferOut(4, data)
}`

const notes = (
  <Notes>
    <h3>Send data to USB device</h3>
    <p>Send data to USB device on Endpoint 4</p>
    <p>data must be an ArrayBuffer, for example an Uint8Array</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbConnection.js</Subtitle>
      <Code2 ranges={ranges} options={codeOptions} order={-1}>
          {code}
      </Code2>
    </A>

  </Slide>
)
