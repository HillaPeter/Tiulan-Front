<template>
  <div align="center">
    
    <div class="img__wrap" id="container">
      <img class="img__img" :src="product.image" />
                  <p align="center" id="name" class="img__description">
                {{ product.name }}
              </p>
      <div class="img__description_layer">

        <table>
        
          <b-row>
            <b-col>
              <p align="center" id="desc">{{ product.description }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p align="center" id="desc">
                מחיר: {{ product.price }} ש"ח
              </p>
            </b-col>
          </b-row>
          <b-row>
            <div v-if="!orderList">
              <img
                v-on:click="updateBuy()"
                id="buy"
                src="https://img.icons8.com/ios/50/000000/buy.png"
              />
            </div>

            <div v-else-if="orderList">
              <img
                v-on:click="updateBuy()"
                id="buy"
                src="https://img.icons8.com/ios/50/000000/return-purchase.png"
                width="50px"
                height="50px"
              />
            </div>
          </b-row>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateBuy() {
      this.orderList = !this.orderList;
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 400px;
  height: 320px;
  background-color: rgba($color: #ffffff, $alpha: 0.8);
  overflow: hidden;
  border: 5px solid;
 
  border-image-source: linear-gradient(200deg,#571845 , #ff7c00, #fec400);
  border-image-slice: 1;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
img {
  width: 370px;
  height: 230px;

}
#buy {
  width: 40px !important;
  height: 40px !important;
  cursor: pointer;
  border: 2px solid;
  border-image-source: linear-gradient(200deg,#571845 , #ff7c00, #fec400);
  border-image-slice: 1;
}

table {
  width: 350px;
  height: 200px;
  align-items: center;
}
/* relevant styles */
.img__wrap {
  position: relative;
  height: 200px;
  width: 257px;
}

.img__description_layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(202, 247, 205, 0.9);
  // rgb(202, 247, 205);
  color:linear-gradient(#571845 , #ff7c00, #fec400);
  //   border: 5px solid;
  // border-image-source: linear-gradient(200deg,#571845 , #ff7c00, #fec400);
  // border-image-slice: 1;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
}

.img__wrap:hover .img__description_layer {
  visibility: visible;
  opacity: 1;
}

.img__description {
  padding-bottom: 10px;
  // transition: 0.2s;
  // transform: translateY(1em);
}

// .img__wrap:hover .img__description {
//   // transform: translateY(0);
// }
#name {
  font-size: 30px;
  font-weight: bold;
  background: -webkit-linear-gradient(#571845 35%, #ff7c00, #fec400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#desc {
  font-size: 25px;
}
button {
  width: 50px;
  height: 50px;
}
</style>
