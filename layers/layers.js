var wms_layers = [];

var lyr_2016OrtofotoRM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/orthophoto/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto:Ortofoto_2016_RM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2016 Ortofoto RM",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2016OrtofotoRM_0, 0]);
var lyr_22Terenuricadastrale_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_terenuri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.2. Terenuri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_22Terenuricadastrale_1, 0]);
var lyr_21Cladiricadastrale_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_cladiri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.1. Cladiri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_21Cladiricadastrale_2, 0]);
var lyr_23Sectoarecadastrale_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_hcsectoare",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.3. Sectoare cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_23Sectoarecadastrale_3, 0]);
var lyr_63UATImunicipiucomunorasat_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.3. UAT I (municipiu, comună, oraș, sat)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_63UATImunicipiucomunorasat_4, 0]);
var format_L87Badiceni_5 = new ol.format.GeoJSON();
var features_L87Badiceni_5 = format_L87Badiceni_5.readFeatures(json_L87Badiceni_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L87Badiceni_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L87Badiceni_5.addFeatures(features_L87Badiceni_5);
var lyr_L87Badiceni_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L87Badiceni_5, 
                style: style_L87Badiceni_5,
                popuplayertitle: "L 87-Badiceni",
                interactive: true,
                title: '<img src="styles/legend/L87Badiceni_5.png" /> L 87-Badiceni'
            });
var format_L88Badiceni_6 = new ol.format.GeoJSON();
var features_L88Badiceni_6 = format_L88Badiceni_6.readFeatures(json_L88Badiceni_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L88Badiceni_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L88Badiceni_6.addFeatures(features_L88Badiceni_6);
var lyr_L88Badiceni_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L88Badiceni_6, 
                style: style_L88Badiceni_6,
                popuplayertitle: "L 88-Badiceni",
                interactive: true,
                title: '<img src="styles/legend/L88Badiceni_6.png" /> L 88-Badiceni'
            });
var format_L91Solcani_7 = new ol.format.GeoJSON();
var features_L91Solcani_7 = format_L91Solcani_7.readFeatures(json_L91Solcani_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L91Solcani_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L91Solcani_7.addFeatures(features_L91Solcani_7);
var lyr_L91Solcani_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L91Solcani_7, 
                style: style_L91Solcani_7,
                popuplayertitle: "L 91-Solcani",
                interactive: true,
                title: '<img src="styles/legend/L91Solcani_7.png" /> L 91-Solcani'
            });
var format_L94Egoreni_8 = new ol.format.GeoJSON();
var features_L94Egoreni_8 = format_L94Egoreni_8.readFeatures(json_L94Egoreni_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L94Egoreni_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L94Egoreni_8.addFeatures(features_L94Egoreni_8);
var lyr_L94Egoreni_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L94Egoreni_8, 
                style: style_L94Egoreni_8,
                popuplayertitle: "L 94-Egoreni",
                interactive: true,
                title: '<img src="styles/legend/L94Egoreni_8.png" /> L 94-Egoreni'
            });
var format_L95Hristici_9 = new ol.format.GeoJSON();
var features_L95Hristici_9 = format_L95Hristici_9.readFeatures(json_L95Hristici_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L95Hristici_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L95Hristici_9.addFeatures(features_L95Hristici_9);
var lyr_L95Hristici_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L95Hristici_9, 
                style: style_L95Hristici_9,
                popuplayertitle: "L 95-Hristici",
                interactive: true,
                title: '<img src="styles/legend/L95Hristici_9.png" /> L 95-Hristici'
            });
var format_L98Pirlita_10 = new ol.format.GeoJSON();
var features_L98Pirlita_10 = format_L98Pirlita_10.readFeatures(json_L98Pirlita_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L98Pirlita_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L98Pirlita_10.addFeatures(features_L98Pirlita_10);
var lyr_L98Pirlita_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L98Pirlita_10, 
                style: style_L98Pirlita_10,
                popuplayertitle: "L 98-Pirlita",
                interactive: true,
                title: '<img src="styles/legend/L98Pirlita_10.png" /> L 98-Pirlita'
            });
var format_L99Bulboci_11 = new ol.format.GeoJSON();
var features_L99Bulboci_11 = format_L99Bulboci_11.readFeatures(json_L99Bulboci_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L99Bulboci_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L99Bulboci_11.addFeatures(features_L99Bulboci_11);
var lyr_L99Bulboci_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L99Bulboci_11, 
                style: style_L99Bulboci_11,
                popuplayertitle: "L 99-Bulboci",
                interactive: true,
                title: '<img src="styles/legend/L99Bulboci_11.png" /> L 99-Bulboci'
            });
