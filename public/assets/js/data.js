var news = [

    {
        "image": "assets/img/news/news4cropped.jpeg",
        "heading":"2007-2011 Alumni: Elevating Education with Projectors, Fans, and Renovation",
        "disc": "The 2007-2011 batch of alumni has left a lasting impact on their alma mater by providing two projector screens, installing fans for enhanced comfort, and revitalizing classroom and lab blocks through painting, enriching the educational environment with their dedication and support" },
  {
    "image": "assets/img/news/news3cropped.jpeg",
    "heading": "2003-2007 Alumni: Empowering Education with a Multifunctional Printer",
    "disc": "The 2003-2007 batch of alumni has made a substantial contribution to their alma mater by providing a multifunctional printer. This generous gesture has enhanced the educational environment, demonstrating their unwavering support and dedication to the institution"  },
    {

      "image": "assets/img/news/news2cropped.jpeg",
      "heading": "2005-2009 Alumni: Enhancing College Resources",
      "disc": "The 2005-2009 alumni batch has made a notable impact by donating five clocks, three laser pointers, and two portable PA systems to their alma mater. These contributions have enhanced timekeeping, presentation capabilities, and communication within the college, exemplifying their dedication to improving the learning environment."
    },
    {
      "image": "assets/img/news/news1cropped.jpeg",
      "heading": "Empowering Education: 2006-2010 Alumni's Generous Donations",
      "disc": "The 2006-2010 batch of alumni has made valuable contributions to their alma mater, including a multifunctional printer, a UPS, a 100-capacity shoe rack, and a projector.These generous donations have enriched the college's resources, while also enhancing the learning experience for future generations." }]

var globals = [
  {
    "background": "assets/img/gecbhlogo.png",
    "profile": "assets/img/shamnahr.jpg",
    "name": "Shamna HR",
    "profession":"Professor and Dean of students affairs @ GECBH",
    "disc": "Managing academics and student life at GECBH for conducive learning environment and holistic student development.",
    "linkedin": "https://www.linkedin.com/in/shamna-hr-8ab178b6/"
  },

  {
    "background": "https://i.ibb.co/Cv7r535/download.png",
    "profile": "https://i.ibb.co/6Hm8v5T/1696217752295.jpg",
    "name": "Unnikrishnan",
    "profession": "SDE @ NVIDIA",
    "disc": "Developing frameworks and SDKs leveraging the parallel computing architecture on NVIDIA GPU platforms for intelligent multimedia analytics.",
    "linkedin": "https://www.linkedin.com/in/unnikrishnan-kizhakkemadam-sreekumar-4a3b8922/"
  },

  {
    "background": "https://i.ibb.co/WFJNcKP/download.png",
    "profile": "https://i.ibb.co/wsv2F6K/1689186449483.jpg",
    "name": "Vishak",
    "profession": "UX Engineer @ Microsoft",
    "disc": "Translating user-centered design principles into functional, interactive web applications and ensuring a smooth and engaging user experience",
    "linkedin": "https://www.linkedin.com/in/vishak-6a8387110/"
  }, 
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
var itemn = 0;
var active = ""
news.forEach(n => {
  if(itemn==0){active = "active"}else{active = ""}
  itemn++;
    // Append the HTML for each news item to the nelement variable
  html += `<div class="carousel-item col-md-4 ${active}">
                    <div class="card">
                      <img class="card-img-top img-fluid" src="${n.image}" alt="Card image cap">
                      <div class="card-body">
                        <h4 class="card-title">${n.heading}</h4>
                        <p class="card-text">${n.disc}</p>
                      </div>
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
                <div class="card profile-card-2 globalcard">
                  <div class="card-img-block">
                    <img class="img-fluid globalbg" src=${n.background} alt="Card image cap">
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
