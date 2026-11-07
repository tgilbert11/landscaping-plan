var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_bulidingsskewed_1 = new ol.format.GeoJSON();
var features_bulidingsskewed_1 = format_bulidingsskewed_1.readFeatures(json_bulidingsskewed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bulidingsskewed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bulidingsskewed_1.addFeatures(features_bulidingsskewed_1);
var lyr_bulidingsskewed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bulidingsskewed_1, 
                style: style_bulidingsskewed_1,
                popuplayertitle: 'bulidings skewed',
                interactive: true,
                title: '<img src="styles/legend/bulidingsskewed_1.png" /> bulidings skewed'
            });
var format_plants_2 = new ol.format.GeoJSON();
var features_plants_2 = format_plants_2.readFeatures(json_plants_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plants_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plants_2.addFeatures(features_plants_2);
var lyr_plants_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plants_2, 
                style: style_plants_2,
                popuplayertitle: 'plants',
                interactive: true,
                title: '<img src="styles/legend/plants_2.png" /> plants'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_bulidingsskewed_1.setVisible(true);lyr_plants_2.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_bulidingsskewed_1,lyr_plants_2];
lyr_bulidingsskewed_1.set('fieldAliases', {'fid': 'fid', });
lyr_plants_2.set('fieldAliases', {'fid': 'fid', 'Species': 'Species', });
lyr_bulidingsskewed_1.set('fieldImages', {'fid': '', });
lyr_plants_2.set('fieldImages', {'fid': 'TextEdit', 'Species': 'TextEdit', });
lyr_bulidingsskewed_1.set('fieldLabels', {'fid': 'no label', });
lyr_plants_2.set('fieldLabels', {'fid': 'no label', 'Species': 'no label', });
lyr_plants_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});