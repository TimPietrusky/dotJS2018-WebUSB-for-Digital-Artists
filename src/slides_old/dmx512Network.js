import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
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
    <h3>DMX512 network</h3>
    <p>A network of DMX devices is called a DMX Universe</p>
    <p>A DMX universe consists of a DMX controller (that sends all the data) and multiple fixtures that receive the data</p>
    <p>Each fixture has a unique address, so that I can send data to a specific device in the DMX Universe</p>
    <p>Every device also has a specific amount of channels</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>

      <Sequence order={1} steps={1}>
        {(index, time, timeline) => {
          if (index < 0) {
            return <LargeImage src="media/dmx512_universe.svg"
                                alt="DMX512 Universe" />
          }

          return <LargeImage src="media/dmx512_universe_address.svg"
                              alt="DMX512 Universe with Address" />
        }}
      </Sequence>
    </A>

  </Slide>
)
