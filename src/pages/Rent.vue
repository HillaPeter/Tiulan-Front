<template>
  <div class="container">
    <br /><br />
    <table>
      <b-row>
        <b-col>
          <ul align="right">
            <li>ההשכרה הינה ל-24 שעות</li>
            <li>הנחה של 30% למזמינים לילה שני ושלישי</li>
            <li>המחירים הינם בש"ח</li>
            <li>
              בעת ההשכרה יש לחתום על הסכם שכירות, להביא פקדון שיקבע מראש ות.ז
            </li>
            <li>ערכה מלאה כוללת את כל הציוד שמופיע בתפריט</li>
          </ul>
          <br />
<br /><br /><br />
          <!-- <button align="center"> -->
            <router-link id="routerLink" :to="{ name: 'Catalog' }">
              להזמנה
            </router-link>
          <!-- </button> -->
        </b-col>
        <b-col>
          <img
            src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601299869/Tiulan/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_-_%D7%99%D7%99%D7%9F_bl87ua.jpg"
            width="550px"
            height="350px"
          />
        </b-col>
      </b-row>
    </table>

    <br />
  </div>
</template>

<style scoped>

ul {
  /* list-style-type: none; */
  direction: rtl;
  padding-left: 0px;
  padding-right: 65px;
}

#table {
  opacity: 0.8;
  background-color: #ecced0;
}
img {
  border-radius: 20px 20px 20px 20px;
  border: 5px solid #571845;
}
#routerLink {
  text-decoration: none;
  color: #571845;
  font-size: 25px;
  font-weight: bold;
  border-radius: 2px 2px 2px 2px;
  border: 2px solid #571845;


}

button {
  border-radius: 20px 20px 20px 20px;
  border: 2px solid #571845;
  background: #ffffff;
}

</style>
