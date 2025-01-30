var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMKMDesaKranggan_1 = new ol.format.GeoJSON();
var features_UMKMDesaKranggan_1 = format_UMKMDesaKranggan_1.readFeatures(json_UMKMDesaKranggan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMDesaKranggan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMDesaKranggan_1.addFeatures(features_UMKMDesaKranggan_1);
var lyr_UMKMDesaKranggan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMDesaKranggan_1, 
                style: style_UMKMDesaKranggan_1,
                popuplayertitle: 'UMKM Desa Kranggan',
                interactive: true,
                title: '<img src="styles/legend/UMKMDesaKranggan_1.png" /> UMKM Desa Kranggan'
            });
var format_UMKMDesaKranggan_2 = new ol.format.GeoJSON();
var features_UMKMDesaKranggan_2 = format_UMKMDesaKranggan_2.readFeatures(json_UMKMDesaKranggan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMDesaKranggan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMDesaKranggan_2.addFeatures(features_UMKMDesaKranggan_2);
var lyr_UMKMDesaKranggan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMDesaKranggan_2, 
                style: style_UMKMDesaKranggan_2,
                popuplayertitle: 'UMKM Desa Kranggan',
                interactive: true,
                title: '<img src="styles/legend/UMKMDesaKranggan_2.png" /> UMKM Desa Kranggan'
            });
var format_UMKMDesaKranggan_3 = new ol.format.GeoJSON();
var features_UMKMDesaKranggan_3 = format_UMKMDesaKranggan_3.readFeatures(json_UMKMDesaKranggan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMDesaKranggan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMDesaKranggan_3.addFeatures(features_UMKMDesaKranggan_3);
var lyr_UMKMDesaKranggan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMDesaKranggan_3, 
                style: style_UMKMDesaKranggan_3,
                popuplayertitle: 'UMKM Desa Kranggan',
                interactive: true,
                title: '<img src="styles/legend/UMKMDesaKranggan_3.png" /> UMKM Desa Kranggan'
            });
var format_WisataPolan_4 = new ol.format.GeoJSON();
var features_WisataPolan_4 = format_WisataPolan_4.readFeatures(json_WisataPolan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisataPolan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisataPolan_4.addFeatures(features_WisataPolan_4);
var lyr_WisataPolan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WisataPolan_4, 
                style: style_WisataPolan_4,
                popuplayertitle: 'Wisata Polan',
                interactive: true,
                title: '<img src="styles/legend/WisataPolan_4.png" /> Wisata Polan'
            });
var format_WisataPolan_5 = new ol.format.GeoJSON();
var features_WisataPolan_5 = format_WisataPolan_5.readFeatures(json_WisataPolan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisataPolan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisataPolan_5.addFeatures(features_WisataPolan_5);
var lyr_WisataPolan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WisataPolan_5, 
                style: style_WisataPolan_5,
                popuplayertitle: 'Wisata Polan',
                interactive: true,
                title: '<img src="styles/legend/WisataPolan_5.png" /> Wisata Polan'
            });
var format_WisataPolan_6 = new ol.format.GeoJSON();
var features_WisataPolan_6 = format_WisataPolan_6.readFeatures(json_WisataPolan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisataPolan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisataPolan_6.addFeatures(features_WisataPolan_6);
var lyr_WisataPolan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WisataPolan_6, 
                style: style_WisataPolan_6,
                popuplayertitle: 'Wisata Polan',
                interactive: true,
                title: '<img src="styles/legend/WisataPolan_6.png" /> Wisata Polan'
            });
