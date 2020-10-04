<template>
  <div id="app">
    <div id="menu">
      <!-- <p id="title">Tiulan</p>
             -->
      <nav class="navbar navbar-expand-sm navbar-custom">
        <!-- <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button> -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <b-nav-item :to="{ name: 'About' }">אודות האתר</b-nav-item> -->
              <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                href="https://api.whatsapp.com/send?phone=+972542677764"
                target="_blank"
                ><img
                  src="https://img.icons8.com/color/48/000000/whatsapp.png"
                  height="50px"
                  width="50px"
              /></a>
            </li>
            <li class="nav-item">
              <a href="https://www.facebook.com/Tiulantravel" target="_blank"
                ><img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  height="50px"
                  width="50px"
              /></a>
            </li>
            <li class="nav-item">
              <a href="https://www.instagram.com/tiu.lan/" target="_blank"
                ><img
                  src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                  height="50px"
                  width="50px"
              /></a>
            </li>

            <b-nav-item class="nav-link" :to="{ name: 'Order' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#fec400">
                    <path
                      d="M86,6.88c-32.25818,0 -58.48,26.22181 -58.48,58.48v12.33563c-4.70962,-0.9053 -7.43433,-1.60611 -7.50484,-1.62594c-5.46272,-1.55488 -11.17355,1.63916 -12.73875,7.095c-0.75336,2.6488 -0.43457,5.43606 0.90703,7.8475c1.23129,2.21569 3.20841,3.82997 5.57656,4.66953v5.40188c0,24.54254 16.20496,53.6382 40.82985,63.77437c0.4154,0.17212 0.86051,0.26114 1.31015,0.26203h60.2c0.44965,-0.00089 0.89476,-0.08991 1.31015,-0.26203c24.62809,-10.13598 40.82985,-39.22898 40.82985,-63.77437v-5.40188c5.07442,-1.80326 7.97772,-7.24429 6.4836,-12.49687c-0.75336,-2.6488 -2.49997,-4.84965 -4.91141,-6.19469c-2.40456,-1.3416 -5.1823,-1.66351 -7.8139,-0.92047c-0.07496,0.02095 -2.80232,0.71949 -7.51828,1.62594v-12.33563c0,-32.25819 -26.22182,-58.48 -58.48,-58.48zM86,13.76c28.54038,0 51.6,23.05962 51.6,51.6v13.51813c-11.16481,1.75682 -28.47171,3.68187 -51.6,3.68187c-23.13011,0 -40.43759,-1.92551 -51.6,-3.68187v-13.51813c0,-28.54038 23.05962,-51.6 51.6,-51.6zM20.64,97.40172c3.30824,0.70004 7.86028,1.5407 13.76,2.39188c0.00202,4.47278 0.41336,9.1537 1.23625,13.88094c-6.31216,-0.90406 -10.67799,-1.76331 -13.91453,-2.46578c-0.68427,-3.45082 -1.08172,-6.8598 -1.08172,-10.12515zM151.36,97.40172v3.68188c0,3.26597 -0.39758,6.67406 -1.08172,10.12515c-3.23774,0.70255 -7.60182,1.56195 -13.91453,2.46578c0.82289,-4.72724 1.23423,-9.40815 1.23625,-13.88094c5.89952,-0.85098 10.45219,-1.69227 13.76,-2.39188zM41.30687,100.68719c5.05343,0.60475 10.78248,1.14401 17.20672,1.57891c0.03608,4.65006 0.18504,9.25569 0.57781,13.80031c-5.99787,-0.40269 -11.46845,-0.89584 -16.2325,-1.45125c-0.96362,-4.76297 -1.48964,-9.4781 -1.55203,-13.92797zM130.69313,100.68719c-0.06239,4.44986 -0.58842,9.165 -1.55203,13.92797c-4.7647,0.5553 -10.23442,1.04867 -16.2325,1.45125c0.39277,-4.54461 0.54173,-9.15025 0.57781,-13.80031c6.42421,-0.43486 12.1534,-0.97426 17.20672,-1.57891zM65.38687,102.64906c5.34005,0.26518 11.03412,0.4339 17.17313,0.48375v13.77344c-5.96952,-0.0485 -11.52668,-0.20899 -16.71625,-0.4636c-0.33551,-4.43641 -0.43187,-9.04496 -0.45688,-13.79359zM106.61313,102.64906c-0.02501,4.74863 -0.12137,9.35718 -0.45688,13.79359c-5.18876,0.25449 -10.74826,0.41511 -16.71625,0.4636v-13.77344c6.13901,-0.04985 11.83308,-0.21859 17.17313,-0.48375zM23.64328,118.59937c3.59764,0.70673 7.81774,1.44434 13.58531,2.21719c1.27305,4.87033 2.98237,9.69229 5.13312,14.32437c-4.54673,-0.54208 -8.58775,-1.09405 -11.95266,-1.65281c-2.8264,-4.75988 -5.11635,-9.80692 -6.76578,-14.88875zM148.35672,118.59937c-1.65067,5.08656 -3.94278,10.13876 -6.7725,14.90219c-3.35913,0.55582 -7.4169,1.1137 -11.94594,1.65281c2.15316,-4.63544 3.85906,-9.4636 5.13312,-14.33781c5.76756,-0.77285 9.98764,-1.51045 13.58531,-2.21719zM44.59906,121.70344c4.61146,0.50122 9.66252,0.95855 15.29187,1.31688c0.71624,4.72792 1.78453,9.38014 3.35266,13.9414c-4.58979,-0.2561 -8.82384,-0.57089 -12.75891,-0.9339c-0.31954,-0.59219 -0.65744,-1.16932 -0.96078,-1.77375c-2.00818,-4.00147 -3.64725,-8.24372 -4.92484,-12.55063zM127.40094,121.70344c-1.27759,4.30691 -2.91666,8.54916 -4.92484,12.55063c-0.30245,0.60266 -0.64222,1.17654 -0.96078,1.76703c-3.94755,0.36467 -8.15178,0.68352 -12.75891,0.94062c1.56813,-4.56126 2.63642,-9.21348 3.35266,-13.9414c5.62934,-0.35832 10.68043,-0.81566 15.29187,-1.31688zM66.58281,123.36297c4.99395,0.23165 10.2987,0.37783 15.97719,0.42328v13.77344c-4.35717,-0.03498 -8.51337,-0.12565 -12.45656,-0.27547c-1.70711,-4.4959 -2.82125,-9.12466 -3.52062,-13.92125zM105.41719,123.36297c-0.69937,4.79659 -1.81351,9.42535 -3.52062,13.92125c-3.94117,0.14972 -8.10182,0.24723 -12.45656,0.28219v-13.78015c5.67848,-0.04546 10.98325,-0.19163 15.97719,-0.42328zM35.71015,141.24156c3.15409,0.44118 6.7447,0.85121 10.58203,1.24969c3.70879,6.02246 8.31123,11.42532 13.78688,15.74875h-3.26531c-8.07434,-3.43186 -15.27723,-9.56312 -21.1036,-16.99844zM136.28985,141.24156c-5.82623,7.43481 -13.02789,13.56652 -21.1036,16.99844h-3.26531c5.47564,-4.32343 10.07808,-9.72629 13.78688,-15.74875c3.85142,-0.39961 7.41888,-0.80731 10.58203,-1.24969zM55.09375,143.32437c3.47977,0.2676 7.12396,0.50746 11.03219,0.69203c2.33033,4.86803 5.34626,9.61688 9.27188,14.2236h-2.32469c-7.15256,-3.07013 -13.15711,-8.36119 -17.97938,-14.91563zM116.90625,143.32437c-4.82227,6.55443 -10.82681,11.84549 -17.97938,14.91563h-2.32469c3.92711,-4.60847 6.94119,-9.36034 9.27188,-14.23031c3.90448,-0.18435 7.55536,-0.41818 11.03219,-0.68531zM98.66485,144.27172c-2.32424,4.2033 -5.35453,8.29613 -9.22485,12.30875v-12.14078c3.18126,-0.02512 6.25733,-0.08058 9.22485,-0.16797zM73.34187,144.27844c2.96447,0.08729 6.04036,0.13614 9.21813,0.16125v12.14078c-3.86786,-4.01008 -6.8945,-8.10154 -9.21813,-12.30203z"
                    ></path>
                  </g>
                </g>
              </svg>
            </b-nav-item>

            <li class="nav-item">
              <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
              <b-nav-item class="nav-link" :to="{ name: 'Contact' }"
                >צור קשר</b-nav-item
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
              <b-nav-item class="nav-link" :to="{ name: 'Recommand' }"
                >המלצות</b-nav-item
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
              <b-nav-item class="nav-link" :to="{ name: 'Rent' }"
                >השכרת ציוד</b-nav-item
              >
            </li>
              <li class="nav-item">
              <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
              <b-nav-item class="nav-link" :to="{ name: 'About' }"
                >?מי אנחנו</b-nav-item
              >
            </li>
            <li class="nav-item">
              <b-nav-item class="nav-link" :to="{ name: 'Main' }"
                >ראשי</b-nav-item
              >
              <!-- <a class="nav-link" :to="{ name: 'About' }">אודות האתכג</a> -->
            </li>
          </ul>

          <img
            src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601314959/Tiulan/imageedit_5_7722011839_gchlwh.png"
            width="170px"
            height="170px"
          />
        </div>
      </nav>
    </div>
    <br />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {},
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
#app {
  font-family: "Varela Round", sans-serif;
  font-size: 20px;
  font-weight: bold;
  //   background-image: url("../back.jpg");
  // background-color: #571845 !important;
  // background-image: linear-gradient(110deg, #571845 40%, #FEC400 70%);
  // background-image: linear-gradient(
  //   50deg,
  //   #571845 10%,
  //   #ff7c00 30%,
  //   #fec400 60%,
  //    #FFFFFF 85%,
  // );

  background-image: linear-gradient(
    #571845 14%,
    #ffffff 21%,
    #fec400 30%,
    #e47105 95%
  );

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #571845;
  font-size: 20px;
  // font-weight: bold;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;
}
#menu {
  // background:#FEC400;
  height: 165px;
}

//     .navbar-custom {
//     // background-color: #45e045;
// }
/* change the brand and text color */
// .navbar-custom .navbar-brand,
// .navbar-custom .navbar-text {
//     color: rgba(87, 212, 29, 0.8);
// }
/* change the link color */

.navbar-custom .navbar-nav .nav-link {
  color: #fec400;
}

.navbar-custom .nav-item:hover .nav-link {
  color: #e47105;
}

.router-link-exact-active {
  color: #ffffff !important;
  text-decoration: underline !important;
  cursor: pointer;
}

svg{
  padding-bottom: 15px;
}
</style>
