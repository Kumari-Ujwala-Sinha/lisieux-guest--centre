import React from 'react'
import BtnRender from './BtnRender'

function HomeslideItem({homeslide, isAdmin, deleteHomeslide, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={homeslide.checked}
                onChange={() => handleCheck(homeslide._id)} />
            }
            <img src={homeslide.images.url} alt="" />

            <div className="product_box">
                <h2 title={homeslide.title}>{homeslide.title}</h2>
                <span>{homeslide.button}</span>
                <span>{homeslide.link}</span>
                <p>{homeslide.description}</p>
               
            </div>

            
            <BtnRender homeslide={homeslide} deleteHomeslide={deleteHomeslide} />
        </div>
    )
}

export default HomeslideItem
