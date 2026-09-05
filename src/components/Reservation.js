import './Reservation.css';

export default function Reservation({activeItem,setActiveItem}){
    return(
        <>
        {activeItem==='table' && (
            <div className='open'>
            <h3>Reserving a table</h3>                        
            <button className='close' onClick={()=>setActiveItem(null)}>x</button>

            <p>Please fill in the form below...</p>

            <form>
                <input type='text' placeholder='your first name'/>
                <input type='text' placeholder='your last name'/>
                <input type='email' placeholder='your email'/>
                <input type='number' placeholder='no. of persons'/>
                <textarea placeholder='Anything special to declare...'/>

                <button className='submit' type='submit'>Submit & Exit</button>
            </form>
        
        </div>

        )}
        
        {activeItem==='order' && (
            <div className='open'>
            <h3>Order a delivery</h3>                        
            <button className='close' onClick={()=>setActiveItem(null)}>x</button>

            <p>Please fill in the form below...</p>

            <form>
                <input type='text' placeholder='your first name'/>
                <input type='text' placeholder='your last name'/>
                <input type='text' placeholder='your mobile no. please...'/>
                <input type='text' placeholder='your address please...'/>
                <textarea placeholder='Anythng to mention...'/>
                <button className='submit' type='submit'>Submit & Exit</button>


            </form>
        
        </div>

        )}

        {activeItem==='menu' && (
            <div className='open'>
            <h3>Online menu</h3>                        
            <button className='close' onClick={()=>setActiveItem(null)}>x</button>

            <p>Please fill in the form below...</p>

            <form>
                <select>select meal</select>
                <input type='number' placeholder='no. of items'/>
                <textarea placeholder='Anything special to declare...'/>
                <button className='submit' type='submit'>Submit & Exit</button>
           </form>
        
        </div>

        )}
        
        
        </>

        
    )
}


