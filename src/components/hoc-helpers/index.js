import Spinner from "../spinner";
import React, {Component} from "react";
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorIndicator from "../error-indicator";


const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        };

        componentDidMount() {
            this.setState({loading: true, error: false});
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch((data) => {
                    this.setState({error: true, loading: false})
                });
        }

        render () {
            const {data, loading, error} = this.state;

            if(loading) {
                return <Spinner />;
            }

            if(error) {
                return <ErrorIndicator />;
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