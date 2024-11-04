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
    visible: true
});

var osmTile = new ol.layer.Tile ({
    title: 'OpenStreetMap',
    visible: false,
    source: new ol.source.OSM()
});
osmTile.setZIndex(-1)

// map.addLayer(osmTile);
var baseGroup = new ol.layer.Group({
    title: 'Fond de carte',
    fold: true,
    layers: [osmTile, noneTile]
});

var hopital = new ol.layer.Tile ({
    title: 'hôpital',
    visible: false,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2hopital', 'TILED': false},
        serverType: 'geoserver'
    })
});
hopital.setZIndex(2)

var caserne = new ol.layer.Tile ({
    title: 'caserne',
    visible: false,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2caserne', 'TILED': false},
        serverType: 'geoserver'
    })
});
caserne.setZIndex(2)

// création section base de données d'enjeux
var bddenjeux = new ol.layer.Group({
    title: 'Base de données enjeux',
    fold: true,
    layers: [hopital, caserne]
});

var blesses1 = new ol.layer.Tile ({
    title: 'Bilan humain',
    visible: true,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2cluster_reg', 'TILED': false},
        serverType: 'geoserver'
    })
});
blesses1.setZIndex(2)

var blesses2 = new ol.layer.Tile ({
    title: 'Bilan humain',
    visible: true,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2cluster_dep', 'TILED': false},
        serverType: 'geoserver'
    })
});
blesses2.setZIndex(2)

var blesses3 = new ol.layer.Tile ({
    title: 'Bilan humain',
    visible: true,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2cluster_com', 'TILED': false},
        serverType: 'geoserver'
    })
});
blesses3.setZIndex(2)

var blesses4 = new ol.layer.Tile ({
    title: 'Bilan humain',
    visible: true,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2cluster_iris', 'TILED': false},
        serverType: 'geoserver'
    })
});
blesses4.setZIndex(2)

var blesses5 = new ol.layer.Tile ({
    title: 'Bilan humain',
    visible: true,
    source: new ol.source.TileWMS({
        /* Chargement du lien WMS */
        url: 'http://localhost:8080/geoserver/wms',
        /* Chargement de l'espace de travail : couche */
        params: {'LAYERS': 'Nice2:2cluster_iris_nong', 'TILED': false},
        serverType: 'geoserver'
    })
});
blesses5.setZIndex(2)

map.addLayer(baseGroup);
map.addLayer(bddenjeux);

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
    params: {'LAYERS': 'Nicebon_6', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_7', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_8', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_9', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_10', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_11', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_12', 'TILED': false},
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
    params: {'LAYERS': 'Nicebon_13', 'TILED': false},
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
        div_image.innerHTML = '<img src="ressources/image/zoom12bon.png" id="image">';
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
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
        map.removeLayer(blesses1);
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
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
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
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
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
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(blesses1)
        map.addLayer(couche_9);
        map.addLayer(overlayGroup1);

    }else if(parseFloat(map.getView().getZoom()) <= 10 && parseFloat(map.getView().getZoom()) > 9) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup3);
        map.removeLayer(blesses1);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_11);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(blesses2)
        map.addLayer(couche_10);
        map.addLayer(overlayGroup2);

    }else if(parseFloat(map.getView().getZoom()) <= 11 && parseFloat(map.getView().getZoom()) > 10) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup3);
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses4);
        map.removeLayer(blesses5);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_12);
        map.removeLayer(couche_13);
        map.addLayer(blesses3)
        map.addLayer(couche_11);
        map.addLayer(overlayGroup2);

    }else if(parseFloat(map.getView().getZoom()) <= 12 && parseFloat(map.getView().getZoom()) > 11) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses5);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.removeLayer(couche_11);
        map.removeLayer(couche_13);
        map.addLayer(blesses4)
        map.addLayer(couche_12);
        map.addLayer(overlayGroup3);

    }else if(parseFloat(map.getView().getZoom()) > 12) {
        map.removeLayer(overlayGroup1);
        map.removeLayer(overlayGroup2);
        map.removeLayer(blesses1);
        map.removeLayer(blesses2);
        map.removeLayer(blesses3);
        map.removeLayer(blesses4);
        map.removeLayer(couche_12);
        map.removeLayer(couche_11);
        map.removeLayer(couche_6);
        map.removeLayer(couche_7);
        map.removeLayer(couche_8);
        map.removeLayer(couche_9);
        map.removeLayer(couche_10);
        map.addLayer(blesses5);
        map.addLayer(couche_13);
        map.addLayer(overlayGroup3);
        }
    }
})

var SeismeTile = new ol.layer.Tile ({
    title: "dégâts graves",
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentDep_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile2 = new ol.layer.Tile ({
    title: "dégâts totaux",
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentDep_s', 'TILED': true},
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
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentCom_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile4 = new ol.layer.Tile ({
    title: "dégâts secondaires (D1+D2+D3)",
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentCom_s', 'TILED': true},
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
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentIris_u', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
});

var SeismeTile6 = new ol.layer.Tile ({
    title: "dégâts secondaires (D1+D2+D3)",
    type: 'base',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS':'Nicebon_batimentIris_s', 'TILED': true},
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

//imprimer carte
const dims = {
    a0: [1189, 841],
    a1: [841, 594],
    a2: [594, 420],
    a3: [420, 297],
    a4: [297, 210],
    a5: [210, 148],
  };
  
  const exportButton = document.getElementById('export-pdf');
  
  exportButton.addEventListener(
    'click',
    function () {
      exportButton.disabled = true;
      document.body.style.cursor = 'progress';
  
      const format = document.getElementById('format').value;
      const resolution = document.getElementById('resolution').value;
      const dim = dims[format];
      const width = Math.round((dim[0] * resolution) / 25.4);
      const height = Math.round((dim[1] * resolution) / 25.4);
      const size = map.getSize();
      const viewResolution = map.getView().getResolution();
  
      map.once('rendercomplete', function () {
        const mapCanvas = document.createElement('canvas');
        mapCanvas.width = width;
        mapCanvas.height = height;
        const mapContext = mapCanvas.getContext('2d');
        Array.prototype.forEach.call(
          document.querySelectorAll('.ol-layer canvas'),
          function (canvas) {
            if (canvas.width > 0) {
              const opacity = canvas.parentNode.style.opacity;
              mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
              const transform = canvas.style.transform;
              // Get the transform parameters from the style's transform matrix
              const matrix = transform
                .match(/^matrix\(([^\(]*)\)$/)[1]
                .split(',')
                .map(Number);
              // Apply the transform to the export map context
              CanvasRenderingContext2D.prototype.setTransform.apply(
                mapContext,
                matrix
              );
              mapContext.drawImage(canvas, 0, 0);
            }
          }
        );
        mapContext.globalAlpha = 1;
        mapContext.setTransform(1, 0, 0, 1, 0, 0);
        const pdf = new jspdf.jsPDF('landscape', undefined, format);
        pdf.addImage(
          mapCanvas.toDataURL('image/jpeg'),
          'JPEG',
          0,
          0,
          dim[0],
          dim[1]
        );
        pdf.save('map.pdf');
        // Reset original map size
        map.setSize(size);
        map.getView().setResolution(viewResolution);
        exportButton.disabled = false;
        document.body.style.cursor = 'auto';
      });
  
      // Set print size
      const printSize = [width, height];
      map.setSize(printSize);
      const scaling = Math.min(width / size[0], height / size[1]);
      map.getView().setResolution(viewResolution / scaling);
    },
    false
  );