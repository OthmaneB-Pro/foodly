import {screen} from '@testing-library/react'

test('first test exemple', () => { 
    expect(1 + 1).toBe(2)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
 })