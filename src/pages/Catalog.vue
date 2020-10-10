<template>
  <b-container id="contain">
    <div align="center">
      <table>
          <b-row id="col" alignment="right" >
                :בחר/י תאריכים להשכרה
                <br>

                <br>
        </b-row>

        <b-row id="col">
          <DateComponent class="DateComponent" />
        </b-row>
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
    let cooking = {
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg",
      name: "ערכת בישול",
      amount: 5,
      price: 25,
      description:
        "סיר, מחברת, צלחות, קערות, סכום, תבלינים, קרש חיתוך, כוסות, כוסות יין ועוד",
    };

    let cleaning = {
      image:
        "https://res.cloudinary.com/drrtdb9ya/image/upload/v1601311617/Tiulan/WhatsApp_Image_2020-09-28_at_19.32.03_escozi.jpg",
      name: "ערכת היגיינה",
      amount: 10,
      price: 25,
      description:
        "נייר טואלט וסופג, מגבונים, שקיות זבל, סבון, אלכוג'ל, סקוצ'ים, עזרה ראשונה, אלוורה ועוד",
    };

    let data = [];
    data.push(cooking);
    data.push(cleaning);

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
