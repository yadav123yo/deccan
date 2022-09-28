import { useState } from "react"
import { useEffect } from "react"
import {  useParams } from "react-router-dom"

function SinglePage(){
    const para=useParams()
    const {singlepage}=para
    // https://newsapi.org/v2/everything?q=${singlepage}&apiKey=17aa27bf10d34add8ee1ab6d5f101610
const [dataz,setDataz]=useState([])
const [data2,setData2]=useState([])
    useEffect(()=>{

        const getData=async()=>{
            return await fetch(`https://newsapi.org/v2/everything?q=${singlepage}&pageSize=1&apiKey=5e1a87d037a84f089b608d972b8ffe04`).then((res)=>
            res.json()).then((res)=>{
                return res.articles
            })
        }
        getData().then((res)=>{
            // console.log(res)
            setDataz(res)
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