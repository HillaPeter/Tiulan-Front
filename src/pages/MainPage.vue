<template>
  <div align="center">
    <table>
      <b-row>
        <b-col>
          <b-carousel
            align="center"
            style=" width:700px; height: 500px !important;"
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601206998/Tiulan/%D7%A2%D7%A8%D7%95%D7%9A_-_%D7%90%D7%95%D7%94%D7%9C_awkupp.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299866/Tiulan/%D7%A9%D7%97%D7%9E%D7%98_exdi2m.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299865/Tiulan/119232033_152024263253908_952114860864678550_o_a2xnpq.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299862/Tiulan/119437041_152024309920570_7618206156853352439_o_tl5fhj.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299867/Tiulan/%D7%A2%D7%A8%D7%95%D7%9A_%D7%AA%D7%9E%D7%95%D7%A0%D7%94_gd6t6y.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              style=" width:700px; height: 500px !important;"
              img-src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299869/Tiulan/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_-_%D7%99%D7%99%D7%9F_bl87ua.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col align="right">
          <p class="tab">
            השכרת ציוד שטח וקמפינג לטיולים, לים וכל פעילות בשטח
            <br /><br />
            חבילות מלאות לזוגות ורביעיות במחירים אטרקטיביים במיוחד
            <br /><br />
          </p>

          <h1 class="tab">
            טיו-לן מסדר אותך בשטח
          </h1>
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
.aboutMe {
  text-align: center;

  font-family: "Fira Sans Extra Condensed", sans-serif;
  color: #585858;
  font-size: 20px;
}
.carousel {
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;
}
.tab {
  margin-right: 120px;
  margin-left: 0px;
}
</style>
