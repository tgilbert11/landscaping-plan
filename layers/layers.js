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
var format_deck_2 = new ol.format.GeoJSON();
var features_deck_2 = format_deck_2.readFeatures(json_deck_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deck_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deck_2.addFeatures(features_deck_2);
var lyr_deck_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_deck_2, 
                style: style_deck_2,
                popuplayertitle: 'deck',
                interactive: true,
                title: '<img src="styles/legend/deck_2.png" /> deck'
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
var format_pois_4 = new ol.format.GeoJSON();
var features_pois_4 = format_pois_4.readFeatures(json_pois_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pois_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pois_4.addFeatures(features_pois_4);
var lyr_pois_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pois_4, 
                style: style_pois_4,
                popuplayertitle: 'pois',
                interactive: true,
                title: '<img src="styles/legend/pois_4.png" /> pois'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_deck_2.setVisible(true);lyr_plants_3.setVisible(true);lyr_pois_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_buildings_1,lyr_deck_2,lyr_plants_3,lyr_pois_4];
lyr_buildings_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_deck_2.set('fieldAliases', {'fid': 'fid', });
lyr_plants_3.set('fieldAliases', {'fid': 'fid', 'Species': 'Species', });
lyr_pois_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_buildings_1.set('fieldImages', {'fid': '', 'Name': '', });
lyr_deck_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_plants_3.set('fieldImages', {'fid': 'TextEdit', 'Species': 'TextEdit', });
lyr_pois_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_buildings_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_deck_2.set('fieldLabels', {'fid': 'no label', });
lyr_plants_3.set('fieldLabels', {'fid': 'no label', 'Species': 'no label', });
lyr_pois_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pois_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});