import Facbook from './images/icon-facebook.svg'
import Youtube from './images/icon-youtube.svg'
import Twitter from './images/icon-twitter.svg'
import Instagram from './images/icon-instagram.svg'
import up from './images/icon-up.svg'
import Down from './images/icon-down.svg'


export default function Crde(prop) {

    let socialMedia = {
    "Facebook":Facbook,
    "Twitter": Twitter,
    "Instagram": Instagram,
    "YouTube": Youtube,
    
};
    return (

    <>
    <div className="bg-card pb-3   text-center h-64 rounded-md flex flex-col justify-between align-middle">
        <div className={"w-full  h-2 mt-0 rounded-t-md justify-self-start "+`bg-${prop.media}`}></div>
        <div className=" flex justify-center items-center  gap-1" >
         <img className="w-8" src={socialMedia[prop.media]} alt="facbook" />
         <p className="text-2xl text-text-secondary">@rayan</p></div>
        <h1 className=" text-text-primar text-8xl font-semibold  "> {prop.followers}
        </h1>
        <p className="text-text-secondary tracking-widest text-1xl">FOLLOWERS</p>
        <div className="flex justify-center items-center  gap-0.5">
             <img  className =" size-3"src={prop.state?up:Down} alt="J" />
        <p className="  text-text-primar ">{prop.margin}</p>
        </div>
        
    </div>
    </>
)
}
