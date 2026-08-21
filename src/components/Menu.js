import './Menu.css'
export default function Menu (){
    return(
        <section className="menu">
 <div className="special">
    <h3>This Week special</h3>
    <button >Online menu</button>
 </div>
 <div className="meals">
   <div className='meal'>
    <img src='./little lemon images/meal 1.jpg'/>
        <div className='dish'>
             <h4>Dish 1 </h4>
             <span>$20</span>
       
        </div>
        <p>Here is a description of this dish. It contains of so and so and costs so and so. You can order the dish online.</p>
        <button>Order a delivery</button>

   </div>
   <div className='meal'>
    <img src='./little lemon images/meal 2.png'/>
    <div className='dish'>
             <h4>Dish 2 </h4>
             <span>$20</span>
       
        </div>
        <p>Here is a description of this dish. Ingredients are listed here. You can order the dish online.</p>
        <button>Order a delivery</button>
   </div>
   <div className='meal'>
    <img src='./little lemon images/meal 3.jpg'/>
    <div className='dish'>
             <h4>Dish 3 </h4>
             <span>$20</span>
       
        </div>

        <p>Here is a description of this dish. It contains of so and so and costs so and so. Ordering online is available.</p>
        <button>Order a delivery</button>
   </div>
 </div>






</section>
    )

}
