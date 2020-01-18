import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // Bind this so we can use this.setState().
        this.state = {
            nav   : [],
            pages : [],
            navLoading: false,
            pageLoading: false
        };
    }
    componentDidMount() {
        this.setState({navLoading: true})
         fetch('http://localhost:80/medicore/wp-json/menus/v1/menus/main')
         .then(data => data.json())
         .then(data => {
             //console.log(data.items);
            this.setState(({nav: data.items, navLoading: false}));
        })
       .catch((error) => {
           console.error(error);
       });
    }

    render() {
      return (
        <div className="cell medium-10">
        {this.state.navLoading 
            ? "Loading..."
            : <nav className="float-right">
                <ul className="menu">
                {this.state.nav.map((menuitem, index) => {
                    return (
                        <li key={index}>
                        <NavLink to={menuitem.slug} activeClassName='active'>{menuitem.title}</ NavLink>
                        </li>
                    )
                })}
                </ul>
            </nav>
        }
        </div>
        )
    }
}

export default Nav;