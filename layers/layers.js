var wms_layers = [];

var format_estadosl_2007_0 = new ol.format.GeoJSON();
var features_estadosl_2007_0 = format_estadosl_2007_0.readFeatures(json_estadosl_2007_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estadosl_2007_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estadosl_2007_0.addFeatures(features_estadosl_2007_0);
var lyr_estadosl_2007_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estadosl_2007_0, 
                style: style_estadosl_2007_0,
                popuplayertitle: "estadosl_2007",
                interactive: true,
                title: '<img src="styles/legend/estadosl_2007_0.png" /> estadosl_2007'
            });
var format_APUnificado_1 = new ol.format.GeoJSON();
var features_APUnificado_1 = format_APUnificado_1.readFeatures(json_APUnificado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APUnificado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APUnificado_1.addFeatures(features_APUnificado_1);
var lyr_APUnificado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APUnificado_1, 
                style: style_APUnificado_1,
                popuplayertitle: "AP Unificado",
                interactive: true,
                title: '<img src="styles/legend/APUnificado_1.png" /> AP Unificado'
            });
var format_IPSmunicipiosdaAP_2 = new ol.format.GeoJSON();
var features_IPSmunicipiosdaAP_2 = format_IPSmunicipiosdaAP_2.readFeatures(json_IPSmunicipiosdaAP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPSmunicipiosdaAP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPSmunicipiosdaAP_2.addFeatures(features_IPSmunicipiosdaAP_2);
var lyr_IPSmunicipiosdaAP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPSmunicipiosdaAP_2, 
                style: style_IPSmunicipiosdaAP_2,
                popuplayertitle: "IPS municipios da AP",
                interactive: true,
                title: '<img src="styles/legend/IPSmunicipiosdaAP_2.png" /> IPS municipios da AP'
            });
var format_LocalizacaoSOS_3 = new ol.format.GeoJSON();
var features_LocalizacaoSOS_3 = format_LocalizacaoSOS_3.readFeatures(json_LocalizacaoSOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacaoSOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacaoSOS_3.addFeatures(features_LocalizacaoSOS_3);
var lyr_LocalizacaoSOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalizacaoSOS_3, 
                style: style_LocalizacaoSOS_3,
                popuplayertitle: "Localizacao SOS",
                interactive: true,
                title: '<img src="styles/legend/LocalizacaoSOS_3.png" /> Localizacao SOS'
            });

