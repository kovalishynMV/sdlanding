import React from 'react';
import Header from "./components/Header.js"
import Advantages from "./components/Advantages.js"
import Details from "./components/Details.js"
import Contact from "./components/Contact.js"
import Courses from "./components/Courses.js"
import './../index.scss';

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
                <Header />
                <Advantages />
                <Details />
                <Contact />
                <Courses />
            </div>
        );
    }
}

export default Landing;