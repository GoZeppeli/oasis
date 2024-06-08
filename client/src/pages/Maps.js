import React, { useState, useEffect, useRef } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";
import useMousePosition from "./mouseHook";
import { TransformWrapper, TransformComponent, useControls, } from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>Zoomer</button>
      <button onClick={() => zoomOut()}>Dézoomer</button>
      <button onClick={() => resetTransform()}>Restaurer</button>
      <div className="legend">
            <div></div>
            <span>pays fichés</span>
          </div>
    </div>
  );
};



export default function NotFound() {
    const countries = [{
        "name": "Afghanistan",
        "code": "AF"
      },{
        "name": "Åland Islands",
        "code": "AX"
      },{
        "name": "Albanie",
        "code": "AL"
      },{
        "name": "Algerie",
        "code": "DZ"
      },{
        "name": "American Samoa",
        "code": "AS"
      },{
        "name": "Andorre",
        "code": "AD"
      },{
        "name": "Angola",
        "code": "AO"
      },{
        "name": "Anguilla",
        "code": "AI"
      },{
        "name": "Antarctica",
        "code": "AQ"
      },{
        "name": "Antigua et Barbuda",
        "code": "AG"
      },{
        "name": "Argentine",
        "code": "AR"
      },{
        "name": "Armenie",
        "code": "AM"
      },{
        "name": "Aruba",
        "code": "AW"
      },{
        "name": "Australie",
        "code": "AU"
      },{
        "name": "Autriche",
        "code": "AT"
      },{
        "name": "Azerbaidjan",
        "code": "AZ"
      },{
        "name": "Bahamas",
        "code": "BS"
      },{
        "name": "Bahreïn",
        "code": "BH"
      },{
        "name": "Bangladesh",
        "code": "BD"
      },{
        "name": "Barbades",
        "code": "BB"
      },{
        "name": "Biélorussie",
        "code": "BY"
      },{
        "name": "Belgique",
        "code": "BE"
      },{
        "name": "Belize",
        "code": "BZ"
      },{
        "name": "Benin",
        "code": "BJ"
      },{
        "name": "Bermuda",
        "code": "BM"
      },{
        "name": "Bhutan",
        "code": "BT"
      },{
        "name": "Bolivia",
        "code": "BO"
      },{
        "name": "Bosnia and Herzegovina",
        "code": "BA"
      },{
        "name": "Botswana",
        "code": "BW"
      },{
        "name": "Bouvet Island",
        "code": "BV"
      },{
        "name": "Brazil",
        "code": "BR"
      },{
        "name": "British Indian Ocean Territory",
        "code": "IO"
      },{
        "name": "Brunei Darussalam",
        "code": "BN"
      },{
        "name": "Bulgaria",
        "code": "BG"
      },{
        "name": "Burkina Faso",
        "code": "BF"
      },{
        "name": "Burundi",
        "code": "BI"
      },{
        "name": "Cambodia",
        "code": "KH"
      },{
        "name": "Cameroon",
        "code": "CM"
      },{
        "name": "Canada",
        "code": "CA"
      },{
        "name": "Cape Verde",
        "code": "CV"
      },{
        "name": "Cayman Islands",
        "code": "KY"
      },{
        "name": "Central African Republic",
        "code": "CF"
      },{
        "name": "Chad",
        "code": "TD"
      },{
        "name": "Chile",
        "code": "CL"
      },{
        "name": "China",
        "code": "CN"
      },{
        "name": "Christmas Island",
        "code": "CX"
      },{
        "name": "Cocos (Keeling) Islands",
        "code": "CC"
      },{
        "name": "Colombia",
        "code": "CO"
      },{
        "name": "Comoros",
        "code": "KM"
      },{
        "name": "Congo",
        "code": "CG"
      },{
        "name": "Congo, The Democratic Republic of the",
        "code": "CD"
      },{
        "name": "Cook Islands",
        "code": "CK"
      },{
        "name": "Costa Rica",
        "code": "CR"
      },{
        "name": "Croatia",
        "code": "HR"
      },{
        "name": "Cuba",
        "code": "CU"
      },{
        "name": "Cyprus",
        "code": "CY"
      },{
        "name": "Czech Republic",
        "code": "CZ"
      },{
        "name": "Denmark",
        "code": "DK"
      },{
        "name": "Djibouti",
        "code": "DJ"
      },{
        "name": "Dominica",
        "code": "DM"
      },{
        "name": "Dominican Republic",
        "code": "DO"
      },{
        "name": "Ecuador",
        "code": "EC"
      },{
        "name": "Egypt",
        "code": "EG"
      },{
        "name": "El Salvador",
        "code": "SV"
      },{
        "name": "Equatorial Guinea",
        "code": "GQ"
      },{
        "name": "Eritrea",
        "code": "ER"
      },{
        "name": "Estonia",
        "code": "EE"
      },{
        "name": "Ethiopia",
        "code": "ET"
      },{
        "name": "Falkland Islands (Malvinas)",
        "code": "FK"
      },{
        "name": "Faroe Islands",
        "code": "FO"
      },{
        "name": "Fiji",
        "code": "FJ"
      },{
        "name": "Finland",
        "code": "FI"
      },{
        "name": "France",
        "code": "FR"
      },{
        "name": "French Guiana",
        "code": "GF"
      },{
        "name": "French Polynesia",
        "code": "PF"
      },{
        "name": "French Southern Territories",
        "code": "TF"
      },{
        "name": "Gabon",
        "code": "GA"
      },{
        "name": "Gambia",
        "code": "GM"
      },{
        "name": "Georgia",
        "code": "GE"
      },{
        "name": "Germany",
        "code": "DE"
      },{
        "name": "Ghana",
        "code": "GH"
      },{
        "name": "Gibraltar",
        "code": "GI"
      },{
        "name": "Greece",
        "code": "GR"
      },{
        "name": "Greenland",
        "code": "GL"
      },{
        "name": "Grenada",
        "code": "GD"
      },{
        "name": "Guadeloupe",
        "code": "GP"
      },{
        "name": "Guam",
        "code": "GU"
      },{
        "name": "Guatemala",
        "code": "GT"
      },{
        "name": "Guernsey",
        "code": "GG"
      },{
        "name": "Guinea",
        "code": "GN"
      },{
        "name": "Guinea-Bissau",
        "code": "GW"
      },{
        "name": "Guyana",
        "code": "GY"
      },{
        "name": "Haiti",
        "code": "HT"
      },{
        "name": "Heard Island and Mcdonald Islands",
        "code": "HM"
      },{
        "name": "Holy See (Vatican City State)",
        "code": "VA"
      },{
        "name": "Honduras",
        "code": "HN"
      },{
        "name": "Hong Kong",
        "code": "HK"
      },{
        "name": "Hungary",
        "code": "HU"
      },{
        "name": "Iceland",
        "code": "IS"
      },{
        "name": "India",
        "code": "IN"
      },{
        "name": "Indonesia",
        "code": "ID"
      },{
        "name": "Iran, Islamic Republic Of",
        "code": "IR"
      },{
        "name": "Iraq",
        "code": "IQ"
      },{
        "name": "Ireland",
        "code": "IE"
      },{
        "name": "Isle of Man",
        "code": "IM"
      },{
        "name": "Israel",
        "code": "IL"
      },{
        "name": "Italy",
        "code": "IT"
      },{
        "name": "Jamaica",
        "code": "JM"
      },{
        "name": "Japan",
        "code": "JP"
      },{
        "name": "Jersey",
        "code": "JE"
      },{
        "name": "Jordan",
        "code": "JO"
      },{
        "name": "Kazakhstan",
        "code": "KZ"
      },{
        "name": "Kenya",
        "code": "KE"
      },{
        "name": "Kiribati",
        "code": "KI"
      },{
        "name": "Korea, Republic of",
        "code": "KR"
      },{
        "name": "Kuwait",
        "code": "KW"
      },{
        "name": "Kyrgyzstan",
        "code": "KG"
      },{
        "name": "Latvia",
        "code": "LV"
      },{
        "name": "Lebanon",
        "code": "LB"
      },{
        "name": "Lesotho",
        "code": "LS"
      },{
        "name": "Liberia",
        "code": "LR"
      },{
        "name": "Libyan Arab Jamahiriya",
        "code": "LY"
      },{
        "name": "Liechtenstein",
        "code": "LI"
      },{
        "name": "Lithuania",
        "code": "LT"
      },{
        "name": "Luxembourg",
        "code": "LU"
      },{
        "name": "Macao",
        "code": "MO"
      },{
        "name": "North Macedonia",
        "code": "MK"
      },{
        "name": "Madagascar",
        "code": "MG"
      },{
        "name": "Malawi",
        "code": "MW"
      },{
        "name": "Malaysia",
        "code": "MY"
      },{
        "name": "Maldives",
        "code": "MV"
      },{
        "name": "Mali",
        "code": "ML"
      },{
        "name": "Malta",
        "code": "MT"
      },{
        "name": "Marshall Islands",
        "code": "MH"
      },{
        "name": "Martinique",
        "code": "MQ"
      },{
        "name": "Mauritania",
        "code": "MR"
      },{
        "name": "Mauritius",
        "code": "MU"
      },{
        "name": "Mayotte",
        "code": "YT"
      },{
        "name": "Mexico",
        "code": "MX"
      },{
        "name": "Micronesia, Federated States of",
        "code": "FM"
      },{
        "name": "Moldova, Republic of",
        "code": "MD"
      },{
        "name": "Monaco",
        "code": "MC"
      },{
        "name": "Mongolia",
        "code": "MN"
      },{
        "name": "Montserrat",
        "code": "MS"
      },{
        "name": "Morocco",
        "code": "MA"
      },{
        "name": "Mozambique",
        "code": "MZ"
      },{
        "name": "Myanmar",
        "code": "MM"
      },{
        "name": "Namibia",
        "code": "NA"
      },{
        "name": "Nauru",
        "code": "NR"
      },{
        "name": "Nepal",
        "code": "NP"
      },{
        "name": "Netherlands",
        "code": "NL"
      },{
        "name": "Netherlands Antilles",
        "code": "AN"
      },{
        "name": "New Caledonia",
        "code": "NC"
      },{
        "name": "New Zealand",
        "code": "NZ"
      },{
        "name": "Nicaragua",
        "code": "NI"
      },{
        "name": "Niger",
        "code": "NE"
      },{
        "name": "Nigeria",
        "code": "NG"
      },{
        "name": "Niue",
        "code": "NU"
      },{
        "name": "Norfolk Island",
        "code": "NF"
      },{
        "name": "Northern Mariana Islands",
        "code": "MP"
      },{
        "name": "Norway",
        "code": "NO"
      },{
        "name": "Oman",
        "code": "OM"
      },{
        "name": "Pakistan",
        "code": "PK"
      },{
        "name": "Palau",
        "code": "PW"
      },{
        "name": "Palestinian Territory, Occupied",
        "code": "PS"
      },{
        "name": "Panama",
        "code": "PA"
      },{
        "name": "Papua New Guinea",
        "code": "PG"
      },{
        "name": "Paraguay",
        "code": "PY"
      },{
        "name": "Peru",
        "code": "PE"
      },{
        "name": "Philippines",
        "code": "PH"
      },{
        "name": "Pitcairn Islands",
        "code": "PN"
      },{
        "name": "Poland",
        "code": "PL"
      },{
        "name": "Portugal",
        "code": "PT"
      },{
        "name": "Puerto Rico",
        "code": "PR"
      },{
        "name": "Qatar",
        "code": "QA"
      },{
        "name": "Reunion",
        "code": "RE"
      },{
        "name": "Romania",
        "code": "RO"
      },{
        "name": "Russian Federation",
        "code": "RU"
      },{
        "name": "Rwanda",
        "code": "RW"
      },{
        "name": "Saint Helena",
        "code": "SH"
      },{
        "name": "Saint Kitts and Nevis",
        "code": "KN"
      },{
        "name": "Saint Lucia",
        "code": "LC"
      },{
        "name": "Saint Pierre and Miquelon",
        "code": "PM"
      },{
        "name": "Saint Vincent and the Grenadines",
        "code": "VC"
      },{
        "name": "Samoa",
        "code": "WS"
      },{
        "name": "San Marino",
        "code": "SM"
      },{
        "name": "Sao Tome and Principe",
        "code": "ST"
      },{
        "name": "Saudi Arabia",
        "code": "SA"
      },{
        "name": "Senegal",
        "code": "SN"
      },{
        "name": "Serbia and Montenegro",
        "code": "CS"
      },{
        "name": "Seychelles",
        "code": "SC"
      },{
        "name": "Sierra Leone",
        "code": "SL"
      },{
        "name": "Singapore",
        "code": "SG"
      },{
        "name": "Slovakia",
        "code": "SK"
      },{
        "name": "Slovenia",
        "code": "SI"
      },{
        "name": "Solomon Islands",
        "code": "SB"
      },{
        "name": "Somalia",
        "code": "SO"
      },{
        "name": "South Africa",
        "code": "ZA"
      },{
        "name": "South Georgia and the South Sandwich Islands",
        "code": "GS"
      },{
        "name": "Spain",
        "code": "ES"
      },{
        "name": "Sri Lanka",
        "code": "LK"
      },{
        "name": "Sudan",
        "code": "SD"
      },{
        "name": "Suriname",
        "code": "SR"
      },{
        "name": "Svalbard and Jan Mayen",
        "code": "SJ"
      },{
        "name": "Swaziland",
        "code": "SZ"
      },{
        "name": "Sweden",
        "code": "SE"
      },{
        "name": "Switzerland",
        "code": "CH"
      },{
        "name": "Syrian Arab Republic",
        "code": "SY"
      },{
        "name": "Taiwan",
        "code": "TW"
      },{
        "name": "Tajikistan",
        "code": "TJ"
      },{
        "name": "Tanzania, United Republic of",
        "code": "TZ"
      },{
        "name": "Thailand",
        "code": "TH"
      },{
        "name": "Timor-Leste",
        "code": "TL"
      },{
        "name": "Togo",
        "code": "TG"
      },{
        "name": "Tokelau",
        "code": "TK"
      },{
        "name": "Tonga",
        "code": "TO"
      },{
        "name": "Trinidad and Tobago",
        "code": "TT"
      },{
        "name": "Tunisia",
        "code": "TN"
      },{
        "name": "Turkey",
        "code": "TR"
      },{
        "name": "Turkmenistan",
        "code": "TM"
      },{
        "name": "Turks and Caicos Islands",
        "code": "TC"
      },{
        "name": "Tuvalu",
        "code": "TV"
      },{
        "name": "Uganda",
        "code": "UG"
      },{
        "name": "Ukraine",
        "code": "UA"
      },{
        "name": "United Arab Emirates",
        "code": "AE"
      },{
        "name": "United Kingdom",
        "code": "GB"
      },{
        "name": "United States",
        "code": "US"
      },{
        "name": "United States Minor Outlying Islands",
        "code": "UM"
      },{
        "name": "Uruguay",
        "code": "UY"
      },{
        "name": "Uzbekistan",
        "code": "UZ"
      },{
        "name": "Vanuatu",
        "code": "VU"
      },{
        "name": "Venezuela",
        "code": "VE"
      },{
        "name": "Vietnam",
        "code": "VN"
      },{
        "name": "Virgin Islands, British",
        "code": "VG"
      },{
        "name": "Virgin Islands, U.S.",
        "code": "VI"
      },{
        "name": "Wallis and Futuna",
        "code": "WF"
      },{
        "name": "Western Sahara",
        "code": "EH"
      },{
        "name": "Yemen",
        "code": "YE"
      },{
        "name": "Zambia",
        "code": "ZM"
      },{
        "name": "Zimbabwe",
        "code": "ZN"
      }]

    useEffect(() => {
        const cls1 = document.querySelectorAll(".map .cls-1")
        const cls2 = document.querySelectorAll(".map .cls-2")
        const cls3 = document.querySelectorAll(".map .cls-3")
        const cls4 = document.querySelectorAll(".map .cls-4")
        const cls5 = document.querySelectorAll(".map .cls-5")
        const cls6 = document.querySelectorAll(".map .cls-6")
        const cls7 = document.querySelectorAll(".map .cls-7")
        var cls = [];
        cls.push.apply(cls, cls1);
        cls.push.apply(cls, cls2);
        cls.push.apply(cls, cls3);
        cls.push.apply(cls, cls4);
        cls.push.apply(cls, cls5);
        cls.push.apply(cls, cls6);
        var clsALT = [];
        clsALT.push.apply(clsALT, cls6);
        cls.map((a)=>{
            a.addEventListener("mouseenter", function(){
                const country = a.parentElement
                const mouse = document.querySelector('.countryName')
                mouse.style.display="block"
                countries.map((b) => {
                    if(b.code === country.id){
                        mouse.innerHTML = `${b.name}`
                    }
                })
                const allParts = [...country.children]
                allParts.map((p)=> {
                    p.style.fillOpacity = "1"
                    p.style.fill = "var(--red-red)"
                })
            })
            a.addEventListener("click", function(){
                const country = a.parentElement
                window.location.replace(
                    `${window.location.origin}/#/countries/${country.id}`,
                  );
            })
            a.addEventListener("mouseleave", function(){
                const mouse = document.querySelector('.countryName')
                mouse.style.display="none"
                const country = a.parentElement
                const allParts = [...country.children]
                if(country.id === "FR"){
                  allParts.map((p)=> {
                    p.style.fillOpacity = "0.3"
                    p.style.fill = "var(--red-red)"
                })
                clsALT.map((c) => {
                  c.style.fillOpacity = "0.3"
              })
                } else {
                  allParts.map((p)=> {
                      p.style.fillOpacity = "0"
                      p.style.fill = "var(--red-white)"
                  })
                  clsALT.map((c) => {
                    c.style.fillOpacity = "1"
                })
                }
                
            })

        })
    }, [])

    const { clientX, clientY } = useMousePosition();

    return (
      <>
        <Header bottom="250px" right="320px"></Header>
        <div className="mouseFollower">
            <h2 className="countryName" style={{
          position: "absolute",
          left: clientX,
          top: clientY,
        }}></h2>
        </div>
        <div className="map-wrapper">
          
        <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
            
              <Controls />
              <TransformComponent>
              <div className="map">
                  <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1719 811"><g id="Europa"><g id="FR"><path class="cls-1" d="M762.5,214.5c12.83,9.81,10.45,8.36,26,12-3.73,10-3.73,8.69-11.5,15.5h5l2,6-3,2,5,8-7,4-11-3-5.5,3,1.5,4-13-2-10-4,2-12,3,1-7-13-11-3,1-2-2-1c8.47-2.3,7.55-2.29,16,0l-2-8h2l3,2h5l2-3,4-1,.75-4.82Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="764.5 222 766.5 219 765.5 212 761.5 216 764.5 222"/><circle class="cls-3" cx="1008.5" cy="603" r="2"/><circle class="cls-2" cx="451.5" cy="190" r="2"/><circle class="cls-4" cx="389.5" cy="385" r="1.5"/><circle class="cls-4" cx="388" cy="375.5" r="2"/><polygon class="cls-1" points="424.5 439 431.5 441 438.5 448 429.5 460 422.5 462 420.55 460.83 424.5 453 422.05 449.75 423 443.12 424.5 439"/><polygon class="cls-2" points="1582 596.5 1588 601.5 1595 609.5 1591 610.5 1583 600.5 1582 596.5"/></g><g id="RU"><polygon class="cls-1" points="942.5 168.04 948.5 172 949.5 171 948.5 167 957.5 160 975.5 166 984.5 164 1006.5 167 1007.5 163 1000.5 159 1001.5 154 1005.5 153 1005.5 152 1001.5 151 999.5 148 1017.5 145 1031.5 139 1041.5 140 1045.5 146 1057.5 148 1057.5 150 1061.5 150 1070.5 144 1071.5 148 1093.5 165 1095.5 163 1101.5 166 1110.5 165 1121.5 173 1126.5 172 1131.5 176 1133.5 176 1135.5 174 1140.5 173 1141.5 171 1151.5 166 1163.5 170 1176.5 172 1179.5 168 1174.5 163 1177.5 158 1195.5 163 1206.5 171 1213.5 168 1224.5 171 1228.5 174 1249.5 174 1255.5 169 1273.5 174 1278.5 170 1276.5 155 1269.5 155 1272.5 152 1296.5 153 1318.5 173 1336.5 178 1341.5 184 1346.5 184 1355.5 180 1359.5 183 1361.5 199 1354.5 199 1352.5 201 1360.5 212 1356.5 214 1358.5 216 1365.5 213 1372.5 214 1378.5 207 1382.29 181 1371.5 157 1351.5 145 1351.5 149 1347.5 149 1341.5 144 1331.5 143 1341.5 118 1383.5 119 1393.5 116 1390.5 108 1390.5 103 1401.5 102 1410.5 110 1411.5 99 1417.5 99 1422.5 108 1414.5 126 1415.5 133 1448.5 165 1452.5 159 1448.5 154 1447.5 146 1453.5 144 1440.5 125 1436.5 125 1429.5 114 1435.5 111 1440.5 115 1443.5 111 1448.5 110 1458.5 112 1467.5 99 1478.5 100 1478.5 97.12 1456.5 87 1472.5 83 1497.5 89 1491.19 83 1497.5 81 1472.5 74 1475.5 77 1413.5 60 1390.5 59 1389.5 63 1377.5 60 1372.5 63 1337.5 55 1317.5 56 1257.5 46 1254.5 48 1261.5 52 1238.5 52 1230.5 49 1233.5 56 1215.5 50 1218.5 49 1188.5 41 1190.5 44 1169.5 44 1169.6 41 1136.5 40 1142.5 33 1134.5 28 1121.5 27 1108.5 29 1110.5 26 1089.5 24 1089.5 28 1065.5 31 1046.5 36 1048.5 39 1030.5 42 1029.5 44 1042.5 50 1038.5 51 1020.5 48 1017.5 50 1021.5 52 1020.5 53 1016.5 53 1013.5 46 1010.5 46 1011.5 49 1008.5 52 1015.5 57 1015.5 61 1019.5 64 1029.5 64 1035.5 67 1034.5 71 1029.5 66 1022.5 67 1025.5 71 1019.5 79 1007.5 77 1015.5 76 1018.5 68 1012.5 64 1007.5 54 1003.5 53 1004.5 47 991.5 45 984.5 54 989.5 62 999.5 65 999.5 69 974.5 61 963.5 60 967.5 66 964.5 69 959.5 65 941.5 69 940.5 65 918.5 72 917.5 76 912.5 76 908.5 73 914.5 71 908.5 67 901.5 67 903.5 74 906.5 76 906.5 80 899.5 78 890.5 82 893.5 88 883.5 87 879.5 84 877.5 85 883.5 91 871.04 89.19 868.5 81 860.5 77 888.5 80 893.5 75 890.5 71 875.25 65 850.5 61 842.02 64.88 841.5 68 847.5 72 845.5 75 849.5 81.36 849.5 86 853.5 91 852.5 93 858.5 97 857.5 100 844.5 110 854.5 113 846.5 116 846.5 127 849.5 135 862.5 138 862.05 143 868.5 147 872.5 151 866.5 152 869.5 158 878 156.5 881 160.5 881 162.5 886 164.5 888 168.5 896 168.5 910 173.5 910 183.5 903 184.5 903 187.5 907.66 187.27 901.5 191 905.5 194 901.4 198 897 198.5 895 200.5 903.5 203 914.5 210 915.5 209 942.5 215 953.5 223 958.5 220 946.5 204 948.5 196 955.5 193 949.5 184 944.5 184 941.5 178 942.5 168.04 942.5 168.04"/><path class="cls-1" d="M979,106c-7.48-3-7-2.77-12-9l13-12,26-7-3-2h-8v1l-21,3-12,7-4,4,2,1-6,9,8,2,2,3Z" transform="translate(-28.5 -50)"/><path class="cls-1" d="M1397,195l35,34-9-4v3l2,5,12,10-6-3-1,6c-7-13.84-23-34.23-33-46l3,1Z" transform="translate(-28.5 -50)"/><path class="cls-1" d="M842.25,192c5.82-2.21,5.66-2.19,11.75-1l.73,4h-13Z" transform="translate(-28.5 -50)"/><polygon class="cls-3" points="1430.5 204 1432.5 198 1436.5 197 1430.5 204"/><polygon class="cls-3" points="1438 195.5 1440 193.5 1442 193.5 1439 197.5 1438 195.5"/><polygon class="cls-3" points="1447 166.5 1449 168.5 1447 170.5 1445 168.5 1446.55 168.5 1447 166.5"/><polygon class="cls-3" points="1446 172.5 1447 178.5 1448 173.5 1446 172.5"/><circle class="cls-3" cx="1445" cy="188.5" r="1"/><circle class="cls-5" cx="1446.5" cy="183" r="0.5"/></g><g id="BE"><path class="cls-1" d="M762.5,214.5c2.12-1.42,8-2.23,10.5-2.5l5,2,2,4-3,3,.77,2.91L774,223Z" transform="translate(-28.5 -50)"/></g><g id="LU"><polygon class="cls-1" points="751.5 174.45 752.5 172 751.5 168 748.5 171 749.27 173.91 751.5 174.45"/></g><g id="DE"><path class="cls-1" d="M783.44,201l8.56-3-1-6,5,1,2,2h4l-1,2,8-2,8,5c.53,2.9,2.16,12.33,3,15h-3.12L808,219l3,6,4,3-4,3v4l-3-1-9,1,0,2c-5.35-2.16-8.12-3.79-14-2l3.5-8.5-8.5-2.05,1-2.45c-.3-1.33-1.1-4.71-1.9-5.81L780,210h1.71l3.29-8-1.56-1" transform="translate(-28.5 -50)"/></g><g id="CH"><polygon class="cls-1" points="768.5 193 771.05 189.3 766.5 188 766.72 185.49 761.5 184 756.5 185 748.5 192 753.46 192 754.51 195.09 759.5 195 760.5 193 763.46 195.09 766.5 192 768.5 193"/></g><g id="AT"><path class="cls-1" d="M815,228l4,1,2-3,9,2v6l-2,1-.49,4.54C818,242.61,818.63,242,809,241l-1-3-8.45,1.3L795,238v-2.6l4,1.6,0-2,9-1,3,1v-4Z" transform="translate(-28.5 -50)"/></g><g id="IT"><path class="cls-1" d="M814,246l-6,2,1,7,6,5,7,9c2.78,1.51,15.56,7.05,17,10v3l-7-4-3,4,4,3c-1.53,2.22-4.54,6.73-6,9l-3-3,4-3-3-8-9-7-6-2-10.45-9.34L797,256l-6-2-5,4-5-8,3-2-1-2.91,5-.09,1-2,3,2.09,3-3.09,2,1,2.55-3.7L808,238l1,3,4.79.48Z" transform="translate(-28.5 -50)"/><path class="cls-1" d="M822,292a33,33,0,0,0,1,9l-13-6v-3Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="761.5 238 766.5 237 767.5 227 765.5 224 759.5 226 761.5 238"/></g><g id="NL"><polygon class="cls-1" points="750.6 166.19 751.5 160 753.21 160 756.5 152 753.5 150 748.5 152 748.5 154 745.5 156 745.5 152 737.5 163 744.5 162 749.5 164 750.6 166.19"/></g><g id="GB"><path class="cls-1" d="M724,220l2,1,12-4,15-1,3-4-1-1,4-4-2-4-5,1v-4l-4-7-2-1-2-5-7-2,7-6,1-3H735l6-5h-8.84L728,176l-3,8,4-2-4,5,6-2-4,5,5-2-2,5,7-1a33,33,0,0,0,1,9h-7l1,5-4,4c2,.6,7.89,2.49,10,2l-1,1h-6Z" transform="translate(-28.5 -50)"/><polygon class="cls-1" points="687.5 145 691.5 141 696.5 140 699.5 145 696.5 147 693.5 147 691.5 145 690.5 147 687.5 145"/><path d="M732,196a1,1,0,1,1-1,1,.94.94,0,0,1,1-1m0-1h0a2,2,0,0,0-1.46.59,2,2,0,0,0,0,2.76,2.1,2.1,0,0,0,2.92,0,2,2,0,0,0,0-2.76A2,2,0,0,0,732,195Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="694 123.5 698 121.5 696 125.5 692 129.5 694 123.5"/><polygon class="cls-2" points="718.5 112 720.5 114 722.5 109 718.5 112"/></g><g id="IE"><path class="cls-1" d="M723.5,197v7.31l-2,3.19-5,1c-2.21,1.13-7,3.18-9.5,3.5l-3-2,1-3,4.5-4.5-4-2,2-2-1-3,4.5.5,2-1-1-2,2.5-2.5,4.11-.5,1.39,1-4,4,3,2,1-2,2,2Z" transform="translate(-28.5 -50)"/><path class="cls-1" d="M706,188" transform="translate(-28.5 -50)"/></g><g id="IS"><path class="cls-1" d="M680,144l20-8,1-3-8-6-10,3-9,1-4,3v-4.25L665,127l-7,6,8,1-6,2,5,2-3,5C666.19,142.74,675.75,143.53,680,144Z" transform="translate(-28.5 -50)"/></g><g id="DK"><path class="cls-1" d="M791,192c-1.74-5.24-2.48-5.37-1-11h3l5-5,1,4-1,2,4,1c-1.78,1.15-4.8,5.25-6,7v3Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="771.5 138 772.5 141 771.5 143 769.5 141 771.5 138"/><polygon class="cls-2" points="773 137.5 776 135.5 780 135.5 779 138.5 779.22 140.5 778 143.5 773.5 142.81 775.73 140.5 773 137.5"/></g><g id="CZ"><path class="cls-1" d="M839,223l-9-4.51-3,.51-1-2c-9.41-3.77-9.49-1.59-18,2l3,6,4,3,4,1,2-3,9,2,5.24-2Z" transform="translate(-28.5 -50)"/></g><g id="SK"><polygon class="cls-1" points="825.5 180 818.92 179 815.5 182 809.5 184 801.5 182.42 801.5 178 806.74 176 810.5 173 815.5 175 822.5 174 827.38 176 825.5 180"/></g><g id="PL"><path class="cls-1" d="M817,200l13-7h4.7l2.3,2h19l5,9-2,4,3,9-5,5-1.12,4L851,224l-7,1c-3.23-1.05-10.91-4.91-14-6.51l-3,.51-1-2-6-2C819.17,212.38,817.52,202.85,817,200Z" transform="translate(-28.5 -50)"/></g><g id="SI"><polygon class="cls-1" points="799.01 189.54 800.5 192 795.5 194 793.5 197 787.5 198 785.5 196 785.29 191.48 790.5 192 799.01 189.54"/></g><g id="HR"><path class="cls-1" d="M839.5,245.54,841,251c-2.6-1.07-12.11-1.74-15-2l-1,3,10,12c-3-1.45-11.52-5.36-13.6-8l-1.4-5h-4l-2-5,2,2,6-1,2-3,5-2,5,3Z" transform="translate(-28.5 -50)"/></g><g id="BA"><path class="cls-1" d="M841,251l1.94,5.33c-.22,2.12-3.73,6.95-4.94,8.67l-3-1-10-12,1-3C828.94,249.27,838.36,249.92,841,251Z" transform="translate(-28.5 -50)"/></g><g id="HU"><polygon class="cls-1" points="811 195.54 817.89 193.77 821.5 194 825.5 185 829.5 183 825.5 180 818.92 179 815.5 182 809.5 184 801.5 182.42 801.5 184 799.5 185 799.01 189.54 800.5 192 805.5 195 811 195.54"/></g><g id="ES"><path class="cls-1" d="M764,266l-1,4-11,5-6,10,2,3-11,12-15,1-3,4-4-2-1-4-4-2c2.43-6.36,2-6.49,1-13l3-9,3-4-2-2h-9l-3-6,6-5,32,2,10,4Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="641 303.5 644 298.5 645 300.5 644 302.5 641 303.5"/><polygon class="cls-2" points="630 303.5 633 300.5 629 301.5 630 303.5"/><circle class="cls-4" cx="646" cy="297.5" r="1"/><circle class="cls-4" cx="635.5" cy="304" r="1.5"/><circle class="cls-4" cx="624" cy="299.5" r="1"/><circle class="cls-4" cx="626.5" cy="303" r="0.5"/><circle class="cls-4" cx="622.5" cy="305" r="0.5"/><path class="cls-2" d="M763,282.5a1.5,1.5,0,0,1-3,0A1.5,1.5,0,0,1,763,282.5Z" transform="translate(-28.5 -50)"/><polygon class="cls-4" points="727 236.06 726 238.5 725 236.5 727 236.06"/><polygon class="cls-4" points="738 230.5 740 231.5 740 230.5 738 230.5"/></g><g id="PT"><path class="cls-1" d="M706,269l-1.5,8.5-5,11,3.5,1.63-1.5,8.37L710,297c2.43-6.36,2-6.49,1-13l3-9,3-4-2-2Z" transform="translate(-28.5 -50)"/><circle class="cls-4" cx="631" cy="274.5" r="1"/><polygon class="cls-4" points="589 242.5 593 243.5 593 245.5 589 244.5 589 242.5"/><polygon class="cls-4" points="575 238.5 579 240.5 576 240.5 575 238.5"/><polygon class="cls-4" points="577 238.5 580 239.5 579 237.5 577 238.5"/><circle class="cls-4" cx="583" cy="238.5" r="1"/></g><g id="ME"><polygon class="cls-1" points="813.47 209.19 818.5 213 817.5 216 815.5 215 814.44 219.63 809.5 215 813.47 209.19"/></g><g id="XK"><polygon class="cls-1" points="818.5 213 821.5 211 826.5 215 824.5 218 820.5 220 820.5 217 817.5 216 818.5 213"/></g><g id="RS"><path class="cls-1" d="M846.39,243.77,853,252l5,1v5l3,4-3,4.67-3.88-.35L855,265l-5-4-3,2-5-3.81,1-2.86a97.33,97.33,0,0,1-3.44-10.79Z" transform="translate(-28.5 -50)"/></g><g id="AL"><path class="cls-1" d="M847,282.91l5-7.91-2.5-.87A42.68,42.68,0,0,1,849,267a27.46,27.46,0,0,1-5-2c-1.24,2.94-1.11,10.83-1,14Z" transform="translate(-28.5 -50)"/></g><g id="MK"><polygon class="cls-1" points="823.5 225 830.5 223 832.5 220 829.5 216.67 825.62 216.32 824.5 218 820.5 220 821 224.13 823.5 225"/></g><g id="BG"><polygon class="cls-1" points="830.5 223 839.5 221 847.5 222 852.5 218 857.5 219 854.5 216 859.5 208 850.5 206 843.5 209 829.5 205.81 829.5 208 832.5 212 829.5 216.67 832.5 220 830.5 223"/></g><g id="RO"><polygon class="cls-1" points="859.5 208 860.5 202 863.19 198 856.5 199 855.5 189 847.5 181 839.5 183 829.5 183 825.5 185 821.5 194 817.89 193.77 824.5 202 829.5 203 829.5 205.81 843.5 209 850.5 206 859.5 208"/></g><g id="MD"><polygon class="cls-1" points="847.5 181 852.5 180 859.5 182.88 865.5 192 859.5 192 856.5 199 855.5 189 847.5 181"/></g><g id="BY"><path class="cls-1" d="M860.29,211.87,868,209s23.37,4.19,23.69,4.6.83-4.6.83-4.6l5.48-1-3-6,6-1-4-4-6.45-4,.45-5-13-3-7,3v2l-5,6-8.66,1.42L861,204l-2,4Z" transform="translate(-28.5 -50)"/></g><g id="LT"><polygon class="cls-1" points="817.69 135.5 819.5 140 825.5 141 826.23 145 827.5 145 828.84 147.42 837.5 146 842.5 140 842.5 138 834.5 133 819.5 134 817.69 135.5"/></g><g id="LV"><polygon class="cls-1" points="817.69 135.5 817.5 131 823.5 126 828.84 130.16 831.5 129 831.5 126 834.5 124 839.5 126 846.5 127 849.5 135 842.5 138 834.5 133 819.5 134 817.69 135.5"/></g><g id="EE"><polygon class="cls-1" points="831.5 126 831.5 123 827.38 121.87 826.5 117 836.5 115 846.5 116 846.5 127 839.5 126 834.5 124 831.5 126"/><polygon class="cls-1" points="823.5 118 824.5 122 820.5 124 823.5 118"/></g><g id="NO"><path class="cls-1" d="M870.52,114.88,879,111l-4.24-2,2.24-1-12-4.13-10,2.59v-2.59L837,111l-3.73-2L823,116a28.48,28.48,0,0,0-3-2.19c0,.19-10,5.19-10,5.19l11-1c-3.81,3.82-11,10.79-14,16,0,1-11.5,8.82-11.5,8.82-3.6,2.42-11.4,6.82-15.5,8.18l-4,5,2,8v6l7,4.52,8-4.52,6.55-5.51L801,168l4,1v-4l3-4c-.74-4.15-1.66-13.72-2-18l8-3,2-10a84.11,84.11,0,0,0,13-13h7c1-.44,5.56-1.93,6-3l14,3,2.6-2v-3.22L864,109l7,3-.48,2.88" transform="translate(-28.5 -50)"/></g><g id="FI"><path class="cls-1" d="M873,160l13-10,1-3-6-4,1-2-4-5v-4.64L874,125l2-3-6-4,1-6-7-3-5.4,2.75V115l-2.6,2-14-3-1,1,10,4.72L854,131l5,2,1,3c-2.1-.67-13.39,9.91-15,11l1.19,12.57L854,164Z" transform="translate(-28.5 -50)"/><path id="AX" class="cls-2" d="M840.5,161.5a1,1,0,0,1-2,0A1,1,0,0,1,840.5,161.5Z" transform="translate(-28.5 -50)"/></g><g id="SE"><path class="cls-1" d="M811,189h6l6.5-5,2.5-12,10-7-2.06-3.5L828,159l1-10,15.73-9.81L843,137l4-5,7-1-3-11.28L841,115l-5,2h-7a84.11,84.11,0,0,1-13,13l-2,10-8,3,2,18-3,4v4l-3-.75,1,4.75,6,9Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="804.32 127 804.8 131 808.92 124.52 804.32 127"/><path class="cls-2" d="M829,178c-.52,1.28-2.06,5.64-3.16,6.5L826,182Z" transform="translate(-28.5 -50)"/></g><g id="GR"><path class="cls-1" d="M878.5,270l-2.5,2-8-1c-4,.81-12.16,2.76-16,4l-5,7.91,6,8.09h3l-3,3,3,2v3l3.69,3,2.31-2-1-4,3.46.51L863,293l5,2-1-3,6,2-10-8-3-5.66V278l1-1,2,4,5-2-3-3,4-1,8,1,1.5-6Z" transform="translate(-28.5 -50)"/><polygon class="cls-2" points="838.5 258 837.5 260 847.5 261 851.5 260 838.5 258"/><polygon class="cls-2" points="856 254.5 858 253.5 858 255.73 856 256.67 856 254.5"/></g><g id="UA"><path class="cls-1" d="M925.5,248.5l-2,2h-3.4l-6.6,3H910s-.48-3.25,0-3.13-4.51-1.87-4.51-1.87l5-4-5-.34-6-3.66c-1.82,2-5.84,5.56-7.81,7.5-.19.5-6.69,1-6.69,1l3-7h6l-6-9.12L881,230c-3,.5-10,2.21-13,3H858l-4-3a35.91,35.91,0,0,0,3-8l5-5-1.71-5.13L868,209l23.69,4.6.83-4.6c3.25-.61,10.66-1.92,14-2.5l3,4v2l5,2,2,4h8l14,5v10l-7,1v3l-15,6,3,5Z" transform="translate(-28.5 -50)"/></g><g id="AD"><circle id="AD-2" data-name="AD" class="cls-6" cx="727" cy="214.5" r="2"/></g><g id="LI"><circle class="cls-2" cx="768" cy="187.5" r="2"/></g><g id="MC"><circle class="cls-6" cx="754.35" cy="208.97" r="2"/></g><g id="SM"><circle class="cls-6" cx="781" cy="207.5" r="2"/></g><g id="VA"><circle class="cls-6" cx="775" cy="215.5" r="2"/></g><g id="MT"><circle class="cls-3" cx="791" cy="255.5" r="1"/></g><g id="CY"><polygon class="cls-2" points="893 257.5 890 259.5 891 260.5 885 263.5 881 261.5 884 258.5 889 258.5 892 256.5 893 257.5"/></g></g><g id="Asia"><g id="AF"><polygon class="cls-1" points="1077 254.5 1083 250.5 1092 249.5 1093 246.5 1086 245.5 1079.25 250 1077 247.66 1077 243.36 1074 239.5 1071 240.5 1071 244.91 1067 245.5 1067 248.13 1065 246.5 1060 249.5 1058 247.5 1052.62 247 1049 245.5 1047.25 247 1044 247.5 1044 252.79 1037 255.5 1037 258.5 1034 259.5 1028 257.5 1026 266.5 1027 269.5 1027 272.5 1030 282.5 1034 283.5 1035 285.5 1032 291.5 1038 294.5 1050.59 294.5 1059.5 292.31 1059.5 285.87 1061 283.5 1065.5 284 1067.5 281 1072.5 281 1073.5 273 1076.5 272 1074.5 267 1079.5 267 1079.5 262 1080.5 259 1077 254.5"/></g><g id="TR"><path id="TR-2" data-name="TR" class="cls-1" d="M877,276l3,.52,4-2.52,7,1,1,3-12,.73L878,280l-1,4h4c.52,2.11,2.47,8.88,2,11l10.6,7,6.4,1,1-3,11,4,6.67-.5L920,300l8-1-1,4,3,3,1-6,21.5-2.88L971,298l-3-17-3.75-1.33L963,275l-5-4-6,1-6,3-15-2-11-5-14,1-4,5-11-1-5-4-5-1-2.5,2Z" transform="translate(-28.5 -50)"/></g><g id="GE"><polygon class="cls-1" points="914.5 210 917.5 209 925.5 211 934.5 215 940.5 214 944.5 218 948.5 219 947.5 221 949.5 224 943.5 222 941.5 223 932.93 223.74 929.5 221 923.5 222 924.5 219 921.5 214 916.5 212 914.5 210"/></g><g id="AZ"><polygon class="cls-1" points="962.5 240 963.5 236 964.5 229 966.59 229 966.59 227.6 964.5 227 957.5 220 955.5 223 952.5 223 948.5 219 947.5 221 949.5 224 943.5 222 941.5 223 944.5 226 943.5 227 947.25 229.5 945.5 231 950.5 234 950.5 237 956.5 233 959.5 234 959.11 237 958.5 237 962.5 240"/><polygon class="cls-1" points="939.5 231 945.5 233 947.5 237 944.5 236 939.5 231"/></g><g id="AM"><polygon class="cls-1" points="950.5 237 947.5 237 945.5 233 939.5 231 935.75 229.68 934.5 225 932.93 223.74 941.5 223 944.5 226 943.5 227 947.25 229.5 945.5 231 950.5 234 950.5 237"/></g><g id="PS"><polygon class="cls-2" points="899.5 277 897.5 276 896.5 277 896.5 281 898.5 281 896.5 282 896.5 284 899.5 282 899.5 277"/><polygon class="cls-2" points="894 281.5 895 283.5 894 284.5 893 283.5 894 281.5"/></g><g id="IL"><polygon class="cls-2" points="900 271.5 899.5 277 897.5 276 896.5 277 896.5 281 898.5 281 896.5 282 896.5 284 899.5 282 899.5 285.36 898.25 288.52 897 294.5 894 284.5 895 283.5 894 281.5 895 278.5 897 272.5 900 271.5"/></g><g id="JO"><polygon class="cls-2" points="899.68 275.04 901.44 275.04 905 277.5 915 271.5 918 277.5 919 278.5 913 280.5 908 282.5 913 288.5 911 289.5 910 291.5 907 292.5 905 295.5 903 296.5 897 294.5 898.25 288.52 899.5 285.36 899.5 282 899.5 277 899.68 275.04"/></g><g id="LB"><polygon class="cls-2" points="900 263.5 902 263.5 904 265.5 902 268.5 900 271.5 897 272.5 899 265.5 900 263.5"/></g><g id="SY"><polygon class="cls-2" points="898.5 253 900 263.5 902 263.5 904 265.5 900 271.5 899.68 275.04 901.44 275.04 905 277.5 915 271.5 926 264.5 927.37 256 926 252.5 931 249.5 931.19 247.46 924 247.12 902.5 250 901.5 256 898.5 253"/></g><g id="IQ"><polygon class="cls-1" points="942.5 248 951 256.5 952 260.5 949 264.5 950 268.5 954 273.5 963 280.5 963 285.21 967 291.5 961 291.5 958 297.5 948.5 296.5 930 282.5 925 279.5 919 278.5 918 277.5 915 271.5 926 264.5 927.37 256 926 252.5 931 249.5 931.19 247.46 942.5 248"/></g><g id="KW"><polygon class="cls-1" points="967 291.5 967 293.66 964.5 295 967.5 299 967.5 300.43 963.75 300.43 962.69 297.5 958.47 296.57 961 291.5 967 291.5"/></g><g id="SA"><polygon class="cls-1" points="967.5 300.43 970.5 304 970.5 305.95 973.5 307 977.5 312 977.5 315.54 981.5 321 982.5 324 985.5 324 986.5 327 991.5 334 1005.5 336 1009.5 340 1007.5 347 1006.5 352 990.5 358 976.5 360 970.5 364 966.5 370 964.5 370 962.5 368 956.5 368 948.5 369 946.5 367 944.5 369 945.5 372 943.5 374 940.5 369 934.5 360 931.5 353 925.5 350 922.5 346 921.5 338 919 331.07 914.5 327 912.5 326 910.5 323 911.5 322 904.5 310 898.5 303 896.5 304 897.5 300 897 294.5 903 296.5 905 295.5 907 292.5 910 291.5 911 289.5 913 288.5 908 282.5 913 280.5 919 278.5 925 279.5 930 282.5 948.5 296.5 958 297.5 958.47 296.57 962.69 297.5 963.75 300.43 967.5 300.43"/></g><g id="QA"><polygon class="cls-1" points="981.5 321 982.5 316 984.5 315 986.5 317 986.5 322.19 985.5 324 982.5 324 981.5 321"/></g><g id="BH"><circle class="cls-2" cx="980.5" cy="314" r="1.5"/></g><g id="AE"><polygon class="cls-1" points="1008.5 317 1009.5 319 1011.5 319 1011 322.5 1010 323.5 1009 322.5 1009 325.5 1010 327.45 1007 328.5 1005.5 336 991.5 334 987.25 328.06 990.5 328 991.5 327 999.5 327 1008.5 317"/></g><g id="YE"><polygon class="cls-1" points="943.5 374 942.5 381 945.5 391 945.5 395 950.5 397 959.5 393 965.5 392 971.5 388 992.5 379 993.5 375 997.5 373 990.5 358 976.5 360 970.5 364 966.5 370 964.5 370 962.5 368 956.5 368 948.5 369 946.5 367 944.5 369 945.5 372 943.5 374"/><polygon class="cls-2" points="1001.5 396 1004.5 396 1006.5 398 1004 399.54 1000.5 398 1001.5 396"/></g><g id="OM"><polygon class="cls-1" points="1011 322.5 1016.5 328 1024.5 330 1028.5 336 1030.5 337 1030.5 341 1025.5 347 1024.5 350 1022.5 349 1020.75 354.05 1021.5 359 1016.5 360 1015.5 364 1011 365.42 1008.5 367 1008.5 370 1006.5 371 1002.59 371 997.5 373 990.5 358 1006.5 352 1007.5 347 1009.5 340 1005.32 336 1007 328.5 1010 327.45 1009 325.5 1009 322.5 1010 323.5 1011 322.5"/><polygon class="cls-1" points="1008.5 317 1011.5 313 1011.5 319 1009.5 319 1008.5 317"/></g><g id="IR"><polygon class="cls-1" points="989.5 247 992.5 246 996.5 242 1004.5 241 1014.5 245 1022.5 251 1026 250.76 1028 257.5 1026 266.5 1027 269.5 1027 272.5 1030 282.5 1034 283.5 1035 285.5 1032 291.5 1036.5 300 1042.5 303 1043.5 308 1046.5 309 1045.5 312 1040.5 314 1038.5 321 1017.5 318 1014.5 315 1013.5 310 1010.5 308 1002.35 312.5 993.5 310 983.5 304 975.5 290 969.5 290 967 291.5 963 285.21 963 280.5 954 273.5 950 268.5 949 264.5 952 260.5 951 256.5 942.5 248 939.5 231 944.5 236 947.5 237 950.5 237 956.5 233 959.5 234 959.11 237 958.5 237 962.5 240 964.5 245 968.5 246 977.5 251 984.5 250 989.5 250 989.5 247"/></g><g id="PK"><polygon class="cls-1" points="1092.19 248.93 1097.5 249 1101.5 252 1102.5 256 1111.5 258 1102.5 264 1094.5 263 1093.5 264 1096.5 273 1103.5 277 1103.5 278 1100.5 280 1100.5 285 1098.5 290 1092.19 299.3 1089.5 304 1084.5 305 1082.5 303 1078.5 310 1082.5 312 1082.5 317 1085.5 318 1088.5 325 1086.5 327 1085.5 325 1082.05 327 1075.5 326 1075.5 328 1073.5 329 1070.5 329 1068.5 323 1065.5 323 1063.5 318 1054.5 320 1051.5 319 1038.5 321 1040.5 314 1045.5 312 1046.5 309 1043.5 308 1042.5 303 1036.5 300 1032 291.5 1038 294.5 1050.59 294.5 1059.5 292.31 1059.5 285.87 1061 283.5 1065.5 284 1067.5 281 1072.5 281 1073.5 273 1076.5 272 1074.5 267 1079.5 267 1079.5 262 1080.5 259 1077 254.5 1083 250.5 1092 249.5 1092.19 248.93"/></g><g id="TJ"><polygon class="cls-1" points="1067.5 225 1070.5 230 1064.5 229 1063.5 234 1084.86 234 1087.5 239 1092.5 239 1096.5 246 1093 246.5 1086 245.5 1079.25 250 1077 247.66 1077 243.36 1074 239.5 1071 240.5 1071 244.91 1067 245.5 1067 248.13 1065 246.5 1060 249.5 1058 247.5 1060.5 242 1058.17 237.5 1053.5 235 1054.5 233 1059.5 233 1059.5 229 1063.5 226 1067.5 225"/></g><g id="UZ"><polygon class="cls-1" points="1068.5 217 1065.5 221 1070.5 223 1072.5 221 1080.5 226 1075 229.69 1069.6 228.49 1067.5 225 1063.5 226 1059.5 229 1059.5 233 1054.5 233 1053.5 235 1058.17 237.5 1060.5 242 1058.01 247.5 1052.63 247 1051.5 242 1045.5 241 1029.5 231 1023.5 223 1015.5 222 1013.28 217 1010.5 217 1006.5 214 1003.5 216 1003.5 217 1000.5 218 999.5 220 1000.5 223 995.19 223 990.5 201 1002.5 197 1015.5 204 1020.5 209 1034.5 209 1035.5 208 1040.5 213 1042.5 213 1043.5 218 1046.5 219 1048.5 223 1054.5 223 1055.5 226 1058.5 227 1057.5 225 1065.5 218 1068.5 217"/></g><g id="KG"><polygon class="cls-1" points="1084.86 234 1086.5 230 1092.5 226 1093.5 229 1098.5 228 1098.32 225 1104.5 224 1105.5 222 1112.5 218 1111.5 216.09 1108.93 216.09 1105.5 214 1090.5 213 1089.5 214 1081.5 211 1078.5 212 1079.5 216 1071.75 213.72 1067.5 214 1067.11 217.46 1068.5 217 1065.5 221 1070.5 223 1072.5 221 1080.5 226 1075 229.69 1069.6 228.49 1070.5 230 1064.5 229 1063.5 234 1084.86 234"/></g><g id="TM"><polygon class="cls-1" points="1049 245.5 1047.25 247 1044 247.5 1044 252.79 1037 255.5 1037 258.5 1034 259.5 1028 257.5 1026 250.76 1022.5 251 1014.5 245 1004.5 241 996.5 242 992.5 246 989.5 247 987.5 237 982.5 234 984.5 231 980.05 230.75 980.5 225 983.5 226 987.5 225 988.5 223 985.5 222 984.5 219 980.5 220 981.5 222 978.5 223 975.5 219 981.5 216 986.5 217 992.5 223 1000.5 223 999.5 220 1000.5 218 1003.5 217 1003.5 216 1006.5 214 1010.5 217 1013.28 217 1015.5 222 1023.5 223 1029.5 231 1045.5 241 1051.5 242 1052.63 247 1049 245.5"/></g><g id="KZ"><polygon class="cls-1" points="977.18 218.16 976.8 214 970.5 212 962.5 203 967.5 202 967.5 198 977.5 199 982.5 200 980.62 197 974.5 196 974.5 189 969.5 190 964.5 188 955.5 193 949.5 184 944.5 184 941.5 178 942.5 168.04 948.5 172 949.5 171 948.5 167 957.5 160 975.5 166 984.5 164 1006.5 167 1007.5 163 1000.5 159 1001.5 154 1005.5 153 1005.5 152 1001.5 151 999.5 148 1017.5 145 1031.5 139 1041.5 140 1045.5 146 1057.5 148 1057.5 150 1061.5 150 1070.5 144 1071.5 148 1093.5 165 1095.5 163 1101.5 166 1110.5 165 1121.5 173 1126.5 172 1129.93 174.75 1129.93 179.18 1125.5 180 1128.5 188 1126.5 189 1116.5 187 1116.5 197 1118.5 199 1113.5 199 1105.5 201 1108.5 203 1113.5 211 1111.5 216.09 1108.93 216.09 1105.5 214 1090.5 213 1089.5 214 1081.5 211 1078.5 212 1079.5 216 1071.75 213.72 1067.5 214 1067.11 217.46 1065.5 218 1057.5 225 1058.5 227 1055.5 226 1054.5 223 1048.5 223 1046.5 219 1043.5 218 1042.5 213 1040.5 213 1035.5 208 1034.5 209 1020.5 209 1015.5 204 1002.5 197 990.5 201 995.19 223 992.5 223 986.5 217 981.5 216 977.18 218.16"/></g><g id="MN"><polygon class="cls-1" points="1267.47 172.32 1267.5 183 1277.5 184 1279.5 182 1292.5 189 1292.5 190.79 1282.08 190.79 1278.5 194 1278.5 196 1271.5 198 1269.5 202 1259.5 199 1259.5 204.13 1264.5 208 1255.5 216 1244.11 216 1234.5 221 1216.5 215 1191.5 214 1181.5 205 1170.5 200 1160.5 200 1156.5 197 1156.5 193.84 1149.5 184 1140.5 181 1133.5 176 1135.5 174 1140.5 173 1141.5 171 1151.5 166 1163.5 170 1176.5 172 1179.5 168 1174.5 163 1177.5 158 1195.5 163 1206.5 171 1213.5 168 1224.5 171 1228.5 174 1249.5 174 1255.5 169 1267.47 172.32"/></g><g id="CN"><polygon class="cls-1" points="1111.5 258 1114.5 263 1119.5 265 1120.5 270 1124.5 275 1122.5 277 1118.5 276 1122.5 284 1123.5 283 1136.5 291 1137.87 288.96 1156.5 300 1174.5 304 1177.5 303 1179.5 307 1184.5 301 1192.5 304 1193.5 305 1197.5 305 1200.5 299 1203.5 299 1206.5 295 1210.5 297 1214.5 295 1217.5 299 1216.5 301 1222.5 302 1222.5 300.79 1226.5 302 1228.5 306 1230.5 307 1231.5 316 1227.5 324 1228.5 329 1233.5 327 1236.5 333 1239.5 334 1238.5 339 1242.5 340 1244.5 343 1248.5 342 1248.5 344 1252.5 345 1251.5 340 1250.5 338 1253.5 338 1254.5 336 1267.5 335 1266.5 333 1268.5 332 1272.5 335 1276.5 335 1277.5 336 1276.5 337 1279.5 341 1285.5 343 1289.5 342 1291.5 344 1294.5 343 1294.5 347.42 1296.5 350 1299.31 350 1299.5 349 1297.5 346 1303.5 343 1312.5 340 1327.5 334 1337.5 324 1341.5 315 1345.5 302 1347.5 302 1347.5 296 1347.5 292.01 1343.5 290 1338.5 291 1341.5 288 1345.5 286 1343.5 284 1342.5 283 1343.5 282 1342.5 280 1336.5 275 1329.5 265 1323.5 262 1324.5 257 1329.5 250 1332.5 249 1334.5 250 1334.5 246 1324.5 244 1320.5 246 1320.5 248 1316.5 248 1315.5 246 1315.5 243 1312.5 242 1311.78 242 1305.5 240 1305.5 235 1308.5 236 1312.02 235 1311.5 232 1315.5 230 1316.5 224 1324.5 228 1321.5 233 1323.5 235 1323.5 238 1331.5 231 1335.5 232 1338.5 226 1341.5 225 1342.5 220 1348.5 222 1350.5 222 1348.5 218 1351.5 218 1354.5 216 1353.5 213 1356.5 214 1360.5 212 1352.5 201 1354.5 199 1361.5 199 1359.5 183 1355.5 180 1346.5 184 1341.5 184 1336.5 178 1318.5 173 1296.5 153 1272.5 152 1269.5 155 1276.5 155 1278.5 170 1273.5 174 1267.47 172.32 1267.5 183 1277.5 184 1279.5 182 1292.5 189 1292.5 190.79 1282.08 190.79 1278.5 194 1278.5 196 1271.5 198 1269.5 202 1259.5 199 1259.5 204.13 1264.5 208 1255.5 216 1244.11 216 1234.5 221 1216.5 215 1191.5 214 1181.5 205 1170.5 200 1160.5 200 1156.5 197 1156.5 193.84 1149.5 184 1140.5 181 1133.5 176 1131.5 176 1129.93 174.75 1129.93 179.18 1125.5 180 1128.5 188 1126.5 189 1116.5 187 1116.5 197 1118.5 199 1113.5 199 1105.5 201 1108.5 203 1113.5 211 1111.5 216.09 1112.5 218 1105.5 222 1104.5 224 1098.32 225 1098.5 228 1093.5 229 1092.5 226 1086.5 230 1084.86 234 1087.5 239 1092.5 239 1096.5 246 1093 246.5 1092.19 248.93 1097.5 249 1101.5 252 1102.5 256 1111.5 258"/><polygon class="cls-1" points="1293.5 353 1301.5 352 1302.5 354 1300.5 357 1299.5 361 1296.5 363 1291.5 362 1290.5 356 1293.5 353"/></g><g id="HK"><circle class="cls-6" cx="1316.5" cy="338" r="3"/></g><g id="TW"><polygon class="cls-1" points="1352.5 320 1354.5 322 1353.5 333 1352.5 341 1350.5 338 1346.5 334 1346.5 328 1350.5 321 1352.5 320"/></g><g id="KP"><polygon class="cls-1" points="1358.5 216 1356.5 214 1353.5 213 1354.5 216 1351.5 218 1348.5 218 1350.5 222 1348.5 222 1342.5 220 1341.5 225 1338.5 226 1335.5 232 1341.5 234 1343.5 239 1342.5 242 1347.5 245 1348.5 243 1352.5 244 1354.5 241 1359.5 241 1359.5 238.75 1353.5 235 1352.5 232 1357.5 228 1359.5 223.75 1357.5 221 1358.5 216"/></g><g id="KR"><polygon class="cls-1" points="1359.5 238.75 1368.5 247 1372.5 255 1372.5 260.46 1370.11 260.46 1364.5 263 1362.5 264 1360.5 264 1358.5 260 1358.5 255 1353.5 250 1355.5 249 1352.5 244 1354.5 241 1359.5 241 1359.5 238.75"/></g><g id="JP"><polygon class="cls-1" points="1402.5 265 1403.5 269 1402.5 271.61 1400.5 270 1397.5 272 1398.5 275 1394.5 273 1392.5 270 1394.5 267 1400.16 265 1402.5 265"/><polygon class="cls-1" points="1382.5 268 1389.5 270 1392.5 274 1392.5 282.45 1389.5 285 1386.5 283 1385.5 279 1386.63 276.5 1383.5 272 1382.5 275 1377.5 271 1382.5 268"/><polygon class="cls-1" points="1402.5 198 1422.5 207 1423.5 204 1424.5 207 1428.5 211 1422.5 213 1421.5 219 1412.5 214 1410.5 216 1407.5 215 1407.5 216 1413.5 220 1409.96 220 1409.5 222 1406.5 218.64 1404.5 216 1403.87 210 1408.5 211.3 1406.5 205.48 1402.5 198"/><polygon class="cls-1" points="1410.5 224 1415.5 223 1419.5 228 1425.5 236 1425.5 240.4 1423.5 242 1426.5 247 1426.5 252 1430.5 257 1427.5 262 1425.5 258 1419.5 263 1414.53 263 1411.5 262 1413.37 265 1411.5 267 1410.5 270.31 1405.93 268 1405.5 263 1400.5 262 1390.8 265 1390.8 267.45 1383.5 265 1390.5 258 1401.5 256 1402.5 257.78 1405.5 257 1404.5 254 1406.11 251.37 1405.58 246.66 1407 245.78 1408.5 250 1414.98 246.66 1416.5 235 1411.5 230 1410.5 224"/></g><g id="PH"><polygon class="cls-1" points="1355.5 361 1360.8 363 1363.5 362 1363.5 366.22 1366.5 371 1364.5 376 1361.5 381.15 1365.5 388 1368.5 387 1376.5 390 1374.5 391 1378.5 395 1378.5 398 1369.5 390 1369.5 394 1364.5 390 1362.5 391 1358.5 389 1359.5 385 1358.5 384 1356.5 387 1352.5 375 1355.5 377 1353.5 365 1355.5 361"/><polygon class="cls-1" points="1357.5 392 1363.5 393 1364.5 397 1363.5 400 1357.5 392"/><polygon class="cls-3" points="1372.5 402 1373.5 397 1378.5 403 1374.5 400 1372.5 402"/><polygon class="cls-3" points="1380.63 398 1386 398.5 1388 406.5 1385.42 406.5 1384 406.5 1386 410.5 1384 412.5 1382.4 407.87 1381 408.5 1380 402.5 1381 402.5 1382 405.5 1383 404.5 1384 402.5 1380.63 400.7 1380.63 398"/><polygon class="cls-3" points="1367 401.5 1373 404.5 1374 406.5 1368 410.5 1368 403.5 1367 401.5"/><polygon class="cls-3" points="1367 396.5 1369 396.5 1371 399.5 1369 400.5 1367 399.5 1367 396.5"/><polygon class="cls-3" points="1381.89 412.5 1383 415.5 1378 416.5 1378.5 414.13 1380.5 412.3 1381.89 412.5"/><polygon class="cls-3" points="1376 416.5 1379 411.5 1379 405.25 1376 412.12 1376 416.5"/><polygon class="cls-3" points="1373.68 419.06 1375.05 417.99 1374.59 415.5 1375.5 409.84 1375.5 407.69 1372.77 408.5 1372.51 412.5 1370.5 413.55 1370.5 415.93 1373.68 419.06"/><polygon class="cls-1" points="1387.13 414.4 1392 418.5 1394 428.5 1394 431.5 1393 432.5 1393 435.5 1391 434.5 1390 429.5 1388 433.5 1389.63 435.5 1389 439.5 1388 440.87 1387 440.5 1387 437.5 1385 438.5 1381 435.5 1380.5 431.6 1381 429.5 1378 426.76 1377 428.5 1375.5 428.42 1374 429.94 1373 426.5 1371 431.78 1369 431.28 1370.5 425.37 1374 424.61 1375 422.5 1377 421.5 1379 421.5 1379 424.5 1381 424.5 1382 421.5 1384 422.24 1384 418.84 1388 419.55 1387.13 414.4"/><polygon class="cls-2" points="1343.5 424 1351.5 416 1356.28 410.5 1354.5 404 1352.5 411 1343.5 420.76 1343.5 424"/><polygon class="cls-2" points="1356.28 398.5 1358.71 401.5 1356.28 403 1356.28 398.5"/></g><g id="MY"><polygon class="cls-1" points="1328 446.5 1322 455.5 1314 457.5 1312 464.5 1305 461.5 1306 465.5 1310 468.5 1318 467.42 1318 464.5 1322 464.5 1326 466.5 1332 464.5 1335 455.5 1337 447.5 1345 447.5 1347 449.5 1353 448.5 1349.75 444.55 1356 442.5 1343.5 431.06 1342 433.5 1341 431.5 1335 444.5 1328 446.5"/><polygon class="cls-1" points="1252.5 434 1256 435 1257.5 440 1261.5 439 1263.5 436 1269.5 442 1271.5 448 1271.5 456 1276.5 465 1271.5 466 1260.5 457 1259.5 455 1253.5 443 1252.5 434"/></g><g id="BN"><circle class="cls-6" cx="1331.5" cy="445" r="3"/></g><g id="ID"><polygon class="cls-1" points="1347 449.5 1349 452.5 1346 454.5 1350 459.5 1348 462.5 1355.5 468 1352.5 470 1349.5 468 1347.5 477 1343.5 482 1340.5 487 1340.74 490.5 1339.5 495 1330.5 499.79 1330.5 494.64 1323.5 493 1316.5 496 1315.5 492 1307.5 493 1305.5 481 1304.5 481 1300.5 471 1301.5 465 1305 461.5 1306 465.5 1310 468.5 1318 467.42 1318 464.5 1322 464.5 1326 466.5 1332 464.5 1335 455.5 1337 447.5 1345 447.5 1347 449.5"/><polygon class="cls-1" points="1365.5 466 1381.5 469 1386.5 464 1388.5 465 1384.5 472 1378.5 473 1375.5 471 1362.5 471 1360.5 478 1365.5 483 1368.5 479 1378.5 478 1378.5 480 1374.5 481.81 1368.5 486 1372.5 493 1372.5 496 1375.5 500 1371.5 501 1370.5 504 1367.5 504 1368.5 499 1364.5 496 1365.99 490 1361.5 493 1361.5 504 1361.5 508 1357.5 509 1356 506.58 1357.5 503 1357.5 495 1354.5 496 1353.5 491 1356.5 486 1356.5 481 1360.5 468 1363.48 468.5 1365.5 466"/><polygon class="cls-3" points="1371.5 507 1373.5 503 1377.5 502 1376.5 506 1377.5 508 1374.5 510 1371.5 507"/><polygon class="cls-3" points="1393 492.5 1397 493.5 1399 495.5 1396 497.99 1393 495.5 1393 492.5"/><polygon class="cls-3" points="1385 483.5 1394 485.5 1392 486.5 1393 489.5 1390 486.5 1383 486.5 1385 483.5"/><polygon class="cls-3" points="1401 469.5 1402.02 469.5 1406.86 464 1407 467.5 1405 469.5 1405 470.5 1409 472.5 1404 471.5 1403 474.5 1406 479.5 1404 479.5 1401 475.5 1402 472.5 1401 469.5"/><polygon class="cls-3" points="1401 468.5 1404 466.5 1403 460.5 1401 463.27 1401 468.5"/><polygon class="cls-3" points="1405 459.5 1405 462.43 1407 461.5 1407 457.5 1405 459.5"/><polygon class="cls-1" points="1402 493.5 1406 491.5 1413 491.5 1417 492.5 1417 494.46 1418 495.5 1418.25 497.99 1412.78 494.74 1407.05 494.74 1405 494.5 1404 493.5 1402.4 495.24 1401 494.5 1402 493.5"/><polygon class="cls-1" points="1472.96 490 1470.5 530 1465.5 524 1458.5 524 1456.5 526 1452.5 526 1455.5 520 1459.5 519 1459.5 515 1455.5 507 1444.5 502 1440.5 502 1438.5 499 1435.5 498 1433.5 494 1431.5 499 1428.5 499 1428.5 496 1424.5 491 1429.5 491 1431.5 489 1434.41 490 1434.5 488 1425.5 488 1424.5 484.21 1417.5 482 1418.25 479.06 1422.01 479.06 1426.5 477 1436.5 479 1436.5 484 1441.5 495 1448.5 488 1452.5 487 1453.5 485 1457.5 483 1466.5 489 1472.96 490"/><polygon class="cls-1" points="1227.5 440 1239.5 442 1252.5 456 1252.5 457.97 1257.5 462 1257.5 460 1264.5 466 1269.5 472 1271.5 471 1273.5 474 1271.5 477 1272.5 480 1276.5 481 1278.5 488 1282.5 489 1285.5 493 1283.5 496 1282.5 510 1280.5 508 1278.5 509 1276.5 508 1276.5 511 1258.48 490.5 1250.5 473 1247.5 473 1245.5 463 1240.5 460 1235.5 451 1233.5 451 1226.5 442 1227.5 440"/><polygon class="cls-1" points="1279.5 515 1284.5 511 1289.5 512 1289.5 510 1296.74 513 1298.5 516 1308.5 517 1309.5 513 1313.5 515 1319.5 516 1320.5 521 1328.5 521 1329.5 528 1321.5 525 1311.5 525 1299.5 521 1296.5 523 1286.5 519 1286.5 517 1279.5 515"/><polygon class="cls-1" points="1375.5 537 1378.5 531 1384.5 528 1385.5 532 1381.5 536 1375.5 537"/><polygon class="cls-3" points="1331.5 524 1335.5 524 1331.96 528.5 1331.25 526.25 1331.5 524"/><polygon class="cls-3" points="1336.62 528 1339 524.5 1341.04 525 1339.48 528.5 1336.62 528"/><polygon class="cls-3" points="1341 529.5 1342 525.5 1345.34 525.5 1347 526.5 1348.26 526.25 1346.23 524 1348.26 523.72 1352.86 525 1354 527.5 1345.69 529.5 1341 529.5"/><polygon class="cls-3" points="1353 531.5 1358.71 531.5 1362 535.5 1359.42 537 1355.5 534.22 1353 533.5 1353 531.5"/><polygon class="cls-3" points="1357 527.5 1359.84 524.5 1362.77 525 1370.71 526.25 1373.81 524 1380.5 524.5 1385.22 523.72 1385.5 525 1380.5 526.25 1374.77 525.61 1371.5 527.5 1364 528.5 1357 527.5"/><polygon class="cls-3" points="1389 523.5 1390 521.5 1394 520.5 1395 521.5 1389 523.5"/></g><g id="SG"><circle class="cls-6" cx="1275" cy="465.5" r="2.5"/></g><g id="TH"><polygon class="cls-1" points="1263.5 436 1260 432.5 1253 428.5 1250 417.5 1247.16 417.5 1246 412.5 1250 400.5 1249.5 392 1253.87 392 1254.5 397 1258.5 397 1263.5 400 1261.58 392 1265.5 387 1274.5 386 1275.5 387 1277.5 385.39 1277.5 377.42 1272.5 373.66 1271.5 368 1266.5 362 1262.5 362 1260.5 365 1256.5 364 1251.5 368 1251.5 356 1250.5 354 1246.5 355 1246.8 352 1245.01 350 1241.69 350 1238.5 353 1234.5 354 1231.5 362 1240.5 375 1238.5 382 1243.5 389 1244.5 396 1246.5 402 1242.5 413 1241.5 425 1244.5 424 1252.5 434 1256 435 1257.5 440 1261.5 439 1263.5 436"/></g><g id="VN"><polygon class="cls-1" points="1253.5 338 1259.5 346 1263.5 348 1264.5 346 1269.5 353 1265.5 354 1265.5 356 1272.5 360 1273.4 363 1286.5 377 1286.5 378 1288.5 382 1287.5 388 1290.5 398.46 1281.5 403 1283.5 408 1280.5 407 1274.5 411 1277.5 413.06 1276.5 422 1285.5 416 1287.5 410 1288.5 410 1298.5 404 1299.5 394 1294.98 380 1290.5 375 1280.5 366 1280.5 365 1275.5 359 1275.5 353 1281.5 346 1285.5 343 1279.5 341 1276.5 337 1277.5 336 1276.5 335 1272.5 335 1268.5 332 1266.5 333 1267.5 335 1254.5 336 1253.5 338"/></g><g id="KH"><polygon class="cls-1" points="1275.5 387 1280.5 389 1280.5 386.46 1282.5 385 1284.41 387 1287.78 386.29 1287.5 388 1290.5 398.46 1281.5 403 1283.5 408 1280.5 407 1274.5 411 1267.5 408 1263.5 400 1261.58 392 1265.5 387 1274.5 386 1275.5 387"/></g><g id="LA"><polygon class="cls-1" points="1248.5 344 1245.01 350 1246.8 352 1246.5 355 1250.5 354 1251.5 356 1251.5 368 1256.5 364 1260.5 365 1262.5 362 1266.5 362 1271.5 368 1272.5 373.66 1277.5 377.42 1277.5 385.39 1275.5 387 1280.5 389 1280.5 386.46 1282.5 385 1284.41 387 1287.78 386.29 1288.5 382 1286.5 378 1286.5 377 1273.4 363 1272.5 360 1265.5 356 1265.5 354 1269.5 353 1264.5 346 1263.5 348 1259.5 346 1253.5 338 1250.5 338 1251.5 340 1252.5 345 1248.5 344"/></g><g id="MM"><polygon class="cls-1" points="1222.5 302 1220.5 308 1217.5 308 1212.5 313 1210.5 329 1206.5 328 1205.5 340 1203.5 340 1202.5 347 1210.5 354 1217.5 367 1216.5 376 1223.18 378.58 1229.5 373 1229.5 368 1234.5 376 1237.5 388 1241.5 397 1243.35 410.66 1246.5 402 1244.5 396 1243.5 389 1238.5 382 1240.5 375 1231.5 362 1234.5 354 1238.5 353 1241.69 350 1245.01 350 1248.5 344 1248.5 342 1244.5 343 1242.5 340 1238.5 339 1239.5 334 1236.5 333 1233.5 327 1228.5 329 1227.5 324 1231.5 316 1230.5 307 1228.5 306 1226.5 302 1222.5 300.79 1222.5 302"/></g><g id="BT"><polygon class="cls-1" points="1179.5 307 1178.5 309 1185.5 311 1196.5 310 1195.5 307 1193.5 305 1192.5 304 1184.5 301 1179.5 307"/></g><g id="NP"><polygon class="cls-1" points="1174.5 304 1175.5 312 1170.5 313 1154.5 307 1149.5 307 1131.5 298 1134.49 289.76 1136.5 291 1137.87 288.96 1156.5 300 1174.5 304"/></g><g id="BD"><polygon class="cls-1" points="1178.5 313.39 1176.5 316 1182.5 320 1179.5 321.18 1177.5 324 1181.5 326 1184.5 342 1193.5 340 1192.5 335 1194.95 338 1196.5 335.78 1202.5 347 1203.5 340 1200.5 330 1198.5 330 1197.5 334 1194.59 330.19 1195.5 327 1197.5 327 1200.5 321 1186.5 320 1185.5 315 1178.5 313.39"/></g><g id="LK"><polygon class="cls-1" points="1144.5 416 1142.5 426 1143.5 434 1146.5 438 1153.5 435.36 1153.5 428.91 1148 416.97 1144.5 416"/></g><g id="IN"><polygon class="cls-1" points="1184.5 342 1181.5 326 1177.5 324 1179.5 321.18 1182.5 320 1176.5 316 1178.5 313.39 1185.5 315 1186.5 320 1200.5 321 1197.5 327 1195.5 327 1194.59 330.19 1197.5 334 1198.5 330 1200.5 330 1203.5 340 1205.5 340 1206.5 328 1210.5 329 1212.5 313 1217.5 308 1220.5 308 1222.5 302 1216.5 301 1217.5 299 1214.5 295 1210.5 297 1206.5 295 1203.5 299 1200.5 299 1197.5 305 1193.5 305 1195.5 307 1196.5 310 1185.5 311 1178.5 309 1179.5 307 1177.5 303 1174.5 304 1175.5 312 1170.5 313 1154.5 307 1149.5 307 1131.5 298 1134.49 289.76 1123.5 283 1122.5 284 1118.5 276 1122.5 277 1124.5 275 1120.5 270 1119.5 265 1114.5 263 1111.5 258 1102.5 264 1094.5 263 1093.5 264 1096.5 273 1103.5 277 1103.5 278 1100.5 280 1100.5 285 1098.5 290 1092.19 299.3 1089.5 304 1084.5 305 1082.5 303 1078.5 310 1082.5 312 1082.5 317 1085.5 318 1088.5 325 1086.5 327 1085.5 325 1082.05 327 1075.5 326 1075.5 328 1073.5 329 1076.5 333 1080.5 335 1085.5 335 1084.86 336.67 1078.5 338 1085.5 346 1090.5 348 1095.5 345 1096.5 339 1100.5 347 1099.5 352 1104.5 371 1111.5 386.37 1115.5 399 1122.5 411 1123.5 417 1129.5 425 1133.5 423 1135.5 419 1138.5 417 1140.5 411 1142.5 411.54 1142.5 400 1144.5 393 1141.5 382 1145.5 377 1152.5 374 1153.5 370 1167.5 354 1173.5 351 1174.5 349 1173.5 344 1179.5 340 1180.5 343 1184.5 342"/></g><g id="MV"><circle class="cls-2" cx="1113" cy="441.5" r="3"/></g></g><g id="Africa"><g id="DZ"><polygon id="DZ-2" data-name="DZ" class="cls-1" points="707 260.5 722 253.5 742 249.5 745 250.5 760.98 249.5 759.5 252.04 760 261.5 756 266.5 757 271.5 763.5 278.28 766 290.5 765 291.5 768 294.5 768 312.05 765 314.5 768 318.85 770 325.5 773 324.5 777 326.5 779 331.5 753 348.5 747 355.5 732 358.5 733 352.5 728 350.5 726 350.5 722 347.5 721 345.5 672 308.5 672 299.5 681 293.5 683 293.5 698 285.5 697 281.5 703 278.5 712 278.5 712 276.5 709 272.5 709 262.5 707 260.5"/></g><g id="SC"><circle class="cls-2" cx="1013.5" cy="503" r="2"/></g><g id="CV"><polygon class="cls-2" points="583 368.5 583 372.5 580.71 370.5 583 368.5"/><circle class="cls-3" cx="590" cy="382.5" r="1"/><circle class="cls-4" cx="594" cy="376.5" r="1"/><circle class="cls-4" cx="585" cy="383.5" r="1"/><circle class="cls-4" cx="586.5" cy="373" r="0.5"/><circle class="cls-4" cx="591.5" cy="381" r="0.5"/></g><g id="TN"><polygon class="cls-1" points="760.98 249.5 766.98 246.5 769.5 247 771.5 250 773.78 248.5 773.78 252 772.5 256 773.78 261.9 768.5 266 775.5 271 777 276.58 769.5 282 769.5 286 766 290.5 763.5 278.28 757 271.5 756 266.5 760 261.5 759.5 252.04 760.98 249.5"/></g><g id="AO"><polygon class="cls-1" points="781.5 511 784.5 510 803.9 510 808.5 523 818.35 523 819.54 516.5 825.28 516.5 825.5 518 832.5 518 831.5 532 835.5 542 843.5 541 843.5 553.09 832.5 553 831.5 573 839.5 581 828.5 584 815.5 583 812.5 579.12 810.5 580 790.5 580 785.5 577 783.5 579 777.5 579 781.5 559 783.5 552 789.5 545 784.5 529 785.5 527 782.5 516 781.5 511"/><polygon class="cls-1" points="783.5 501 784.5 503 780.5 509 779.5 505 783.5 501"/></g><g id="NG"><polygon class="cls-1" points="760.5 446 762.5 439 770.5 431 775.5 434 782.5 421 788.5 406 792.5 405 792.5 400.13 787.5 390 781.5 394 771.5 392 767.5 395 757.5 393 752.5 395 749.5 391 743.5 389 738.5 391 733.5 404 735.5 410 731.5 420 729.5 420 729.5 435.95 738.5 435 743.5 441 745.5 447 751.96 447 760.5 446"/></g><g id="NE"><polygon class="cls-1" points="738.41 357.22 737.5 375 734.5 380 716.5 383 717.5 391 721.5 392 721.5 395 727.46 400.01 730.5 399 734.02 402.66 738.5 391 743.5 389 749.5 391 752.5 395 757.5 393 767.5 395 771.5 392 781.5 394 787.5 390 787.5 386.52 797.5 372 798.5 354 800.5 351 797.5 346 794.5 334 790.5 336 784.5 332 779 331.5 753 348.5 747 355.5 738.41 357.22"/></g><g id="ML"><polygon class="cls-1" points="689.32 321.58 681.99 321.58 685.66 372.31 687.5 375 685.66 380.19 665.28 380.19 657.87 380.19 657.5 382 653.5 379 652.5 384 650.23 384 651.5 392 653.5 393 654.5 401 663.13 401 666.5 398 669.78 406.58 672.5 412 677.58 412 681.5 409 682.71 412 685.5 411 686.65 402.66 690.5 400 694.5 393 696.5 394 702.5 388 711.5 383 716.5 383 734.5 380 737.5 375 738.41 357.22 732 358.5 733 352.5 728 350.5 726 350.5 722 347.5 721 345.5 689.32 321.58"/></g><g id="MR"><polygon class="cls-1" points="672 308.5 671.5 316 653.81 316 652.5 331 647.5 334 647.5 343.9 625.5 344 630.5 352 628.5 356 630.5 363 627.5 376 636.5 373 643.66 376 650.23 384 652.5 384 653.5 379 657.5 382 657.87 380.19 685.66 380.19 687.5 375 685.66 372.31 681.99 321.58 689.32 321.58 672 308.5"/></g><g id="MA"><polygon class="cls-1" points="687.5 257 689.5 256 694.32 259.84 702.41 259.84 707 260.5 709 262.5 709 272.5 712 276.5 712 278.5 703 278.5 697 281.5 698 285.5 683 293.5 681 293.5 672 299.5 672 305.45 647.84 305.45 649.16 304 660.5 298 667.5 290 665.5 286 671.5 274 682.5 267 687.5 257"/></g><g id="EH"><polygon class="cls-1" points="672 305.45 647.84 305.45 646.5 310 640.5 314 637.5 325 632.5 329 625.5 344 647.5 343.9 647.5 334 652.5 331 653.81 316 671.5 316 672 308.5 672 305.45"/></g><g id="LY"><polygon class="cls-1" points="775.85 272.29 795.5 277 797.5 282 808.5 285 814.77 290.5 820.5 286 819.5 278 827.5 274 835.5 275 837.5 278.1 845.5 280 844.5 290.5 847.5 340 847.5 352.01 842.95 352.01 842.5 355 800.5 330.76 794.5 334 790.5 336 784.5 332 779 331.5 777 326.5 773 324.5 770 325.5 768 318.85 765 314.5 768 312.05 768 294.5 765 291.5 766 290.5 769.5 286 769.5 282 777 276.58 775.85 272.29"/></g><g id="EG"><polygon class="cls-1" points="892.5 284 897.5 294 895 304.97 889.5 301 885.5 292 884.5 294 891 304.97 903.5 328 902.5 334 894 342.1 889.5 340 847.5 340 844.5 290.5 845.5 280 857 282.64 866.5 287 872.5 283 881.5 282 885.5 285 892.5 284"/></g><g id="SD"><polygon class="cls-1" points="902.5 334 909.5 339 912.5 345 913.04 358.5 920.5 364 911.5 371.12 909.5 383 908.5 397 903.5 401.81 901.5 408 898.5 410 898.5 412.31 894.5 410 892.5 406 894.5 400 888.5 402 889.5 408 882.5 416 878.58 412.79 870.65 418 866.5 417 866.5 414.94 861.5 415 858.5 416 855.5 412 851.5 412 847.5 416.25 845.5 421 841.04 421 842.5 415 837.5 409 837.5 406.1 834.5 397 832.5 397 838.5 379 843.5 379 842.5 355 842.95 352.01 847.5 352.01 847.5 340 889.5 340 894 342.1 902.5 334"/></g><g id="SS"><polygon class="cls-1" points="898.5 412.31 897.5 423 893.46 423 891.5 426 896.5 428 902.5 434 904.5 441 907.5 442 907.5 446.46 899.5 446.46 897.5 450 887.5 452 879.96 452 873.5 446 866.5 448 862.5 443 859.5 439 850.5 427 844.5 424 844.5 421 845.5 421 847.5 416.25 851.5 412 855.5 412 858.5 416 861.5 415 866.5 414.94 866.5 417 870.65 418 878.58 412.79 882.5 416 889.5 408 888.5 402 894.5 400 892.5 406 894.5 410 898.5 412.31"/></g><g id="CD"><polygon class="cls-1" points="814.5 448 820.5 443 824.5 446 835.5 449 837.69 446 851.5 443 862.5 443 866.5 448 873.5 446 879.96 452 880.5 459 882.5 461 876 469.87 873.5 483 870.5 489 871.5 494 871.5 511 878.58 524.19 870.5 526 867.5 531 867.5 545 870.5 550 874.5 548 874.5 556 870.41 556 860.5 546 857.5 548 850.5 546 850.5 543 843.5 541 835.5 542 831.5 532 832.5 518 825.5 518 825.28 516.5 819.54 516.5 818.35 523 808.5 523 803.9 510 784.5 510 781.5 511 780.5 509 784.5 503 791.5 501 793.5 505 801.5 497 802.5 488 809.5 478 814.5 457 814.5 448"/></g><g id="CG"><polygon class="cls-1" points="774.5 498 778.5 495 777.5 488.6 782.5 486 790.22 490 792.5 478 789.5 476 789.5 472 792.5 469.61 790.5 466 785.5 467 786.5 461 800.5 463 803.5 453 814.5 452.19 814.5 457 809.5 478 802.5 488 801.5 497 793.5 505 791.5 501 784.5 503 783.5 501 779.5 505 774.5 498"/></g><g id="GA"><polygon class="cls-1" points="765.5 468 775.75 468 775.75 460.52 786.5 461 785.5 467 790.5 466 792.5 469.61 789.5 472 789.5 476 792.5 478 790.22 490 782.5 486 777.5 488.6 778.5 495 774.5 498 765.5 488 762.54 478.6 764.5 477 765.5 473 765.5 468"/></g><g id="GQ"><polygon class="cls-1" points="775.75 460.52 767.5 461 765.5 466 765.5 468 775.75 468 775.75 460.52"/><polygon class="cls-2" points="762.5 451 762.5 455 759.5 454 762.5 451"/></g><g id="CM"><polygon class="cls-1" points="789.95 394.96 792.5 394.46 796 401.5 796 409.5 798 413.5 792 413.5 789.95 415.54 797 422.5 798 428.5 792.5 437.57 794.5 447 802.1 457.67 800.5 463 786.5 461 775.75 460.52 767.5 461 767.5 454.52 767 449.5 760.5 446 762.5 439 770.5 431 775.5 434 782.5 421 788.5 406 792.5 405 792.5 400.13 789.95 394.96"/></g><g id="TG"><path class="cls-1" d="M744,457h4.4l-.4,4,2,2,2,8,1,15-3,1-3-2V473s-2-11.57-2-11.28-1-1.72-1-1.72Z" transform="translate(-28.5 -50)"/></g><g id="BJ"><polygon class="cls-1" points="727.46 400.01 727.46 403.42 722.5 405 719.9 407 719.5 411 721.5 413 723.5 421 724.5 436 729.5 435.95 729.5 420 731.5 420 735.5 410 733.5 404 734.02 402.66 730.5 399 727.46 400.01"/></g><g id="GN"><polygon class="cls-1" points="642.5 397 648.5 399 654.21 398.71 654.5 401 663.13 401 666.5 398 669.78 406.58 672.5 412 671.5 417 674.5 423 670.89 423 672.5 425 670.5 428 668.5 427 666.5 430 664.5 429 663.5 422 658.5 423 658.5 421 655.5 413 648.5 415 644.5 419 640.5 413 635.5 410 635.5 405.03 641.5 403 640.5 400 642.5 397"/></g><g id="GW"><polygon class="cls-1" points="642.5 397 632.5 397 626.5 399 627.5 402 632.5 402 632.5 405 635.5 408.13 635.5 405.03 641.5 403 640.5 400 642.5 397"/></g><g id="GH"><polygon id="GH-2" data-name="GH" class="cls-1" points="700.5 407 715.5 407 715.5 410 716.5 411.72 718.5 423 718.5 435 721.5 437 720.5 439 712.5 441 704.5 446 699.5 444 697.5 435 701.5 424 700.5 417 700.5 407"/></g><g id="BF"><polygon class="cls-1" points="685.5 411 691.5 416 693.5 414 697.5 414 700.5 415.54 700.5 407 715.5 407 719.9 407 722.5 405 727.46 403.42 727.46 400.01 721.5 395 721.5 392 717.5 391 716.5 383 711.5 383 702.5 388 696.5 394 694.5 393 690.5 400 686.65 402.66 685.5 411"/></g><g id="CI"><polygon class="cls-1" points="674.5 447.78 684.5 443 699.28 443 697.5 435 701.5 424 700.5 417 700.5 415.54 697.5 414 693.5 414 691.5 416 685.5 411 682.71 412 681.5 409 677.58 412 672.5 412 671.5 417 674.5 423 670.89 423 672.5 425 670.5 428 668.5 427 670.5 432 668.5 435 675.5 439 674.5 447.78"/></g><g id="LR"><polygon class="cls-1" points="652.5 432 658.5 423 663.5 422 664.5 429 666.5 430 668.5 427 670.5 432 668.5 435 675.5 439 674.5 447.78 664 442.7 652.5 432"/></g><g id="GM"><polygon class="cls-1" points="626.5 391 635.5 390 641.5 392 641.5 394 634.5 393 625.5 395 626.5 391"/></g><g id="SN"><polygon class="cls-1" points="627.5 376 624.5 383 622.5 384 626.5 391.03 635.5 390 641.5 392 641.5 394 634.5 393 625.5 395 626.5 399 632.5 397 642.5 397 648.5 399 654.21 398.71 653.5 393 651.5 392 650.23 384 643.66 376 636.5 373 627.5 376"/></g><g id="DJ"><polygon class="cls-1" points="945.5 397 947.5 401 942.5 404 946.47 404 945 406.58 938.5 408 938.5 403 941.5 398 945.5 397"/></g><g id="ER"><polygon class="cls-1" points="941.5 398 930.5 387 923.5 386 920.5 386 917.5 384 915.5 388 909.23 386.81 909.5 383 911.5 371.12 920.5 364 927.5 383 927.5 380 936.5 387 945.5 397 941.5 398"/></g><g id="SO"><polygon class="cls-1" points="946.47 404 951.5 410 955.5 411 959.6 408 964.5 409 967.5 406 977.5 406 983.66 404 985.5 401 989.5 402 987.5 412 986.5 419 981.5 426 975.5 442 962.5 459 948.5 471 938.5 484 935.5 479 935.5 457.33 941.5 449 951.5 444 956.5 444 971.5 426 964.5 425 950.5 419 943.5 410 945 406.58 946.47 404"/></g><g id="ET"><polygon class="cls-1" points="940.63 450.2 934.5 448 929.5 450 927.5 453 918.95 452 914.5 447 907.5 446.46 907.5 442 904.5 441 902.5 434 896.5 428 891.5 426 893.46 423 897.5 423 898.5 412.31 898.5 410 901.5 408 903.5 401.81 908.5 397 909.23 386.81 915.5 388 917.5 384 920.5 386 923.5 386 930.5 387 941.5 398 938.5 403 938.5 408 945 406.58 943.5 410 950.5 419 964.5 425 971.5 426 956.5 444 951.5 444 941.5 449 940.63 450.2"/></g><g id="KE"><polygon class="cls-1" points="938.5 484 931.5 491.42 926.5 503 917.5 496 917.5 493 897.5 481 898.5 478 902.5 475 897.81 475 897.5 472 903.5 465 902.5 459 900.5 454 897.5 450 899.5 446.46 907.5 446.46 914.5 447 918.95 452 927.5 453 929.5 450 934.5 448 940.63 450.2 935.5 457.33 935.5 479 938.5 484"/></g><g id="UG"><polygon class="cls-1" points="873.5 483 878.58 480.79 885.93 480.79 886.83 474.73 893.5 472 897.5 472 903.5 465 902.5 459 900.5 454 897.5 450 887.5 452 879.96 452 880.5 459 882.5 461 876 469.87 873.5 483"/></g><g id="RW"><polygon class="cls-1" points="870.5 489 873.5 492 876.5 489 880.5 489 880.5 484 878.58 480.79 873.5 483 870.5 489"/></g><g id="BI"><polygon class="cls-1" points="878.67 489 878.67 492.12 880.5 493 875.5 501.08 873.5 501 871.5 494 870.5 489 873.5 492 876.5 489 878.67 489"/></g><g id="YZ"><polygon class="cls-1" points="931.5 537.81 927.5 535 925.5 522 926.5 516 923.5 513 923.5 510 926.5 503 917.5 496 917.5 493 897.5 481 894.5 487 896.5 487 893.07 490.5 888.5 488.46 885.5 491 885.93 480.79 878.58 480.79 880.5 484 880.5 489 878.67 489 878.67 492.12 880.5 493 875.5 501.08 873.5 501 875.5 510 874.5 512 874.5 513 877.5 514 882.5 526 896.5 533 898.5 533 900.5 536 900.5 542 902.5 545.01 907.5 544 915.5 546 918.5 543 925.5 542 931.5 537.81"/></g><g id="MZ"><polygon class="cls-1" points="901.5 579 903.5 573 905.5 572 906.5 563 901.5 557 900.5 548 902.5 545.01 907.5 544 915.5 546 918.5 543 925.5 542 931.5 537.81 932.5 540 931.5 543.18 932.5 564 931.5 569 924.5 577 911.5 584 899.5 596 899.5 599.6 900.5 601 902.5 615 901.5 623 888.5 630 886.5 633 888.5 634 888.5 638 883.6 638 883.5 632 883.5 622 880.5 611 887.5 603 887.5 600 889.5 595 890.5 577 881.5 571 877.5 572 876.5 566 891.5 560 894.5 563 898.5 562 899.5 567 897.5 572 901.5 579"/></g><g id="MW"><polygon class="cls-1" points="891.31 530.4 891.5 533 894.5 537 894.5 539 893.5 541 892.5 548 894.5 550.1 891.5 551 889.5 557 891.5 560 894.5 563 898.5 562 899.5 567 897.5 572 901.5 579 903.5 573 905.5 572 906.5 563 903.86 559.83 903.5 562 899.5 558 898 555.48 898 537.27 896.5 533 891.31 530.4"/></g><g id="ZM"><polygon class="cls-1" points="878.58 524.19 878.58 526.46 881.5 528 882.5 526 891.31 530.4 891.5 533 894.5 537 894.5 539 893.5 541 892.5 548 894.5 550.1 891.5 551 889.5 557 891.5 560 876.5 566 877.13 569.75 872.5 569.75 868.5 572 867.5 576 863.5 577 857.5 584 849.5 583 847.5 581 839.5 581 831.5 573 832.5 553 843.5 553.09 843.5 541 850.5 543 850.5 546 857.5 548 860.5 546 870.41 556 874.5 556 874.5 548 870.5 550 867.5 545 867.5 531 870.5 526 878.58 524.19"/></g><g id="SL"><polygon class="cls-1" points="644.5 419 644.5 423 649.49 430 652.5 432 658.5 423 658.5 421 655.5 413 648.5 415 644.5 419"/></g><g id="ZW"><polygon class="cls-1" points="849.5 583 854.5 594 859.5 597 862.5 600 863.5 606 868.5 607 869.5 609 880.5 611 887.5 603 887.5 600 889.5 595 890.5 577 881.5 571 877.5 572 877.13 569.75 872.5 569.75 868.5 572 867.5 576 863.5 577 857.5 584 849.5 583"/></g><g id="NA"><polygon class="cls-1" points="849.5 583 843.5 584 840.5 587 838.8 584 826.5 587 826.5 608.33 821.56 608.33 820.5 647 816.5 651 806.5 649 806.5 646.57 804.5 645 802.5 648 798.5 645 795.5 639 792.5 623 792.5 611 784.5 597 781.5 589 778.5 586 777.5 579 783.5 579 785.5 577 790.5 580 810.5 580 812.5 579.12 815.5 583 828.5 584 839.5 581 847.5 581 849.5 583"/></g><g id="BW"><polygon class="cls-1" points="821.1 625.29 824.5 632 824.11 638 829.4 638 834.5 633 836.5 628 842.5 631 849.5 630.49 851.5 625 854.5 624 858.5 618 865.5 612 869.5 609 868.5 607 863.5 606 862.5 600 859.5 597 854.5 594 849.5 583 843.5 584 840.5 587 838.8 584 826.5 587 826.5 608.33 821.56 608.33 821.1 625.29"/></g><g id="ZA"><polygon class="cls-1" points="802.5 648 810.5 667.3 810.5 673 808.5 674 813.5 683 818.5 686 827.5 684 831.5 681.45 848.5 682 864.5 672 877.5 656 883.5 649 888.5 638 883.6 638 883.5 641 878.58 640.25 876.5 637 879.5 631 883.5 632 883.5 622 880.5 611 869.5 609 858.5 618 854.5 624 851.5 625 849.5 630.49 842.5 631 836.5 628 834.5 633 829.4 638 824.11 638 824.5 632 821.1 625.29 820.5 647 816.5 651 806.5 649 806.5 646.57 804.5 645 802.5 648"/></g><g id="LS"><polygon class="cls-1" points="883.5 632 883.6 638 883.5 641 878.58 640.25 876.5 637 879.5 631 883.5 632"/></g><g id="SZ"><polygon class="cls-1" points="865.5 648 869.5 652.34 866.5 657 863 658.34 861.5 661 858.5 660 856.08 654.5 860.5 650 865.5 648"/></g><g id="CF"><polygon class="cls-1" points="798 428.5 803.5 427 804.5 428 814.5 425.37 817.5 422 816.5 420 823.5 419 831.5 409 837.5 407.24 837.5 409 842.5 415 841.04 421 844.5 421 844.5 424 850.5 427 862.5 443 851.5 443 837.69 446 835.5 449 824.5 446 820.5 443 814.5 448 814.5 452.19 803.5 453 802.1 457.67 794.5 447 792.5 437.57 798 428.5"/></g><g id="TD"><polygon class="cls-1" points="798 428.5 803.5 427 804.5 428 814.5 425.37 817.5 422 816.5 420 823.5 419 831.5 409 837.5 407.24 837.5 406.1 834.5 397 832.5 397 838.5 379 843.5 379 842.5 355 800.5 330.76 794.5 334 797.5 346 800.5 351 798.5 354 797.5 372 787.5 386.52 787.5 390 789.95 394.96 792.5 394.46 796 401.5 796 409.5 798 413.5 792 413.5 789.95 415.54 797 422.5 798 428.5"/></g><g id="MG"><polygon class="cls-1" points="978.5 547 982.5 559 983.5 565 983.5 568.37 982.5 571 979.5 568 980.5 576 977.99 579 977.5 582 964.5 623 962.5 627 958.5 628 953.5 630 946.5 628 945.5 618 943.01 609 946.5 603 950.5 596 948.5 581 951.5 573 960.5 571 968.5 565 971.5 557 973.5 557 976.5 552 975.5 550 978.5 547"/></g><g id="ST"><circle class="cls-2" cx="750.5" cy="473" r="1.5"/><circle class="cls-2" cx="754" cy="464.5" r="1"/></g><g id="KM"><polygon class="cls-4" points="947 543.5 947 547.5 946 545.5 947 543.5"/><circle class="cls-4" cx="952.5" cy="549" r="0.5"/><circle class="cls-4" cx="956" cy="552.5" r="1"/><circle class="cls-4" cx="948.5" cy="549" r="0.5"/></g><g id="MU"><polygon class="cls-4" points="1021 596.5 1021 598.3 1020 599.5 1018 599.5 1020 595.5 1021 596.5"/></g></g><g id="America"><g id="US"><polygon class="cls-1" points="397 200.5 395 196.5 398 186.5 392 185.5 376 200.5 358 200.5 350 205.5 349 210.5 335 210.5 335 213.5 317 222.5 309 220.5 315 214.5 318 211.5 319 206.5 313 208.5 312 207.5 319 199.5 313 195.5 302 202.5 297 215.5 290 221.5 289 216.5 298 201.5 303 195.5 312 193.5 319 194.5 314 189.5 304 191.5 300 189.5 304 185.5 287 190.5 282 189.5 296 182.5 276 178.5 276 174.64 275 176.5 144 176.5 142 181.5 133 180.5 125 196.5 111 213.5 107 223.5 103 228.5 102 236.5 106 258.5 105 264.5 114 267.5 118 271.5 118 276.5 130 274.5 129.46 276.5 145 282.5 160 283.5 161 280.5 170 280.5 176 287.5 176 293.5 182 298.5 186 292.5 193 292.5 195.54 298.5 199 306.5 199 312.5 208 316.5 208 307.5 216 300.5 225 296.5 234 292.5 240 294.5 243 292.5 246 296.5 248 296.5 251 294.5 255 296.5 255 291.5 252 289.5 262 289.5 272 288.5 276 291.5 276 293.5 283 290.5 288 297.5 286 305.5 289 315.5 294 321.5 299 312.5 297 294.5 297 285.5 304 277.5 318 267.5 332 260.5 335 250.5 338 239.5 339 246.5 344 239.5 344 235.5 347 235.5 353 227.5 361 225.5 358 224.5 370 221.5 374 218.5 373 215.5 381 207.5 391 203.5 397 200.5"/><polygon class="cls-1" points="135 143.5 144 135.5 141 130.5 142 114.5 129 117.5 129 112.25 122 111.5 182 60.5 176 57.5 147.37 57.5 134 53.5 73 67.5 76 74.5 81 76.5 71 80.5 69 76.5 47 82.5 46 86.5 59 88.5 68 85.5 60 93.5 40 95.5 22 105.5 19 112.5 28 112.5 23 119.5 30 118.5 32 121.5 37 118.5 40 120.5 1 138.5 5 139.5 59 119.5 59 116.5 86 107.5 69 117.5 89 113.5 95 108.5 102 108.31 106 112.5 117 112.5 124 113.5 124 118.5 127 121.5 126 128.5 123 136.5 126 140.5 130 137.5 131 135.5 133 139.5 133.22 143.5 135 143.5"/><circle class="cls-1" cx="13.5" cy="313" r="4.5"/></g><g id="CA"><polygon class="cls-1" points="144 176.5 137.5 170 139.5 178 132.5 177 125.5 166 133.5 167 130.5 148 135 143.5 144 135.5 141 130.5 142 114.5 129 117.5 129 112.25 122 111.5 182 60.5 198.5 65 239.5 58 240.5 62 253.5 61 270.5 66 280.5 67 273.5 71 294.5 71 297.5 74 302.5 69 313.5 67 328.5 72 344.5 68 347.5 73 367.5 62 357.5 59 372.5 50 376.5 53 372.5 62 374.5 67 382.5 63 381.5 73 398.5 60 411.5 63 404.5 69 404.5 74 393.5 80 380.5 78 365.5 84 358.5 91 333.5 103 314.5 120 319.5 121 317.5 129 328.5 130 341.5 140 353.5 140 347.5 156 351.5 165 362.5 158 364.5 143 379.5 137 387.5 127 384.5 121 393.5 113 392.5 109 398.5 104 398.5 100 419.5 101 429.5 108 424.5 115 424.5 119 433.5 122 448.5 110 452.5 124 450.5 134 455.5 141 465.5 144 464.5 148 468.5 151 462.5 162 439.5 169 413.5 170 390.5 181 419.5 176 418.5 181 408.5 183 411.5 189 417.5 195 425.5 196 431.5 188 433.5 195 419.5 202 401.5 211 398.5 207 413.5 198 408.5 197 397 200.5 395 196.5 398 186.5 392 185.5 376 200.5 358 200.5 350 205.5 336.5 207 331.5 210 335 210.5 335 213.5 322.5 215 309 220.5 318 211.5 322.5 209 327.5 200 332.5 202 332.5 194 319 194.5 314 189.5 318.5 189 318.5 183 308.5 177 296 182.5 276 178.5 276 174.64 275 176.5 144 176.5"/><polygon class="cls-1" points="458 165.5 464 164.5 458 172.07 469.57 174.64 468.5 179.96 471 184.5 466 191.5 463 189.5 464 184.5 457 188.5 456 184.5 439 184.5 448 175.5 458 165.5"/><polygon class="cls-1" points="366.5 92 380.5 81 394.11 92 390.5 95 383.5 91 371.5 96 366.5 92"/><polygon class="cls-2" points="374.5 100 377.5 97 384.56 97 377.5 101 374.5 100"/><polygon class="cls-2" points="388 104.5 388 101.51 393 99.5 391 103.5 388 104.5"/><polygon class="cls-1" points="407 89.5 406 86.5 414 83.5 429 82.5 428 78.5 441 77.5 440 67.5 427 57.5 424 60.5 397 59.5 389 55.5 390.5 48.73 417 41.5 410 45.5 430 40.5 432 46.5 438 45.5 433 43.5 434.59 40.5 447 42.5 448 46.5 453 51.5 468.5 58.76 469 63.5 462 65.5 474 72.5 482 77.5 472 81.5 468.5 85.98 458 77.5 453.93 81 459.9 89.5 460 93.5 454 98.5 442 93.5 448.32 101 448 102.5 435.5 99 428.5 96 429 92.5 423 87.5 412 90.5 407 89.5"/><polygon class="cls-1" points="539.5 3 504.5 1 470.5 3 439.5 5 445.5 10 456.5 11 445.5 14 433.51 7.5 411.5 12 417.5 21 432.5 19 440.5 24 429.5 22 417.5 28 458.95 28 456.5 25 482 15.42 539.5 3"/><polygon class="cls-1" points="347.5 46 353.5 54 368.5 48 372.5 38 356.5 41 358.5 44 353.5 47 350.5 44 347.5 46"/><polygon class="cls-1" points="445.5 34 435.5 37.51 401.5 37 397.34 34 403.5 30 414.5 27 410.83 32.25 421.42 32.25 441.5 31 445.5 34"/><polygon class="cls-1" points="364.62 27 371.5 30 385.99 28 379.53 34.05 368.2 34.05 361.28 30.52 364.62 27"/><polygon class="cls-1" points="375.5 45 380.74 38 400.56 40.5 383.5 47 375.5 45"/><polygon class="cls-1" points="257.75 50 262.29 54 284.5 48 277.5 55 276.5 61 286.5 64 285.5 67 313.5 62 324.5 66 339.5 60 331.78 54 339.5 42.5 328.5 44 322.47 50 312.5 45 303.5 39 289.5 37 275.31 38 257.75 50"/><polygon class="cls-1" points="295.25 29.63 317.5 24 329.04 24 324.5 27 333.5 32 341.22 32 341.22 28 349.1 27 355.55 32 345.5 35 317.5 39 316.02 37 318.5 32 310.5 32 306.47 30.52 295.25 29.63"/><polygon class="cls-1" points="376.5 16 385.99 16 393 17.93 389.5 23 373.63 19.5 378.5 18 376.5 16"/><polygon class="cls-1" points="396.14 19.5 398.17 23 409.75 24 408.8 19.5 400.56 17.09 396.14 19.5"/></g><g id="GL"><polygon class="cls-1" points="484.26 24 527.5 10 613.58 1 694.5 6 654.77 28 643.5 59 580.62 81 556.26 88.5 539.5 115.48 520.5 109 513.5 76 532.5 64 524.38 32.25 489.63 28 484.26 24"/></g><g id="MX"><polygon class="cls-1" points="118 276.5 130 274.5 129.46 276.5 145 282.5 160 283.5 161 280.5 170 280.5 176 287.5 176 293.5 182 298.5 186 292.5 193 292.5 199 306.5 199 312.5 208 316.5 201.5 335 207.5 359 215.5 363 233.5 358 239.5 345 257.5 343 252.5 354 249.5 362 246.5 362 243.5 365 233.5 366 230.5 369 234.5 375 226.5 376 223.5 385 213.5 375 201.5 378 174.5 365 158.5 355 158.5 349 160.5 344 155.5 328 144.5 317 145.5 313 135.5 296 135.5 285 127.5 281 125.5 292 130.5 303 135.5 314 136.5 326 139.5 328 141.5 332 137.5 335 129.5 323 129.5 317 118 305.45 124.5 302 119.5 293 118 276.5"/></g><g id="GT"><polygon class="cls-1" points="245.5 378 239.5 384 234.5 391 226.5 389 223.5 385 226.5 376 234.5 375 230.5 369 233.5 366 242.35 365.12 240.5 377 245.5 378"/></g><g id="BZ"><polygon class="cls-1" points="246.5 374 249.5 362 246.5 362 243.5 365 242.35 365.12 240.5 377 246.5 374"/></g><g id="HN"><polygon class="cls-1" points="245.5 378 259.19 377 268.5 379 272.5 383 263.5 385 257.5 390.22 254.5 389 252.5 390 251.5 395 249.5 395 246.5 393 247.5 390 237.95 386.17 239.5 384 245.5 378"/></g><g id="SV"><polygon class="cls-1" points="246.5 393 241.5 394 234.5 391 237.95 386.17 247.5 390 246.5 393"/></g><g id="NI"><polygon class="cls-1" points="246.5 393 247.5 397.69 256.5 407 267.5 409 267.5 403.18 271.5 387 272.5 383 263.5 385 257.5 390.22 254.5 389 252.5 390 251.5 395 249.5 395 246.5 393"/></g><g id="CR"><polygon class="cls-1" points="269.5 424 272.5 415.72 267.5 409 256.5 407 255.22 412.61 259.5 415.84 260.5 414 266.5 419 269.5 424"/></g><g id="PA"><polygon class="cls-1" points="300.5 422 300.5 427 296.5 431 294.5 423 291.5 420 287.5 421 283.5 425 285.5 428 282.5 431 279.5 427 274.53 424 269.5 424 272.5 415.72 276.5 419 281.5 420 288.08 415.72 294.5 417 300.5 422"/></g><g id="CU"><polygon class="cls-1" points="270.5 340 273.5 336 288.5 333 300.5 337.84 317.5 346 316.5 347 323.5 351 315.5 353 304.5 353 308.5 348 300.5 343 292.5 340 284.5 339 285 336.49 270.5 340"/><circle class="cls-2" cx="279" cy="342.5" r="1.5"/></g><g id="JM"><polygon class="cls-2" points="300 362.5 303 361.5 311 363.5 312 366.5 305 366.5 300 362.5"/></g><g id="HT"><polygon class="cls-2" points="329 352.5 336 353.5 335 364.5 330 363.5 323.11 364 320.83 361.5 322 360.5 330 361.5 332 360.5 330 359.5 330 355.5 327 354.5 329 352.5"/></g><g id="BS"><polygon class="cls-2" points="307 320.5 306 324.79 307 326.28 309 324.5 307 320.5"/><polygon class="cls-2" points="307.5 327.54 309 326.5 310 328.5 308 330.5 307.5 327.54"/><polygon class="cls-4" points="305 312.5 308.75 311.24 310 311.87 305 312.5"/><polygon class="cls-4" points="311 310.5 313.81 312.5 312 316.07 313 316.5 314.71 312.5 312 309.63 311 310.5"/><polygon class="cls-4" points="327 346.5 328 345.5 330 345.5 331 344.5 330.35 346.5 327 346.5"/><polygon class="cls-4" points="320.83 330.94 321 334.5 322.95 334.5 320.83 330.94"/></g><g id="KN"><circle class="cls-4" cx="382" cy="369.5" r="1"/></g><g id="AG"><circle class="cls-4" cx="387.5" cy="370" r="1.5"/><circle class="cls-4" cx="388" cy="367.5" r="1"/></g><g id="LC"><circle class="cls-4" cx="390" cy="389.5" r="1"/></g><g id="GD"><circle class="cls-4" cx="385" cy="400.5" r="1.41"/></g><g id="VC"><circle class="cls-4" cx="388" cy="393.5" r="1.41"/></g><g id="BB"><circle class="cls-4" cx="397" cy="393.5" r="1.41"/></g><g id="DM"><circle class="cls-4" cx="389" cy="380.5" r="1"/></g><g id="DO"><polygon class="cls-2" points="336 353.5 341.34 353 346 355.5 347 357.5 352 358.5 354 360.5 352 363.5 346 361.5 344 363.5 340 362.5 337 367.5 335 364.5 336 353.5"/></g><g id="PR"><polygon class="cls-2" points="359 361.5 360 365.5 366 365.5 368 362.5 359 361.5"/></g><g id="CO"><polygon class="cls-1" points="300.5 422 303.49 424 309 416.5 311.25 409 317 406.5 330 399.5 335.01 399.5 326.5 408 323.5 418 327.5 425 326.5 429 327.5 432 337.99 432 341.5 437 352.5 436 350.5 442 350.5 451 353.5 454 350.5 456 353.5 462.22 347.5 464 338.95 464 338.5 467 342.5 468 342.5 470 337.5 471 337.5 475 341.5 482 339.5 500 334.5 497 336.8 490 329.5 488 325.5 489 321.5 488 312.5 475 308.5 475 303.5 473 290.5 465 291.5 459 295.5 459 299.19 449.75 299.5 439 298.5 435 296.5 431 300.5 427 300.5 422"/></g><g id="EC"><polygon class="cls-1" points="290.5 465 284.5 469 281.5 479 279.5 480 279.5 487.9 282.23 490.5 285 489.21 285 493.27 282.5 495 282.5 501 287.5 502 289.5 504 292.5 503 295.5 493 304.5 488 309.5 480 308.5 475 303.5 473 290.5 465"/></g><g id="PE"><polygon class="cls-1" points="339.5 500 330.5 501 323.5 506 321.5 515 318.5 518 323.5 529 327.5 533 331.5 536 336.5 532 336.5 541 342.5 541 348.5 551 347.5 560 346.5 568 348.5 575.18 342.5 587 336.5 580 319.5 571 307.5 560 308.5 557 299.5 542 286.5 516 279.5 512.13 279.5 508.67 277.5 501 282.5 495 282.5 501 287.5 502 289.5 504 292.5 503 295.5 493 304.5 488 309.5 480 308.5 475 312.5 475 321.5 488 325.5 489 329.5 488 336.8 490 334.5 497 339.5 500"/></g><g id="BO"><polygon class="cls-1" points="342.5 541 348.5 541 358.5 534 364.86 534 366.5 545 372.5 550 383.5 555 392.5 558 395.5 573 405.5 574 404.5 579 408.5 581 410.59 587 409.5 597 402.5 591 389.5 594 386.5 599 386.5 610 383.5 608 379.5 609 377.5 614 375.5 609 369.5 609 367.5 607 362.5 613 358.5 613 352.5 598 353.5 592.13 346.04 580.03 348.5 575.18 346.5 568 348.5 551 342.5 541"/></g><g id="BR"><polygon class="cls-1" points="445.5 680 443.5 676 445.5 673.21 431.5 663 428.5 663 423.5 657 419.5 659 428.5 644 435.5 641 434.5 630 431.43 630 431.5 620 426.41 620 421.5 610 417.5 609 411.55 609 409.5 597 410.59 587 408.5 581 404.5 579 405.5 574 395.5 573 392.5 558 383.5 555 372.5 550 366.5 545 364.86 534 358.5 534 348.5 541 342.5 541 336.5 541 336.5 532 331.5 536 327.5 533 323.5 529 318.5 518 321.5 515 323.5 506 330.5 501 339.5 500 341.5 482 337.5 475 337.5 471 342.5 470 342.5 468 338.5 467 338.95 464 347.5 464 353.5 462.22 354.5 466 358.5 470 365.5 467 374.5 460 371.5 459 366.5 448 376.55 451.95 377.51 449.75 387.5 446 389 442.52 391.5 443 391.5 447 393.5 447 394.5 450 391.5 457 394.95 465 399.5 466 407.5 462 414.5 463 413.5 460 417.5 459 422.5 462 429.5 460 437.34 449.75 438.5 448 443.5 463 446.5 464 440.5 475 450.5 475 454.5 476 451.5 483 454.5 483.48 457.5 479 465.5 480 475.5 486 475.5 490 483.5 489 493.5 492 499.5 491 515.5 505 524.5 505 527.5 518 526.5 529 516.5 541 511.5 553 507.5 554 508.5 573 505.5 593 499.5 608 495.5 613 481.5 615 469.5 623 462.5 630 463.5 645 462.5 650 458.5 657 455.5 660 451.5 663 449.5 673 445.5 680"/></g><g id="PY"><polygon class="cls-1" points="411.5 640 423.5 642 431.5 636 431.43 630 431.5 620 426.41 620 421.5 610 417.5 609 411.55 609 409.5 597 402.5 591 389.5 594 386.5 599 386.5 610 395.5 619 402.5 621 415.5 629 412.5 634 411.5 640"/></g><g id="CL"><polygon class="cls-1" points="362.5 613 363.5 621 357.5 624 359.5 639 355.5 647 355.5 655.3 355.5 659 354.5 667 362.5 682 360.5 690 362.5 693 360.5 697 362.5 705 365.5 709 363.5 712 364.5 726 367.5 730 366.5 732 370.5 738 373.5 744 376.5 745 373.5 747 376.5 749.51 376.5 754.16 378.5 758 378.5 765.18 379.5 767 379.5 771.09 377.5 774 382.5 782 385.5 781 387.5 785 387.5 786.94 394.5 789 407.5 791 398.5 794 400.5 800 401.5 795 408.5 794 414.5 806 423.5 807 418.5 810 409.5 809 407.5 806 398.5 804 385.5 796 390.5 796 384.5 793 378.5 785 375.5 786 376.5 783 370.5 777 365.5 770 364.5 767 368.5 763 368.5 760 360.5 758 361.5 751 363.5 747 367.5 750 364.5 737 362.5 728 358.5 729 361.5 737 357.5 738 354.5 723 354.5 714 348.5 701 350.5 701 351.5 685 351.5 671 347.5 661 348.5 655 345.5 651 347.5 635 345.5 618 346.5 608 343.5 592 342.5 587 346.04 580.03 353.5 592.13 352.5 598 358.5 613 362.5 613"/></g><g id="AR"><polygon class="cls-1" points="408.5 794 418.5 801 430.5 804 430.5 806.37 423.5 807 414.5 806 408.5 794"/><polygon class="cls-1" points="407.5 791 400.5 783 402.5 778 405.28 778 404.5 772 409.5 765 408.5 760.79 401.5 759 396.5 754 398.5 749 404.5 748 403 739.21 405.5 737 403 731.33 400.5 730 397.5 722 404.5 725 411.5 724 410.5 720 408.5 711 422.47 711 430.5 707 432.5 696 428.5 693 428.5 689 420.5 684 420.5 682 419.5 679 420.5 675 418.5 667 419.5 659 428.5 644 435.5 641 434.5 630 431.43 630 431.5 636 423.5 642 411.5 640 412.5 634 415.5 629 402.5 621 395.5 619 386.5 610 383.5 608 379.5 609 377.5 614 375.5 609 369.5 609 367.5 607 362.5 613 363.5 621 357.5 624 359.5 639 355.5 647 355.5 659 354.5 667 362.5 682 360.5 690 362.5 693 360.5 697 362.5 705 365.5 709 363.5 712 364.5 726 367.5 730 366.5 732 370.5 738 373.5 744 376.5 745 373.5 747 376.5 749.51 376.5 754.16 378.5 758 378.5 765 379.5 767 379.5 771.09 377.5 774 382.5 782 385.5 781 387.5 785 387.5 786.94 394.5 789 407.5 791"/></g><g id="UY"><polygon class="cls-1" points="445.5 680 442.5 686 432.5 687 426.5 684 420.5 682 419.5 679 420.5 675 418.5 667 419.5 659 423.5 657 428.5 663 431.5 663 445.5 673.21 443.5 676 445.5 680"/></g><g id="SR"><polygon class="cls-1" points="407.5 438 414.53 439 414.53 438 424.5 439 423 443.12 422.05 449.75 424.5 453 420.55 460.83 417.5 459 413.5 460 414.5 463 408.9 462.2 406.5 454 402.59 450.5 404.5 443 407.5 443 407.5 438"/></g><g id="GY"><polygon class="cls-1" points="394.5 423 400.5 429 400.5 432.25 407.5 436 407.5 438 407.5 443 404.5 443 402.59 450.5 406.5 454 408.9 462.2 407.5 462 399.5 466 394.95 465 391.5 457 394.5 450 393.5 447 391.5 447 391.5 443 389 442.52 385.51 438 386.59 433.09 391 431.3 390 427.24 394.5 423"/></g><g id="VE"><polygon class="cls-1" points="394.5 423 390 427.24 391 431.3 386.59 433.09 385.51 438 389 442.52 387.5 446 377.51 449.75 376.55 451.95 366.5 448 371.5 459 374.5 460 365.5 467 358.5 470 354.5 466 353.5 462.22 350.5 456 353.5 454 350.5 451 350.5 442 352.5 436 341.5 437 337.99 432 327.5 432 326.5 429 327.5 425 323.5 418 326.5 408 330.06 404.44 331.5 410 329.57 415.72 334.5 417 333.5 408 341.5 402 348.5 406 350.5 410 359.5 409 367.5 413 372.5 409 383.59 409.03 378.5 411 389 416.37 388 421.03 394.5 423"/></g></g><g id="Oceania"><g id="AU"><polygon class="cls-1" points="1477.5 539 1481.5 555 1481.5 561.69 1489.5 565 1490.5 590 1501.5 599 1503.5 611 1508.5 611 1508.5 616 1515.5 629 1513.5 647 1501.5 670 1488.5 679 1471.5 703 1459.5 705 1447.5 711 1442.5 706 1434.23 711 1422.5 707 1422.5 690.64 1418.25 685.63 1422.5 675 1406 686.34 1405 673.92 1392 665.81 1367.5 671 1357.5 672.73 1346.5 682 1328 680.61 1316.5 687 1305 686.34 1302.5 680 1308.5 674 1311.5 650 1307.5 634 1313.5 632 1311.5 620 1315.5 608 1338.83 598.22 1362 589.39 1367.5 575 1371.5 576.97 1375.5 572.91 1388.5 559.54 1394 559.3 1397.5 565.03 1405 565.03 1405 559.54 1414.5 550 1423.5 548 1421.5 542 1435.5 547 1445.23 546.88 1441.5 557 1436.5 563 1454.5 578 1460.5 582 1469.5 567 1470.5 551 1477.5 539"/><polygon class="cls-1" points="1434.5 722 1439.5 724 1451.66 722 1439.5 738 1430.5 740 1434.5 722"/></g><g id="TL"><polygon class="cls-1" points="1384.5 528 1388.5 526 1397.5 525 1393 528.91 1385.5 532 1384.5 528"/></g><g id="PG"><polygon class="cls-1" points="1472.96 490 1470.5 530 1482.23 530 1484.14 524 1491.55 520.5 1497.28 523.5 1504.92 534.25 1521.5 540 1515.5 529.5 1502.77 515 1508.98 515 1507.78 510 1497.99 506 1496 500.79 1477.93 491.5 1472.96 490"/><polygon class="cls-2" points="1511.5 507 1521.5 507.48 1529.5 504 1529.5 499.42 1533.5 501 1532.5 508 1518.5 513 1511.5 507"/><polygon class="cls-2" points="1545 505.5 1549 515.5 1552 515.5 1549 509.5 1545 505.5"/><polygon class="cls-3" points="1525.75 490 1534 497.5 1536 503.5 1538 498.5 1530 491.5 1525.75 490"/></g><g id="SB"><polygon class="cls-3" points="1576 524.5 1577 530.5 1581 534.5 1578 525.5 1576 524.5"/><polygon class="cls-3" points="1565 520.5 1570 523.5 1572 526.5 1568 523.5 1565 520.5"/><polygon class="cls-3" points="1555 514.5 1558 515.5 1560 519.5 1555 516.37 1555 514.5"/><polygon class="cls-1" points="1565.5 528.5 1569 530.22 1574.25 530.38 1576 536 1567.25 536 1565.5 533.13 1565.5 528.5"/><polygon class="cls-3" points="1578.5 536.55 1580.5 536.55 1583.9 540 1581 540 1578.5 537.99 1578.5 536.55"/><polygon class="cls-4" points="1555.5 521 1561.31 524.5 1562.5 528 1555.5 521"/></g><g id="VU"><ellipse class="cls-2" cx="1605.5" cy="570.5" rx="5.5" ry="6"/><circle class="cls-2" cx="1609" cy="581.5" r="2"/></g><g id="FJ"><circle class="cls-1" cx="1659" cy="582.5" r="6"/><circle class="cls-2" cx="1668.5" cy="575" r="5"/></g><g id="NZ"><polygon class="cls-1" points="1597 684.5 1601 689.5 1600 698.5 1604 705.5 1614 703.5 1604 712.5 1582 727.66 1579 726.5 1588 718.5 1583 713.5 1594 705.5 1595 689.69 1597 684.5"/><polygon class="cls-1" points="1572.5 721 1572.5 724.97 1575.72 724.97 1574.5 729 1559.5 741 1531.5 758 1517.5 755 1532.5 743 1557.5 733 1572.5 721"/></g><g id="NR"><circle class="cls-2" cx="1591" cy="443.5" r="2"/></g><g id="Calque_202" data-name="Calque 202"><circle class="cls-2" cx="1715.5" cy="558" r="3"/></g></g></svg>
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        </div>
        
      </>
    );
  }