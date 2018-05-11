import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import store from './store/store';
import { Provider } from 'react-redux';

import App from './containers/App.js';
import HomePage from './containers/HomePage.js';
import Page2 from './containers/Page2.js';
import Set from './component/set/Set.js';


export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { store , history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={HomePage}/>
                        <Route path='/page2' component={Page2}/>
                        <Route path='/set' component={Set}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

let root = document.createElement('div');
root.className = 'root';
document.body.appendChild(root);

render(
    <Root store={store} history={browserHistory} />,
    root
);
