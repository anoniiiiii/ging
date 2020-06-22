import React, {ReactNode} from 'react';
import {Button, Layout} from 'antd';
import _ from 'lodash';
import styled from "styled-components";
import {RightOutlined, LeftOutlined} from '@ant-design/icons';

const {Content, Footer} = Layout;
type TProps = {
    children: ReactNode[]
}
type TState = {
    shuffleChildren?: ReactNode[],
    pos: number
}

class AwsRandomFlashCard extends React.Component<TProps, TState> {
    shuffle() {
        const {children} = this.props;
        this.setState({shuffleChildren: _.shuffle(children), pos: 0})
    }

    componentDidMount() {
        this.shuffle();
    }

    render() {
        const {shuffleChildren = null, pos = 0} = this.state || {};
        if (!shuffleChildren) {
            return <div>Shuffling</div>;
        }
        return <Layout>
            <ContentStyled>
                {shuffleChildren[pos]}
            </ContentStyled>
            <FooterStyled>
                <ButtonStyled type="default" disabled={shuffleChildren.length <= 1}
                              onClick={() => this.shuffle()} style={{float: 'left'}}>Shuffle</ButtonStyled>
                <ButtonStyled type="primary" disabled={shuffleChildren.length <= 1}
                              onClick={() => this.setState({pos: (pos + 1) % shuffleChildren.length})}
                              style={{float: 'right'}}>Next <RightOutlined/></ButtonStyled>
                <ButtonStyled type="default" disabled={shuffleChildren.length <= 1}
                              onClick={() => this.setState({pos: (pos - 1 + shuffleChildren.length) % shuffleChildren.length})}
                              style={{float: 'right'}}>
                    <LeftOutlined/>Prev</ButtonStyled>
            </FooterStyled>
        </Layout>;
    }
};

const RandomFlashCardStyled = styled(AwsRandomFlashCard)`
  width: 100%;
`

const ContentStyled = styled(Content)`
  text-align: center;
  > * {
    display: inline-block;
  }
`

const ButtonStyled = styled(Button)`
  width: 150px;
  margin-left: 10px;
  :last-child {
    margin-left: 0;
  }
`

const FooterStyled = styled(Footer)`
  padding: 30px;
`

export default RandomFlashCardStyled;