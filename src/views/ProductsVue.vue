<template>
    <main class="grid place-content-center min-h-[50vh] w-full">
        <h1 class="text-4xl text-red-500">Products Page under development</h1>
    </main>
    <div class="container">
      <div class="flex-col flex items-center" id="img_products">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 90%, 0% 100%);">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 100%, 0% 100%);">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
  <img class="w-20" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);">
      </div>
      <div id="img_primary">
      <img class="w-125" src="../assets/img/png/card.png" alt="produit img" style="clip-path: polygon(0% 0%, 100% 3%, 100% 98%, 0% 100%);">
      </div>
  
  <div id="detail_products">
    <div class="product-header">
  <h1>Nom du produit</h1>
  <img id="like_button" class="w-10" src="../assets/img/png/like.png" alt="button like">
</div>
    <h2>45€</h2>
    <hr>
    <h3>Noir : 6543688</h3>
    <button>AJOUTER</button>
   <p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui
     habitus iram pugnantium concitat et dolorem proximos</p>
     <p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisques</p>
     <p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens 
      scuta qui habitus iram pugnantium concitat et dolorem proximos</p>
  </div>
</div>

    
    <br>
  <fwb-carousel :pictures="pictures" />
 
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'
import caroussel1 from '../assets/img/png/carous1.png';
import caroussel2 from '../assets/img/png/carous2.png';
import caroussel3 from '../assets/img/png/carous3.png'

const pictures = [
  {src: caroussel1, alt: 'Image 1'},
  {src: caroussel2, alt: 'Image 2'}, 
  {src: caroussel3, alt: 'Image 3'},
]
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#img_products {
  display: flex;


  gap: 3px;
}

#img_primary{
  margin-left: 1%;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


#detail_products {
  width: 80%; 
  margin-left: 5%;
}

#detail_products h1 {
  margin-bottom: -0px; 
}

#detail_products h2 {
  margin-bottom: 5%;
}
#detail_products h3 {
  margin-top: 60px; 
  margin-bottom: 5%;
}

#detail_products p {
  margin-top: 5%;
  
}






</style>