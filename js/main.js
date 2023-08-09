
let trips = [];
let populateTrips = (tempTrips) => {};
$(document).ready(function(){



// let trip = {
    // duration: '',
    // destination:'',
    // theme:'',
    // price:''
// }

trips = [
    {
        duration: 12,
        destination:'Pearl Quest',
        theme:'Southern Coast of Africa',
        price:'R10 000',
        imageURL:"assets/DV4.JPG",
        information:'This cruise itinerary takes you to destinations along the southeastern coast of Africa, exploring areas with rich pearl diving history and culture. You will have opportunities to learn about pearls, visit local markets, and immerse yourself in the beauty of the Indian Ocean.'
    },
    {
        duration: 10,
        destination:'Tropical Fish Expedition ',
        theme:'Exotic Destiations in the Indian Ocean',
        price:'R25 000',
        imageURL:"assets/DV4_1.JPG",
        information:'This cruise itinerary takes you to some of the most beautiful and exotic destinations in the Indian Ocean, renowned for their diverse and colorful marine life. You will have ample opportunities for snorkeling, diving, and witnessing various species of tropical fish, rays, and other fascinating marine creatures.'
    },
    {
        duration: 8,
        destination:'Retro Cruise',
        theme:'iconic cities and regions around the world that were significant during the various time periods',
        price:'R30 000',
        imageURL:"assets/DV 5.jpg",
        information:'Embark on a time-traveling adventure with the "Retro Cruise." Sail through iconic eras from the 1950s in Havana to the grunge scene of 90s Seattle, and wrap up in London, celebrating the turn of the century. Immerse yourself in themed destinations, activities, and music for an unforgettable journey through time.'
    },
    {
        duration: 7,
        destination:'Exotic Islands of the Coral Triangle',
        theme:'Coral Reef Exploration',
        price:'R35 000',
        imageURL:"assets/DV 6.jpg",
        information:'Embark on a 7-night Coral Theme Cruise to the breathtaking islands of the Coral Triangle, a paradise for marine enthusiasts. Immerse yourself in the captivating underwater world with a focus on coral reef exploration. Snorkel or dive among vibrant coral formations, discovering a diverse array of marine life. Our expert marine biologists will guide you through educational sessions, helping you understand the delicate ecosystem.'
    },
    {
        duration: 5,
        destination:'Los Angeles to Baja California',
        theme:'Glamorous Hollywood Experience',
        price:'R50 000 (Plane ticket included)',
        imageURL:"assets/DV 7.jpg",
        information:'Experience the allure of the silver screen on our 5-night Glamorous Hollywood Cruise, taking you from Los Angeles to the stunning shores of Baja California. Step into the world of old Hollywood glamour with red carpet events, movie screenings under the stars, and elegant gala dinners. Immerse yourself in the iconic entertainment history of Los Angeles through guided tours of film studios and celebrity homes'
    },
    {
        duration: 7,
        destination:'Caribbean Adventure',
        theme:' Family Fun Cruise',
        price:'R15 000',
        imageURL:"assets/Dv 8.PNG",
        information:'Embark on a 7-night Family Fun Cruise to the enchanting Caribbean, where excitement awaits every member of the family. Our cruise is designed to create cherished memories with loved ones, featuring themed kids clubs, interactive games, and engaging family-friendly activities. Explore pristine beaches, partake in snorkeling adventures, and relish quality time together. With the special offer of children under 12 sailing free with two paying adults'
    },
]

function generateCard(trip, index) {
  return `
    <div class="col-4">
      <div class="card">
        <img src="${trip.imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${trip.destination}</h4>
          <p class="card-text" id="priceText">${trip.price}</p>
          <p class="card-text mt-4 description" id="descriptionText_${index}">
            - ${trip.theme} <br>
            - ${trip.duration} Days <br>
            - ${trip.information}
          </p>
        </div>
      </div>
    </div>
  `;
}

populateTrips = (tempTrips) => {
  const container = $('.row.pt-5');
  container.empty();
  tempTrips.forEach(function (trip, index) {
    const cardHTML = generateCard(trip, index);
    container.append(cardHTML);
  });

  $(".card").click(function () {
    const descriptionId = $(this).find(".description").attr("id");
    $("#" + descriptionId).toggle();
    $(this).find(".card-img-top").toggleClass("small");
  });

  $(".description").hide();
}

$(document).ready(function () {
  populateTrips(trips);
});



});


function DurationFilter(start,end){
  const tempTrips = trips.filter(trip => (trip.duration >= start && trip.duration <= end));
  populateTrips(tempTrips);
}