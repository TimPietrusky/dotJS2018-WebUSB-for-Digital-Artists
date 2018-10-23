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
  [ // ready to receive data
    select([0, 0], [8, 0])
  ],
  [ // Receive 512 bytes
    select([9, 0], [11, 0])
  ],
  [ select([12, 0], [16, 0])], // textdecoder
  [ select([17, 0], [20, 0])]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `    // We are ready to receive data
    .then(() => device.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22,
      'value': 0x01, // Endpoint: 1
      'index': 0x02 // Interface: #2
    }))

    // Receive 512 bytes on Endpoint 5
    .then(() => device.transferIn(5, 512))

    .then(({ data }) => {
      let decoder = new TextDecoder()
      console.log('Received: ' + decoder.decode(data))
    })

    .catch(error => {
      console.log(error)
    })
}`

const notes = (
  <Notes>
    <h3>Receive data</h3>
    <p>We are ready to receive data on Interface #2 using a controlTransferOut -> Send control commands to the USB device</p>
    <p>Receive 512 bytes on Endpoint 5</p>
    <p>Convert the received data into a String by using a TextDecoder (decodes encodings)</p>
    <p>Catch all the errors</p>
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
