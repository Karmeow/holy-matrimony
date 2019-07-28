CABERFAE_COORDINATES = [-85.7206, 44.2447]
MT_PLEASANT_COORDINATES = [-84.7675, 43.5978]

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybWVvdyIsImEiOiJjanNqa2M0M2cxNWo5NDZxenJ2bmp0dnNvIn0.6IPLyJzZgD6hKT8keZKdoA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: MT_PLEASANT_COORDINATES,
  zoom: 6
});

var mapboxDirections = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  placeholderDestination: "1 Caberfae Lane Cadillac, Michigan 49601"
});

map.addControl(mapboxDirections, 'top-right');

map.on('load', function() {
  mapboxDirections.setDestination("1 Caberfae Lane Cadillac, Michigan 49601")
  map.loadImage('https://karabond.com/img/wedding_bitmoji.png', function(error, image) {

    function openPopup(e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup({
          className: 'popup'
        })
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    }

    if (error) throw error;
    map.addImage('wedding-bitmoji', image)
    map.addLayer({
      "id": "bitmoji",
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
        "icon-image": "wedding-bitmoji",
        "icon-size": 0.20
      }
    });

    map.on('mouseenter', 'bitmoji', function() {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'bitmoji', function() {
      map.getCanvas().style.cursor = '';
    });
  });
});
