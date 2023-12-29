
// <html lang="en">

// <head>
//     <title>Food Market Place</title>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap" rel="stylesheet">
// <link href="../css/style.css" rel="stylesheet" type="text/css">
// <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />       
//     <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>       
// </head>


// <body>








import '../css/style.css'

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

export function Header() {
    const navigate = useNavigate();

    const login = localStorage.getItem('userToken');

    const logout = async () => {
        try {
            // Make a request to the logout API
            const response = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/logout', {
                method: 'POST', // Assuming a POST request is required for logout, adjust as needed
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`, // Include the user token in the headers
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Clear the token from local storage
                localStorage.removeItem('userToken');
                navigate('/');
                // Add any additional cleanup or redirection logic here

                console.log('Logout successful');
            } else {
                console.error('Error in logout:', response.statusText);
                // Handle logout error, if needed
            }
        } catch (error) {
            console.error('Error in logout:', error);
            // Handle any unexpected errors during logout
        }
    };

    return (
        <div className="App">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 offset-md-3">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/">Logo here</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Customize Your Menu </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Shop By Location </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact-us">Contact Us </Link>
                                        </li>
                                    </ul>
                                    <div className="form-inline my-2 my-lg-0 headerIcons">
                                        <button type="button">
                                            <Link to="/favourit-product">
                                            <i className="fa fa-heart"></i>
                                            </Link>
                                        </button>
                                        <button type="button">
                                            <Link className="nav-link" to="/cart"> <i className="fa fa-shopping-cart"></i></Link>

                                        </button>
                                        {!login ? (
                                            <button type="button">
                                                <Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} to="/login" type="button">
                                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                                </Link>
                                            </button>

                                        ) :
                                            (
                                                <button type="button" onClick={logout}>         <i class="fa fa-sign-out" aria-hidden="true"></i>
                                                </button>
                                            )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

