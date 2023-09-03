
let trips = [];
let populateTrips = (tempTrips) => {};
$(document).ready(function(){


  var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "e393448b15da7625f92dc3c2067ccc4b";

  var latitude = 44;
  var longitude = 20;

  var apiEndpoint = apiUrl + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

  $(".title").text("Welcome to Pearl Serenity");

  $.ajax({
      url: apiEndpoint,
      method: "GET",
      success: function(response) {
          var weatherData = response;
          var weatherInfo = "Temperature: " + (weatherData.main.temp - 273.15).toFixed(2) + "°C";
          $("#weather-info").text(weatherInfo);
      },
      error: function(error) {
          console.error("Error fetching weather data:", error);
      }
  });

  var cart = [];



// let trip = {
    // duration: '',
    // destination:'',
    // theme:'',
    // price:''
// }

trips = [
    {
        duration: 12,
        originPort: 'Durban',
        destinationPort: 'Durban',
        destination:'Pearl Quest',
        theme:'Southern Coast of Africa',
        price: 10000,
        imageURL:"assets/DV4.JPG",
        information:'This cruise itinerary takes you to destinations along the southeastern coast of Africa, exploring areas with rich pearl diving history and culture. You will have opportunities to learn about pearls, visit local markets, and immerse yourself in the beauty of the Indian Ocean.'
    },
    {
        duration: 10,
        originPort: 'Durban',
        destinationPort: 'Cape Town',
        destination:'Tropical Fish Expedition ',
        theme:'Exotic Destiations in the Indian Ocean',
        price:25000,
        imageURL:"assets/DV4_1.JPG",
        information:'This cruise itinerary takes you to some of the most beautiful and exotic destinations in the Indian Ocean, renowned for their diverse and colorful marine life. You will have ample opportunities for snorkeling, diving, and witnessing various species of tropical fish, rays, and other fascinating marine creatures.'
    },
    {
        duration: 8,
        originPort: 'Durban',
        destinationPort: 'Cape Town',
        destination:'Retro Cruise',
        theme:'iconic cities and regions around the world that were significant during the various time periods',
        price:30000,
        imageURL:"assets/DV 5.jpg",
        information:'Embark on a time-traveling adventure with the "Retro Cruise." Sail through iconic eras from the 1950s in Havana to the grunge scene of 90s Seattle, and wrap up in London, celebrating the turn of the century. Immerse yourself in themed destinations, activities, and music for an unforgettable journey through time.'
    },
    {
        duration: 7,
        originPort: 'Durban',
        destinationPort: 'Durban',
        destination:'Exotic Islands of the Coral Triangle',
        theme:'Coral Reef Exploration',
        price:35000,
        imageURL:"assets/DV 6.jpg",
        information:'Embark on a 7-night Coral Theme Cruise to the breathtaking islands of the Coral Triangle, a paradise for marine enthusiasts. Immerse yourself in the captivating underwater world with a focus on coral reef exploration. Snorkel or dive among vibrant coral formations, discovering a diverse array of marine life. Our expert marine biologists will guide you through educational sessions, helping you understand the delicate ecosystem.'
    },
    {
        duration: 5,
        originPort: 'Durban',
        destinationPort: 'Cape Town',
        destination:'Los Angeles to Baja California',
        theme:'Glamorous Hollywood Experience',
        price:50000,
        imageURL:"assets/DV 7.jpg",
        information:'Experience the allure of the silver screen on our 5-night Glamorous Hollywood Cruise, taking you from Los Angeles to the stunning shores of Baja California. Step into the world of old Hollywood glamour with red carpet events, movie screenings under the stars, and elegant gala dinners. Immerse yourself in the iconic entertainment history of Los Angeles through guided tours of film studios and celebrity homes'
    },
    {
        duration: 7,
        originPort: 'Durban',
        destinationPort: 'Cape Town',
        destination:'Caribbean Adventure',
        theme:' Family Fun Cruise',
        price:15000,
        imageURL:"assets/Dv 8.PNG",
        information:'Embark on a 7-night Family Fun Cruise to the enchanting Caribbean, where excitement awaits every member of the family. Our cruise is designed to create cherished memories with loved ones, featuring themed kids clubs, interactive games, and engaging family-friendly activities. Explore pristine beaches, partake in snorkeling adventures, and relish quality time together. With the special offer of children under 12 sailing free with two paying adults'
    },

    {
      duration: 14,
      originPort: 'Miami',
      destinationPort: 'Key West, Florida',
      destination: 'Literary Voyage',
      theme: 'Reading Theme Cruise',
      price: 15000,
      imageURL: 'assets/DV 10.jpg',
      information:
        'Embark on a 2-week Literary Voyage designed for book lovers. Immerse yourself in the world of literature with onboard book clubs, author meet-and-greets, and literary-themed excursions. Explore the charming Key West, known for its rich literary history, and enjoy reading under the Florida sun.',
    },
      {
        duration: 14,
        originPort: 'Sydney, Australia',
        destinationPort: 'Auckland, New Zealand',
        destination: 'Down Under Discovery',
        theme: 'Australasian Exploration',
        price: 28000,
        imageURL: 'assets/DV 11.jpg',
        information:
          'Discover the wonders of Australasia on this 2-week cruise. Explore the stunning landscapes, vibrant cities, and unique wildlife of Australia and New Zealand. Experience the rich culture and natural beauty of this diverse region.',
      },
      {
        duration: 11,
        originPort: 'Miami',
        destinationPort: 'Cozumel, Mexico',
        destination: 'Mayan Mysteries',
        theme: 'Ancient Civilizations Expedition',
        price: 16500,
        imageURL: 'assets/DV 12.jpg',
        information:
          'Embark on a journey to uncover the mysteries of the Mayan civilization. Visit archaeological sites, learn about ancient rituals, and enjoy the beautiful beaches of Cozumel while delving into the history and culture of the Mayan people.',
      },
      {
        duration: 12,
        originPort: 'Vancouver, Canada',
        destinationPort: 'Anchorage, Alaska',
        destination: 'Alaskan Wilderness Adventure',
        theme: 'Wildlife and Nature Exploration',
        price: 20000,
        imageURL: 'assets/DV 13.jpg',
        information:
          'Immerse yourself in the breathtaking beauty of the Alaskan wilderness. Cruise through fjords, witness majestic glaciers, and spot diverse wildlife, including bears, whales, and eagles, as you explore the rugged landscapes of Alaska.',
      },
      {
        duration: 6,
        originPort: 'Barcelona, Spain',
        destinationPort: 'Athens, Greece',
        destination: 'Mediterranean Odyssey',
        theme: 'Historical and Cultural Journey',
        price: 14000,
        imageURL: 'assets/DV 14.jpg',
        information:
          'Sail through the Mediterranean and explore the rich history and culture of ancient civilizations. Visit iconic cities, archaeological sites, and enjoy Mediterranean cuisine while experiencing the charm of this historic region.',
      },
      
      
    ];
    


function generateCard(trip, index) {
  return `
    <div class="col-4">
      <div class="card">

        <img src="${trip.imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${trip.destination}</h4>
          <p class="card-text" id="priceText">R${trip.price}</p>
          <p class="card-text mt-4 description" id="descriptionText_${index}">
            - ${trip.theme} <br>
            - ${trip.duration} Days <br>
            - ${trip.information}
          </p>
          <p style.color="blue" class="more-info">more info</p>
          <div class="book-container">
          <input type="number" placeholder="number of tickets">
          <button class="btn btn-primary add-button">Book</button>
        </div>
        </div>
      </div>
    </div>
  `;
}

basket = [];
if(localStorage.getItem('basket') == null){
  localStorage.setItem('basket', JSON.stringify([]));
}else{
  basket = JSON.parse(localStorage.getItem('basket'));
}

function addToBooking(event) {
  const card = $(this).closest('.card');
  const price = card.find("#priceText").text();
  const tempPrice = price.split("R")[1];
  const numOfTickets = card.find("input").val();
  const cost = numOfTickets * tempPrice;
  const id = Math.floor(Math.random() * 1000000);
  const trip = {
    tripCode: id,
    ticketQuantity: numOfTickets,
    cost: cost
  };
  basket.push(trip);
  localStorage.setItem('basket', JSON.stringify(basket));
}

populateTrips = (tempTrips) => {
  const container = $('.row.pt-5');
  container.empty();
  tempTrips.forEach(function (trip, index) {
    const cardHTML = generateCard(trip, index);
    container.append(cardHTML);
  });

  $(".more-info").click(function () {

    const descriptionId = $(this).closest('.card').find(".description").attr("id");
    
    if($(this).text() == "less-info"){
      $(this).text("more-info")
    }else{
    $(this).text("less-info")
    }
    
    $("#" + descriptionId).toggle();
    $(this).closest('.card').find(".card-img-top").toggleClass("small");

    $(this).closest('.card').find(".book-container").toggle();

  });

  
  $('.add-button').on('click', addToBooking);

  $(".description").hide();
}




function populateBasket() {
  basket.forEach(function(cruise) {
    var html = '<div class="item-container">' +
              '<h3>Cruise Information:</h3>' +
              '<p>Trip Code: ' + cruise.tripCode + '</p>' +
              '<p>Ticket Quantity: ' + cruise.ticketQuantity + '</p>' +
              '<p>Cost: ' + cruise.cost + '</p>' +
              '<button class="btn btn-primary remove-button">remove</button>' +
              '</div>';

    $('.items').append(html);
  });
  $('.remove-button').on('click', removeItem);
  let total = 0;
  basket.forEach(function(cruise) {
    total += cruise.cost;
  });

  $('#basket-total').text("Total: R" + total);
}

function removeItem(event) {
  $(this).closest('.item-container').remove();
  const tripCode = $(this).closest('.item-container').find('p:first').text().split(' ')[2];
  basket = basket.filter(cruise => cruise.tripCode != tripCode);
  localStorage.setItem('basket', JSON.stringify(basket));
}







$(document).ready(function () {
  populateTrips(trips);
  populateBasket();
});




});


function DurationFilter(start,end){
  const tempTrips = trips.filter(trip => (trip.duration >= start && trip.duration <= end));
  populateTrips(tempTrips);
}

function PriceFilter(min, max){
  const tempTrips = trips.filter(trip => (trip.price >= min && trip.price <= max));
  populateTrips(tempTrips);
}

function roundTripFilter(filter){
  let tempTrips = null;
  if(filter == ' both'){
    tempTrips = tempTrips;
  }else if(filter == 'yes'){
    tempTrips = trips.filter(trip => (trip.originPort === trip.destinationPort));
  }else{
    tempTrips = trips.filter(trip => (trip.originPort !== trip.destinationPort));
  }
  
  populateTrips(tempTrips);
}

function rowBoatSpecial(YorN){
  let tempTrips = null;
  if(YorN == true){
    tempTrips = trips.sort((a,b) => (a.price > b.price) ? 1 : -1).slice(0,5);
  }
  else if(YorN == false){
    tempTrips = trips;
  }
  populateTrips(tempTrips);
}

function checkout(){
  $('#successModal').modal('show');
}

function removeAll(){
  localStorage.clear();
  $('.items').empty();
  $('#basket-total').text("Total: R0");
}