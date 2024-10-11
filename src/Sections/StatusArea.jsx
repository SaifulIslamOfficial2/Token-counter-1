
function StatusArea(props) {

    // let btn = document.getElementById('test');
 
    // btn.addEventListener( 'click', function() {
    //     console.log('click hoiche');
    // })
    //  let clickHandaler = function (){
    //     console.log('clik hoiche');
    //  }





  return (
    <div className=" bg-white shadow-sm rounded-lg overflow-hidden mb-5 ">
        <div className={`${props.bgColor} text-white px-3 py-5 text-2xl flex justify-between mb-3`}>
            <span className="block">Active Token</span>
            <span className="block">5</span>
        </div>
        <ul>
            <li className=" flex bg-[#DDDDDD] mx-4 mb-3 w-100 p-3 rounded-sm">
                <div>
                    <p className="text-3xl text-[#00BD56]">Nasrullah Mansur</p>
                    <span>01728619733</span>
                </div>
                <button className={`${props.bgColor} px-3 rounded-sm btn-success text-white ml ml-auto`}>Token No: <span>0</span></button>
            </li>

        </ul>
    </div>
  )
}

export default StatusArea