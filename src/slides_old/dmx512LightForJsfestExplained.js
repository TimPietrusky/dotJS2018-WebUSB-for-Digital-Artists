import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
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
    <h3>Lights for JSFest</h3>
    <p>This is a fixture</p>
    <p>It's type is called "moving head", because the light can be pointed in various directions</p>
    <p>Eurlite called TMH-8</p>
    <p>It has 14 channels</p>
    <p>Every fixture has a manual that explains everything about it</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src="media/eurolite_tmh8.jpg"
                  alt="Eurolite TMH-8" />
    </A>

  </Slide>
)
