import React from "react";
import AwsFlashCard from "./AWSFlashCard";
import {Server, SQS, No, SNS} from '../icons';
import {Icon, IconContainer, ScrollContainer, Content} from './FlashCardHelper';

const comp = () => {
    return <AwsFlashCard title='SQS FIFO Queue'>
        <ScrollContainer>
            <Content>
                <div>
                    <p>designed to enhance messaging between applications when the order of operations and events is
                        critical, or where duplicates can't be tolerated, for example:
                        <ul>
                            <li>
                                Ensure that user-entered commands are executed in the right order.
                            </li>
                            <li>
                                Display the correct product price by sending price modifications in the right order.
                            </li>
                            <li>Prevent a student from enrolling in a course before registering for an account.</li>
                        </ul>
                    </p>
                </div>
            </Content>
        </ScrollContainer>
    </AwsFlashCard>;
}
export default comp;

