<template>
  <b-container id="contain">
    <div align="center">
      <table>
        <b-row id="table" alignment="right">
          <b-col>
            <DateComponent class="DateComponent" />
          </b-col>
          <b-col>
            :בחר/י תאריכים להשכרה
          </b-col>
        </b-row>
        <b-row id="col" v-for="p in products" :key="p.id">
          <b-col id="row" v-for="p1 in p" :key="p1.id">
            <ProductComponent class="ProductComponent" :product="p1" />
          </b-col>
        </b-row>
      </table>
    </div>
  </b-container>
</template>

<script>
import ProductComponent from "../components/ProductComponent.vue";
import DateComponent from "../components/DateComponent.vue";
export default {
  name: "Reservation",
  components: {
    ProductComponent,
    DateComponent,
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

    let cooking = {
      id: "12345",
      name: "ערכת בישול",
      price: 25,
      amount: 5,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
    };

    let cooking1 = {
      id: "123451",
      name: "ערכת בישול",
      price: 25,
      amount: 5,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
    };

    let cooking2 = {
      id: "123452",
      name: "ערכת בישול",
      price: 25,
      amount: 5,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
    };

    let cooking3 = {
      id: "123453",
      name: "ערכת בישול",
      price: 25,
      amount: 5,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
    };

    let cooking4 = {
      id: "123454",
      name: "ערכת בישול",
      price: 25,
      amount: 5,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
    };

    let tent4people = {
      id: "12345678",
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299865/Tiulan/119232033_152024263253908_952114860864678550_o_a2xnpq.jpg",
      name: "אוהל אותנטיק ל4 אנשים",
      amount: 2,
      price: 30,
      description: "אוהל ל4 נפתח ברגע",
    };

    let data = [];
    let data1 = [];
    let data2 = [];

    data1.push(cooking);
    data1.push(tent4people);
    data1.push(cooking3);
    // let cooking1 = cooking;
    // let cooking2 = cooking;
    // data1.push(cooking2);
    let tent4people1 = tent4people;
    let tent4people2 = tent4people;
    data2.push(cooking1);
    data2.push(cooking2);
    data2.push(cooking4);
    // data2.push(tent4people2);

    data.push(data1);
    data.push(data2);
    console.log(data);

    this.products = data;
  },
};
</script>

<style lang="scss" scoped>
#col {
  color: #571845;
  font-size: 25px;
  width: 1300px;
}
#table {
  color: #571845;
  font-size: 25px;
  align-content: center;
}
// #row{
//   width: 50px;
// }
</style>
