var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Parks_Trails_20250522_1 = new ol.format.GeoJSON();
var features_Parks_Trails_20250522_1 = format_Parks_Trails_20250522_1.readFeatures(json_Parks_Trails_20250522_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_Trails_20250522_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_Trails_20250522_1.addFeatures(features_Parks_Trails_20250522_1);
var lyr_Parks_Trails_20250522_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_Trails_20250522_1, 
                style: style_Parks_Trails_20250522_1,
                popuplayertitle: 'Parks_Trails_20250522',
                interactive: true,
                title: '<img src="styles/legend/Parks_Trails_20250522_1.png" /> Parks_Trails_20250522'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Parks_Trails_20250522_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Parks_Trails_20250522_1];
lyr_Parks_Trails_20250522_1.set('fieldAliases', {'Park_Name': 'Park_Name', 'Width_ft': 'Width_ft', 'Class': 'Class', 'Surface': 'Surface', 'Gen_Topog': 'Gen_Topog', 'Difficulty': 'Difficulty', 'Date_Collected': 'Date_Collected', 'Trail_Name': 'Trail_Name', 'ParkID': 'ParkID', 'TrailMarkersInstalled': 'TrailMarkersInstalled', });
lyr_Parks_Trails_20250522_1.set('fieldImages', {'Park_Name': '', 'Width_ft': '', 'Class': '', 'Surface': '', 'Gen_Topog': '', 'Difficulty': '', 'Date_Collected': '', 'Trail_Name': '', 'ParkID': '', 'TrailMarkersInstalled': '', });
lyr_Parks_Trails_20250522_1.set('fieldLabels', {'Park_Name': 'no label', 'Width_ft': 'no label', 'Class': 'no label', 'Surface': 'no label', 'Gen_Topog': 'no label', 'Difficulty': 'no label', 'Date_Collected': 'no label', 'Trail_Name': 'no label', 'ParkID': 'no label', 'TrailMarkersInstalled': 'no label', });
lyr_Parks_Trails_20250522_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});