import React from 'react';
import './App.css'
function Homepage() {
    return (
        <>
            <body>
                <section className="container1">
                    <header className="header">
                        <h1>Career<span>Hub</span></h1>
                        <nav>
                            <ul>
                                <li><a href="Home">Home</a></li>
                                <li><a href="Categories">Browse Categories</a></li>
                                <li><a href="AboutUs">About</a></li>
                                <li><a href="ContactUS">Contacts</a></li>
                            </ul>
                        </nav>
                        <section>
                            <button>Log In</button>
                        </section>
                    </header>
                    <section className="Container">
                        <h2>Welcome to CareerHub</h2>
                        <p>Step into a realm of endless career opportunities right at your fingerprints.</p>
                    </section>
                </section>
            /</body>
        </>
    );
}

export default Homepage;