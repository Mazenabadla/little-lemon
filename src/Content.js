export default function Content({activeItem,setActiveItem}){

 return ( 
    <>
   <div>
    <button onClick={()=>setActiveItem(null)}>x</button>
    {activeItem==='par1' && <p>This is paragraph 1</p>}
    {activeItem==='par2' && <p>This is paragraph 2</p>}
    {activeItem==='par3' && <p>This is paragraph 3</p>}
      
       
   </div> 
   
   </>
 ); 
};
