import React from 'react'

const ResultCard = (props) => {
    return (
        <div className="container">
            <div className="col s6 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={props.image} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h2 className="header">{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                        <div className="card-action">
                            <a href={props.href}>Learn More</a>
                            <a onClick="">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard