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
  [ select([0, 0], [1, 0]) ], // let device
  [ select([2, 0], [3, 0]) ], // enable
  [ select([4, 0], [8, 0]) ], // filters
  [ select([10, 0], [11, 0]) ] // request access
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `let device = undefined

enable() {
  // Only request the port for specific devices
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
    <h3>Enable WebUSB</h3>
    <p>enable() function has to be triggered by the user</p>
    <p>In order to be able to interact with the USB device</p>
    <p>Set filters to only get the elements that we want and not every element that is attachted to the computer</p>
    <p>Request access</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbConnection.js</Subtitle>

      <Code2 ranges={ranges} options={codeOptions}>
          {code}
      </Code2>
    </A>

  </Slide>
)
