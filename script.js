const state = {};

var data = [
    {
        "id": "1",
        "Exame": "HEMOGRAMA COMPLETO",
        "Codigo": "HEMO",
        "Tubo": "Roxo"
    },

    {
        "id": "2",
        "Exame": "GLICEMIA EM JEJUM / DOSAGEM DE GLICOSE",
        "Codigo": "XGLIC",
        "Tubo": "Amarelo"
    },

    {
        "id": "3",
        "Exame": "ACIDO ASCORBICO",
        "Codigo": "VITAC",
        "Tubo": "Verde"
    },

    {
        "id": "4",
        "Exame": "ACIDO FOLICO",
        "Codigo": "ACIFO",
        "Tubo": "Vermelho"
    },

    {
        "id": "5",
        "Exame": "ACIDO URICO",
        "Codigo": "URICO",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "ACIDO VALPROICO",
        "Codigo": "ACVAL",
        "Tubo": "Vermelho"
    },

    {
        "id": "7",
        "Exame": "ACTPO - ANTI-TPO - ANTICORPOS ANTI-PEROXIDA",
        "Codigo": "TPO",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "AMILA SERICA",
        "Codigo": "AMILA",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "ANTI-DNA",
        "Codigo": "DNA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTI NUCLEO",
        "Codigo": "ANUCL",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTI SSA - ANTI-SS-A (RO)",
        "Codigo": "ASSA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTI-TIREOGLOBULINA",
        "Codigo": "ATT C",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTICOAGULANTE LUPICO",
        "Codigo": "LUPIC",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "ANTI HBs (HEPATITE B)",
        "Codigo": "AHBS",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "FAN - PESQUISA DE AUTOANTICORPOS ANTINUCLEO",
        "Codigo": "FAN",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTI-TRANSGLUTAMINASE IGA",
        "Codigo": "ATRAA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTI-TRANSGLUTAMINASE IGG",
        "Codigo": "ATRAG",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTITRYPANOSSOMA CRUZI - CHAGAS - ANTICORPOS IGG",
        "Codigo": "CHAGA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ANTITRYPANOSSOMA CRUZI - CHAGAS - ANTICORPOS IGM",
        "Codigo": "CHAMA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "BETA HCG - DOSAGEM DE GONADOTROFINA",
        "Codigo": "TGBET",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "BILIRRUBINAS TOTAL E FRAÇOES",
        "Codigo": "BTF",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "CALCIO",
        "Codigo": "CA",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "CALCIO IONIZADO",
        "Codigo": "CAION",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "CAPACIDADE DE FIXACAO DO FERRO",
        "Codigo": "CAPF",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "CARDIOLIPINA - Anticorpos IgG",
        "Codigo": "CARDG",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "CARDIOLIPINA - Anticorpos IgM",
        "Codigo": "CARDM",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "CLEARENCE DE CREATININA 24 HORAS",
        "Codigo": "CLEAR",
        "Tubo": "Frasco 24h"
    },

    {
        "id": "6",
        "Exame": "CREATININA ( SORO )",
        "Codigo": "CREAT",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "COAGULOGRAMA",
        "Codigo": "TP1 + TTPA1",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "TEMPO DE PROTROMBINA (TP)",
        "Codigo": "TP1",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "TTPA(TROMBOPLASTINA)",
        "Codigo": "TTPA1",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "COLESTEROL TOTAL E FRAÇÕES (COL + HDL + LDL + VLDL + TRIGLICERIDES)",
        "Codigo": "CTF",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "COOMBS DIRETO",
        "Codigo": "COMBD",
        "Tubo": "Roxo"
    },

    {
        "id": "6",
        "Exame": "COOMBS INDIRETO",
        "Codigo": "COMBI",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "CREATINAFOSFOQUINASE (CPK)",
        "Codigo": "CPK",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "DESIDROGENASE LÁTICA",
        "Codigo": "DHL",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "CREATININA URINÁRIA 24 HORAS",
        "Codigo": "CRE24",
        "Tubo": ""
    },

    {
        "id": "6",
        "Exame": "ELETROFORESE PROTEINAS",
        "Codigo": "ELETR",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "ESTREPTOCOCOS BETA-HEMOLÍTICOS GRUPO B (ANAL)",
        "Codigo": "STRE",
        "Tubo": "Cotonete"
    },

    {
        "id": "6",
        "Exame": "ESTREPTOCOCOS BETA-HEMOLÍTICOS GRUPO B (ANAL)",
        "Codigo": "STREP",
        "Tubo": "Cotonete"
    },

    {
        "id": "6",
        "Exame": "ESTRADIOL",
        "Codigo": "ESTRA",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "DETERMINACAO DE FATOR REUMATOIDE (FR) - LATEX",
        "Codigo": "LATEX",
        "Tubo": "Vermelho"
    },

    {
        "id": "6",
        "Exame": "FATOR RH",
        "Codigo": "RH",
        "Tubo": "Roxo"
    },

    {
        "id": "6",
        "Exame": "COFATOR RISTOCETINA",
        "Codigo": "FVOWR",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "FATOR DE VON WILLEBRAND",
        "Codigo": "ESFVW",
        "Tubo": "Azul"
    },

    {
        "id": "6",
        "Exame": "FERRO SERICO",
        "Codigo": "FE",
        "Tubo": "Amarelo"
    },

    {
        "id": "6",
        "Exame": "FERRITINA SERICA",
        "Codigo": "FERRI",
        "Tubo": "Amarelo"
    },
    {
        "id": "6",
        "Exame": "FOSFATASE ALCALINA",
        "Codigo": "FALN",
        "Tubo": "Amarelo"
    },
    {
        "id": "6",
        "Exame": "TESTE TREPONEMICO FTA - ABS - ANTICORPOS IGG",
        "Codigo": "FTA",
        "Tubo": "Vermelho"
    },
    {
        "id": "6",
        "Exame": "TESTE TREPONEMICO FTA - ABS - ANTICORPOS IGM",
        "Codigo": "FTAM",
        "Tubo": "Vermelho"
    },
    {
        "id": "6",
        "Exame": "GAMA GT",
        "Codigo": "GAMGT",
        "Tubo": "Amarelo"
    },
    {
        "id": "6",
        "Exame": "HEMOGLOBINA GLICADA (HbA1c)",
        "Codigo": "HBGLI",
        "Tubo": "Roxo"
    },
    {
        "id": "6",
        "Exame": "HEPATITE B",
        "Codigo": "HBSAG",
        "Tubo": "Vermelho"
    },
    {
        "id": "6",
        "Exame": "HEPATITE C",
        "Codigo": "HCV",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "DEHIDROEPIANDROSTERONA - DHEA",
        "Codigo": "DHEA",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "ANTI HIV",
        "Codigo": "HIV",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "IMUNOGLOBULINA A - IgA",
        "Codigo": "IGA",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "IMUNOGLOBULINA E - IgE",
        "Codigo": "UIGE",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "IMUNOGLOBULINA G - IgG",
        "Codigo": "UIGG",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "IMUNOGLOBULINA M - IgM",
        "Codigo": "UIGM",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "MAGNESIO",
        "Codigo": "MGS",
        "Tubo": "Amarelo"
    },

        {
        "id": "6",
        "Exame": "PARASITOLOGICO DE FEZES (PRIMEIRA AMOSTRA)",
        "Codigo": "PPF1",
        "Tubo": "Frasco coletor"
    },

    
        {
        "id": "6",
        "Exame": "PARASITOLOGICO DE FEZES (SEGUNDA AMOSTRA)",
        "Codigo": "PPF2",
        "Tubo": "Frasco coletor"
    },

    
        {
        "id": "6",
        "Exame": "PARASITOLOGICO DE FEZES (TERCEIRA AMOSTRA)",
        "Codigo": "PPF3",
        "Tubo": "Frasco coletor"
    },

    
    {
        "id": "6",
        "Exame": "PARATORMONIO - PTH",
        "Codigo": "PTH",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "POTASSIO",
        "Codigo": "K",
        "Tubo": "Amarelo"
    },

        {
        "id": "6",
        "Exame": "TRIGLICERIDES",
        "Codigo": "TRI",
        "Tubo": "Amarelo"
    },

        {
        "id": "6",
        "Exame": "PROLACTINA",
        "Codigo": "PROLA",
        "Tubo": "Vermelho"
    },

        {
        "id": "6",
        "Exame": "PROTEINURIA DE 24 HORAS",
        "Codigo": "PT24",
        "Tubo": "Frasco 24h"
    },

        {
        "id": "6",
        "Exame": "SANGUE OCULTO NAS FEZES 1 amostra",
        "Codigo": "OCUL1",
        "Tubo": "Frasco coletor"
    },

        {
        "id": "6",
        "Exame": "SANGUE OCULTO NAS FEZES 2 amostra",
        "Codigo": "OCUL2",
        "Tubo": "Frasco coletor"
    },

        {
        "id": "6",
        "Exame": "SANGUE OCULTO NAS FEZES 3 amostra",
        "Codigo": "OCUL3",
        "Tubo": "Frasco coletor"
    },

        {
        "id": "6",
        "Exame": "PROTEINA C REATIVA",
        "Codigo": "PCR",
        "Tubo": ""
    },

        {
        "id": "6",
        "Exame": "VDRL - SIFILIS",
        "Codigo": "VDRL",
        "Tubo": ""
    },

        {
        "id": "6",
        "Exame": "SODIO",
        "Codigo": "NA",
        "Tubo": ""
    },

        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },

        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },


        {
        "id": "6",
        "Exame": "",
        "Codigo": "",
        "Tubo": ""
    },



    
];

