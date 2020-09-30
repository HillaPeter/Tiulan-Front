<template>
  <div align="center">
    <div class="img__wrap" id="container">
      <img class="img__img" :src="product.image" />
      <div class="img__description_layer">
        <table>
          <b-row>
            <b-col>
              <p align="center" id="name" class="img__description">{{ product.name }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p align="center" id="desc">{{ product.description }}</p></b-col
            >
          </b-row>
          <b-row>
            <b-col> <p align="center" id="desc">{{ product.price }} :מחיר</p></b-col>
           
          </b-row>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 500px;
  height: 300px;
  background-color: rgba(73, 123, 70, 0.2);
  border-color: rgb(73, 123, 70);
  border-style: solid;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
img {
  width: 480px;
  height: 280px;
}
table {
  width: 480px;
  height: 280px;
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
  background: rgba(255, 255, 255, 0.8);
  color: rgb(0, 0, 0);
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
  transition: 0.2s;
  transform: translateY(1em);
}

.img__wrap:hover .img__description {
  transform: translateY(0);
}
#name {
  font-size: 40px;
}
#desc {
  font-size: 18px;
}
</style>
