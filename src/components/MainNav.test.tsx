// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MainNav from './MainNav'

describe('App', () => {
  it('Expect "Log In" to be in the document', () => {
    render(<MainNav />)
    expect(screen.getByText('Log In')).toBeInTheDocument()
  })
})
