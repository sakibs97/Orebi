import { useState } from "react"
import Container from "./Container"


const Description = () => {
    let [show, setShow] = useState()
    let [showt, setShowt] = useState()

    return (
        <Container className='my-8'>
            <div className="">
                <div className="">
                    <div className="">
                        <button onClick={setShow}>Description</button>
                        <button onClick={setShowt}>Reviews (1)</button>
                    </div>
                    {show &&
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Modi unde adipisci quibusdam, quam libero dolores aut! Aperiam fugit ad est ipsum excepturi minus sunt illum nisi obcaecati, ipsa iusto dicta.
                        </p>}
                </div>
                <div className="">
                    <div className="">

                    </div>
                    {showt &&
                        <div className="">
                            <h4>John Ford</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, itaque.</p>
                        </div>
                    }
                </div>
            </div>
        </Container>
    )
}

export default Description