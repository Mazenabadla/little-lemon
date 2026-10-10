import './Main.css'

export default function Main({ onReserveClick }) {

    return (

        <section className='main'>
            <article className='left'>
                <h2>Little Lemon</h2>
                <p className='city'>Chicago</p>
                <p className='description'>Llittle lemon restaurant is one of the most famous places in the city. Here, you may have your best meals ever! For businessmen, they can easily order their meals delivered to them at their place. </p>
                <button aria-label='booking tables' onClick={onReserveClick}>Reserve a table</button>
            </article>




            <img className='main' src='/little lemon images/img-main.jpg' alt='main image'/>

        </section>

    )
}