var format_L99ReginaMaria_12 = new ol.format.GeoJSON();
var features_L99ReginaMaria_12 = format_L99ReginaMaria_12.readFeatures(json_L99ReginaMaria_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L99ReginaMaria_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L99ReginaMaria_12.addFeatures(features_L99ReginaMaria_12);
var lyr_L99ReginaMaria_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L99ReginaMaria_12, 
                style: style_L99ReginaMaria_12,
                popuplayertitle: "L 99-Regina Maria",
                interactive: true,
                title: '<img src="styles/legend/L99ReginaMaria_12.png" /> L 99-Regina Maria'
            });
var format_L1001BulbociNoi_13 = new ol.format.GeoJSON();
var features_L1001BulbociNoi_13 = format_L1001BulbociNoi_13.readFeatures(json_L1001BulbociNoi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L1001BulbociNoi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L1001BulbociNoi_13.addFeatures(features_L1001BulbociNoi_13);
var lyr_L1001BulbociNoi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L1001BulbociNoi_13, 
                style: style_L1001BulbociNoi_13,
                popuplayertitle: "L 100.1-Bulboci Noi",
                interactive: true,
                title: '<img src="styles/legend/L1001BulbociNoi_13.png" /> L 100.1-Bulboci Noi'
            });
var format_L101Parcani_14 = new ol.format.GeoJSON();
var features_L101Parcani_14 = format_L101Parcani_14.readFeatures(json_L101Parcani_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L101Parcani_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L101Parcani_14.addFeatures(features_L101Parcani_14);
var lyr_L101Parcani_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L101Parcani_14, 
                style: style_L101Parcani_14,
                popuplayertitle: "L 101-Parcani",
                interactive: true,
                title: '<img src="styles/legend/L101Parcani_14.png" /> L 101-Parcani'
            });
var format_L101RediCeresnovat_15 = new ol.format.GeoJSON();
var features_L101RediCeresnovat_15 = format_L101RediCeresnovat_15.readFeatures(json_L101RediCeresnovat_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L101RediCeresnovat_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L101RediCeresnovat_15.addFeatures(features_L101RediCeresnovat_15);
var lyr_L101RediCeresnovat_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L101RediCeresnovat_15, 
                style: style_L101RediCeresnovat_15,
                popuplayertitle: "L 101-Redi-Ceresnovat",
                interactive: true,
                title: '<img src="styles/legend/L101RediCeresnovat_15.png" /> L 101-Redi-Ceresnovat'
            });
var format_L1011Parcani_16 = new ol.format.GeoJSON();
var features_L1011Parcani_16 = format_L1011Parcani_16.readFeatures(json_L1011Parcani_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L1011Parcani_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L1011Parcani_16.addFeatures(features_L1011Parcani_16);
var lyr_L1011Parcani_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L1011Parcani_16, 
                style: style_L1011Parcani_16,
                popuplayertitle: "L 101.1-Parcani",
                interactive: true,
                title: '<img src="styles/legend/L1011Parcani_16.png" /> L 101.1-Parcani'
            });
var format_L103VolovitaVasilcau_17 = new ol.format.GeoJSON();
var features_L103VolovitaVasilcau_17 = format_L103VolovitaVasilcau_17.readFeatures(json_L103VolovitaVasilcau_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L103VolovitaVasilcau_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L103VolovitaVasilcau_17.addFeatures(features_L103VolovitaVasilcau_17);
var lyr_L103VolovitaVasilcau_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L103VolovitaVasilcau_17, 
                style: style_L103VolovitaVasilcau_17,
                popuplayertitle: "L 103-Volovita-Vasilcau",
                interactive: true,
                title: '<img src="styles/legend/L103VolovitaVasilcau_17.png" /> L 103-Volovita-Vasilcau'
            });
var format_L104Dubna_18 = new ol.format.GeoJSON();
var features_L104Dubna_18 = format_L104Dubna_18.readFeatures(json_L104Dubna_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L104Dubna_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L104Dubna_18.addFeatures(features_L104Dubna_18);
var lyr_L104Dubna_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L104Dubna_18, 
                style: style_L104Dubna_18,
                popuplayertitle: "L 104-Dubna",
                interactive: true,
                title: '<img src="styles/legend/L104Dubna_18.png" /> L 104-Dubna'
            });
var format_L107CainariiVechi_19 = new ol.format.GeoJSON();
var features_L107CainariiVechi_19 = format_L107CainariiVechi_19.readFeatures(json_L107CainariiVechi_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L107CainariiVechi_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L107CainariiVechi_19.addFeatures(features_L107CainariiVechi_19);
var lyr_L107CainariiVechi_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L107CainariiVechi_19, 
                style: style_L107CainariiVechi_19,
                popuplayertitle: "L 107-Cainarii-Vechi",
                interactive: true,
                title: '<img src="styles/legend/L107CainariiVechi_19.png" /> L 107-Cainarii-Vechi'
            });
