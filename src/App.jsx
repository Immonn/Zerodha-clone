import { useState } from 'react'
import logo from './logo.svg'
import landing from './landing.png'
import exc from './ecosystem.png'
import header from './header.png'

function App() {
  return (
    <>
      <Header />
      <Center />
      <Login/>
      <Ecosystem/>
      <Footer/>
    </>
  )
}

function Header() {
  return <div id="header">
    <div className="logo">
      <img src={logo} width="100" height="50" />
    </div>
    <span id="info">
      <span>Sign up</span>
      <span>About</span>
      <span>Products</span>
      <span>Pricing</span>
      <span>Support</span>
    </span>
  </div>
}

function Center() {
  return <div id='center'>
    <div className="landing">
      <img src={landing} />
    </div>
  </div>
}

function Login(){
  return <center id='login'>
    <h1 style={{color:"rgb(99, 98, 98)",fontSize: "30px"}}>Invest in everything</h1>
    <p style={{color:"rgb(99, 98, 98)",fontSize: "25px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <br/>
    <span id='up'>Sign up for free</span>
  </center>
}

function Ecosystem(){
  return (
    <div id='eco'>
      <div id='content'>
        <h2 style={{color:"rgb(99, 98, 98)"}}>Trust with confidence</h2>

        <h3>Customer-first always</h3>
        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

        <h3>No spam or gimmicks</h3>
        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

        <h3>The Zerodha universe</h3>
        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

        <h3>Do better with money</h3>
        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>

      <div className="eco-img">
        <img src={exc} alt="ecosystem" />
      </div>
    </div>
  )
}

function Footer(){
  return (
    <center>
      <img src={header}/>
    </center>
  )
}

export default App
