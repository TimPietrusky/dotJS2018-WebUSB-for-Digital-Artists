import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
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
  [ // Include WebUSB
    select([1, 0], [2, 0])
  ],
  [ // localhost:1337
    select([3, 0], [5, 0])
  ],
  [ // setup
    select([6, 0], [16, 0])
  ],
  [ // loop
    select([17, 0], [30, 0])
  ],
  [ // WebUSB is ready
    select([19, 0], [21, 0])
  ],
  [ // Read incoming data
    select([22, 0], [24, 0])
  ],
  [ // Write data to browser
    select([25, 0], [28, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'neo'
}

const code = `#include <WebUSB.h>

WebUSB WebUSBSerial(1, "localhost:1337");
#define Serial WebUSBSerial

// Run once on startup
void setup() {
  // Wait until WebUSB connection is established
  while (!Serial) {
    ;
  }

  // Set data rate (bits per second)
  Serial.begin(9600);
}

// Run over and over again
void loop() {
  // WebUSB is available
  if (Serial.available() > 0) {

    // Read incoming data from the browser
    int byte = Serial.read();

    // Send data to the browser
    Serial.write("Your data is awesome!");
    Serial.flush();
  }
}`

const notes = (
  <Notes>
    <p>The code that you load onto an Arduino is called sketch</p>
    <p>A universe has 512 channels, the Arduino will handle one universe</p>
    <p>DMX_master is the module to control the DMX shield</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>Arduino Sketch</Subtitle>
      
      <Fragment order={0}>
        <Code2 ranges={ranges} options={codeOptions}>
            {code}
        </Code2>
      </Fragment>
    </A>

  </Slide>
)
