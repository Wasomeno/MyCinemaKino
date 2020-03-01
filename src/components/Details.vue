<template>
<main>
  <div class="container" v-for="(item,index) in JudulMovie" :key="index">
      <div class="detail-movie-left" v-if="movid == index">
      <h1>{{item.Judul}}</h1>
      <img :src="/Pictures/+index+src">
     </div>
     <div class="detail-movie-right" v-if="movid == index">
       <h2>Movie Description</h2>
       <p>{{item.Desc}}</p>
       <div class="movie-rates" v-if="movid == index">
       <h3>{{item.Rate}} / 10 Rating</h3>
       <img src="/Pictures/imdb.png" width="100px"/>
       </div>
     </div>
  </div>
</main>
</template>
<script>
export default {
  name: 'details',
  data () {
    return {
      title: 'details',
      src: '.jpg',
      Imagesrc: '/Pictures/',
      movid: this.$route.params.movieid,
      JudulMovie: [
        {
          Judul: 'Avengers: Infinity War',
          Desc: 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.',
          Rate: '8.5'
        },
        {
          Judul: 'Parasite',
          Desc: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
          Rate: '8.6'
        },
        {
          Judul: '1917',
          Desc: 'During World War I, two British soldiers  Lance Cpl. Schofield and Lance Cpl. Blake  receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades  including Blake own brother',
          Rate: '8.5'
        },
        {
          Judul: 'Joker',
          Desc: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks  the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like hes part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
          Rate: '8.6'
        },
        {
          Judul: 'Sonic The Hedgehog',
          Desc: 'Sonic tries to navigate the complexities of life on Earth with his newfound best friend  a human named Tom Wachowski. They must soon join forces to prevent the evil Dr. Robotnik from capturing Sonic and using his powers for world domination.',
          Rate: '6.9'
        },
        {
          Judul: 'Harley Quinn: Birds of Prey',
          Desc: 'Its open season on Harley Quinn when her explosive breakup with the Joker puts a big fat target on her back. Unprotected and on the run, Quinn faces the wrath of narcissistic crime boss Black Mask, his right-hand man, Victor Zsasz, and every other thug in the city. But things soon even out for Harley when she becomes unexpected allies with three deadly women  Huntress, Black Canary and Renee Montoya.',
          Rate: '6.6'
        }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  font-family: Ardeco;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr;
  padding: 10px;
}
.detail-movie-left {
  text-align: center;
  grid-column: 1;
}
.detail-movie-left img{
  width: 400px;
  box-shadow: 2px 2px 10px 2px black;
}
.detail-movie-right {
  text-align: left;
  margin-top: 65px;
  grid-column: 2;
}
.detail-movie-right p{
  margin-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 25px;
}
.detail-movie-right h2 {
  padding-left: 10%;
  padding-right: 10%;
}
.movie-rates {
  padding-left: 10%;
  display: inline-block;
}
@font-face {
  font-family: Ardeco;
  src: url("/Fonts/Ardeco.ttf")format("truetype");
}
</style>
