import React from 'react'
import spidy1 from './sp.jpg'
import spidy2 from './Cool-Spiderman.jpg'
import spidy3 from './marvel.png'

export default function crousal() {
  return (
    <>
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner"  style={{height:20+'rem',width:100+'vw'}}>
    <div class="carousel-item active">
      <img src={spidy1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={spidy2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={spidy3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <hr />
</div> 
    </>
  )
}
