import React from 'react'
///tmb puedo des estructurar el props con {title,url}
export const GifGridItem = (props) => {
    console.log(props);
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={props.url} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}
