import React, { Component } from 'react'

class NavIcons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false,
            userDropdown: false
        }
        this.showDropdown = this.showDropdown.bind(this);
        this.showUserDropdown = this.showUserDropdown.bind(this);
    }

    showDropdown = (e) => {
        e.preventDefault();
        
        this.setState({
          dropdown: true,
        })
    }
    showUserDropdown = (e) => {
        e.preventDefault();
        
        this.setState({
          userDropdown: true,
        })
    }

    render() {
        return (
            <div>
                <ul className="nav be-icons-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" role="button"  onClick={this.showDropdown}>
                            <span className="icon mdi mdi-apps"></span>
                        </a>
                        {this.state.showDropdown
                        ? (
                            <div>
                            <ul className="dropdown-menu be-connections">
                                <li>
                                    <div className="list">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col">
                                                    <a className="connection-item" href="product_add.html">
                                                        <i className="fas fa-tshirt"></i>
                                                        <span>Product</span>
                                                    </a>
                                                </div>
                                                <div className="col"><a className="connection-item" href="client_add.html"><i className="fas fa-store-alt" ></i><span>Client</span></a></div>
                                                <div className="col"><a className="connection-item" href="asset_add.html"><i className="fas fa-palette" ></i><span>Asset</span></a></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><a className="connection-item" href="ticket_add.html"><i className="fas fa-bug" ></i><span>Ticket</span></a></div>
                                                <div className="col"><a className="connection-item" href="user_add.html"><i className="fas fa-user" ></i><span>User</span></a></div>
                                                <div className="col"><a className="connection-item" href="supplier_add.html"><i className="fas fa-truck"></i><span>Supplier</span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer"> <a href="/#"><i className="far fa-question-circle"></i> Feedback &amp; Support</a></div>
                                </li>
                            </ul>
                            </div>
                        ) : (
                            null
                        )}
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" role="button" aria-expanded="false">
                            <img src={require("../images/avatar.png")} className="user-avatar" alt="Avatar" />
                        </a>
                        {
                            this.state.showUserDropdown
                            ? (
                                <div className="dropdown-menu" role="menu">
                                    <div className="user-info">
                                        <div className="user-name">User Name</div>
                                        <div className="user-position online">
                                            <div className="switch-button switch-button-sm">
                                                <input type="checkbox" checked="" name="st1" id="st1" />
                                                <span>
                                                    <label for="st1"></label>
                                                </span>
                                            </div>
                                            <span className="name">Available</span>
                                        </div>
                                    </div>
                                    <a className="dropdown-item" href="pages-profile.html">
                                        <span className="icon mdi mdi-face"></span>
                                        Account
                                    </a>
                                    <a className="dropdown-item" href="/#">
                                        <span className="icon mdi mdi-settings"></span>
                                        Settings
                                    </a>
                                    <a className="dropdown-item" href="pages-login.html">
                                        <span className="icon mdi mdi-power"></span>
                                        Logout
                                    </a>
                                </div>
                            ) : (
                                null
                            )
                        }
                        
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavIcons