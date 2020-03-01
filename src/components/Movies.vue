<template>
  <main>
    <div class="grid-container">
    <div class="cinema-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">Now Playing</a></li>
      <li><a href="#">Upcoming</a></li>
      <li><a href="#">Login</a></li>
    </div>
    <div class="cinema-footer">
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1.2fr 1.3fr 1.4fr;
  grid-template-rows: 0.5fr 2fr 1fr 1fr 1fr;
}
.cinema-navbar {
  text-align: center;
  background-color: #eae2d6;
  grid-column: 1/5;
  grid-row: 1/1;
}
.cinema-navbar li
{
  display: inline-block;
  padding: 5px;
  margin: 20px;
  list-style-type: none;
}
.cinema-navbar a {
  color: grey;
  font-size: 15px;
  text-decoration: none;
}
.cinema-navbar a:hover {
  color: black;
  transition: 0.4s;
}
.cinema-slider {
  background-color: #d5c3aa;
  grid-column: 1/4;
  grid-row: 2/4;
}
.cinema-content {
  background-color: #867666;
  }
  .cinema-movies {
    text-align: center;
    background-color: blanchedalmond;
    grid-column: 1/5;
  }
  .cinema-movies h3 {
    color: grey;
    font-size: 20px;
  }
  .cinema-footer{
    background-color: #e1b80d;
    grid-column: 1/5;
    grid-row: 5;
  }
/*
  @font-face {
    font-family: ;
    src: url();
  } */
</style>
