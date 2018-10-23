import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import styled from 'styled-components'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Luminave Demo</h3>
    <p></p>
  </Notes>
)

const FocusPoint = styled.a.attrs({href:"#"})`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background: red;
  height: 1em;
  width: 1em;

  &:focus {
    background: green;
  }
`

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase><RainbowText time={.5} text="demo"/></Uppercase></Title>
      {/* <iframe src="https://localhost:1337"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts"
              style={{width: 100 + "vw", height: 100 + "vh"}}
              frameBorder="0" /> */}
    </A>

  </Slide>
)
