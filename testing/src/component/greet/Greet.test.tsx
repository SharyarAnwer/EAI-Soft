import { render , screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet Component Says Hello' , () => {

    render(<Greet/>)

    const textElement = screen.getByText('Hello')

    expect(textElement).toBeInTheDocument()
})

test('Greet That Person' , () => {

    render(<Greet name = "Shahryar" />)

    const textElement = screen.getByText("Hello Shahryar")

    expect(textElement).toBeInTheDocument()
    
})