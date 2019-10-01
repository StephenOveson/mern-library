import React from 'react'

const ResultCard = (props) => {
    return (
        <div className="container">
            <div className="col s6 m6">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5 className="header">{props.title}</h5>
                            <h6>{props.author}</h6>
                            <p>{props.description}</p>
                        </div>
                        <div className="card-action">
                            <a href={props.link} target="_blank">Learn More</a>
                            <a onClick={props.saveBook} id={props.id}>Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard