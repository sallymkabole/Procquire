<template>
  <v-card class="d-flex flex-column" height="100%" width="100%" flat>
    <v-layout column class="">
      
      <v-card width="100%" flat>
        <v-layout column style="width: 100%; margin: 0 auto">
          <v-layout class="ma-2" row wrap style="stat-row display:flex;">
            <v-flex xs3 md3 lg3 sm3>
              <v-card width="95%" class="stat">
                <h1 class="display-2 green--text">05</h1>

                <h3 class="font-weight-bold">Approved</h3>
              </v-card>
            </v-flex>
            <v-flex xs3 md3 lg3 sm3>
              <v-card width="95%" class="stat"
                ><h1 class="display-2 orange--text">01</h1>

                <h3 class="font-weight-bold">Pending</h3></v-card
              >
            </v-flex>
            <v-flex xs3 md3 lg3 sm3>
              <v-card width="95%" class="stat"
                ><h1 class="red--text display-2">01</h1>

                <h3 class="black--text font-weight-bold">Rejected</h3></v-card
              >
            </v-flex>
            <v-flex xs3 md3 lg3 sm3>
              <v-card width="95%" class="stat"
                ><h1 class="display-2">07</h1>

               <h3 class="black--text font-weight-bold">Total Orders</h3></v-card
              >
            </v-flex>
          </v-layout>
          <v-layout column style="width: 100%; margin: 0 auto">
            <h2 class="ma-2">Quality</h2>
            <v-data-table
              :headers="headers"
              item-key="name"
              :items="items"
              :items-per-page="10"
              class="elevation-1"
              hide-default-footer
            >
            </v-data-table>
          </v-layout>
          <v-layout column style="width: 100%; margin: 0 auto">
            <h2 class="ma-2">Return Cost Analysis</h2>
            <v-card
              class="mx-auto text-center d-flex justify-center align-center"
              color="rgb(76,175,80)"
              width="100%"
            >
              <div class="line-chart-block block">
                  <h2 class='titular white--text'>By Order <span>*1000</span></h2>
                <div class="line-chart">
                  <div class="grafico">
                    <ul class="eje-y">
                      <li data-ejeY="30"></li>
                      <li data-ejeY="20"></li>
                      <li data-ejeY="10"></li>
                      <li data-ejeY="0"></li>
                    </ul>
                    <ul class="eje-x">
                      <li>Apr</li>
                      <li>May</li>
                      <li>Jun</li>
                    </ul>
                    <span data-valor="25">
                      <span data-valor="8">
                        <span data-valor="13">
                          <span data-valor="5">
                            <span data-valor="23">
                              <span data-valor="12">
                                <span data-valor="15">
                                </span></span></span></span></span></span
                    ></span>
                  </div>
                </div>
                <ul class="time-lenght horizontal-list">
                  <li><a class="time-lenght-btn" href="#14">Week</a></li>
                  <li><a class="time-lenght-btn" href="#15">Month</a></li>
                  <li><a class="time-lenght-btn" href="#16">Year</a></li>
                </ul>
                
              </div>
                <div class="bar-chart-block block">
    <h2 class='titular white--text'>By Order <span>*1000</span></h2>
    <div class='grafico bar-chart'>
       <ul class='eje-y'>
         <li data-ejeY='60'></li>
         <li data-ejeY='45'></li>
         <li data-ejeY='30'></li>
         <li data-ejeY='15'></li>
         <li data-ejeY='0'></li>
       </ul>
       <ul class='eje-x'>
         <li data-ejeX='37'><i>Bran1</i></li>
         <li data-ejeX='56'><i>Bran2</i></li>
         <li data-ejeX='25'><i>Bran3</i></li>
         <li data-ejeX='18'><i>Bran4</i></li>
         <li data-ejeX='45'><i>Bran5</i></li>
         <li data-ejeX='50'><i>Bran6</i></li>
         <li data-ejeX='33'><i>Bran7</i></li>
       </ul>
    </div>
    <ul class="time-lenght horizontal-list">
                  <li><a class="time-lenght-btn" href="#14">Week</a></li>
                  <li><a class="time-lenght-btn" href="#15">Month</a></li>
                  <li><a class="time-lenght-btn" href="#16">Year</a></li>
                </ul>
  </div>
            </v-card>
          </v-layout>
        </v-layout>
      </v-card>
    </v-layout>
  </v-card>
