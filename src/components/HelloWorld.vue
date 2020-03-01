<template>
  <main>
    <div class="grid-container">
    <div class="cinema-jumbotron">
      <img src="/Pictures/kino.svg" width="300px"/>
    </div>
    <div class="cinema-movies">
      <h3>Film yang tayang</h3>
        <li v-for="(item , index) in JudulMovie" :key="index">
          <img :src="/Pictures/ + index + src"><br>
          <h4>{{item.Judul}}</h4>
          <h6 @click="gotoDetail(index)">Detail Film</h6>
        </li>
      </div>
    <div class="cinema-footer">
      <h2>Kino</h2>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      src: '.jpg',
      Imagesrc: '/Pictures/',
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
          Desc: 'During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake own brother',
          Rate: '8.5'
        },
        {
          Judul: 'Joker',
          Desc: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like hes part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
          Rate: '8.6'
        },
        {
          Judul: 'Sonic The Hedgehog',
          Desc: 'Sonic tries to navigate the complexities of life on Earth with his newfound best friend -- a human named Tom Wachowski. They must soon join forces to prevent the evil Dr. Robotnik from capturing Sonic and using his powers for world domination.',
          Rate: '6.9'
        },
        {
          Judul: 'Harley Quinn: Birds of Prey',
          Desc: 'Its open season on Harley Quinn when her explosive breakup with the Joker puts a big fat target on her back. Unprotected and on the run, Quinn faces the wrath of narcissistic crime boss Black Mask, his right-hand man, Victor Zsasz, and every other thug in the city. But things soon even out for Harley when she becomes unexpected allies with three deadly women -- Huntress, Black Canary and Renee Montoya.',
          Rate: '6.6'
        }
      ]
    }
  },
  methods: {
    gotoDetail (movid) {
      this.$router.push({ name: 'details', params: { movieid: movid } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  height: 300vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.3fr 1.4fr;
  grid-template-rows: 0.2fr 2fr 1fr 1fr 0.3fr;
}
.cinema-jumbotron {
  grid-column: 1/5;
  background-color: #fcfdfe;
  box-shadow: 2px 2px 10px 0px grey;
  text-align: center;
}
.cinema-movies li {
    list-style-type: none;
    display: inline-block;
    margin: 100px;
  }
  .cinema-movies {
    text-align: center;
    grid-column: 1/5;
  }
  .cinema-movies img {
    height: 400px;
    box-shadow: 3px 3px 5px 0px black;
    transition: 0.5s;
  }
  .cinema-movies img:hover {
    transform: scale(0.9,0.9);
    box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.25);
  }
  .cinema-movies h3 {
    font-family: Ardeco;
    margin-top: 40px;
    margin-bottom: 0px;
    color: black;
    font-size: 30px;
  }
  .cinema-movies h3::before {
    content:'';
    border-radius: 10px;
    width: 125px;
    height: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 15px;
    display: inline-block;
    background: #eae2d6;
  }
  .cinema-movies h3::after {
    content:'';
    border-radius: 10px;
    width: 125px;
    height: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
    display: inline-block;
    background: #eae2d6;
  }
  .cinema-movies h4 {
    font-family: Ardeco;
    font-size: 20px;
    font-style: normal;
  }
  .cinema-movies h6 {
    padding: 10px;
    border-radius: 15px;
    box-shadow: 1px 2px 3px 0px grey;
    font-family: Ardeco;
    font-size: 18px;
    transition: 0.5s;
    background: #eae2d6;
  }
  .cinema-movies h6:hover {
    background: black;
    cursor: pointer;
    color: white;
  }
  .cinema-footer{
    font-family: Ardeco;
    background-color: #eae2d6;
    grid-column: 1/5;
    grid-row: 5;
    text-align: center
  }
  .cinema-footer h2 {
    color: white;
    text-shadow: 0px 2px 2px black;
  }
@font-face {
  font-family: Ardeco;
  src: url("/Fonts/Ardeco.ttf")format("truetype");
}
</style>
