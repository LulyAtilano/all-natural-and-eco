import React from "react";

import "../index.css";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="page-footer cyan darken-4">
                    <div class="container">
                    © 2014 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Footer;