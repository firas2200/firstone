// class //
function MakeCarShop(name) {
  return {
    name,
    list: [],
    addNewCar: addNewCar,
    displayItems,
  };
}
// id generator //
function generateId() {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}
var id = generateId();

// factory function //

function addNewCar(model, brand, price, hp, year, rating, image, description) {
  var car = {
    model,
    brand,
    price,
    hp,
    year,
    rating,
    image,
    description,
    id: id(),
  };
  this.list.push(car);
  return car;
}
// Initiate the Shop //
var dreamCars = MakeCarShop("DreamShop");

// Creating Cars //

dreamCars.addNewCar(
  "I8",
  "BMW",
  150000,
  369,
  2024,
  5,
  [
    "https://www.autoscout24.be/cms-content-assets/7bKYOerWYv0JuWHG6ZqzEO-9003ed44fee38c4f6a9dcc50f42ea00c-BMW-i8_Coupe-2019-1600-01-1100.jpg",
    "https://imgcdn.zigwheels.us/large/gallery/interior/12/87/bmw-i8-dashboard-view-354252.jpg",
  ],
  "That combination churned out up to 369 combined system horsepower. However, it's expected that the 2024 BMW i8 will showcase a boost in power. From the new and improved turbocharged 4-cylinder engine, you can expect a combined system output somewhere north of 500 horsepower."
);

dreamCars.addNewCar(
  "RS7",
  "Audi",
  130000,
  621,
  2023,
  4,
  [
    "https://cdn.motor1.com/images/mgl/7MK27/s3/abt-audi-rs7-r.jpg",
    "https://images.carexpert.com.au/resize/3000/-/app/uploads/2020/12/2020-Audi-RS-7-Sportback-637805-1.jpeg",
  ],
  "Unleash the fury of the 4.0 liter TFSI® bi-turbo V8 engine producing up to 621 horsepower, which propels the RS 7 from 0-60 MPH in only 3.3 seconds with a maximum track speed of 190 MPH. Experience the euphoric exhaust note resonating from the available Audi Sport® exhaust system."
);

dreamCars.addNewCar(
  "Supra",
  "ToyoTa",
  300000,
  382,
  2021,
  5,
  [
    "https://www.businessnews.com.tn/images/album/IMGBN61026Toyota-GR-Supra-220120-1.jpg",
    "https://www.usnews.com/object/image/0000018e-586a-d0c6-a3df-fbfb7da10000/2024-grsupra-3l-premium-mt-int-021.jpg?update-time=1710880357401&size=responsiveGallery",
  ],
  "Similarly, the 2021 onwards model year engine was rated at 285 kW (382 hp) and 499 N⋅m (368 lb⋅ft), yet test results showed 289 kW (388 hp) and 571 N⋅m (421 lb⋅ft) at the wheels."
);
dreamCars.addNewCar(
  "G-Wagon",
  "Mercedes-Benz",
  300000,
  450,
  2022,
  5,
  [
    "https://www.sayarti.tn/wp-content/uploads/2021/05/mercedes-g-63-tunisie-970x577.jpg,",
    "https://edgecast-img.yahoo.net/mysterio/api/7A8CA2A12FEB2E9B565A83A623FB58EC06DD51C3B8C37E5F3A23684D06B2A803/autoblog/resizefill_w1200_h720;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/crop/2500x1409+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/3ac6e9e1e91362e8f3f31897dffd76ca/205946370/SSPIP78666.jpg",
  ],
  "Give Mercedes-Benz credit for orchestrating the G-class SUV's transition from one-time military transporter to revered luxury icon. The 2025 G550 shares a silhouette and all-terrain competence with the spartan 1979 original, but its six-figure price tag, highly customizable nature, and plethora of luxury gear push it close to the ultra-lux realm occupied by vehicles such as the Bentley Bentayga and the Mercedes-Maybach GLS600. The G's impressive off-road capability comes with a compromise to its on-road handling"
);
dreamCars.addNewCar("G-6X6", "Mercedes-Benz", 999000, 650, 2023, 5, [
  "https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2021-03/6059196f4aad3.jpg?itok=pP70z1tq",
  "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c1440-d720/content/medias/images/news/7000/100/90/NEWS_7198_1.jpg",
  "It is based on the frame of the military G 6x6. The engine is the AMG 5.5-litre V8 twin turbo, 544 hp (400 kW) and 760 Nm. A 7-speed automatic gearbox and a 2-speed transfer case bring this power to the portal axles."
]);
dreamCars.addNewCar(
  "chiron",
  "Buggatti",
  1000000,
  577,
  2024,
  10,
  ["https://news.dupontregistry.com/wp-content/uploads/2023/10/Bugatti-Chiron-Pur-Sport-Main.jpg","https://s.yimg.com/ny/api/res/1.2/JBgEm1PXdpTsafzgFqfEHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/robb_report_967/e1dce7ec331e88efb4050864d7a3c139"],
  "La Chiron Sport est mue par un W16 turbocompressé de 8 litres qui ne génère rien de moins que 1 479 chevaux. Dans le cas de la version au sommet de la gamme, la Chiron Super Sport 300+, la puissance s'élève 1 577 chevaux. Elle peut boucler le 0 à 100 km/h en à peine plus de 2 secondes."
)

function display(car) {
  var id = car.id ;
  $("#shop").append(`
  <div class = "car" id = car${id}>
  <h2 class="model" id=model${id}>${car.model} </h2>
  <img class="image" id="image${id}" data-src="${car.image[0]}" data-alt="${car.image[1]}" src="${car.image[0]}" alt="${car.image[1]}"/>
  <h3 class="brand" id=brand${id} > Brand : ${car.brand} </h3>
  <h4 class="price" id=price${id} > Price: ${car.price}$ </h4>
  <h5 class="hp" id=hp${id} >HorsePower: ${car.hp}</h5> 
  <h6 class="year" id=year${id}>Year:  ${car.year} </h6>
  <p class="description" id="description${id}">Description: <br/> ${car.description} </p>


  </div>
  `)
}
// displaying all of the items through iterations

function displayItems(){
  $("#shop").empty()
  for(var i =0;i <this.list.length; i++){
    console.log(this.list);
    display(this.list[i])
  }
}

dreamCars.displayItems()


// toggle image switch 
function toggleImage() {
  var $image = $(this);
  var originalSrc = $image.data("src");
  var altSrc = $image.data("alt");

  if ($image.attr("src") === originalSrc) {
    $image.attr("src", altSrc);
    $image.attr("alt", originalSrc);
  } else {
    $image.attr("src", originalSrc);
    $image.attr("alt", altSrc);
  }
}

// Event delegation to handle click on .image elements
$("#shop").on("click", ".image", toggleImage);
 //



// Adding a sort function for sorting cars by price descending

function sortCarsByPriceDesc() {
  this.list.sort(function(a, b) {
    return b.price - a.price;
  }); 
  displayItems.call(this); }

// Adding a click event listener for the sorting button
$("#sortPriceDesc").click(function() {
  sortCarsByPriceDesc.call(dreamCars);
});

$("#submit").on("click", function (e) {
  e.preventDefault(); 
  var value = $("#SB").val().toLowerCase();

  var filtered = dreamCars.list.filter(function (car) {
    return (
      car.model.toLowerCase().includes(value) ||
      car.brand.toLowerCase().includes(value) ||
      car.year.toString().includes(value) 
    );
  });

  // Clear and update the shop
  $("#shop").empty();
  filtered.forEach(function (car) {
    display(car);
  });
});