</template><script>
export default {
  name: "Niya",
  methods: {
    getColor(status) {
      if (status === "rejected") return "red";
      else if (status === "approved") return "green";
      else if (status === "pending") return "orange";
      else return "yellow";
    },
  },

  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
      selected: [],
      headers: [
        {
          text: "Branch",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: " Ordered(Ksh)", value: "ordered" },
        { text: "% Returned", value: "returned" },
        { text: "Defect Rate", value: "Drate" },

        { text: "Quality Score", value: "Qscore" },
      ],
      items: [
        {
          name: "Ngong Road",
          ordered: "25M",
          returned: "0.102%",
          Drate: "1.87%",
          Qscore: "89.0%",
        },
        {
          name: "Nairobi West",
          ordered: "15M",
          returned: "0.102%",
          Drate: "1.87%",
          Qscore: "74.0%",
        },
        {
          name: "Moi Ave.",
          ordered: "5M",
          returned: "0.202%",
          Drate: "0.87%",
          Qscore: "79.0%",
        },

        {
          name: "Rongai ",
          ordered: "25M",
          returned: "0.102%",
          Drate: "1.87%",
          Qscore: "89.0%",
        },
        {
          name: "Kisumu Central",
          ordered: "25M",
          returned: "0.102%",
          Drate: "1.87%",
          Qscore: "89.0%",
        },
        {
          name: "Mombasa Town",
          ordered: "25M",
          returned: "0.102%",
          Drate: "1.87%",
          Qscore: "89.0%",
        },
      ],
    };
  },
};
</script>
<style scoped>
.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 110px;

  border-radius: 8px;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding-left: 0;
}

a:hover {
  text-decoration: underline;
}

.scnd-font-color {
  color: #9099b7;
}
.titular {
  display: block;
  line-height: 60px;
  margin: 0;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.horizontal-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.horizontal-list li {
  float: left;
}
.block {
  margin: 25px 25px 0 0;
  background: #394264;
  border-radius: 5px;
  float: left;
  width: 300px;
  overflow: hidden;
}
/******************************************** LEFT CONTAINER *****************************************/

.menu-box {
  height: 360px;
}

.donut-chart-block {
  overflow: hidden;
}
.donut-chart-block .titular {
  padding: 10px 0;
}
.os-percentages li {
  width: 75px;
  border-left: 1px solid #394264;
  text-align: center;
  background: #50597b;
}
.os {
  margin: 0;
  padding: 10px 0 5px;
  font-size: 15px;
}
.os.ios {
  border-top: 4px solid #e64c65;
}
.os.mac {
  border-top: 4px solid #11a8ab;
}
.os.linux {
  border-top: 4px solid #fcb150;
}
.os.win {
  border-top: 4px solid #4fc4f6;
}
.os-percentage {
  margin: 0;
  padding: 0 0 15px 10px;
  font-size: 25px;
}
.line-chart-block,
.bar-chart-block {
  height: 400px;
  width: 45%;
}
.line-chart {
  height: 60%;
  background: #11a8ab;
}
.time-lenght {
  padding-top: 22px;
  padding-left: 38px;
  overflow: hidden;
  margin: 0;
}
.time-lenght-btn {
  display: block;
  width: 70px;
  line-height: 32px;
  background: #4caf50;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin-right: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.time-lenght-btn:hover {
  text-decoration: none;
  background: #e64c65;
}
.month-data {
  padding-top: 28px;
}
.month-data p {
  display: inline-block;
  margin: 0;
  padding: 0 25px 15px;
  font-size: 16px;
}
.month-data p:last-child {
  padding: 0 25px;
  float: right;
  font-size: 15px;
}
.increment {
  color: #e64c65;
}

/******************************************
↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
ESTILOS PROPIOS DE LOS GRÄFICOS
↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 
GRAFICO LINEAL
******************************************/

.grafico {
  padding: 2rem 1rem 1rem;
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  font-size: 80%;
}
.grafico span {
  display: block;
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  height: 0;
  border-top: 2px solid;
  transform-origin: left center;
}
.grafico span > span {
  left: 100%;
  bottom: 0;
}
[data-valor="25"] {
  width: 75px;
  transform: rotate(-45deg);
}
[data-valor="8"] {
  width: 24px;
  transform: rotate(65deg);
}
[data-valor="13"] {
  width: 39px;
  transform: rotate(-45deg);
}
[data-valor="5"] {
  width: 15px;
  transform: rotate(50deg);
}
[data-valor="23"] {
  width: 69px;
  transform: rotate(-70deg);
}
[data-valor="12"] {
  width: 36px;
  transform: rotate(75deg);
}
[data-valor="15"] {
  width: 45px;
  transform: rotate(-45deg);
}

[data-valor]:before {
  content: "";
  position: absolute;
  display: block;
  right: -4px;
  bottom: -3px;
  padding: 4px;
  background: #fff;
  border-radius: 50%;
}
[data-valor="23"]:after {
  content: "+" attr(data-valor) "%";
  position: absolute;
  right: -2.7rem;
  top: -1.7rem;
  padding: 0.3rem 0.5rem;
  background: #50597b;
  border-radius: 0.5rem;
  transform: rotate(45deg);
}
[class^="eje-"] {
  position: absolute;
  left: 0;
  bottom: 0rem;
  width: 100%;
  padding: 1rem 1rem 0 2rem;
  height: 80%;
}
.eje-x {
  height: 2.5rem;
}
.eje-y li {
  height: 25%;
  border-top: 1px solid #777;
}
[data-ejeY]:before {
  content: attr(data-ejeY);
  display: inline-block;
  width: 2rem;
  text-align: right;
  line-height: 0;
  position: relative;
  left: -2.5rem;
  top: -0.5rem;
}
.eje-x li {
  width: 33%;
  float: left;
  text-align: center;
}

/******************************************
GRAFICO CIRCULAR PIE CHART
******************************************/
.donut-chart {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 100%;
}
p.center-date {
  background: #394264;
  position: absolute;
  text-align: center;
  font-size: 28px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 130px;
  height: 130px;
  margin: auto;
  border-radius: 50%;
  line-height: 35px;
  padding: 15% 0 0;
}
.center-date span.scnd-font-color {
  line-height: 0;
}
.recorte {
  border-radius: 50%;
  clip: rect(0px, 200px, 200px, 100px);
  height: 100%;
  position: absolute;
  width: 100%;
}
.quesito {
  border-radius: 50%;
  clip: rect(0px, 100px, 200px, 0px);
  height: 100%;
  position: absolute;
  width: 100%;
  font-family: monospace;
  font-size: 1.5rem;
}
#porcion1 {
  transform: rotate(0deg);
}

