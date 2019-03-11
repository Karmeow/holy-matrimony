CABERFAE_COORDINATES = [-85.7206, 44.2447]
MT_PLEASANT_COORDINATES = [-84.7675, 43.5978]

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybWVvdyIsImEiOiJjanNqa2M0M2cxNWo5NDZxenJ2bmp0dnNvIn0.6IPLyJzZgD6hKT8keZKdoA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: MT_PLEASANT_COORDINATES,
  zoom: 6
});


map.on('load', function() {
  var myImage = new Image(100, 100);
  myImage.src = './img/wedding_bitmoji.png';
  myImage.onload = () => {
    console.log(myImage)
    map.addImage('wedding-bitmoji', myImage)
    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": CABERFAE_COORDINATES
            }
          }]
        }
      },
      "layout": {
        "icon-image": "wedding-bitmoji"
      }
    });
  };
});
// var myImage = new Image(100, 100);
// myImage.src = './img/wedding_bitmoji.png';
// map.addImage('wedding_bitmoji', myImage);
// map.addLayer({
//   "id": "points",
//   "type": "symbol",
//   "source": {
//     "type": "geojson",
//     "data": {
//       "type": "FeatureCollection",
//       "features": [{
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": CABERFAE_COORDINATES
//         }
//       }]
//     }
//   },
//   "layout": {
//     "icon-image": "wedding_bitmoji",
//     "icon-size": 1.0
//   }
// });
