import React from "react";
import { Link } from "gatsby";

function Layout({children}) {
    return (
        <main>
            <div style={{ display: "flex", gap: 10 }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            {children}
            <div>Copyright All Rights</div>
        </main>
    );
}

export default Layout;
