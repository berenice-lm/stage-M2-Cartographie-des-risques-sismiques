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

map.addLayer(baseGroup);

/* Déclaration de la source de la couche en format WMS */
var BDU = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': 'degat_batiment_dep_u', 'TILED': true},
    serverType: 'geoserver',
    visible: true
});
var BDU = new ol.layer.Tile({source : BDU})


var BDU = new ol.layer.Tile ({
    title: "dégâts matériels importants",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_dep_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var BDS = new ol.layer.Tile ({
    title: "dégâts matériels non prioritaires",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_dep_s', 'TILED': true},
        serverType: 'geoserver',
    })
});
BDS.setVisible(!BDS.getVisible());

/* Déclaration de la couche WMS */
var couche_8 = new ol.layer.Group({
    layers: [BDS, BDU]
});

var BCU = new ol.layer.Tile ({
    title: "dégâts matériels importants",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_com_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var BCS = new ol.layer.Tile ({
    title: "dégâts matériels non prioritaires",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_com_s', 'TILED': true},
        serverType: 'geoserver',
    })
});
BCS.setVisible(!BCS.getVisible());

/* Déclaration de la couche WMS */
var couche_10 = new ol.layer.Group({
    layers: [BCS, BCU]
});

var BIU = new ol.layer.Tile ({
    title: "dégâts matériels importants",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_iris_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var BIS = new ol.layer.Tile ({
    title: "dégâts matériels non prioritaires",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_iris_s', 'TILED': true},
        serverType: 'geoserver',
    })
});
BIS.setVisible(!BIS.getVisible());

/* Déclaration de la couche WMS */
var couche_11 = new ol.layer.Group({
    layers: [BIS, BIU]
});

// map.addLayer(SeismeTile);

// var overlayGroup = new ol.layer.Group({
//     title: 'Overlays',
//     fold: true,
//     layers: [SeismeTile_s3, SeismeTile_p3, SeismeTile_s2, SeismeTile_p2, SeismeTile_s, SeismeTile_p]
// });

// map.addLayer(overlayGroup);

map.addLayer(BDU);

var zoomDiv = document.getElementById('zoom');
zoomDiv.innerHTML = 'Zoom : ' + defaultZoom;

map.on("moveend",  function () {
    zoomDiv.innerHTML = 'Zoom : ' + map.getView().getZoom().toFixed(2);
    if(mapView !=parseInt(map.getView().getZoom()) ){
        mapView =parseInt(map.getView().getZoom());
        
    if(parseFloat(map.getView().getZoom()) <= 8 && parseFloat(map.getView().getZoom()) > 7) {
        map.addLayer(prefDEP_layer);
        map.addLayer(prefREG_layer);
        map.addLayer(eau1_layer);
        map.addLayer(eau2_layer);
        map.addLayer(train1_layer);
        map.addLayer(route1_layer);
        map.addLayer(BDU);
        map.removeLayer(BCU);
        map.removeLayer(BIU);
        map.removeLayer(intensite_layer);
        map.removeLayer(clusterREG_layer);
        map.removeLayer(region_layer);
        map.removeLayer(souspref_layer);
        map.removeLayer(route2_layer);
        map.removeLayer(eau2_layer);

    }else if(parseFloat(map.getView().getZoom()) <= 6) {
        map.addLayer(region2_layer);
        map.addLayer(intensite_layer);
        map.removeLayer(region_layer);
        map.removeLayer(eau1_layer);
        map.removeLayer(prefREG_layer);
        map.removeLayer(prefDEP_layer);
        map.removeLayer(BDU);
        

    }else if(parseFloat(map.getView().getZoom()) <= 7 && parseFloat(map.getView().getZoom()) > 6) {
        map.addLayer(train1_layer);
        map.addLayer(eau1_layer);
        map.addLayer(route1_layer);
        map.addLayer(prefREG_layer);
        map.addLayer(intensite_layer);
        map.addLayer(region_layer);
        map.removeLayer(BDU);
        map.removeLayer(BCU);
        map.removeLayer(BIU);
        map.removeLayer(prefDEP_layer);
        map.removeLayer(clusterREG_layer);
        map.removeLayer(region2_layer);

    }else if(parseFloat(map.getView().getZoom()) <= 9 && parseFloat(map.getView().getZoom()) > 8) {
        map.addLayer(eau3_layer);
        map.addLayer(route2_layer);
        map.addLayer(train2_layer);
        map.addLayer(clusterREG_layer);
        map.addLayer(souspref_layer);
        map.addLayer(BDU);
        map.removeLayer(BCU);
        map.removeLayer(prefREG_layer);
        map.removeLayer(clusterDEP_layer);
        map.removeLayer(clusterIRIS_layer);

    }else if(parseFloat(map.getView().getZoom()) <= 10 && parseFloat(map.getView().getZoom()) > 9) {
        map.addLayer(hopital_layer);
        map.addLayer(BCU);
        map.addLayer(clusterDEP_layer);
        map.removeLayer(clusterREG_layer);
        map.removeLayer(BDU);
        map.removeLayer(BIU);
        map.removeLayer(clusterIRIS_layer);
        map.removeLayer(clusterREG_layer);

    }else if(parseFloat(map.getView().getZoom()) <= 11 && parseFloat(map.getView().getZoom()) > 10) {
        map.addLayer(train3_layer);
        map.addLayer(route3_layer);
        map.addLayer(eau4_layer);
        map.removeLayer(eau5_layer);
        map.removeLayer(caserne_layer);
        map.removeLayer(BIU);
        map.removeLayer(clusterDEP_layer);

    }else if(parseFloat(map.getView().getZoom()) <= 12 && parseFloat(map.getView().getZoom()) > 11) {
        map.addLayer(caserne_layer);
        map.addLayer(BIU);
        map.addLayer(eau5_layer);
        map.addLayer(clusterDEP_layer);
        map.removeLayer(BDU);
        map.removeLayer(BCU);
        map.removeLayer(clusterIRIS_layer);
        map.removeLayer(route4_layer);

    }else if(parseFloat(map.getView().getZoom()) > 12) {
        map.addLayer(clusterIRIS_layer);
        map.addLayer(route4_layer);
        map.removeLayer(clusterDEP_layer);
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

