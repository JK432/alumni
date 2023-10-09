var news = [
    {
        "image":"https://i.ibb.co/jzcTMVn/about-mission.jpg",
        "heading":"heading3",
        "disc":"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {

        "image": "https://i.ibb.co/jzcTMVn/about-mission.jpg",
        "heading": "heading",
        "disc": "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
        "image": "https://i.ibb.co/jzcTMVn/about-mission.jpg",
        "heading": "heading",
        "disc": "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }]
// <img src="https://i.ibb.co/8gfDsBp/1669059096968.jpg" alt="1669059096968" border="0">
  // < img src = "https://i.ibb.co/WFJNcKP/download.png" alt = "download" border = "0" >
  // < img src = "https://i.ibb.co/Cv7r535/download.png" alt = "download" border = "0" >
  // < img src = "https://i.ibb.co/MntxpcT/nvidia-logo-e1596209633824-920x613.webp" alt = "nvidia-logo-e1596209633824-920x613" border = "0" >
var globals = [
  {
    "background": "https://i.ibb.co/Cv7r535/download.png",
    "profile": "https://i.ibb.co/6Hm8v5T/1696217752295.jpg",
    "name": "Unnikrishnan",
    "profession":"SDE @ NVIDIA",
    "disc": "Developing frameworks and SDKs leveraging the parallel computing architecture on NVIDIA GPU platforms for intelligent multimedia analytics.",
    "linkedin": "https://www.linkedin.com/in/unnikrishnan-kizhakkemadam-sreekumar-4a3b8922/"
  },

  // <img src="https://i.ibb.co/wsv2F6K/1689186449483.jpg" alt="1689186449483" border="0"></img>
  {
    "background": "https://i.ibb.co/WFJNcKP/download.png",
    "profile": "https://i.ibb.co/wsv2F6K/1689186449483.jpg",
    "name": "Vishak",
    "profession": "UX Engineer @ Microsoft",
    "disc": "Translating user-centered design principles into functional, interactive web applications and ensuring a smooth and engaging user experience",
    "linkedin": "https://www.linkedin.com/in/vishak-6a8387110/"
  }, 
  // <img src="https://i.ibb.co/Pw6NrH8/1586633120198.jpg" alt="1586633120198" border="0"></img>
  // <img src="https://i.ibb.co/S7BnH0F/Amazon-Logo-Font-1-scaled-1.webp" alt="Amazon-Logo-Font-1-scaled-1" border="0"></img>
  {
    "background": "https://i.ibb.co/S7BnH0F/Amazon-Logo-Font-1-scaled-1.webp",
    "profile": "https://i.ibb.co/Pw6NrH8/1586633120198.jpg",
    "name": "Jeena Thampi",
    "profession": "SDE @ Amazon",
    "disc": "Software Development Engineer (SDE) specializing in designing, coding, and maintaining high-performance software systems.",
    "linkedin": "https://www.linkedin.com/in/jeena-thampi-61a350b3/"
  }]


var nelement = document.getElementById("newscontent").innerHTML;

var html = ``;
news.forEach(n => {
    // Append the HTML for each news item to the nelement variable
    html += `<div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div class="about-col">
                  <div class="img">
                    <img src=${n.image} alt="" class="img-fluid">
                    <!-- <div class="icon"><i class="bi bi-bar-chart"></i></div> -->
                  </div>
                  <h2 class="title"><a href="#">${n.heading}</a></h2>
                  <p>
               ${n.disc}
                  </p>
                </div>
              </div>`;
});

// Set the nelement's innerHTML to the generated HTML
document.getElementById("newscontent").innerHTML = nelement + html;


var gelement = document.getElementById("globals").innerHTML;

var html = ``;
globals.forEach(n => {
  // Append the HTML for each news item to the nelement variable
  html += `<div class="col-md-4">
                <div class="card profile-card-2">
                  <div class="card-img-block">
                    <img class="img-fluid" src=${n.background} alt="Card image cap">
                  </div>
                  <div class="card-body pt-5">
                    <img src=${n.profile} alt="profile-image" class="profile" />
                    <h5 class="card-title">${n.name}</h5>
                    <h6>${n.profession}</h6>
                    <p class="card-text">${n.disc}</p>
                    <div class="icon-block"><a href=${n.linkedin}><i class="fa fa-brands fa-linkedin" style="color: #20ee65;"></i></a></div>
                  </div>

                </div>
                <!-- <p class="mt-3 w-100 float-left text-center"><strong>Social Profile Card</strong></p> -->
              </div>`;
});

document.getElementById("globals").innerHTML = gelement + html;



var talks = [
  {
    "image": "https://i.ibb.co/j5Vx5HJ/rajeev2-Ignited-Mind.png",
    "name": "RAJEEV P A",
    "designation": "SENIOR MANAGER @ UCO BANK",
    "quotes": "Freedom to explore diverse academic and extracurricular opportunities, played a significant role in shaping me into a more self-reliant and open-minded individual both personally and professionally",
  },
  {
    "image": "https://i.ibb.co/gRxz5Qj/remya-daniel.jpg",
    "name": "Remya Daniel",
    "designation": "Business Architect @ Zafin software",
    "quotes": "The IT curriculum, seminars, programming labs, supportive teachers, and collaborative classmates all contributed to my personal and professional growth by fostering a strong foundation in technology, problem-solving skills, and a sense of camaraderie within the IT community",
  },
  // <img src="https://i.ibb.co/gdcfvvH/Visakh-R.jpg" alt="Visakh-R" border="0"></img>
  {
    "image": "https://i.ibb.co/gdcfvvH/Visakh-R.jpg",
    "name": "Visakh R",
     "designation": "Assistant Professor @ GECBH",
    "quotes": "The tenure at our esteemed college has served as a crucible, catalyzing the development and maturation of my leadership acumen, profoundly influencing both my individual odyssey and my vocational trajectory.",
  },
  {
    "image": "https://i.ibb.co/wwR8gcx/1695381886780.jpg",
    "name": "Girish Krishna Warrier",
    "designation": "Technical Lead @ HnR Block",
    "quotes": "During my tenure at our college, an environment that emphasized personal accountability and self- sufficiency, I experienced significant growth in my leadership abilities, leading to a profound impact ",
  },




]



var telement = document.getElementById("talksal").innerHTML;

var html = ``;
talks.forEach(n => {
  // Append the HTML for each news item to the nelement variable
  html += ` <div class="swiper-slide">
              <div class="testimonial-item">
                <img src=${n.image} class="testimonial-img" alt="">
                <h3>${n.name} </h3>
                <h4>${n.designation} </h4>
                <p>
                  <img src="assets/img/quote-sign-left.png" class="quote-sign-left" alt="">
                  ${n.quotes} 
                  <img src="assets/img/quote-sign-right.png" class="quote-sign-right" alt="">
                </p>
              </div>
            </div><!-- End testimonial item -->
`;
});

document.getElementById("talksal").innerHTML = telement + html;
