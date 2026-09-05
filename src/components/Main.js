import './Main.css'

export default function Main({setActiveItem}){

    return(

        <section className='main'>
            <article className='left'>
                <h2>Little Lemon</h2>
                <p className='city'>Chicago</p>
                <p className='description'>Llittle lemon restaurant is one of the most famous places in the city. Here, you may have your best meals ever! For businessmen, they can easily order their meals delivered to them at their place. </p>
                <button onClick={()=>setActiveItem('table')}>Reserve a table</button>
            </article>
            
                


            <img className='main' src='/little lemon images/img-main.jpg'/>

        </section>

    )
}