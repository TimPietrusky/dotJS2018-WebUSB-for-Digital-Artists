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
import {fadeSlide, fade, flip, cube} from '@dekk/animation'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // open session
    select([9, 0], [14, 0])
  ],
  [ // Select #1 configuration
    select([15, 0], [21, 0])
  ],
  [ select([22, 0], [24, 0])], // access to interface #2
  [ select([25, 0], [33, 0])], // We are ready to receive data on Endpoint 1 of Interface #2
  [ select([34, 0], [36, 0])], // Receive 512 bytes on Endpoint 5
  [ select([37, 0], [41, 0])], // TextDecoder
  [ select([42, 0], [45, 0])], // catch error
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `// Only request the port for specific devices
const filters = [
  // Arduino LLC (10755), Leonardo ETH (32832)
  { vendorId: 0x2a03, productId: 0x8040 }
]

// Request access to the USB device
navigator.usb.requestDevice({ filters })
  // Open session to selected USB device
  .then(selectedDevice => {
    device = selectedDevice
    return device.open()
  })

  // Select #1 configuration if not automatially set by OS
  .then(() => {
    if (device.configuration === null) {
      return device.selectConfiguration(1)
    }
  })

  // Get exclusive access to Interface #2
  .then(() => device.claimInterface(2))

  // Tell the USB device that we are ready to send data on Interface #2
  .then(() => device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22, // SET_CONTROL_LINE_STATE
    'value': 0x01, // Yes
    'index': 0x02 // Interface: #2
  }))

  // Receive 512 bytes on Endpoint #5
  .then(() => device.transferIn(5, 512))

  .then(({ data }) => {
    let decoder = new TextDecoder()
    console.log('Received: ' + decoder.decode(data))
  })

  .catch(error => {
    console.log(error)
  })`

const notes = (
  <Notes>
    <h3>Enable WebUSB</h3>
    <p>Connect to the selectedPort and open a session to the device</p>
    <p>Use configuration #1 if no configuration was automatially applied by the Operating System</p>
    <p>Get exclusive access to interface #2</p>
    <p>We are ready to receive data on Interface #2 using a controlTransferOut -> Send control commands to the USB device</p>
    <p>Receive 512 bytes on Endpoint 5</p>
    <p>Convert the received bytes data into a String by using a TextDecoder (decodes encodings)</p>
    <p>Catch all the errors</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationIn={fade.in}>
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
