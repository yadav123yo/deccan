import { useState } from "react"
import { useEffect } from "react"
import {  useParams } from "react-router-dom"

function SinglePage(){
    const para=useParams()
    const {singlepage}=para
const [dataz,setDataz]=useState([])
const [data2,setData2]=useState([])
    useEffect(()=>{

        const getData=async()=>{
            return await fetch(`https://newsapi.org/v2/everything?q=${singlepage}&pageSize=1&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData().then((res)=>{
            // console.log(res)
            setDataz(res)
        })

        const getData2=async()=>{
            return await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=e2e48ecaaf4a439d88f4fdcd80c6f3d5").then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData2().then((res)=>{
            // console.log(res)
            setData2(res)
        })
    },[singlepage])

    return(
    <div className="container">
        <div className="singlepagediv">
           
            
            <div >
          
                                        {dataz?.map((item)=>
                                             <div style={{width: "45rem"}}>
                                                 <h3 className="card-title">{item.title}</h3>
                                                 <br></br>
                                                 <p>Author:{item.author}</p>
                                                <img  src={item.urlToImage} className="card-img-top" alt="..."/>
                                                <div >
                                                <p >{item.description}</p>
                                                   
                                                <p >{item.content}</p> <p >{item.content}</p> <p >{item.content}</p>
                                                </div>
                                            </div>
                                           )
                                        }

                    </div>
                    <div className="main_2">
                    <h2>MOST POPULAR</h2>
                {data2?.map((item)=>
                    <div className="card" style={{width: "20rem",marginBottom:"10px"}}>
                       <div className="subContentdiv" >
                       
                        <div className="card-body">
                            
                            <p style={{fontWeight:"bolder"}} className="card-text">{item.title.slice(0,40)}</p>
                           
                        </div>
                        <img style={{width: "8rem",height:"10rem"}} src={item.urlToImage} class="card-img-top" alt="..."/>
                       </div>
                    </div>
                   )
                                        }
                </div>
        </div>
    </div>
    )
}

export default SinglePage