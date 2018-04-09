import Heading from './Heading';
import Imagelist from './Imagelist';
import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <div>
                    <Heading/> 
                    <Imagelist />
                    <Footer />
                </div>;
                          
    }

}



ReactDOM.render( <App />, document.getElementById('appRoot') );

module.hot.accept();
