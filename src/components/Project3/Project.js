import React from 'react'
import logo from '../../logo.svg'
import './Project.css'

const Project = () => (

    <section className="container">
        <header>Title</header>
        <aside>Aside 1</aside>
        <section className="box">
            <article className="box-head">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Titulo del Artículo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel enim nec mauris lobortis consectetur nec vel tellus. Aliquam at mi ac mi eleifend sollicitudin at eu nulla.</p>
            </article>
            <article className="box-text1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel enim nec mauris lobortis consectetur nec vel tellus. Aliquam at mi ac mi eleifend sollicitudin at eu nulla. Phasellus suscipit tortor ut lacus fermentum sollicitudin.</p>
            </article>
            <article className="box-text2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel enim nec mauris lobortis consectetur nec vel tellus. Aliquam at mi ac mi eleifend sollicitudin at eu nulla. Phasellus suscipit tortor ut lacus fermentum sollicitudin.</p>
            </article>
        </section>
        <aside>Aside 2</aside>
        <footer>Footer</footer>
    </section>

)

export default Project