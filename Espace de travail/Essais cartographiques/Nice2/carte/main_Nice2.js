var defaultZoom = 6.5;

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
    visible: true
});

var osmTile = new ol.layer.Tile ({
    title: 'OpenStreetMap',
    visible: true,
    type: 'base',
    source: new ol.source.OSM()
});
osmTile.setZIndex(-1)

// map.addLayer(osmTile);
var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    fold: true,
    layers: [osmTile, noneTile]
});

map.addLayer(baseGroup);
var div_image = document.getElementById("div_image");
// var batiment_dep_u = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires urgents (D4+D5)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_dep_u', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true,
//         type: 'base',
// });
// /* Déclaration de la couche WMS */
// var BDU = new ol.layer.Tile({ source: batiment_dep_u });

// var batiment_dep_s = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires secondaires (D1+D2+D3)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_dep_s', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true,
//         type: 'base',
// });
// /* Déclaration de la couche WMS */
// var BDS = new ol.layer.Tile({ source: batiment_dep_s });

// var batiment_com_u = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires urgents (D4+D5)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_com_u', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true
// });
// /* Déclaration de la couche WMS */
// var BCU = new ol.layer.Tile({ source: batiment_com_u });

// var batiment_com_s = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires secondaires (D1+D2+D3)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_com_s', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true
// });
// /* Déclaration de la couche WMS */
// var BCS = new ol.layer.Tile({ source: batiment_com_s });

// var batiment_iris_u = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires urgents (D4+D5)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_iris_u', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true
// });
// /* Déclaration de la couche WMS */
// var BIU = new ol.layer.Tile({ source: batiment_iris_u });

// var batiment_iris_s = new ol.source.TileWMS({
//     title: "dégâts bâtimentaires secondaires (D1+D2+D3)",
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS':'degat_batiment_iris_s', 'TILED': true},
//         serverType: 'geoserver',
//         visible: true
// });
// /* Déclaration de la couche WMS */
// var BIS = new ol.layer.Tile({ source: batiment_iris_s });

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_6 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom6', 'TILED': false},
    serverType: 'geoserver'
});
/* Déclaration de la couche WMS */
var couche_6 = new ol.layer.Tile({ source: sourceWMS_6 });
couche_6.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_7 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom7', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_7 = new ol.layer.Tile({ source: sourceWMS_7 });
couche_7.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_8 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom8', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_8 = new ol.layer.Tile({ source: sourceWMS_8 });
couche_8.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_9 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom9', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_9 = new ol.layer.Tile({ source: sourceWMS_9 });
couche_9.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_10 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom10', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_10 = new ol.layer.Tile({ source: sourceWMS_10 });
couche_10.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_11 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom11', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_11 = new ol.layer.Tile({ source: sourceWMS_11 });
couche_11.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_12 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom12', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_12 = new ol.layer.Tile({ source: sourceWMS_12 });
couche_12.setZIndex(1)

/* Déclaration de la source de la couche en format WMS */
var sourceWMS_13 = new ol.source.TileWMS({
    /* Chargement du lien WMS */
    url: 'http://localhost:8080/geoserver/wms',
    /* Chargement de l'espace de travail : couche */
    params: {'LAYERS': '2zoom13', 'TILED': false},
    serverType: 'geoserver'
})
/* Déclaration de la couche WMS */
var couche_13 = new ol.layer.Tile({ source: sourceWMS_13 });
couche_13.setZIndex(1)

// Ajouter la légende

function affichage_legende(){
    if(mapView !=parseInt(map.getView().getZoom()) ){
      
      if(parseInt(map.getView().getZoom()) <= 6 && parseFloat(map.getView().getZoom()) > 5) {
        div_image.removeChild(document.getElementById("image"));
        div_image.innerHTML = '<img src="ressources/image/zoom7.png" id="image">';
        
      }else if(parseInt(map.getView().getZoom()) <= 7 && parseFloat(map.getView().getZoom()) > 6) {
        div_image.removeChild(document.getElementById("image"));
        div_image.innerHTML = '<img src="ressources/image/zoom8.png" id="image">';

      }else if(parseInt(map.getView().getZoom()) <= 8 && parseFloat(map.getView().getZoom()) > 7) {
        div_image.removeChild(document.getElementById("image"));
        div_image.innerHTML = '<img src="ressources/image/zoom9.png" id="image">';

      }else if(parseInt(map.getView().getZoom()) <= 10 && parseFloat(map.getView().getZoom()) > 9) {
        div_image.removeChild(document.getElementById("image"));
        div_image.innerHTML = '<img src="ressources/image/zoom10.png" id="image">';

      }else if(parseInt(map.getView().getZoom()) > 10) {
        div_image.removeChild(document.getElementById("image"));
        div_image.innerHTML = '<img src="ressources/image/zoom12.png" id="image">';
  }
  
    }
  }

