import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Slide from '@dekk/slide'
import Paging from '@dekk/paging'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import Listener from '@dekk/listener'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import uuid from 'uuid/v4'
import {fadeSlide, fade, flip, cube} from '@dekk/animation'
import "./styles/codemirror"
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'

const mySlides = [
  'cover',
  'webusb',
  'dmx512',
  'dekk',
  'luminave-color',
  'thank-you'
]


/*
 Integrate Luminave into Dekk
 backlight for your talk
 set scenes to match your slide mood
*/

const {present, live} = search.parse(window.location.href)

const Button = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1337;
`

const baseStyles = css`
  --font-family: "Montserrat", sans-serif;
  --title-font-size: 6em;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={50}>
        <Elements mode={["live"]}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins mode={["present"]}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave publish showFrame={this.state.showFrame} handleFrame={this.setFrame} />
          <Button onClick={this.setFrame}>Luminave</Button>
        </Plugins>

        <Plugins mode={["live"]}>
          <LocalStorage subscribe />
          <Luminave subscribe handleFrame={this.handleFrame} slides={this.slides} />
        </Plugins>
        {this.slides}
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(mySlides.map(async (slide, index) => {
    let module = await import(`./slides/${slide}.js`)
    slides[index] = module.default
  }));

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})