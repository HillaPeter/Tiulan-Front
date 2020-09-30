<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <table align="center" id="table">
      <b-row>
        <b-col>
          <input style="text-align: right;" type="text" name="user_name" size="20"  maxlength="20" required>
        </b-col>
           <b-col>
         <br>
        </b-col>
        <b-col>
          <label>שם</label>
        </b-col>
        
      </b-row>
      <b-row>
        <br>
      </b-row>
       <b-row>
         <b-col>
          <input type="email" name="user_email" size="20" maxlength="20" required>
        </b-col>
           <b-col>
         <br>
        </b-col>
        <b-col>
          <label>אימייל</label>
        </b-col>
        
        <br>
      </b-row>
      <b-row>
        <br>
      </b-row>
      <b-row>
    <b-col>
          <textarea id="textarea" name="message" rows="5" cols="21" style="text-align: right;" required></textarea>
        </b-col>
         <b-col>
         <br>
        </b-col>
       
        <b-col>
          <label>הודעה</label>
        </b-col>
       
      </b-row>
      <b-row>
         <br>
        </b-row>
      <b-row>
         
        <b-col aria-colspan="2px">
          <input id="send" type="submit" value="שלח/י" size="3">
        </b-col>
         
      </b-row>
    </table>
  </form>
</template>

<script>

import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_scp9xym', 'YOUR_TEMPLATE_ID', e.target, 'Hilla')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
    // .table{
    //     color:	#467845;
    //     font-size: 20px;
    // }
    // label{
    //   color:	#467845;
    // }
    // // input{
    // //    color:	#000000;
    // //    font-size: 20px;
    // //     // font-weight: bold;
    // //      box-shadow: 0 0 5px #21971f;
    // // }
    // // textarea{
    // //   color:	#000000;
    // //    font-size: 20px;
    // //     // font-weight: bold;
    // //      box-shadow: 0 0 5px #21971f;
    // // }
  input:focus { 
    outline: none !important;
    border-color: #21971f;
    box-shadow: 0 0 10px #21971f;
}
textarea:focus { 
    outline: none !important;
    border-color: #21971f;
    box-shadow: 0 0 10px #21971f;
}

</style>