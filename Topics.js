import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Topic from './Topic'


class Topics extends Component {
    render() {
        let { match, history } = this.props
        let { path } = match
        return (
            <div>
                <h2>Topics</h2>
                <hr />
                <div className="row">
                    <div className="col-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.`}>Javascript</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`}>React.js</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/Power Apps is a suite of apps, services, connectors and data platform that provides a rapid application development environment to build custom apps for your business needs. ... Further, apps built using Power Apps have a responsive design, and can run seamlessly in browser or on mobile devices (phone or tablet).`}>PowerApps</Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/Power Automate is a service that helps you create automated workflows between your favorite apps and services to synchronize files, get notifications, collect data, and more.`}>PowerAutomate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,`}>Node.js</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <hr />
                        <Route exact path={path} render={() => <span>please select any topic</span>} />
                        <Route path={`${path}/:course`} render={(props) => <Topic {...props} />} />
                        <hr />
                        <button onClick={e => history.goBack()} className="btn btn-primary">Back</button>
                        &nbsp;
                        <button onClick={e => history.push("/")} className="btn btn-primary">Home</button>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Topics;