state.data = data;
state.customData = data;
var tbody = document.getElementById("tbody");
state.valueSatus = "";
state.valueMedico = "";
state.numberDisplay = 0;
var tbody = document.getElementById("tbody");


// // for (let key in data) {
// //     // console.log(data[key],key,);
// //     let elem = create_elment(data[key]);
// //     tbody.insertAdjacentHTML('beforeend',elem);

// // }

function getTuboClass(tubo) {
    // Convertemos para minúsculo para evitar problemas se alguém digitar "Roxo" ou "roxo"
    switch (tubo.toLowerCase()) {
        case 'roxo':
            return 'class="Equipe roxo"';
        case 'cinza':
            return 'class="Equipe cinza"';
        case 'amarelo':
        case 'amarela':
            return 'class="Equipe amarelo"';
        case 'vermelho':
            return 'class="Equipe vermelho"';
        case 'azul':
            return 'class="Equipe azul"';
        case 'verde':
            return 'class="Equipe verde"';
        default:
            return 'class="Equipe text-success"'; // Cor padrão caso não encontre nenhuma
    }
}

function create_elment(item) {
    return `
    <tr>
        <td>${item.Exame}</td>
        <td>${item.Codigo}</td>
        <td><span ${getTuboClass(item.Tubo)}>•</span> ${item.Tubo}</td>
    </tr>
    `;
}


