import Spinner from "../spinner";
import React, {Component} from "react";
import { SwapiServiceConsumer } from '../swapi-service-context';


const withData = (View) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                });
        }

        render () {
            const {data} = this.state;

            if(!data) {
                return <Spinner />;
            }

            return <View {...this.props} data={data} />;
        }
    }
};

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export {
    withData,
    withSwapiService
};