import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"


function News (){
    const params=useParams()
    const {name}=params
    // const singlepage=1
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [data2,setData2]=useState([])
    useEffect(()=>{


        const getData=async()=>{
            return await fetch(`https://newsapi.org/v2/everything?q=${name}&page=4&pageSize=5&apiKey=5e1a87d037a84f089b608d972b8ffe04`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData().then((res)=>{
            // console.log(res)
            setData(res)
        })
        const getData1=async()=>{
            return await fetch(`https://newsapi.org/v2/everything?q=${name}&page=3&pageSize=20&apiKey=5e1a87d037a84f089b608d972b8ffe04`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData1().then((res)=>{
            // console.log(res)
            setData1(res)
        })

        const getData2=async()=>{
            return await fetch("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=5e1a87d037a84f089b608d972b8ffe04").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData2().then((res)=>{
            // console.log(res)
            setData2(res)
        })
        
    },[name,setData,setData1,setData2])
  
console.log(data)




    return (
        <div className="container">
            <div><h1>{name==="4"?"Nation":name==="2"?"South":"World"}</h1>
            
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
                       <img style={{width: "8rem",height:"5rem"}} src={item.urlToImage} class="card-img-top" alt="..."/>
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
                    <h2>MOST POPULAR</h2>
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
            <div className="below">
                <h5>CARTOON OF THE DAY</h5>
                <img style={{height:"80%"}} alt="..." src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/978fd83bb6c01cd9a4e65fe74c6445c6f53d8956-tc-img-web.jpg"/>
                <img style={{height:"80%"}} alt="..." src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/17fcfa9b53d153bdd927c3704dab22fbdbead8f8-tc-img-web.jpg"/>
            </div>
            {/* <div className="below"></div>
            <div className="below"></div> */}
            </div>
        </div>
    )
}

export default News