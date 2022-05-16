import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

const Welcome = () =>{

    return (
    <Jumbotron>
        <h1>Images Gallery</h1>
        <p>
            This is a simple application that retrieves photo using unsplash api.
        </p>
        <Button variant = "primary" href = "https://unsplash.com" target = "_blank">Learn less</Button>
    </Jumbotron>
    )
}

export default Welcome