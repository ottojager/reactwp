import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Navbar  from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

class Menu extends React.Component {
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
        <div className="col-md-10">
        {this.state.navLoading 
            ? "Loading..."
            : <Navbar>
                <Nav>
                {this.state.nav.map((menuitem, index) => {
                    let submenu = null;
                    if (menuitem.child_items) {
                        submenu = <NavDropdown>
                            {menuitem.child_items.map((child) => {
                                return <NavLink key={child.ID} to={child.slug}>{child.title}</NavLink>
                            })}
                        </NavDropdown>
                    }
                    return (  
                        <Nav.Item>
                            <NavLink to={menuitem.slug} activeClassName='active'>{menuitem.title}</NavLink>
                            {submenu}
                        </Nav.Item>
                    )
                })}
                </Nav>
              </Navbar>
        }
        </div>
        )
    }
}

export default Menu;