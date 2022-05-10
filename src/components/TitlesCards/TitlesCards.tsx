import React from "react"

interface TitlesCardsProps{
    identifier: string;
    type: 'Muro' | 'Espectacular' | 'Urbanos' | 'Indoors' | string
}

const TitlesCards = (props:TitlesCardsProps) => {
    const identifier = props.identifier
    const type = props.type
    return(
        <div>
            <h2 className="ClaveCards">
                {identifier}
            </h2>
            <h3 className="TipoCards">
                {type}
            </h3>
        </div>
    )
}

export default TitlesCards;