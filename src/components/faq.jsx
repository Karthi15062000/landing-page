import react from 'react'

import Accordion from 'react-bootstrap/Accordion';

function Faq({ faq }) {
    return (
        <div className='container my-5'>
            <div className='row  '>

                <div className='col-0 col-lg-2' />
                <div className='col-12 col-lg-8'>

                    <p className='h2 text-center mt-5 fw-bolder mb-3'>Frequently asked question</p>
                    <p className='text-muted  text-center'>Everything you need to know about the product and billing.</p>
                    {faq.map((item, i) => {
                        return <Accordion className='col-12 ' defaultActiveKey="0">
                            <Accordion.Item eventKey="1">

                                <Accordion.Header key={i}> <p className='h6 p-3'>{item.ques}</p></Accordion.Header>
                                <Accordion.Body>
                                    <p className='text-muted'>{item.ans}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    })}




                    

                </div>
            </div>
        </div>
    );
}

export default Faq;