import FormArea from "./FormArea"
import MainStatusArea from "./MainStatusArea"



function MainArea() {
  return (
    <div className=" min-h-screen  bg-slate-500">
        <h1 className=" text-3xl text-center pt-3 text-white">Token Status</h1>

        <div className=" grid grid-cols-2 mt-5 gap-2  max-w-screen-xl ">
        <FormArea />
        <MainStatusArea />
        </div>
    </div>
  )
}

export default MainArea