import React, {MouseEventHandler, ReactNode} from 'react';
import styled from "styled-components";

type TProps = { children: ReactNode, onClick?: MouseEventHandler }
type TState = {}

class CenterComponent extends React.Component<TProps, TState> {
    render() {
        const {children, onClick} = this.props;
        const otherProps: any = {};
        if (onClick) {
            otherProps.onClick = onClick;
        }
        return (
            <Container {...otherProps}>
                {children}
            </Container>
        );
    }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export default CenterComponent;