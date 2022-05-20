import Link from '../src/components/Link'
import React from 'react'

function GlobalStyle() {
  return (
    <style global jsx>{`
      body {
        font-family: sans-serif;
        background: #CCC;
      }
    `}</style>
  )
}

function Title({ children, as }) {
  const Tag = as
  return (
    <React.Fragment>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          
        }
      `}</style>
    </React.Fragment>
  )
}

export default function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Title as='h1'>Alura Cases - Home</Title>
      <Link href='/faq'>
        Ir para a página do FAQ
      </Link>
    </div>
  )
}