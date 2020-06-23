import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';
import ResponseUtils from "../../utils/ResponseUtils";

type TType = {
    width: ResponseValue;
    height: number | string;
    children: [ReactNode, ReactNode]
    frontStyle?: string,
    backStyle?: string
}
type TState = {
    isFlip: Boolean
}

class FlippingComponent extends Component<TType, TState> {
    state = {
        isFlip: false
    }


    render() {
        const {children: [front, back], width, height, frontStyle, backStyle} = this.props;
        const {isFlip = false} = this.state;
        return (
            <FlipContainer width={width} height={height}
                           onClick={(e: MouseEvent) => {
                               this.setState({isFlip: !isFlip});
                               e.stopPropagation()
                           }}>
                <FlipInnerContainer isFlip={isFlip}>
                    <FlipStyled comp={front} isFlip={isFlip}
                                isFront={true} cssStyle={frontStyle}></FlipStyled>
                    <FlipStyled comp={back} isFlip={isFlip} isFront={false} cssStyle={backStyle}></FlipStyled>
                </FlipInnerContainer>
            </FlipContainer>
        );
    }
}

export default FlippingComponent;
const FlipContainer = styled(({children, ...rest}) => <div {...rest}>{children}</div>)`
  ${({width, height}) => `
      ${ResponseUtils.styleResponse('width', width)};
      ${ResponseUtils.styleResponse('height', height)};
  `};
  perspective: 1000px;
`

const FlipInnerContainer = styled(({children, isFlip, ...rest}) => {
    return <div {...rest}>
        {children}
    </div>;
})`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({isFlip}) => isFlip ? `transform: rotateY(180deg);` : `transform: rotateY(0);`}
`

const FlipStyled = styled(({comp, isFlip, isFront, cssStyle, ...res}) => {
    return <div {...res}>{comp}</div>
})`
  position: absolute;
  width: 100%;
  height: 100%;
  ${({cssStyle}) => cssStyle};
  backface-visibility: hidden;
    &&{   
      ${({isFront}) => !isFront && `transform: rotateY(180deg);`}    
}`;
