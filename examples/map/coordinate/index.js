
var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  centerCross : true,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

map.on('moveend zoomend', refresh);

refresh();

function refresh() {

  var center = map.getCenter(),
    containerPoint = map.coordinateToContainerPoint(center).round(),
    viewPoint = map.coordinateToViewPoint(center).round();

  document.getElementById('coordinate').innerHTML = '<pre>' + [
    'Center : ',
    'Coordinate : ' + center.x + ',' + center.y,
    'ContainerPoint :' + containerPoint.x + ',' + containerPoint.y,
    'ViewPoint :' + viewPoint.x + ',' + viewPoint.y
  ].join('\n') + '</pre>';
}
