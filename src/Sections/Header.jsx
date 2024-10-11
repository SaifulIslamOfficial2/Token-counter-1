function Li (props){
    // eslint-disable-next-line react/prop-types
    return( <li className="mx-2 font-lato text-white font-semibold">{props.data}</li>
    )
  }
  
  function Header() {
  
      let myLiData = [
          'Home',
          'aboute',
          'sirvicess',
          'fortpolio'
      ];
  
    return (
      <header className="p-4 flex bg-lime-800 justify-between font-lato ">
          <span className="text-2xl text-white">logo</span>
          <ul className="flex ">
             {myLiData.map( (item, index)=>{
              return( <Li data={item} key={index} />)
             }
          
             )}
          </ul>
          <div className=" flex">
              <button className="px-4  ml-3 btn border-transparent hover:text-black bg-yellow-700 text-white mx-3 -y-3 rounded-sm">Login</button>
              <button className="px-4  ml-3 btn border-transparent hover:text-black bg-yellow-700 text-white mx-3 y-3 rounded-sm">Register</button>
          </div>
      </header>
    )
  }
  
  export default Header