lyr_estadosl_2007_0.setVisible(true);lyr_APUnificado_1.setVisible(true);lyr_IPSmunicipiosdaAP_2.setVisible(true);lyr_LocalizacaoSOS_3.setVisible(true);
var layersList = [lyr_estadosl_2007_0,lyr_APUnificado_1,lyr_IPSmunicipiosdaAP_2,lyr_LocalizacaoSOS_3];
lyr_estadosl_2007_0.set('fieldAliases', {'GID0': 'GID0', 'CODIGOIB1': 'CODIGOIB1', 'NOMEUF2': 'NOMEUF2', 'SIGLAUF3': 'SIGLAUF3', 'uc mun tot': 'uc mun tot', 'a ucm tot': 'a ucm tot', });
lyr_APUnificado_1.set('fieldAliases', {'AP': 'AP', 'area (ha)': 'area (ha)', });
lyr_IPSmunicipiosdaAP_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'interesse': 'interesse', 'Nucleo elo': 'Nucleo elo', 'pcj': 'pcj', 'IPS Brasil': 'IPS Brasil', 'Necessidad': 'Necessidad', 'Fundamento': 'Fundamento', 'Oportunida': 'Oportunida', 'Nutrição': 'Nutrição', 'Água e Sa': 'Água e Sa', 'Moradia': 'Moradia', 'Segurança': 'Segurança', 'Acesso ao': 'Acesso ao', 'Acesso �': 'Acesso �', 'Saúde e B': 'Saúde e B', 'Qualidade': 'Qualidade', 'Direitos I': 'Direitos I', 'Liberdades': 'Liberdades', 'Inclusão': 'Inclusão', 'Acesso �_1': 'Acesso �_1', 'Populaçã': 'Populaçã', 'PIB Real p': 'PIB Real p', 'Mortalidad': 'Mortalidad', 'Mortalid_1': 'Mortalid_1', 'Hospitaliz': 'Hospitaliz', 'Cobertura': 'Cobertura', 'Subnutriç': 'Subnutriç', 'Abastecime': 'Abastecime', 'Índice de': 'Índice de', 'Esgotament': 'Esgotament', 'Índice _1': 'Índice _1', 'Domicílio': 'Domicílio', 'Domicíl_1': 'Domicíl_1', 'Domicíl_2': 'Domicíl_2', 'Domicíl_3': 'Domicíl_3', 'Mortes por': 'Mortes por', 'Homicídio': 'Homicídio', 'Assassinat': 'Assassinat', 'Assassin_1': 'Assassin_1', 'Evasão no': 'Evasão no', 'Distorçã': 'Distorçã', 'Abandono n': 'Abandono n', 'Abandono_1': 'Abandono_1', 'Reprovaç�': 'Reprovaç�', 'Ideb Ensin': 'Ideb Ensin', 'Densidade': 'Densidade', 'Densidad_1': 'Densidad_1', 'Cobertur_1': 'Cobertur_1', 'Qualidad_1': 'Qualidad_1', 'Expectativ': 'Expectativ', 'Mortalid_2': 'Mortalid_2', 'Mortalid_3': 'Mortalid_3', 'Suicídios': 'Suicídios', 'Obesidade': 'Obesidade', 'Índice _2': 'Índice _2', 'Supressão': 'Supressão', 'Focos de C': 'Focos de C', 'Emissões': 'Emissões', 'Áreas Ver': 'Áreas Ver', 'Acesso a P': 'Acesso a P', 'Existênci': 'Existênci', 'Taxa de Co': 'Taxa de Co', 'Índice _3': 'Índice _3', 'Acesso �_2': 'Acesso �_2', 'Gravidez n': 'Gravidez n', 'Trabalho I': 'Trabalho I', 'Praças e': 'Praças e', 'Paridade d': 'Paridade d', 'Paridade_1': 'Paridade_1', 'Violência': 'Violência', 'Violênc_1': 'Violênc_1', 'Violênc_2': 'Violênc_2', 'Empregados': 'Empregados', 'Mulheres E': 'Mulheres E', 'Nota Médi': 'Nota Médi', 'IPS2024': 'IPS2024', });
lyr_LocalizacaoSOS_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_estadosl_2007_0.set('fieldImages', {'GID0': 'TextEdit', 'CODIGOIB1': 'TextEdit', 'NOMEUF2': 'TextEdit', 'SIGLAUF3': 'TextEdit', 'uc mun tot': 'TextEdit', 'a ucm tot': 'TextEdit', });
lyr_APUnificado_1.set('fieldImages', {'AP': 'TextEdit', 'area (ha)': 'TextEdit', });
lyr_IPSmunicipiosdaAP_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'interesse': 'TextEdit', 'Nucleo elo': 'TextEdit', 'pcj': 'TextEdit', 'IPS Brasil': 'TextEdit', 'Necessidad': 'TextEdit', 'Fundamento': 'TextEdit', 'Oportunida': 'TextEdit', 'Nutrição': 'TextEdit', 'Água e Sa': 'TextEdit', 'Moradia': 'TextEdit', 'Segurança': 'TextEdit', 'Acesso ao': 'TextEdit', 'Acesso �': 'TextEdit', 'Saúde e B': 'TextEdit', 'Qualidade': 'TextEdit', 'Direitos I': 'TextEdit', 'Liberdades': 'TextEdit', 'Inclusão': 'TextEdit', 'Acesso �_1': 'TextEdit', 'Populaçã': 'TextEdit', 'PIB Real p': 'TextEdit', 'Mortalidad': 'TextEdit', 'Mortalid_1': 'TextEdit', 'Hospitaliz': 'TextEdit', 'Cobertura': 'TextEdit', 'Subnutriç': 'TextEdit', 'Abastecime': 'TextEdit', 'Índice de': 'TextEdit', 'Esgotament': 'TextEdit', 'Índice _1': 'TextEdit', 'Domicílio': 'TextEdit', 'Domicíl_1': 'TextEdit', 'Domicíl_2': 'TextEdit', 'Domicíl_3': 'TextEdit', 'Mortes por': 'TextEdit', 'Homicídio': 'TextEdit', 'Assassinat': 'TextEdit', 'Assassin_1': 'TextEdit', 'Evasão no': 'TextEdit', 'Distorçã': 'TextEdit', 'Abandono n': 'TextEdit', 'Abandono_1': 'TextEdit', 'Reprovaç�': 'TextEdit', 'Ideb Ensin': 'TextEdit', 'Densidade': 'TextEdit', 'Densidad_1': 'TextEdit', 'Cobertur_1': 'TextEdit', 'Qualidad_1': 'TextEdit', 'Expectativ': 'TextEdit', 'Mortalid_2': 'TextEdit', 'Mortalid_3': 'TextEdit', 'Suicídios': 'TextEdit', 'Obesidade': 'TextEdit', 'Índice _2': 'TextEdit', 'Supressão': 'TextEdit', 'Focos de C': 'TextEdit', 'Emissões': 'TextEdit', 'Áreas Ver': 'TextEdit', 'Acesso a P': 'TextEdit', 'Existênci': 'TextEdit', 'Taxa de Co': 'TextEdit', 'Índice _3': 'TextEdit', 'Acesso �_2': 'TextEdit', 'Gravidez n': 'TextEdit', 'Trabalho I': 'TextEdit', 'Praças e': 'TextEdit', 'Paridade d': 'TextEdit', 'Paridade_1': 'TextEdit', 'Violência': 'TextEdit', 'Violênc_1': 'TextEdit', 'Violênc_2': 'TextEdit', 'Empregados': 'TextEdit', 'Mulheres E': 'TextEdit', 'Nota Médi': 'TextEdit', 'IPS2024': 'TextEdit', });
lyr_LocalizacaoSOS_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_estadosl_2007_0.set('fieldLabels', {'GID0': 'inline label - always visible', 'CODIGOIB1': 'inline label - always visible', 'NOMEUF2': 'inline label - always visible', 'SIGLAUF3': 'inline label - always visible', 'uc mun tot': 'inline label - always visible', 'a ucm tot': 'inline label - always visible', });
lyr_APUnificado_1.set('fieldLabels', {'AP': 'inline label - always visible', 'area (ha)': 'inline label - always visible', });
lyr_IPSmunicipiosdaAP_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'interesse': 'no label', 'Nucleo elo': 'no label', 'pcj': 'no label', 'IPS Brasil': 'no label', 'Necessidad': 'no label', 'Fundamento': 'no label', 'Oportunida': 'no label', 'Nutrição': 'no label', 'Água e Sa': 'no label', 'Moradia': 'no label', 'Segurança': 'no label', 'Acesso ao': 'no label', 'Acesso �': 'no label', 'Saúde e B': 'no label', 'Qualidade': 'no label', 'Direitos I': 'no label', 'Liberdades': 'no label', 'Inclusão': 'no label', 'Acesso �_1': 'no label', 'Populaçã': 'no label', 'PIB Real p': 'no label', 'Mortalidad': 'no label', 'Mortalid_1': 'no label', 'Hospitaliz': 'no label', 'Cobertura': 'no label', 'Subnutriç': 'no label', 'Abastecime': 'no label', 'Índice de': 'no label', 'Esgotament': 'no label', 'Índice _1': 'no label', 'Domicílio': 'no label', 'Domicíl_1': 'no label', 'Domicíl_2': 'no label', 'Domicíl_3': 'no label', 'Mortes por': 'no label', 'Homicídio': 'no label', 'Assassinat': 'no label', 'Assassin_1': 'no label', 'Evasão no': 'no label', 'Distorçã': 'no label', 'Abandono n': 'no label', 'Abandono_1': 'no label', 'Reprovaç�': 'no label', 'Ideb Ensin': 'no label', 'Densidade': 'no label', 'Densidad_1': 'no label', 'Cobertur_1': 'no label', 'Qualidad_1': 'no label', 'Expectativ': 'no label', 'Mortalid_2': 'no label', 'Mortalid_3': 'no label', 'Suicídios': 'no label', 'Obesidade': 'no label', 'Índice _2': 'no label', 'Supressão': 'no label', 'Focos de C': 'no label', 'Emissões': 'no label', 'Áreas Ver': 'no label', 'Acesso a P': 'no label', 'Existênci': 'no label', 'Taxa de Co': 'no label', 'Índice _3': 'no label', 'Acesso �_2': 'no label', 'Gravidez n': 'no label', 'Trabalho I': 'no label', 'Praças e': 'no label', 'Paridade d': 'no label', 'Paridade_1': 'no label', 'Violência': 'no label', 'Violênc_1': 'no label', 'Violênc_2': 'no label', 'Empregados': 'no label', 'Mulheres E': 'no label', 'Nota Médi': 'no label', 'IPS2024': 'inline label - always visible', });
lyr_LocalizacaoSOS_3.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_LocalizacaoSOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});