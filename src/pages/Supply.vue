<template>
  <b-container id="contain">
    <div align="center">
      <table>
        <b-row id="col" v-for="p in products" :key="p.id">
          <ProductComponent class="ProductComponent" :product="p" />
          <br />
        </b-row>
      </table>
    </div>
  </b-container>
</template>

<script>
import ProductComponent from "../components/ProductComponent.vue";
export default {
  name: "Reservation",
  components: {
    ProductComponent,
  },
  data() {
    return {
      products: Object,
    };
  },
  created() {
//TODO: try catch the response..
//  const response = await this.axios.get(
//                        "address of the request"
//                    );

//     {
//     id:response._id,
//     name:response.name,
//     price:response.price,
//     amount:response.amounr,
//     description:response.description
// image: cloudinary??
// }

    let cooking={
    id:"12345",
    name: "ערכת בישול",
    price:25,
    amount:5,
    description:"סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
    image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
}


    let tent4people = {
      id:"12345678",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299865/Tiulan/119232033_152024263253908_952114860864678550_o_a2xnpq.jpg",
      name: "אוהל אותנטיק ל4 אנשים",
      amount: 2,
      price: 30,
      description:
        "אוהל ל4 נפתח ברגע",
    };

    let data = [];
    data.push(cooking);
    data.push(tent4people);

    console.log(data);

    this.products = data;
  },
};
</script>

<style lang="scss" scoped>
#col{
color:#571845;
font-size: 25px;

}</style>
