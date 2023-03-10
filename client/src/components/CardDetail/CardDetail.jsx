import React from 'react'
import { useParams } from 'react-router-dom';
import "./CardDetail.css";

function CardDetail() {
    //useParams Hook:
    let { id } = useParams()
    //sending Data to Backend

    return (
        <>

            <div className="CardDetailWhole">
                <div className="cardDetail">
                    <div className="C-D-image">
                        <img src="https://via.placeholder.com/150/5c0d0b" alt="" />
                    </div>
                    <div className="C-D-desc">
                        <h1>
                            Title
                        </h1>
                        <p>
                            Description
                        </p>
                    </div>
                </div>

                <div className="order">
                    <button type='submit'>
                        Confirm Order
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default CardDetail