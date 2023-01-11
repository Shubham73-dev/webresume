import React from 'react'
import Cards from '../widgets/Cards'
import '../styles/mysection.css'

const Mysection = () => {
    return (
        <div class="mySectionContainer">
            <section className="aboutMeContainer">
                <h1>about me</h1>
                <p><span>28 years</span> &#47; <span>Lviv</span> &#47; Freelance</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora, laboriosam blanditiis, officia quo, quaerat fugiat ea porro sit repudiandae obcaecati laudantium voluptatibus nemo nihil quas reiciendis id assumenda soluta!
                    Ducimus fuga pariatur quod suscipit dolore ipsa provident laborum, illo praesentium id, laudantium similique obcaecati fugit at neque vitae iusto nisi accusantium maxime doloribus quibusdam. Soluta, neque maxime? Pariatur, unde.</p>
            </section>
            <hr />
            <section className="cardsContainer">
                <Cards serviceIconClass="fa-solid fa-code" serviceTitle="development" paraDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde a aut. Voluptatem quibusdam minus ea doloremque minima ipsa." />

                <Cards serviceIconClass="fa-brands fa-css3-alt" serviceTitle="web design" paraDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde a aut. Voluptatem quibusdam minus ea doloremque minima ipsa." />

                <Cards serviceIconClass="fa-solid fa-database" serviceTitle="database" paraDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde a aut. Voluptatem quibusdam minus ea doloremque minima ipsa." />

                <Cards serviceIconClass="fa-solid fa-server" serviceTitle="Server" paraDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde a aut. Voluptatem quibusdam minus ea doloremque minima ipsa." />
            </section>
            <section class="pricingContainer">
                payment will be negotiable
            </section>
        </div>
    )
}

export default Mysection