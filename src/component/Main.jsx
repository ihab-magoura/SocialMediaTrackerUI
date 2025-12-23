import '../App.css'
import Crde from './Crde'
export default function Main() 

{

    let Media= [
    {
        key:1,
        "media": "Facebook",
        "followers": "3004",
        "state": 1,
        "margin": "233"
    },
    {
        key:2,
        "media":"Twitter",
        "followers": "1850",
        "state": 1,
        "margin": "120"
    },
    {
         key:3,
        "media": "Instagram",
        "followers": "4K",
        "state": 0,
        "margin": "95"
    },
    {
         key:4,
        "media": "YouTube",
        "followers": "980",
        "state": 1,
        "margin": "60"
    }
];

   let rend =Media.map((item)=>{
    return <Crde 
    key={item.key}
    media={item.media}
    followers={item.followers}
    state={item.state}
    margin={item.margin}
    />})
    return <>
    <div  className="p-3.5 px-6 bg-bg  min-h-screen dark " >
<header>
    <h1 className="text-text-primar text-2xl ">Social Media Dashborde</h1>
    <p className="text-text-secondary">Totel Fllowers :22.234</p>
</header>

<hr className="my-4 mb-9 bg-text-secondary" />

<div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
    {rend}
</div>
    </div>
    
    
    </>
}