var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });
var format_pathways_2 = new ol.format.GeoJSON();
var features_pathways_2 = format_pathways_2.readFeatures(json_pathways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pathways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pathways_2.addFeatures(features_pathways_2);
var lyr_pathways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pathways_2, 
                style: style_pathways_2,
                popuplayertitle: 'pathways',
                interactive: true,
                title: '<img src="styles/legend/pathways_2.png" /> pathways'
            });
var format_pavement_3 = new ol.format.GeoJSON();
var features_pavement_3 = format_pavement_3.readFeatures(json_pavement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pavement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pavement_3.addFeatures(features_pavement_3);
var lyr_pavement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pavement_3, 
                style: style_pavement_3,
                popuplayertitle: 'pavement',
                interactive: true,
                title: '<img src="styles/legend/pavement_3.png" /> pavement'
            });
var format_deck_4 = new ol.format.GeoJSON();
var features_deck_4 = format_deck_4.readFeatures(json_deck_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deck_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deck_4.addFeatures(features_deck_4);
var lyr_deck_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_deck_4, 
                style: style_deck_4,
                popuplayertitle: 'deck',
                interactive: true,
                title: '<img src="styles/legend/deck_4.png" /> deck'
            });
var format_plants_5 = new ol.format.GeoJSON();
var features_plants_5 = format_plants_5.readFeatures(json_plants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plants_5.addFeatures(features_plants_5);
var lyr_plants_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plants_5, 
                style: style_plants_5,
                popuplayertitle: 'plants',
                interactive: true,
    title: 'plants<br />\
    <img src="styles/legend/plants_5_0.png" /> <br />\
    <img src="styles/legend/plants_5_1.png" /> <br />\
    <img src="styles/legend/plants_5_2.png" /> <br />\
    <img src="styles/legend/plants_5_3.png" /> <br />\
    <img src="styles/legend/plants_5_4.png" /> <br />\
    <img src="styles/legend/plants_5_5.png" /> <br />\
    <img src="styles/legend/plants_5_6.png" /> <br />\
    <img src="styles/legend/plants_5_7.png" /> <br />\
    <img src="styles/legend/plants_5_8.png" /> <br />\
    <img src="styles/legend/plants_5_9.png" /> <br />\
    <img src="styles/legend/plants_5_10.png" /> <br />\
    <img src="styles/legend/plants_5_11.png" /> <br />\
    <img src="styles/legend/plants_5_12.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_pathways_2.setVisible(true);lyr_pavement_3.setVisible(true);lyr_deck_4.setVisible(true);lyr_plants_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_buildings_1,lyr_pathways_2,lyr_pavement_3,lyr_deck_4,lyr_plants_5];
lyr_buildings_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_pathways_2.set('fieldAliases', {'fid': 'fid', });
lyr_pavement_3.set('fieldAliases', {'fid': 'fid', });
lyr_deck_4.set('fieldAliases', {'fid': 'fid', });
lyr_plants_5.set('fieldAliases', {'fid': 'fid', 'Species': 'Species', });
lyr_buildings_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_pathways_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_pavement_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_deck_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_plants_5.set('fieldImages', {'fid': 'TextEdit', 'Species': 'TextEdit', });
lyr_buildings_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pathways_2.set('fieldLabels', {'fid': 'no label', });
lyr_pavement_3.set('fieldLabels', {'fid': 'no label', });
lyr_deck_4.set('fieldLabels', {'fid': 'no label', });
lyr_plants_5.set('fieldLabels', {'fid': 'no label', 'Species': 'no label', });
lyr_plants_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});