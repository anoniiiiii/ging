import React from 'react';
import AwsRandomFlashCard from "./flashCard/AWSRandomFlashCard";
import SQSFlashCard from './flashCard/SQSFlashCard';
import SQSStandardQueue from './flashCard/SQSStandardQueue';
import styled from "styled-components";

type TProps = {}
type TState = {}

class AWS extends React.Component<TProps, TState> {
    render() {
        return (
            <Container>
                <AwsRandomFlashCard>
                    <SQSFlashCard/>
                    <SQSStandardQueue/>
                </AwsRandomFlashCard>
            </Container>
        );
    }
}

const Container = styled.div`
  margin-top: 30px;
`

export default AWS;