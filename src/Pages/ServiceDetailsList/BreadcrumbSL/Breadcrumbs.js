import React from 'react';
import { Link } from 'react-router-dom';
import breadcrumbimg from '../../../images/breadcrumb.jpg';
import './Breadcrumbs.css'
const Breadcrumbs = (props) => {
    const { pagename } = props.breadcrumb;
    return (
        <>
            <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1 className="page-title">{pagename}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>{pagename}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Breadcrumbs;