map.addLayer(couche_7);
div_image.innerHTML = '<img src="ressources/image/zoom7.png" id="image">'
// var im= $('<img src="ressources/image/zoom7.png" id="image">');
// $("#div_image").append(im);
var zoomDiv = document.getElementById('zoom');
zoomDiv.innerHTML = 'Zoom : ' + defaultZoom;

map.on("moveend",  function () {
    zoomDiv.innerHTML = 'Zoom : ' + map.getView().getZoom().toFixed(2);
    
    if(mapView !=parseInt(map.getView().getZoom()) ){
        affichage_legende();
        mapView =parseInt(map.getView().getZoom());
        
    if(parseFloat(map.getView().getZoom()) <= 8 && parseFloat(map.getView().getZoom()) > 7) {
        map.removeLayer(overlayGroup2);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_8);
        map.addLayer(overlayGroup1);

    }else if(parseFloat(map.getView().getZoom()) <= 6) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_6);

    }else if(parseFloat(map.getView().getZoom()) <= 7 && parseFloat(map.getView().getZoom()) > 6) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_6);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_7);

    }else if(parseFloat(map.getView().getZoom()) <= 9 && parseFloat(map.getView().getZoom()) > 8) {
        map.removeLayer(overlayGroup2);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_9);
        map.addLayer(overlayGroup1);

    }else if(parseFloat(map.getView().getZoom()) <= 10 && parseFloat(map.getView().getZoom()) > 9) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_10);
        map.addLayer(overlayGroup2);

    }else if(parseFloat(map.getView().getZoom()) <= 11 && parseFloat(map.getView().getZoom()) > 10) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup3);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(couche_11);
        map.addLayer(overlayGroup2);

    }else if(parseFloat(map.getView().getZoom()) <= 12 && parseFloat(map.getView().getZoom()) > 11) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_13);
        map.addLayer(couche_12);
        map.addLayer(overlayGroup3);

    }else if(parseFloat(map.getView().getZoom()) > 12) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(couche_12);
        map.removeLayer(couche_11);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.addLayer(couche_13);
        map.addLayer(overlayGroup3);
        }
    }
})

var SeismeTile = new ol.layer.Tile ({
    title: "dégâts urgents (D4+D5)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_dep_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile2 = new ol.layer.Tile ({
    title: "dégâts secondaires (D1+D2+D3)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_dep_s', 'TILED': false},
        serverType: 'geoserver',
        visible: false
    })
});

var overlayGroup1 = new ol.layer.Group({
    title: 'Dégâts bâtimentaires départementaux',
    fold: true,
    layers: [SeismeTile2, SeismeTile]
});

var SeismeTile3 = new ol.layer.Tile ({
    title: "dégâts urgents (D4+D5)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_com_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile4 = new ol.layer.Tile ({
    title: "dégâts secondaires (D1+D2+D3)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_com_s', 'TILED': true},
        serverType: 'geoserver',
        visible: false
    })
});

var overlayGroup2 = new ol.layer.Group({
    title: 'Dégâts bâtimentaires communaux',
    fold: true,
    layers: [SeismeTile4, SeismeTile3]
});

var SeismeTile5 = new ol.layer.Tile ({
    title: "dégâts urgents (D4+D5)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_iris_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile6 = new ol.layer.Tile ({
    title: "dégâts secondaires (D1+D2+D3)",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'degat_batiment_iris_s', 'TILED': true},
        serverType: 'geoserver',
        visible: false
    })
});

var overlayGroup3 = new ol.layer.Group({
    title: 'Dégâts bâtimentaires par ilots IRIS',
    fold: true,
    layers: [SeismeTile6, SeismeTile5]
});

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

var zoomDiv = document.getElementById('zoom');
zoomDiv.innerHTML = 'Zoom : ' + defaultZoom;

map.on('moveend', function(e) {
    zoomDiv.innerHTML = 'Zoom : ' + map.getView().getZoom().toFixed(2);
});