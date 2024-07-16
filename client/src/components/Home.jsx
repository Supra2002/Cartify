import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import sale from '../images/sale.jpeg';
import men from '../images/men.png';
import makeup from '../images/jewellery.png';
import bag from '../images/bag.png';
import tv from '../images/tv.jpeg';
import harddisk from "../images/harddisk.png";

import machine from '../images/washing machine.jpeg';

import sofa from '../images/sofa.jpeg';
import women from '../images/women.png';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import axios from "axios";



const Home = () => {

    const navigate = useNavigate();
    const [state, setState] = useState([]);

    const CheckTokenExpiration=()=>{
    
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        if (tokenExpiration) {
            const currentTime = new Date().getTime();
            if (currentTime > tokenExpiration) {
                localStorage.removeItem('jwtecomm');
                localStorage.removeItem('tokenExpiration');
            }
        }
    }
    CheckTokenExpiration();



    useEffect(()=>async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response)
        setState(response.data);
        
    },[]);

    const productShow=(e,title)=>{
        const name = title;
        navigate('/popo',{state:{id:name}})
    }

    const onSearch = (e,title) => {
        let name = title;

        navigate('/list', { state: { id: name } });
    }

    const onSearchList = (e) => {
        let name = e.target.id;

        navigate('/list', { state: { id: name } });
    }
    const onSearchError = (e) => {
        let name = e.target.id;

        navigate('/error', { state: { id: name } });
    }

    return (
        <>
            <Navbar />
            <Chatbot />


            <div className="card-container justify-content-center flex-wrap mt-2 p-2 d-flex">

                <div className="card m-3 col-lg-1" id="top" onClick={(e) => { onSearchList(e) }}>
                    <img src={sale} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center" >Top Sales</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"Backpack") }} >
                    <img src={bag} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center" >Bags</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"jewelery") }} >
                    <img src={makeup} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center" >Jewellery</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"Hard Drive") }}>
                    <img src={harddisk} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Hard Disk</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"inches") }}>
                    <img src={tv} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center" >Television</p>
                    </div>
                </div>

                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"Mens") }}>
                    <img src={men} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Men</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearch(e,"women") }}>
                    <img src={women} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Women</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1" onClick={(e) => { onSearchError(e) }}>
                    <img src={sofa} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">Furniture</p>
                    </div>
                </div>
                <div className="card m-3 col-lg-1">
                    <img src={machine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <NavLink to="/error" style={{ textDecoration: 'none' }}> <p className="card-text text-center">More...</p></NavLink>
                    </div>
                </div>

            </div>


            <div className="ads container-fluid">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="container-fluid extra1 electronics my-5">
                <h1 onClick={(e) => { onSearch(e,"electronics") }}>Best of electronics</h1>

                <div className="card-container flex-wrap container-fluid d-flex justify-content-between mx-1">
                {
                    state.filter((fil) => {
                        if (fil.category.includes("electronics")) {
                            return (
                                <></>
                            )
                        }
                    }).slice(1,5).map((ele) => {
                        return (
                            <>
                                    <div className="product-card col-lg-3 col-sm-4"  onClick={(e)=>{productShow(e,ele.title)}} >
                                        <img src={ele.image} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title" >{ele.title.substring(0,13)}...</h5>
                                        </div>
                                    </div>
                                    
                            </>
                        );
                    })
                    
                }
                </div>
            </div>

            <div className="container-fluid clothing extra1 my-3">
                <h1 onClick={(e) => onSearch(e,"clothing")}>Best of clothing</h1>
                <div className="card-container  flex-wrap container-fluid d-flex justify-content-between mx-1">
                    
                    {
                         state.filter((fil)=>{
                            if(fil.category.includes("clothing")){
                                return (
                                    <></>
                                )
                            }
                        }).slice(1,5).map((ele)=>{
                            return(
                                <>
                                    <div className="product-card col-lg-3 col-sm-4"  onClick={(e)=>{productShow(e,ele.title)}} >
                                        <img src={ele.image} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{ele.title.substring(0,13)}...</h5>
                                        </div>
                                    </div>    
                                </>
                            );
                        })
                    }
                    
                   
                    </div>
                   
                
            </div>

            <div className="footer d-flex justify-content-between p-5 container-fluid">
                <div className="container d-flex col-lg-6">
                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">ABOUT</h5>
                        <ul type="none">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Cartify Stories</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>

                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">HELP</h5>
                        <ul type="none">
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                            <li>Report Infringement</li>
                        </ul>
                    </div>
                    <div className="about-foot container col-lg-2">
                        <h5 className="text-center">SOCIAL</h5>
                        <ul type="none">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>X</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="container col-lg-4">
                    <h4>Address</h4>
                    <p>Cartify Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India

                        CIN: U51109KA2012PTC066107

                        Telephone: 044-45614700</p>
                </div>

            </div>
        </>
    );
}
export default Home