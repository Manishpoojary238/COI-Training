export class Map {
  constructor(coords) {
      this.coordinates = coords;
      this.render(this.coordinates);
  }
  render(){
      document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

      const map = new ol.Map({
          target: 'map',
          layers: [
              new ol.layer.Tile({
                  source: new ol.source.OSM()
              })
          ],
          view: new ol.View({
              center: ol.proj.fromLonLat([this.coordinates.lng, this.coordinates.lat]),
              zoom: 16
          })
      });
      // const layer = new ol.layer.Vector({
      //   source: new ol.source.Vector({
      //     features: [
      //       new ol.Feature({
      //         geometry: new ol.geom.Point(ol.proj.fromLonLat([coords.lng, coords.lat])),
      //       }),
      //     ],
      //   }),
      // });
      // map.addLayer(layer);
  }
}