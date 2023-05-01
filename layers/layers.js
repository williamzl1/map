var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tassie_1 = new ol.format.GeoJSON();
var features_Tassie_1 = format_Tassie_1.readFeatures(json_Tassie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tassie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tassie_1.addFeatures(features_Tassie_1);
var lyr_Tassie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tassie_1, 
                style: style_Tassie_1,
                interactive: true,
    title: 'Tassie<br />\
    <img src="styles/legend/Tassie_1_0.png" /> 1 - 22<br />\
    <img src="styles/legend/Tassie_1_1.png" /> 23 - 43<br />\
    <img src="styles/legend/Tassie_1_2.png" /> 44 - 65<br />\
    <img src="styles/legend/Tassie_1_3.png" /> 66 - 86<br />\
    <img src="styles/legend/Tassie_1_4.png" /> 87 - 109<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Tassie_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Tassie_1];
lyr_Tassie_1.set('fieldAliases', {'Electorate': 'Electorate', 'N of sites': 'N of sites', });
lyr_Tassie_1.set('fieldImages', {'Electorate': 'TextEdit', 'N of sites': 'TextEdit', });
lyr_Tassie_1.set('fieldLabels', {'Electorate': 'header label', 'N of sites': 'inline label', });
lyr_Tassie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});