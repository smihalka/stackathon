import React  from 'react'
import styled, { keyframes } from 'styled-components'
import { flash, shake, wobble, fadeIn, zoomIn } from 'react-animations'


export function FlashMaker (props) {

  const animation = keyframes`${flash}`
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `
  return (
    <div>
      <AnimationDiv>
        <div className={props.animate}>{props.hitShip}</div>
      </AnimationDiv>
    </div>
  )
}


export function ShakeMaker (props) {

  const animation = keyframes`${shake}`
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `
  return (
    <div>
      <AnimationDiv>
        {props.animate}
      </AnimationDiv>
    </div>
  )

}


export function WobbleMaker (props) {

  const animation = keyframes`${wobble}`
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `
  return (
    <div>
      <AnimationDiv>
        {props.animate}
      </AnimationDiv>
    </div>
  )

}

export function FadeInMaker (props) {

  const animation = keyframes`${fadeIn}`
  const AnimationDiv = styled.div`
    animation: 3s ${animation};
  `
  return (
    <div>
      <AnimationDiv>
        <div className={props.animate}></div>
      </AnimationDiv>
    </div>
  )

}

export function ZoomInMaker (props) {

  const animation = keyframes`${zoomIn}`
  const AnimationDiv = styled.div`
    animation: 1s ${animation};
  `
  return (
    <div>
      <AnimationDiv>
        <div className={props.animate}></div>
      </AnimationDiv>
    </div>
  )

}
