var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_FootpathTrailLandMap_withSkew_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Footpath Trail Land Map_withSkew<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FootpathTrailLandMap_withSkew_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13595178.903753, 4474024.587848, -13595073.741147, 4474094.819158]
        })
    });
var format_bulidingsskewed_2 = new ol.format.GeoJSON();
var features_bulidingsskewed_2 = format_bulidingsskewed_2.readFeatures(json_bulidingsskewed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bulidingsskewed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bulidingsskewed_2.addFeatures(features_bulidingsskewed_2);
var lyr_bulidingsskewed_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bulidingsskewed_2, 
                style: style_bulidingsskewed_2,
                popuplayertitle: 'bulidings skewed',
                interactive: true,
                title: '<img src="styles/legend/bulidingsskewed_2.png" /> bulidings skewed'
            });
var format_plants_3 = new ol.format.GeoJSON();
var features_plants_3 = format_plants_3.readFeatures(json_plants_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plants_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plants_3.addFeatures(features_plants_3);
var lyr_plants_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plants_3, 
                style: style_plants_3,
                popuplayertitle: 'plants',
                interactive: true,
                title: '<img src="styles/legend/plants_3.png" /> plants'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FootpathTrailLandMap_withSkew_1.setVisible(true);lyr_bulidingsskewed_2.setVisible(true);lyr_plants_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FootpathTrailLandMap_withSkew_1,lyr_bulidingsskewed_2,lyr_plants_3];
lyr_bulidingsskewed_2.set('fieldAliases', {'fid': 'fid', });
lyr_plants_3.set('fieldAliases', {'fid': 'fid', 'Species': 'Species', });
lyr_bulidingsskewed_2.set('fieldImages', {'fid': '', });
lyr_plants_3.set('fieldImages', {'fid': 'TextEdit', 'Species': 'TextEdit', });
lyr_bulidingsskewed_2.set('fieldLabels', {'fid': 'no label', });
lyr_plants_3.set('fieldLabels', {'fid': 'no label', 'Species': 'no label', });
lyr_plants_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});