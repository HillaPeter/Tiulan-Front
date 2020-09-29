<template>
  <div class="container">
    <br /><br />
    <table>
      <b-row>
        <b-col>
          <img
            src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601317414/Tiulan/WhatsApp_Image_2020-09-28_at_19.28.24_foljcd.jpg"
            width="550px"
            height="350px"
          />
        </b-col>
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

          <button>
            <router-link id="routerLink" :to="{ name: 'Reservation' }">
              להזמנה
            </router-link>
          </button>
        </b-col>
      </b-row>
    </table>

    <br />
  </div>
</template>

<style scoped>
#content {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  color: rgb(107, 106, 105);
}
ul {
  /* list-style-type: none; */
  direction: rtl;
  padding-left: 0px;
  padding-right: 20px;
}

#table {
  opacity: 0.8;
  background-color: #ecced0;
}
img {
  border-radius: 8px 8px 8px 8px;
}
#routerLink {
  text-decoration: none;
  color: #467845;
  font-size: 20px;
  font-weight: bold;
}
</style>
