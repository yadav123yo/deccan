
import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"


function Home (){
    const params=useParams()
    const {name}=params
    const singlepage=1
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [data2,setData2]=useState([])
    const [data3,setData3]=useState([])
    const [data4,setData4]=useState([])
    const [data5,setData5]=useState([])
    const [data6,setData6]=useState([])
    const [data7,setData7]=useState([])
    const [data8,setData8]=useState([])
    const [data9,setData9]=useState([])


    useEffect(()=>{
        
        
        const getData=async()=>{
            
            return await fetch(`https://newsapi.org/v2/everything?q=cricket&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData().then((res)=>{
            // console.log(res)
            setData(res)
        })
        const getData1=async()=>{
            return await fetch(`https://newsapi.org/v2/everything?q=${name}&page=3&pageSize=20&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData1().then((res)=>{
            // console.log(res)
            setData1(res)
        })

        const getData2=async()=>{
            return await fetch("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData2().then((res)=>{
            // console.log(res)
            setData2(res)
        })
        
        const getData3=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=science&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData3().then((res)=>{
            // console.log(res)
            setData3(res)
        })
        
        const getData4=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=entertainment&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData4().then((res)=>{
            // console.log(res)
            setData4(res)
        })


 const getData5=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=lifestyle&language=en&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData5().then((res)=>{
            // console.log(res)
            setData5(res)
        })

        const getData6=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=technology&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData6().then((res)=>{
            // console.log(res)
            setData6(res)
        })
        
        const getData7=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=Education&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData7().then((res)=>{
            // console.log(res)
            setData7(res)
        })

        const getData8=async()=>{
            return await fetch("https://newsapi.org/v2/everything?q=nation&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData8().then((res)=>{
            // console.log(res)
            setData8(res)
        })

const getData9=async()=>{
                return await fetch("https://newsapi.org/v2/everything?q=world&language=hi&page=3&pageSize=5&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
                res.json()).then((res)=>{
                    return res.articles
                })
            }
            getData9().then((res)=>{
                // console.log(res)
                setData9(res)
            })

        
     },[name,setData,setData1,setData2,setData3,setData4,setData5,setData6,setData7,setData8,setData9])
  
 console.log(data)




    return (
        <div className="container">
            <div><h1>Head-lines</h1>
            
            <div className="con_data">
                <div className="main_1">
                    <div className="topstory">

                                        {data?.map((item)=><Link to={`/${name}/${item.title}`}>
                                             <div className="card" style={{width: "28rem", marginBottom:"20px"}}>
                                                <img style={{height: "15rem"}} src={item.urlToImage} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                            </div>
                                            </Link>)
                                        }
                    </div>
                    <div className="topstorysubcontent">
                    {data1?.map((item)=><Link to={`/${name}/${item.title}`}>
                    <div className="card" style={{width: "18rem",marginBottom:"10px"}}>
                       <div className="subContentdiv" >
                       <img style={{width: "8rem",height:"5rem"}} src={item.urlToImage?item.urlToImage:"https://thephd.dev//assets/img/2022/08/menu-close-up.jpg"} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            
                            <p className="card-text">{item.title.slice(0,20)}</p>
                           
                        </div>
                       </div>
                    </div>
                    </Link>)
                                        }

                    </div>
                </div>
                <div className="main_2">
                    <h2>TOP STORY</h2>
                {data2?.map((item)=><Link to={`/${name}/${item.title}`}>
                    <div className="card" style={{width: "20rem",marginBottom:"10px"}}>
                       <div className="subContentdiv" >
                       
                        <div className="card-body">
                            
                            <p style={{fontWeight:"bolder"}} className="card-text">{item.title.slice(0,40)}</p>
                           
                        </div>
                        <img style={{width: "8rem",height:"10rem"}} src={item.urlToImage} class="card-img-top" alt="..."/>
                       </div>
                    </div>
                    </Link>)
                                        }
                </div>
                </div>



               < div className="science">
                <div>
                <h2>Science in Hindi</h2>
                </div>
                <div className="science1">
                {data3?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img className="img" style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
                </div>

                < div className="science">
                <div>
                <h2><Link className="nav-link" to="/5">Entertainment in Hindi</Link></h2>
                </div>
                <div className="science1">
                {data4?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>


< div className="science">
                <div>
                <h2> <Link className="nav-link" to="/9">Lifestyle</Link></h2>
                </div>
                <div className="science1">
                {data5?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>

< div className="science">
                <div>
                <h2> <Link className="nav-link" to="/8">Tech news</Link>  </h2>
                </div>
                <div className="science1">
                {data6?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>
< div className="science">
                <div>
                <h2><Link className="nav-link" to="/6">Education in hindi</Link>  </h2>
                </div>
                <div className="science1">
                {data7?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>
< div className="science">
                <div>
                <h2> <Link className="nav-link" to="/3" > world news in hindi</Link>  </h2>
                </div>
                <div className="science1">
                {data8?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>

< div className="science">
                <div>
                <h2><Link className="nav-link" to="/4"> National news in hindi</Link> </h2>
                </div>
                <div className="science1">
                {data9?.map((item)=><Link to ={`/${name}/${item.title}`}>
                <div className="single">
                <img style={{width: "80%",height:"50%",marginBottom:"1rem",borderRadius:"1rem",alignItems:"center",marginLeft:"20px"}} src={item.urlToImage} class="card-img" alt="..."/>
                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0,90)}</p>
                                                </div>
                                                </div>


                </Link>)}
               
                </div>
</div>






            <div className="below">
                <h5>CARTOON OF THE DAY</h5>
                <img style={{height:"80%"}} src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/978fd83bb6c01cd9a4e65fe74c6445c6f53d8956-tc-img-web.jpg" alt="..."/>
                <img style={{height:"80%"}} src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/17fcfa9b53d153bdd927c3704dab22fbdbead8f8-tc-img-web.jpg" alt="..."/>
            </div>
            {/* <div className="below"></div>
            <div className="below"></div> */}
            </div>
        </div>
    )
}

export default Home