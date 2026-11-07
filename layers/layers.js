var wms_layers = [];

var format_buildings_0 = new ol.format.GeoJSON();
var features_buildings_0 = format_buildings_0.readFeatures(json_buildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_0.addFeatures(features_buildings_0);
var lyr_buildings_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_0, 
                style: style_buildings_0,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_0.png" /> buildings'
            });
var format_deck_1 = new ol.format.GeoJSON();
var features_deck_1 = format_deck_1.readFeatures(json_deck_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deck_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deck_1.addFeatures(features_deck_1);
var lyr_deck_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_deck_1, 
                style: style_deck_1,
                popuplayertitle: 'deck',
                interactive: true,
                title: '<img src="styles/legend/deck_1.png" /> deck'
            });
var format_pois_2 = new ol.format.GeoJSON();
var features_pois_2 = format_pois_2.readFeatures(json_pois_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pois_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pois_2.addFeatures(features_pois_2);
var lyr_pois_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pois_2, 
                style: style_pois_2,
                popuplayertitle: 'pois',
                interactive: true,
                title: '<img src="styles/legend/pois_2.png" /> pois'
            });

lyr_buildings_0.setVisible(true);lyr_deck_1.setVisible(true);lyr_pois_2.setVisible(true);
var layersList = [lyr_buildings_0,lyr_deck_1,lyr_pois_2];
lyr_buildings_0.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_deck_1.set('fieldAliases', {'fid': 'fid', });
lyr_pois_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_buildings_0.set('fieldImages', {'fid': '', 'Name': '', });
lyr_deck_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_pois_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_buildings_0.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_deck_1.set('fieldLabels', {'fid': 'no label', });
lyr_pois_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pois_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});