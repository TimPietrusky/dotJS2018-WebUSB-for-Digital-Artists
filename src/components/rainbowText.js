import React from 'react'
import styled, {keyframes} from 'styled-components'

const lightshow = keyframes`
  0% {
    color: #35c9a4;
  }
  25% {
    color: #DA4453;
  }
  50% {
    color: #FFCE54;
  }
  75% {
    color: #3caee5;
  }
  100% {
    color: #35c9a4;
  }
`

export const Char = styled.span`
  animation: ${lightshow} ease-in-out ${({time = 0.85}) => time}s infinite backwards ${({delay = 0}) => delay}s;
`

const RainbowText = props => {
  const chars = props.text.split('')
  const time = 1
  const {length} = chars
  return (
    <React.Fragment>
      {chars.map((char, i) => {
        const delay = props.time / length * (length - i) * -1
        return (
          <Char key={i} time={props.time} delay={delay}>{char}</Char>
        )
      })
      }
    </React.Fragment>
  )
}

RainbowText.defaultProps = {
  time: 0.85
}

export default RainbowText
