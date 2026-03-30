import React, { use } from 'react'

const CardModels = ({ cardDataPromise }) => {
    cardDataPromise = use(cardDataPromise)
  return (
    <div>
        {cardDataPromise.map((card, index) => (
          <div key={index} className="card">
            <img src={card.icon_url} alt={`${card.title} icon`} className="card-icon w-40 h-40" />    
          </div>
        ))}

    </div>
  )
}

export default CardModels