var format_Kec_Polan_7 = new ol.format.GeoJSON();
var features_Kec_Polan_7 = format_Kec_Polan_7.readFeatures(json_Kec_Polan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kec_Polan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Polan_7.addFeatures(features_Kec_Polan_7);
var lyr_Kec_Polan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kec_Polan_7, 
                style: style_Kec_Polan_7,
                popuplayertitle: 'Kec_Polan',
                interactive: true,
                title: '<img src="styles/legend/Kec_Polan_7.png" /> Kec_Polan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UMKMDesaKranggan_1.setVisible(true);lyr_UMKMDesaKranggan_2.setVisible(true);lyr_UMKMDesaKranggan_3.setVisible(true);lyr_WisataPolan_4.setVisible(true);lyr_WisataPolan_5.setVisible(true);lyr_WisataPolan_6.setVisible(true);lyr_Kec_Polan_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UMKMDesaKranggan_1,lyr_UMKMDesaKranggan_2,lyr_UMKMDesaKranggan_3,lyr_WisataPolan_4,lyr_WisataPolan_5,lyr_WisataPolan_6,lyr_Kec_Polan_7];
lyr_UMKMDesaKranggan_1.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', 'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descript_1': 'Descript_1', 'Elevation_': 'Elevation_', 'Title_2': 'Title_2', 'Date Cre_1': 'Date Cre_1', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', 'Northing_2': 'Northing_2', 'Easting_2': 'Easting_2', 'Descript_2': 'Descript_2', 'Elevatio_1': 'Elevatio_1', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_UMKMDesaKranggan_2.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', 'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descript_1': 'Descript_1', 'Elevation_': 'Elevation_', 'Title_2': 'Title_2', 'Date Cre_1': 'Date Cre_1', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', 'Northing_2': 'Northing_2', 'Easting_2': 'Easting_2', 'Descript_2': 'Descript_2', 'Elevatio_1': 'Elevatio_1', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_UMKMDesaKranggan_3.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', 'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descript_1': 'Descript_1', 'Elevation_': 'Elevation_', 'Title_2': 'Title_2', 'Date Cre_1': 'Date Cre_1', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', 'Northing_2': 'Northing_2', 'Easting_2': 'Easting_2', 'Descript_2': 'Descript_2', 'Elevatio_1': 'Elevatio_1', 'Nama': 'Nama', 'Jenis': 'Jenis', });
lyr_WisataPolan_4.set('fieldAliases', {'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descriptio': 'Descriptio', 'Elevation': 'Elevation', 'Kelurahan': 'Kelurahan', 'Jenis': 'Jenis', });
lyr_WisataPolan_5.set('fieldAliases', {'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descriptio': 'Descriptio', 'Elevation': 'Elevation', 'Kelurahan': 'Kelurahan', 'Jenis': 'Jenis', });
lyr_WisataPolan_6.set('fieldAliases', {'Title': 'Title', 'Date Creat': 'Date Creat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Descriptio': 'Descriptio', 'Elevation': 'Elevation', 'Kelurahan': 'Kelurahan', 'Jenis': 'Jenis', });
lyr_Kec_Polan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UMKMDesaKranggan_1.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'descriptio': '', 'source': '', 'url': '', 'url name': '', 'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descript_1': '', 'Elevation_': '', 'Title_2': '', 'Date Cre_1': '', 'Latitude_2': '', 'Longitude_': '', 'Northing_2': '', 'Easting_2': '', 'Descript_2': '', 'Elevatio_1': '', 'Nama': '', 'Jenis': '', });
lyr_UMKMDesaKranggan_2.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'descriptio': '', 'source': '', 'url': '', 'url name': '', 'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descript_1': '', 'Elevation_': '', 'Title_2': '', 'Date Cre_1': '', 'Latitude_2': '', 'Longitude_': '', 'Northing_2': '', 'Easting_2': '', 'Descript_2': '', 'Elevatio_1': '', 'Nama': '', 'Jenis': '', });
lyr_UMKMDesaKranggan_3.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'descriptio': '', 'source': '', 'url': '', 'url name': '', 'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descript_1': '', 'Elevation_': '', 'Title_2': '', 'Date Cre_1': '', 'Latitude_2': '', 'Longitude_': '', 'Northing_2': '', 'Easting_2': '', 'Descript_2': '', 'Elevatio_1': '', 'Nama': '', 'Jenis': '', });
lyr_WisataPolan_4.set('fieldImages', {'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descriptio': '', 'Elevation': '', 'Kelurahan': '', 'Jenis': '', });
lyr_WisataPolan_5.set('fieldImages', {'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descriptio': '', 'Elevation': '', 'Kelurahan': '', 'Jenis': '', });
lyr_WisataPolan_6.set('fieldImages', {'Title': '', 'Date Creat': '', 'Latitude': '', 'Longitude': '', 'Northing': '', 'Easting': '', 'Descriptio': '', 'Elevation': '', 'Kelurahan': '', 'Jenis': '', });
lyr_Kec_Polan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UMKMDesaKranggan_1.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descript_1': 'no label', 'Elevation_': 'no label', 'Title_2': 'no label', 'Date Cre_1': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', 'Northing_2': 'no label', 'Easting_2': 'no label', 'Descript_2': 'no label', 'Elevatio_1': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_UMKMDesaKranggan_2.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descript_1': 'no label', 'Elevation_': 'no label', 'Title_2': 'no label', 'Date Cre_1': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', 'Northing_2': 'no label', 'Easting_2': 'no label', 'Descript_2': 'no label', 'Elevatio_1': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_UMKMDesaKranggan_3.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descript_1': 'no label', 'Elevation_': 'no label', 'Title_2': 'no label', 'Date Cre_1': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', 'Northing_2': 'no label', 'Easting_2': 'no label', 'Descript_2': 'no label', 'Elevatio_1': 'no label', 'Nama': 'no label', 'Jenis': 'no label', });
lyr_WisataPolan_4.set('fieldLabels', {'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descriptio': 'no label', 'Elevation': 'no label', 'Kelurahan': 'no label', 'Jenis': 'no label', });
lyr_WisataPolan_5.set('fieldLabels', {'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descriptio': 'no label', 'Elevation': 'no label', 'Kelurahan': 'no label', 'Jenis': 'no label', });
lyr_WisataPolan_6.set('fieldLabels', {'Title': 'no label', 'Date Creat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Descriptio': 'no label', 'Elevation': 'no label', 'Kelurahan': 'no label', 'Jenis': 'no label', });
lyr_Kec_Polan_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kec_Polan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});