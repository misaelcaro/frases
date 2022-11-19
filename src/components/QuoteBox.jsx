import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, getNewValues, backgroundObject,colorObject }) => {
    console.log(quote)
    return (
        <article className="quotebox">
           <i  style={colorObject}className='bx bxs-quote-left'></i>
            <p style={colorObject}>{quote.quote}</p>
            <h4 style={colorObject}>{quote.author}</h4>
            <section className="quotebox-footer">
                <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />
                
            </section>
        </article>
    )
}

export default QuoteBox