#porcion1 .quesito {
  background-color: #e64c65;
  transform: rotate(76deg);
}
#porcion2 {
  transform: rotate(76deg);
}
#porcion2 .quesito {
  background-color: #11a8ab;
  transform: rotate(140deg);
}
#porcion3 {
  transform: rotate(215deg);
}
#porcion3 .quesito {
  background-color: #4fc4f6;
  transform: rotate(113deg);
}
#porcionFin {
  transform: rotate(-32deg);
}
#porcionFin .quesito {
  background-color: #fcb150;
  transform: rotate(32deg);
}
.nota-final {
  clear: both;
  color: #4fc4f6;
  font-size: 1rem;
  padding: 2rem 0;
}
.nota-final strong {
  color: #e64c65;
}
.nota-final a {
  color: #fcb150;
  font-size: inherit;
}
/**************************
BAR-CHART
**************************/
.grafico.bar-chart {
  background: #3468af;
  padding: 0 1rem 2rem 1rem;
  width: 100%;
  height: 60%;
  position: relative;
  color: #fff;
  font-size: 80%;
}
.bar-chart [class^="eje-"] {
  padding: 0 1rem 0 2rem;
  bottom: 1rem;
}
.bar-chart .eje-x {
  bottom: 0;
}
.bar-chart .eje-y li {
  height: 20%;
  border-top: 1px solid #fff;
}
.bar-chart .eje-x li {
  width: 14%;
  position: relative;
  text-align: left;
}
.bar-chart .eje-x li i {
  transform: rotatez(-45deg) translatex(-1rem);
  transform-origin: 30% 60%;
  display: block;
}
.bar-chart .eje-x li:before {
  content: "";
  position: absolute;
  bottom: 1.9rem;
  width: 70%;
  right: 5%;
  box-shadow: 3px 0 rgba(0, 0, 0, 0.1), 3px -3px rgba(0, 0, 0, 0.1);
}
.bar-chart .eje-x li:nth-child(1):before {
  background: #e64c65;
  height: 570%;
}
.bar-chart .eje-x li:nth-child(2):before {
  background: #11a8ab;
  height: 900%;
}
.bar-chart .eje-x li:nth-child(3):before {
  background: #fcb150;
  height: 400%;
}
.bar-chart .eje-x li:nth-child(4):before {
  background: #4fc4f6;
  height: 290%;
}
.bar-chart .eje-x li:nth-child(5):before {
  background: #ffed0d;
  height: 720%;
}
.bar-chart .eje-x li:nth-child(6):before {
  background: #f46fda;
  height: 820%;
}
.bar-chart .eje-x li:nth-child(7):before {
  background: #15bfcc;
  height: 520%;
}

</style>