var format_L108Zastinca_20 = new ol.format.GeoJSON();
var features_L108Zastinca_20 = format_L108Zastinca_20.readFeatures(json_L108Zastinca_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L108Zastinca_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L108Zastinca_20.addFeatures(features_L108Zastinca_20);
var lyr_L108Zastinca_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L108Zastinca_20, 
                style: style_L108Zastinca_20,
                popuplayertitle: "L 108-Zastinca",
                interactive: true,
                title: '<img src="styles/legend/L108Zastinca_20.png" /> L 108-Zastinca'
            });

lyr_2016OrtofotoRM_0.setVisible(true);lyr_22Terenuricadastrale_1.setVisible(true);lyr_21Cladiricadastrale_2.setVisible(true);lyr_23Sectoarecadastrale_3.setVisible(true);lyr_63UATImunicipiucomunorasat_4.setVisible(true);lyr_L87Badiceni_5.setVisible(true);lyr_L88Badiceni_6.setVisible(true);lyr_L91Solcani_7.setVisible(true);lyr_L94Egoreni_8.setVisible(true);lyr_L95Hristici_9.setVisible(true);lyr_L98Pirlita_10.setVisible(true);lyr_L99Bulboci_11.setVisible(true);lyr_L99ReginaMaria_12.setVisible(true);lyr_L1001BulbociNoi_13.setVisible(true);lyr_L101Parcani_14.setVisible(true);lyr_L101RediCeresnovat_15.setVisible(true);lyr_L1011Parcani_16.setVisible(true);lyr_L103VolovitaVasilcau_17.setVisible(true);lyr_L104Dubna_18.setVisible(true);lyr_L107CainariiVechi_19.setVisible(true);lyr_L108Zastinca_20.setVisible(true);
var layersList = [lyr_2016OrtofotoRM_0,lyr_22Terenuricadastrale_1,lyr_21Cladiricadastrale_2,lyr_23Sectoarecadastrale_3,lyr_63UATImunicipiucomunorasat_4,lyr_L87Badiceni_5,lyr_L88Badiceni_6,lyr_L91Solcani_7,lyr_L94Egoreni_8,lyr_L95Hristici_9,lyr_L98Pirlita_10,lyr_L99Bulboci_11,lyr_L99ReginaMaria_12,lyr_L1001BulbociNoi_13,lyr_L101Parcani_14,lyr_L101RediCeresnovat_15,lyr_L1011Parcani_16,lyr_L103VolovitaVasilcau_17,lyr_L104Dubna_18,lyr_L107CainariiVechi_19,lyr_L108Zastinca_20];
lyr_L87Badiceni_5.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L88Badiceni_6.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L91Solcani_7.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumire': 'Denumire', 'Lungimea': 'Lungimea', });
lyr_L94Egoreni_8.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L95Hristici_9.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L98Pirlita_10.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L99Bulboci_11.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L99ReginaMaria_12.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denimirea': 'Denimirea', 'Lungimea': 'Lungimea', });
lyr_L1001BulbociNoi_13.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L101Parcani_14.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L101RediCeresnovat_15.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L1011Parcani_16.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L103VolovitaVasilcau_17.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L104Dubna_18.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L107CainariiVechi_19.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L108Zastinca_20.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', 'Denumirea': 'Denumirea', 'Lungimea': 'Lungimea', });
lyr_L87Badiceni_5.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L88Badiceni_6.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L91Solcani_7.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumire': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L94Egoreni_8.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L95Hristici_9.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L98Pirlita_10.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L99Bulboci_11.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L99ReginaMaria_12.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denimirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L1001BulbociNoi_13.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L101Parcani_14.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L101RediCeresnovat_15.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L1011Parcani_16.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L103VolovitaVasilcau_17.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L104Dubna_18.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L107CainariiVechi_19.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L108Zastinca_20.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', 'Denumirea': 'TextEdit', 'Lungimea': 'TextEdit', });
lyr_L87Badiceni_5.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L88Badiceni_6.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L91Solcani_7.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumire': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L94Egoreni_8.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L95Hristici_9.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L98Pirlita_10.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'no label', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L99Bulboci_11.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L99ReginaMaria_12.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denimirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L1001BulbociNoi_13.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L101Parcani_14.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L101RediCeresnovat_15.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L1011Parcani_16.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L103VolovitaVasilcau_17.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L104Dubna_18.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L107CainariiVechi_19.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L108Zastinca_20.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', 'Denumirea': 'inline label - always visible', 'Lungimea': 'inline label - always visible', });
lyr_L108Zastinca_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});