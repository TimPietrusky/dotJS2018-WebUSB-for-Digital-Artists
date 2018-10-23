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
  [ // disconnect
    select([0, 0], [1, 0])
  ],
  [ // controlTransferOut
    select([1, 0], [9, 0])
  ],
  [ // close
    select([9, 0], [10, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `disconnect() {
  // Declare that we don't want to receive data anymore
  return device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22,
    'value': 0x00, // Endpoint: 0
    'index': 0x02 // Interface: #2
  })
  .then(() => device.close())
}`

const notes = (
  <Notes>
    <h3>Disconnect</h3>
    <p>Disconnect from the USB device</p>
    <p>Again using a control command to tell the USB device that we don't want to be connected anymore</p>
    <p>When ok: Close the connection to the device</p>
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
