
<template>
    <div id="app">
        <div id="menu">
            <!-- <p id="title">Tiulan</p>
             -->
            <nav class="navbar navbar-expand-sm navbar-custom">
    <!-- <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                
                 <!-- <b-nav-item :to="{ name: 'About' }">אודות האתר</b-nav-item> -->
                <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
            </li>
           
        </ul>
        <ul class="navbar-nav">
         <li class="nav-item">
            <a href="https://api.whatsapp.com/send?phone=+972542677764" target="_blank"><img src="https://img.icons8.com/color/48/000000/whatsapp.png" height="50px" width="50px"/></a>
            </li>
            <li class="nav-item">
            <a href="https://www.facebook.com/GolanTravell" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" height="50px" width="50px"/></a>
            </li>
             <li class="nav-item">
            <a href="https://www.instagram.com/tiu.lan/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" height="50px" width="50px"/></a>
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
                 <b-nav-item class="nav-link" :to="{ name: 'Contact' }">צור קשר</b-nav-item>
            </li>
             <li class="nav-item">
                <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
                 <b-nav-item class="nav-link" :to="{ name: 'Recommand' }">המלצות</b-nav-item>
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" :to="{ name: 'About' }">ראשי</a> -->
                 <b-nav-item class="nav-link" :to="{ name: 'Rent' }">השכרת ציוד</b-nav-item>
            </li>
            <li class="nav-item">
                 <b-nav-item class="nav-link" :to="{ name: 'Main' }">ראשי</b-nav-item>
                <!-- <a class="nav-link" :to="{ name: 'About' }">אודות האתכג</a> -->
            </li>
           
        </ul>
         
         <img src="https://res.cloudinary.com/drrtdb9ya/image/upload/v1601232611/Tiulan/logonew_kl6m7c.png" width="170px" height="170px"/>
    
    </div>
</nav>

        </div>
        
        <router-view />
    </div>
</template>
<script>
    export default {
        name: "App",
        methods: {

        }
    };
</script>

<style lang="scss">
    @import "@/scss/form-style.scss";
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    #app {
        font-family: 'Varela Round', sans-serif;
        font-size: 20px;
        font-weight: bold;
        background-image: url("../back.jpg");
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #1B411A;
        font-size: 20px;
        font-weight: bold;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        text-align: center;

    }

//     .navbar-custom {
//     // background-color: #45e045;
// }
/* change the brand and text color */
// .navbar-custom .navbar-brand,
// .navbar-custom .navbar-text {
//     color: rgba(87, 212, 29, 0.8);
// }
/* change the link color */
.navbar-custom .navbar-nav .nav-link {
    color: #497B46;
}
/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link{
     color: #ca2323;
}
.navbar-custom .nav-item:hover .nav-link {
    color: #FEC400;
}

 .router-link-exact-active {
       color: #FF7C00 !important;
//    background-color: #FEC400;
   text-decoration-line: inherit;
   text-decoration-color: blue;
   cursor: pointer;
 }

</style>