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
  [ // connect
    select([0, 0], [1, 0])
  ],
  [ // device.open
    select([1, 0], [2, 0])
  ],
  [ // set default configuration
    select([3, 0], [7, 0])
  ],
  [ // Access to #2 interface
    select([9, 0], [11, 0])
  ],
  [ // Ready to receive data
    select([12, 0], [20, 0])
  ],
  [ // Read
    select([21, 0], [22, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `connect() {
  return device.open()
  .then(() => {
    if (device.configuration === null) {
      // Select #1 USB configuration
      return device.selectConfiguration(1)
    }
  })

  // Get exclusive access to the #2 interface
  .then(() => device.claimInterface(2))

  // We are ready to receive data on Endpoint 1 of Interface #2
  .then(() => device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22,
    'value': 0x01, // Endpoint: 1
    'index': 0x02 // Interface: #2
  }))

  .then(() => { read() })
}`

const notes = (
  <Notes>
    <p>Open a connection to the device</p>
    <p>When ok: Select the first configuration if the OS didn't do this already</p>
    <p>There can be <a href="http://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors">multiple configurations</a> for every USB device and they can control:
      <ul>
        <li>power consumption</li>
        <li>self or bus powered</li>
        <li>amount of interfaces</li>
      </ul>
    </p>
    <p>When ok: Claim interface, so that only you can interact with it. Interface = One of the functionalities that the USB device provides</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbPort.js</Subtitle>

      <Code2 ranges={ranges} options={codeOptions} order={-1}>
          {code}
      </Code2>
    </A>

  </Slide>
)
