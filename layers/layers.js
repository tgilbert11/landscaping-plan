var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_shadedarea_1 = new ol.format.GeoJSON();
var features_shadedarea_1 = format_shadedarea_1.readFeatures(json_shadedarea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shadedarea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shadedarea_1.addFeatures(features_shadedarea_1);
var lyr_shadedarea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shadedarea_1, 
                style: style_shadedarea_1,
                popuplayertitle: 'shaded area',
                interactive: true,
                title: '<img src="styles/legend/shadedarea_1.png" /> shaded area'
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

lyr_ESRIWorldImagery_0.setVisible(true);lyr_shadedarea_1.setVisible(true);lyr_pois_2.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_shadedarea_1,lyr_pois_2];
lyr_shadedarea_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_pois_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_shadedarea_1.set('fieldImages', {'fid': '', 'Name': '', });
lyr_pois_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_shadedarea_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pois_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_pois_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});