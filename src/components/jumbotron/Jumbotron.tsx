import React from 'react'
import female from '../../assets/images/Jumbotron/female-on-chair.svg'
import male from '../../assets/images/Jumbotron/male-with-coat.svg'

const Jumbotron: React.FC = ()  => {
  return (
    <div>
        <section className="Jumbotron">
            <div className="container-fluid">
            <div className="jumbo-img-1"><img src={female} alt="female-on-chair"/></div>
                <div className="jumbo-header">
                    <h1><strong>SALE UP</strong> <br/> to 50% off </h1>
                    <p data-testid='jumbo'>Online shopping free home delivery over $100</p>
                    <button>
                        <i id="top-left" className="fa-solid fa-chevron-down"></i>
                        SHOP NOW
                        <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
                    </button> 
                </div>
            <div className="jumbo-img-2"><img src={male} alt="male-with-coat"/></div>
            </div>
        </section>
    </div>
  )
}

export default Jumbotron