loadData();

// console.log(get_text);
//ds

var numberBD = document.getElementById('number1').innerHTML;
var numberKT = document.getElementById('number2').innerHTML;

function loadData() {
    document.getElementById('number1').innerHTML = 1;
    document.getElementById('number2').innerHTML = 5;
    state.valueEntries = 5;
    state.valueEquipe = "Any";
    state.valueMedico = "All";
    let data = state.customData.slice(0, 0);
    tbody.innerHTML = "";
    data.forEach(item => {
        tbody.insertAdjacentHTML('beforeend', create_elment(item));
    })
}


var select = document.getElementById("select-entries");
var num_entries;
var numPage;
var show;

var dem;

//tao li
function create_li(item) {
    return `
        <a onclick="changeclick(this)" href="#" class="page-link">${item}</a>
    `;
}
function changeclick(id) {
    return 1;
}

taosubpag();
ktshow();
chia_theo_show();
function taosubpag() {
    var subpage = document.getElementById("subpage");
    for (var i = 1; i <= Math.ceil(data.length / 5); i++) {
        var li = document.createElement("li");
        li.innerHTML = create_li(i);
        subpage.appendChild(li);
    }
};

function ktshow() {
    document.getElementById('select-entries').addEventListener('change', e => {
        let selectDataforEntry = state.customData.slice(0, e.target.value);
        tbody.innerHTML = "";
        selectDataforEntry.forEach(item => {
            tbody.insertAdjacentHTML('beforeend', create_elment(item));
        })
    });


}
var select = document.getElementById("select-entries");
var num_entries;
var numPage;
function chia_theo_show() {

    select.onchange = function () {
        var option = select.children;
        for (var i = 0; i < option.length; i++) {
            if (option[i].selected) {
                num_entries = option[i].value;
            }
        }
        numPage = Math.ceil(data.length / num_entries);
        document.getElementById('number1').innerHTML = 1;
        document.getElementById('number2').innerHTML = num_entries;
        subpage.innerHTML = "";
        for (var i = 1; i <= numPage; i++) {
            var li = document.createElement("li");
            li.innerHTML = create_li(i);
            li.value = i;
            subpage.appendChild(li);
        }
    }
}


var luaChon = subpage.children;
var page = document.getElementById("page");
var so;
    for (var i = 1; i <= luaChon.length; i++) {
        if (changeclick(luaChon[i])==1)
            so=i;
    }


var search = document.getElementById("search");
search.addEventListener("keyup", function () {
    var searchValue = (document.getElementById("search").value).toLowerCase();
    tbody.innerHTML = "";
    
    if (searchValue == "") {
        loadData(); // Dica: usei loadData() aqui no lugar de load() para recarregar a lista certinho quando a barra ficar vazia
    } else {
        for (var i = 0; i < data.length; i++) {
            if (
                data[i].id.indexOf(searchValue) >= 0 || 
                (data[i].Exame).toLowerCase().indexOf(searchValue) >= 0 || 
                (data[i].Codigo).toLowerCase().indexOf(searchValue) >= 0 || 
                (data[i].Tubo).toLowerCase().indexOf(searchValue) >= 0
            ) {
                xuat(data[i]);
            }
        }
    }
});

function xuat(item) {

    var tr = document.createElement("tr");
    tr.innerHTML = create_elment(item);
    tbody.appendChild(tr);
}

function load() {
    /*for (var i = 0; i < 0; i++) {
        //console.log(data[i]);
        //console.log(item);
        var tr = document.createElement("tr");
        tr.innerHTML = create_elment(data[i]);
        tbody.appendChild(tr);
    }*/
}
