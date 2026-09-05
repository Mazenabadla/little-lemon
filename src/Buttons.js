export default function Buttons({setActiveItem}){ 
 
 return ( 
   <>
      <button onClick={()=>setActiveItem('par1')}> par1</button>      
      <button onClick={()=>setActiveItem('par2')}>par2</button>      
      <button onClick={()=>setActiveItem('par3')}>par3</button>      
   </> 
 ); 
};
