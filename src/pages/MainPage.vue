<template>
  <div align="center">
    <table>
      <b-row>
        
        <b-col align="right">
          <p class="tab">
            השכרת ציוד שטח וקמפינג לטיולים, לים וכל פעילות בשטח
            <br /><br />
            חבילות מלאות לזוגות ורביעיות במחירים אטרקטיביים במיוחד
            <br /><br />
          </p>

          <h1 class="tab" id="header">
            טיו-לן מסדר אותך בשטח
          </h1>
        </b-col>
        <b-col>
          <b-carousel
            align="center"
            style=" width:700px; height: 480px !important;"
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601206998/Tiulan/%D7%A2%D7%A8%D7%95%D7%9A_-_%D7%90%D7%95%D7%94%D7%9C_awkupp.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299866/Tiulan/%D7%A9%D7%97%D7%9E%D7%98_exdi2m.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299865/Tiulan/119232033_152024263253908_952114860864678550_o_a2xnpq.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601310453/Tiulan/sdfsdf_nmioc2.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299867/Tiulan/%D7%A2%D7%A8%D7%95%D7%9A_%D7%AA%D7%9E%D7%95%D7%A0%D7%94_gd6t6y.jpg"
            ></b-carousel-slide>
            <!-- <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299869/Tiulan/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_-_%D7%99%D7%99%D7%9F_bl87ua.jpg"
            ></b-carousel-slide> -->
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601310687/Tiulan/WhatsApp_Image_2020-09-28_at_19.29.46_cto4cr.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601310571/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_1_p6dws4.jpg"
            ></b-carousel-slide>
             <b-carousel-slide
              style=" width:700px; height: 480px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601310579/Tiulan/WhatsApp_Image_2020-09-28_at_19.27.10_brea5n.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  // border-radius: 20px 20px 20px 20px;
  // border: 5px solid #571845 ;
  border: 5px solid;
  border-image-source: linear-gradient(200deg,#571845 , #ff7c00, #fec400);
  border-image-slice: 1;
   //#571845 10%,
  //   #ff7c00 30%,
  //   #fec400 60%,
}
.tab {
  margin-right: 60px;
  margin-left: 0px;
  margin-top: 100px;
  text-width: bold;
}
#header{
    font-size: 60px;
  font-weight: bold;
  background: -webkit-linear-gradient(#571845 50%, #ff7c00, #fec400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
