var defaultZoom = 7.1;

var mapView = new ol.View ({
    center: ol.proj.fromLonLat([7, 43.5]),
    zoom: defaultZoom
});

var map = new ol.Map ({
    target: 'map',
    view: mapView
});

var noneTile = new ol.layer.Tile({
    title: 'None',
    type: 'base',
    visible: false
});

var osmTile = new ol.layer.Tile ({
    title: 'OpenStreetMap',
    visible: true,
    type: 'base',
    source: new ol.source.OSM()
});

// map.addLayer(osmTile);
var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    fold: true,
    layers: [osmTile, noneTile]
});

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_6 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom6', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_6 = new ol.layer.Tile({ source: sourceWMS_6 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_7 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom7', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_7 = new ol.layer.Tile({ source: sourceWMS_7 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_8 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom8', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_8 = new ol.layer.Tile({ source: sourceWMS_8 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_9 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom9', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_9 = new ol.layer.Tile({ source: sourceWMS_9 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_10 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom10', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_10 = new ol.layer.Tile({ source: sourceWMS_10 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_11 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom11', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_11 = new ol.layer.Tile({ source: sourceWMS_11 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_12 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom12', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_12 = new ol.layer.Tile({ source: sourceWMS_12 });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_13 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/Nice/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'zoom13', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_13 = new ol.layer.Tile({ source: sourceWMS_13 });

// map.addLayer(SeismeTile);

// var overlayGroup = new ol.layer.Group({
//     title: 'Overlays',
//     fold: true,
//     layers: [SeismeTile_s3, SeismeTile_p3, SeismeTile_s2, SeismeTile_p2, SeismeTile_s, SeismeTile_p]
// });

// map.addLayer(overlayGroup);

var zoomDiv = document.getElementById('zoom');
zoomDiv.innerHTML = 'Zoom : ' + defaultZoom;

map.on("moveend",  function () {
    zoomDiv.innerHTML = 'Zoom : ' + map.getView().getZoom().toFixed(2);
    if(mapView !=parseInt(map.getView().getZoom()) ){
        mapView =parseInt(map.getView().getZoom());
        
    if(parseFloat(map.getView().getZoom()) <= 8 && parseFloat(map.getView().getZoom()) > 7) {
        map.addLayer(couche_8);
        map.removeLayer(couche_7);
        map.removeLayer(couche_9);

    }else if(parseFloat(map.getView().getZoom()) <= 6) {
        map.addLayer(couche_6);
        map.removeLayer(couche_7);

    }else if(parseFloat(map.getView().getZoom()) <= 7 && parseFloat(map.getView().getZoom()) > 6) {
        map.addLayer(couche_7);
        map.removeLayer(couche_6);
        map.removeLayer(couche_8);

    }else if(parseFloat(map.getView().getZoom()) <= 9 && parseFloat(map.getView().getZoom()) > 8) {
        map.addLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_8);

    }else if(parseFloat(map.getView().getZoom()) <= 10 && parseFloat(map.getView().getZoom()) > 9) {
        map.addLayer(couche_10);
        map.removeLayer(couche_9);
        map.removeLayer(couche_11);

    }else if(parseFloat(map.getView().getZoom()) <= 11 && parseFloat(map.getView().getZoom()) > 10) {
        map.addLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_10);

    }else if(parseFloat(map.getView().getZoom()) <= 12 && parseFloat(map.getView().getZoom()) > 11) {
        map.addLayer(couche_12);
        map.removeLayer(couche_11);
        map.removeLayer(couche_13);

    }else if(parseFloat(map.getView().getZoom()) > 12) {
        map.addLayer(couche_13);
        map.removeLayer(couche_12);
        }
    }
})

var layerSwitcher = new ol.control.LayerSwitcher({
     activationMode: 'click',
     startActive: false,
     groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);

function toggleLayer(eve) {
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function(element){
        if (lyrname == element.get('title')){
            element.setVisible(checkedStatus);
        }
    })
};

var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate){return ol.coordinate.format(coordinate,'{y} , {x}', 6);}
});

map.addControl(mousePosition);

var scaleControl = new ol.control.ScaleLine({
    bar: true,
    text: true,

});

map.addControl(scaleControl);

// var zoomDiv = document.getElementById('zoom');
// zoomDiv.innerHTML = 'Zoom : ' + defaultZoom;

// map.on('moveend', function() {
//     zoomDiv.innerHTML = 'Zoom : ' + mapViewmap.getView().getZoom().toFixed(2);
// })

