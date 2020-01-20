// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// export class Navbar extends Component {
//     static defaultProps = {
//         title: 'Github Finder',
//         icon: 'fab fa-github'
//     };

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     };

//     render() {
//         return (
//             <nav className='navbar bg-primary'>
//                 <h1>
//                     <i className={this.props.icon} /> {this.props.title}
//                 </h1>
//             </nav>
//         );
//     }
// }
// export default Navbar







































// //Stateless Funcional Components
// import React from 'react'
// import PropTypes from 'prop-types'
// const Navbar = (props) => {
//     return (
//         <nav className='navbar bg-primary'>
//             <h1>
//                 <i className={props.icon} /> {props.title}
//             </h1>
//         </nav>
//     );
// }

// Navbar.defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
// };

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
// };

// export default Navbar






























//Stateless Funcional Components
import React from 'react'
import PropTypes from 'prop-types'
const Navbar = ({ icon, title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar