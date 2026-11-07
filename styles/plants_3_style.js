var size = 0;
var placement = 'point';

var style_plants_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Species") !== null) {
        labelText = String(feature.get("Species"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 1.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(16,142,0,0.23529411764705882)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
