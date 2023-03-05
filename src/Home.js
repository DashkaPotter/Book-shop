import React from "react";
import { useState } from "react";
import { dataHome } from "./dataHome";
import imageOne from "./books.jpg";
import imageTwo from "./store.jpg";
import imageThree from './email.jpg';
import imageSeven from './hello.jpg'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

function Home(){
    const [bestBooks , setBestBooks] = useState(0);
    const {name,image} = dataHome[bestBooks];

    const nextSlide = () => {
        setBestBooks((bestBooks =>{
            bestBooks++;
            if(bestBooks >dataHome.length -1){
                bestBooks=0;
            }
            return bestBooks;
        }))
    }
    const prevSlide = () => {
        setBestBooks((bestBooks =>{
            bestBooks--;
            if(bestBooks < 0){
                return dataHome.length -1
            }
            return bestBooks;
        }))
    }

    return(
        
        <div>
            <section className="home-section">
            <div className="container">
            <img src={imageSeven} width="310px"  alt="wellcome"/>
            </div>
            <h2 className="container home-titel"><div className="w">W</div><div className="e">e </div><div className="l01">l</div><div className="l02">l</div><div className="c">c</div><div className="o">o</div><div className="m"> m</div><div className="e">e </div></h2>
            <h2 className="container home-titel02">To BookNet</h2>

            <div className="slider-grid">
            <div className="slider-wrap">
            <div className="slider-main">
            <div className="slider-titel">
                <h2>Bestsellers of the month</h2>

                
                
            </div> 
            <div className="slider book-card">
                <img src={image} alt="book" width="300px" height="400px"/>
                <div className='prev'>
                <BsChevronCompactLeft  onClick={prevSlide} size={34}/>
            </div>
            <div className='next'>
                <BsChevronCompactRight  onClick={nextSlide} size={34}/>
            </div>
                </div>
            <div className="name">
                <h3 >"{name}"</h3>
            </div>

            
            </div> 
            </div>
            
                <div className="about-text">
                    <div className="first text">
            <p >
            <span className="first-line">BookNet works to connect readers with independent booksellers all over the world.</span>
                ‍We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.
                    </p>
                    </div>
                    <br></br>
                    <br></br>
                    <p className="second-text"><b>Every purchase on the site financially supports independent bookstores.</b> 
                Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.</p>
            </div> 
            </div>

            <div>
                <h2 className="second-line">
                Since 2020, we've raised more than <span className="million">$24 million </span> for independent bookstores.
                </h2>
            </div>
                


                
                    <div className="how-it-works-titel">
                        <h2> HOW IT WORKS</h2>
                    </div>
            <div className="how-it-works">
                <div>
                    <div className="mini-titel"><h3 >PICK A STORE</h3></div>
                    <img src={imageOne} width="320px" alt="books" />
                    <p className="mini-text">select the bookstore you'd like to support. If you don't choose a store, you'll contribute to our profit sharing pool that helps all our stores.</p>
                </div>

                <div>
                    <div className="mini-titel">
                    <h3 >BUY A BOOK</h3>
                    </div>
                <img src={imageTwo} width="310px" alt="books"  />
                <p className="mini-text">
                Your order will be filled directly by our distributor, and the full profit from your purchase will be sent to bookstore you selected.
                </p>
                </div>
                    <div>
                        <div className="mini-titel">
                        <h3 >CHECK THE MAIL</h3>
                        </div>
                    <img src={imageThree} width="310px" alt="books"/>
                        <p className="mini-text">
                        You'll receive a confirmation and tracking number when your order is placed, and our in-house customer service team will be standing by if you have issues or returns.
                        </p>
                    </div>
                
            </div>
            
            </section>
            
        </div>
    )
}
export default Home;