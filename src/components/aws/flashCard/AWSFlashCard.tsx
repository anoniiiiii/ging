import React, {ReactNode} from 'react';
import FlippingComponent from "../../common/FlippingComponent";
import CenterComponent from "../../common/CenterComponent";

type TProps = { children: ReactNode, title: string }
type TState = {}

class AwsFlashCard extends React.Component<TProps, TState> {
    render() {
        const {title, children} = this.props
        return (
            <FlippingComponent width={500} height={500} frontStyle={`background: gray;`}
                               backStyle={`background: lightgray`}>
                <CenterComponent><h1>{title}</h1></CenterComponent>
                <CenterComponent>{children}</CenterComponent>
            </FlippingComponent>
        );
    }
}

export default AwsFlashCard;