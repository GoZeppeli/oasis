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
                  <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 923.75 664"><g id="Europa"><g id="FR"><path class="cls-1" d="M762.5,214.5c12.83,9.81,10.45,8.36,26,12-3.73,10-3.73,8.69-11.5,15.5h5l2,6-3,2,5,8-7,4-11-3-5.5,3,1.5,4-13-2-10-4,2-12,3,1-7-13-11-3,1-2-2-1c8.47-2.3,7.55-2.29,16,0l-2-8h2l3,2h5l2-3,4-1,.75-4.82Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="189.75 199 191.75 196 190.75 189 186.75 193 189.75 199"/><circle class="cls-3" cx="433.75" cy="580" r="2"/></g><g id="RU"><polygon class="cls-1" points="367.75 145.04 373.75 149 374.75 148 373.75 144 382.75 137 400.75 143 409.75 141 431.75 144 432.75 140 425.75 136 426.75 131 430.75 130 430.75 129 426.75 128 424.75 125 442.75 122 456.75 116 466.75 117 470.75 123 482.75 125 482.75 127 486.75 127 495.75 121 496.75 125 518.75 142 520.75 140 526.75 143 535.75 142 546.75 150 551.75 149 556.75 153 558.75 153 560.75 151 565.75 150 566.75 148 576.75 143 588.75 147 601.75 149 604.75 145 599.75 140 602.75 135 620.75 140 631.75 148 638.75 145 649.75 148 653.75 151 674.75 151 680.75 146 698.75 151 703.75 147 701.75 132 694.75 132 697.75 129 721.75 130 743.75 150 761.75 155 766.75 161 771.75 161 780.75 157 784.75 160 786.75 176 779.75 176 777.75 178 785.75 189 781.75 191 783.75 193 790.75 190 797.75 191 803.75 184 807.54 158 796.75 134 776.75 122 776.75 126 772.75 126 766.75 121 756.75 120 766.75 95 808.75 96 818.75 93 815.75 85 815.75 80 826.75 79 835.75 87 836.75 76 842.75 76 847.75 85 839.75 103 840.75 110 873.75 142 877.75 136 873.75 131 872.75 123 878.75 121 865.75 102 861.75 102 854.75 91 860.75 88 865.75 92 868.75 88 873.75 87 883.75 89 892.75 76 903.75 77 903.75 74.12 881.75 64 897.75 60 922.75 66 916.44 60 922.75 58 897.75 51 900.75 54 838.75 37 815.75 36 814.75 40 802.75 37 797.75 40 762.75 32 742.75 33 682.75 23 679.75 25 686.75 29 663.75 29 655.75 26 658.75 33 640.75 27 643.75 26 613.75 18 615.75 21 594.75 21 594.85 18 561.75 17 567.75 10 559.75 5 546.75 4 533.75 6 535.75 3 514.75 1 514.75 5 490.75 8 471.75 13 473.75 16 455.75 19 454.75 21 467.75 27 463.75 28 445.75 25 442.75 27 446.75 29 445.75 30 441.75 30 438.75 23 435.75 23 436.75 26 433.75 29 440.75 34 440.75 38 444.75 41 454.75 41 460.75 44 459.75 48 454.75 43 447.75 44 450.75 48 444.75 56 432.75 54 440.75 53 443.75 45 437.75 41 432.75 31 428.75 30 429.75 24 416.75 22 409.75 31 414.75 39 424.75 42 424.75 46 399.75 38 388.75 37 392.75 43 389.75 46 384.75 42 366.75 46 365.75 42 343.75 49 342.75 53 337.75 53 333.75 50 339.75 48 333.75 44 326.75 44 328.75 51 331.75 53 331.75 57 324.75 55 315.75 59 318.75 65 308.75 64 304.75 61 302.75 62 308.75 68 296.29 66.19 293.75 58 285.75 54 313.75 57 318.75 52 315.75 48 300.5 42 275.75 38 267.27 41.88 266.75 45 272.75 49 270.75 52 274.75 58.36 274.75 63 278.75 68 277.75 70 283.75 74 282.75 77 269.75 87 279.75 90 271.75 93 271.75 104 274.75 112 287.75 115 287.3 120 293.75 124 297.75 128 291.75 129 294.75 135 303.25 133.5 306.25 137.5 306.25 139.5 311.25 141.5 313.25 145.5 321.25 145.5 335.25 150.5 335.25 160.5 328.25 161.5 328.25 164.5 332.91 164.27 326.75 168 330.75 171 326.65 175 322.25 175.5 320.25 177.5 328.75 180 339.75 187 340.75 186 367.75 192 378.75 200 383.75 197 371.75 181 373.75 173 380.75 170 374.75 161 369.75 161 366.75 155 367.75 145.04 367.75 145.04"/><path class="cls-1" d="M979,106c-7.48-3-7-2.77-12-9l13-12,26-7-3-2h-8v1l-21,3-12,7-4,4,2,1-6,9,8,2,2,3Z" transform="translate(-603.25 -73)"/><path class="cls-1" d="M1397,195l35,34-9-4v3l2,5,12,10-6-3-1,6c-7-13.84-23-34.23-33-46l3,1Z" transform="translate(-603.25 -73)"/><path class="cls-1" d="M842.25,192c5.82-2.21,5.66-2.19,11.75-1l.73,4h-13Z" transform="translate(-603.25 -73)"/><polygon class="cls-3" points="855.75 181 857.75 175 861.75 174 855.75 181"/><polygon class="cls-3" points="863.25 172.5 865.25 170.5 867.25 170.5 864.25 174.5 863.25 172.5"/><polygon class="cls-3" points="872.25 143.5 874.25 145.5 872.25 147.5 870.25 145.5 871.79 145.5 872.25 143.5"/><polygon class="cls-3" points="871.25 149.5 872.25 155.5 873.25 150.5 871.25 149.5"/><circle class="cls-3" cx="870.25" cy="165.5" r="1"/><circle class="cls-4" cx="871.75" cy="160" r="0.5"/></g><g id="BE"><path class="cls-1" d="M762.5,214.5c2.12-1.42,8-2.23,10.5-2.5l5,2,2,4-3,3,.77,2.91L774,223Z" transform="translate(-603.25 -73)"/></g><g id="LU"><polygon class="cls-1" points="176.75 151.45 177.75 149 176.75 145 173.75 148 174.52 150.91 176.75 151.45"/></g><g id="DE"><path class="cls-1" d="M783.44,201l8.56-3-1-6,5,1,2,2h4l-1,2,8-2,8,5c.53,2.9,2.16,12.33,3,15h-3.12L808,219l3,6,4,3-4,3v4l-3-1-9,1,0,2c-5.35-2.16-8.12-3.79-14-2l3.5-8.5-8.5-2.05,1-2.45c-.3-1.33-1.1-4.71-1.9-5.81L780,210h1.71l3.29-8-1.56-1" transform="translate(-603.25 -73)"/></g><g id="CH"><polygon class="cls-1" points="193.75 170 196.3 166.3 191.75 165 191.97 162.49 186.75 161 181.75 162 173.75 169 178.71 169 179.76 172.09 184.75 172 185.75 170 188.71 172.09 191.75 169 193.75 170"/></g><g id="AT"><path class="cls-1" d="M815,228l4,1,2-3,9,2v6l-2,1-.49,4.54C818,242.61,818.63,242,809,241l-1-3-8.45,1.3L795,238v-2.6l4,1.6,0-2,9-1,3,1v-4Z" transform="translate(-603.25 -73)"/></g><g id="IT"><path class="cls-1" d="M814,246l-6,2,1,7,6,5,7,9c2.78,1.51,15.56,7.05,17,10v3l-7-4-3,4,4,3c-1.53,2.22-4.54,6.73-6,9l-3-3,4-3-3-8-9-7-6-2-10.45-9.34L797,256l-6-2-5,4-5-8,3-2-1-2.91,5-.09,1-2,3,2.09,3-3.09,2,1,2.55-3.7L808,238l1,3,4.79.48Z" transform="translate(-603.25 -73)"/><path class="cls-1" d="M822,292a33,33,0,0,0,1,9l-13-6v-3Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="186.75 215 191.75 214 192.75 204 190.75 201 184.75 203 186.75 215"/></g><g id="NL"><polygon class="cls-1" points="175.85 143.19 176.75 137 178.46 137 181.75 129 178.75 127 173.75 129 173.75 131 170.75 133 170.75 129 162.75 140 169.75 139 174.75 141 175.85 143.19"/></g><g id="GB"><path class="cls-1" d="M724,220l2,1,12-4,15-1,3-4-1-1,4-4-2-4-5,1v-4l-4-7-2-1-2-5-7-2,7-6,1-3H735l6-5h-8.84L728,176l-3,8,4-2-4,5,6-2-4,5,5-2-2,5,7-1a33,33,0,0,0,1,9h-7l1,5-4,4c2,.6,7.89,2.49,10,2l-1,1h-6Z" transform="translate(-603.25 -73)"/><polygon class="cls-1" points="112.75 122 116.75 118 121.75 117 124.75 122 121.75 124 118.75 124 116.75 122 115.75 124 112.75 122"/><path d="M732,196a1,1,0,1,1-1,1,.94.94,0,0,1,1-1m0-1h0a2,2,0,0,0-1.46.59,2,2,0,0,0,0,2.76,2.1,2.1,0,0,0,2.92,0,2,2,0,0,0,0-2.76A2,2,0,0,0,732,195Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="119.25 100.5 123.25 98.5 121.25 102.5 117.25 106.5 119.25 100.5"/><polygon class="cls-2" points="143.75 89 145.75 91 147.75 86 143.75 89"/></g><g id="IE"><path class="cls-1" d="M723.5,197v7.31l-2,3.19-5,1c-2.21,1.13-7,3.18-9.5,3.5l-3-2,1-3,4.5-4.5-4-2,2-2-1-3,4.5.5,2-1-1-2,2.5-2.5,4.11-.5,1.39,1-4,4,3,2,1-2,2,2Z" transform="translate(-603.25 -73)"/><path class="cls-1" d="M706,188" transform="translate(-603.25 -73)"/></g><g id="IS"><path class="cls-1" d="M680,144l20-8,1-3-8-6-10,3-9,1-4,3v-4.25L665,127l-7,6,8,1-6,2,5,2-3,5C666.19,142.74,675.75,143.53,680,144Z" transform="translate(-603.25 -73)"/></g><g id="DK"><path class="cls-1" d="M791,192c-1.74-5.24-2.48-5.37-1-11h3l5-5,1,4-1,2,4,1c-1.78,1.15-4.8,5.25-6,7v3Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="196.75 115 197.75 118 196.75 120 194.75 118 196.75 115"/><polygon class="cls-2" points="198.25 114.5 201.25 112.5 205.25 112.5 204.25 115.5 204.47 117.5 203.25 120.5 198.75 119.81 200.98 117.5 198.25 114.5"/></g><g id="CZ"><path class="cls-1" d="M839,223l-9-4.51-3,.51-1-2c-9.41-3.77-9.49-1.59-18,2l3,6,4,3,4,1,2-3,9,2,5.24-2Z" transform="translate(-603.25 -73)"/></g><g id="SK"><polygon class="cls-1" points="250.75 157 244.17 156 240.75 159 234.75 161 226.75 159.42 226.75 155 231.99 153 235.75 150 240.75 152 247.75 151 252.63 153 250.75 157"/></g><g id="PL"><path class="cls-1" d="M817,200l13-7h4.7l2.3,2h19l5,9-2,4,3,9-5,5-1.12,4L851,224l-7,1c-3.23-1.05-10.91-4.91-14-6.51l-3,.51-1-2-6-2C819.17,212.38,817.52,202.85,817,200Z" transform="translate(-603.25 -73)"/></g><g id="SI"><polygon class="cls-1" points="224.26 166.54 225.75 169 220.75 171 218.75 174 212.75 175 210.75 173 210.54 168.48 215.75 169 224.26 166.54"/></g><g id="HR"><path class="cls-1" d="M839.5,245.54,841,251c-2.6-1.07-12.11-1.74-15-2l-1,3,10,12c-3-1.45-11.52-5.36-13.6-8l-1.4-5h-4l-2-5,2,2,6-1,2-3,5-2,5,3Z" transform="translate(-603.25 -73)"/></g><g id="BA"><path class="cls-1" d="M841,251l1.94,5.33c-.22,2.12-3.73,6.95-4.94,8.67l-3-1-10-12,1-3C828.94,249.27,838.36,249.92,841,251Z" transform="translate(-603.25 -73)"/></g><g id="HU"><polygon class="cls-1" points="236.25 172.54 243.14 170.77 246.75 171 250.75 162 254.75 160 250.75 157 244.17 156 240.75 159 234.75 161 226.75 159.42 226.75 161 224.75 162 224.26 166.54 225.75 169 230.75 172 236.25 172.54"/></g><g id="ES"><path class="cls-1" d="M764,266l-1,4-11,5-6,10,2,3-11,12-15,1-3,4-4-2-1-4-4-2c2.43-6.36,2-6.49,1-13l3-9,3-4-2-2h-9l-3-6,6-5,32,2,10,4Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="66.25 280.5 69.25 275.5 70.25 277.5 69.25 279.5 66.25 280.5"/><polygon class="cls-2" points="55.25 280.5 58.25 277.5 54.25 278.5 55.25 280.5"/><circle class="cls-5" cx="71.25" cy="274.5" r="1"/><circle class="cls-5" cx="60.75" cy="281" r="1.5"/><circle class="cls-5" cx="49.25" cy="276.5" r="1"/><circle class="cls-5" cx="51.75" cy="280" r="0.5"/><circle class="cls-5" cx="47.75" cy="282" r="0.5"/><path class="cls-2" d="M763,282.5a1.5,1.5,0,0,1-3,0A1.5,1.5,0,0,1,763,282.5Z" transform="translate(-603.25 -73)"/><polygon class="cls-5" points="152.25 213.06 151.25 215.5 150.25 213.5 152.25 213.06"/><polygon class="cls-5" points="163.25 207.5 165.25 208.5 165.25 207.5 163.25 207.5"/></g><g id="PT"><path class="cls-1" d="M706,269l-1.5,8.5-5,11,3.5,1.63-1.5,8.37L710,297c2.43-6.36,2-6.49,1-13l3-9,3-4-2-2Z" transform="translate(-603.25 -73)"/><circle class="cls-5" cx="56.25" cy="251.5" r="1"/><polygon class="cls-5" points="14.25 219.5 18.25 220.5 18.25 222.5 14.25 221.5 14.25 219.5"/><polygon class="cls-5" points="0.25 215.5 4.25 217.5 1.25 217.5 0.25 215.5"/><polygon class="cls-5" points="2.25 215.5 5.25 216.5 4.25 214.5 2.25 215.5"/><circle class="cls-5" cx="8.25" cy="215.5" r="1"/></g><g id="ME"><polygon class="cls-1" points="238.72 186.19 243.75 190 242.75 193 240.75 192 239.69 196.63 234.75 192 238.72 186.19"/></g><g id="XK"><polygon class="cls-1" points="243.75 190 246.75 188 251.75 192 249.75 195 245.75 197 245.75 194 242.75 193 243.75 190"/></g><g id="RS"><path class="cls-1" d="M846.39,243.77,853,252l5,1v5l3,4-3,4.67-3.88-.35L855,265l-5-4-3,2-5-3.81,1-2.86a97.33,97.33,0,0,1-3.44-10.79Z" transform="translate(-603.25 -73)"/></g><g id="AL"><path class="cls-1" d="M847,282.91l5-7.91-2.5-.87A42.68,42.68,0,0,1,849,267a27.46,27.46,0,0,1-5-2c-1.24,2.94-1.11,10.83-1,14Z" transform="translate(-603.25 -73)"/></g><g id="MK"><polygon class="cls-1" points="248.75 202 255.75 200 257.75 197 254.75 193.67 250.87 193.32 249.75 195 245.75 197 246.25 201.13 248.75 202"/></g><g id="BG"><polygon class="cls-1" points="255.75 200 264.75 198 272.75 199 277.75 195 282.75 196 279.75 193 284.75 185 275.75 183 268.75 186 254.75 182.81 254.75 185 257.75 189 254.75 193.67 257.75 197 255.75 200"/></g><g id="RO"><polygon class="cls-1" points="284.75 185 285.75 179 288.44 175 281.75 176 280.75 166 272.75 158 264.75 160 254.75 160 250.75 162 246.75 171 243.14 170.77 249.75 179 254.75 180 254.75 182.81 268.75 186 275.75 183 284.75 185"/></g><g id="MD"><polygon class="cls-1" points="272.75 158 277.75 157 284.75 159.88 290.75 169 284.75 169 281.75 176 280.75 166 272.75 158"/></g><g id="BY"><path class="cls-1" d="M860.29,211.87,868,209s23.37,4.19,23.69,4.6.83-4.6.83-4.6l5.48-1-3-6,6-1-4-4-6.45-4,.45-5-13-3-7,3v2l-5,6-8.66,1.42L861,204l-2,4Z" transform="translate(-603.25 -73)"/></g><g id="LT"><polygon class="cls-1" points="242.94 112.5 244.75 117 250.75 118 251.48 122 252.75 122 254.09 124.42 262.75 123 267.75 117 267.75 115 259.75 110 244.75 111 242.94 112.5"/></g><g id="LV"><polygon class="cls-1" points="242.94 112.5 242.75 108 248.75 103 254.09 107.16 256.75 106 256.75 103 259.75 101 264.75 103 271.75 104 274.75 112 267.75 115 259.75 110 244.75 111 242.94 112.5"/></g><g id="EE"><polygon class="cls-1" points="256.75 103 256.75 100 252.63 98.87 251.75 94 261.75 92 271.75 93 271.75 104 264.75 103 259.75 101 256.75 103"/><polygon class="cls-1" points="248.75 95 249.75 99 245.75 101 248.75 95"/></g><g id="NO"><path class="cls-1" d="M870.52,114.88,879,111l-4.24-2,2.24-1-12-4.13-10,2.59v-2.59L837,111l-3.73-2L823,116a28.48,28.48,0,0,0-3-2.19c0,.19-10,5.19-10,5.19l11-1c-3.81,3.82-11,10.79-14,16,0,1-11.5,8.82-11.5,8.82-3.6,2.42-11.4,6.82-15.5,8.18l-4,5,2,8v6l7,4.52,8-4.52,6.55-5.51L801,168l4,1v-4l3-4c-.74-4.15-1.66-13.72-2-18l8-3,2-10a84.11,84.11,0,0,0,13-13h7c1-.44,5.56-1.93,6-3l14,3,2.6-2v-3.22L864,109l7,3-.48,2.88" transform="translate(-603.25 -73)"/></g><g id="FI"><path class="cls-1" d="M873,160l13-10,1-3-6-4,1-2-4-5v-4.64L874,125l2-3-6-4,1-6-7-3-5.4,2.75V115l-2.6,2-14-3-1,1,10,4.72L854,131l5,2,1,3c-2.1-.67-13.39,9.91-15,11l1.19,12.57L854,164Z" transform="translate(-603.25 -73)"/><path id="AX" class="cls-2" d="M840.5,161.5a1,1,0,0,1-2,0A1,1,0,0,1,840.5,161.5Z" transform="translate(-603.25 -73)"/></g><g id="SE"><path class="cls-1" d="M811,189h6l6.5-5,2.5-12,10-7-2.06-3.5L828,159l1-10,15.73-9.81L843,137l4-5,7-1-3-11.28L841,115l-5,2h-7a84.11,84.11,0,0,1-13,13l-2,10-8,3,2,18-3,4v4l-3-.75,1,4.75,6,9Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="229.57 104 230.05 108 234.17 101.52 229.57 104"/><path class="cls-2" d="M829,178c-.52,1.28-2.06,5.64-3.16,6.5L826,182Z" transform="translate(-603.25 -73)"/></g><g id="GR"><path class="cls-1" d="M878.5,270l-2.5,2-8-1c-4,.81-12.16,2.76-16,4l-5,7.91,6,8.09h3l-3,3,3,2v3l3.69,3,2.31-2-1-4,3.46.51L863,293l5,2-1-3,6,2-10-8-3-5.66V278l1-1,2,4,5-2-3-3,4-1,8,1,1.5-6Z" transform="translate(-603.25 -73)"/><polygon class="cls-2" points="263.75 235 262.75 237 272.75 238 276.75 237 263.75 235"/><polygon class="cls-2" points="281.25 231.5 283.25 230.5 283.25 232.73 281.25 233.67 281.25 231.5"/></g><g id="UA"><path class="cls-1" d="M925.5,248.5l-2,2h-3.4l-6.6,3H910s-.48-3.25,0-3.13-4.51-1.87-4.51-1.87l5-4-5-.34-6-3.66c-1.82,2-5.84,5.56-7.81,7.5-.19.5-6.69,1-6.69,1l3-7h6l-6-9.12L881,230c-3,.5-10,2.21-13,3H858l-4-3a35.91,35.91,0,0,0,3-8l5-5-1.71-5.13L868,209l23.69,4.6.83-4.6c3.25-.61,10.66-1.92,14-2.5l3,4v2l5,2,2,4h8l14,5v10l-7,1v3l-15,6,3,5Z" transform="translate(-603.25 -73)"/></g><g id="AD"><circle id="AD-2" data-name="AD" class="cls-6" cx="152.25" cy="191.5" r="2"/></g><g id="LI"><circle class="cls-2" cx="193.25" cy="164.5" r="2"/></g><g id="MC"><circle class="cls-6" cx="179.6" cy="185.97" r="2"/></g><g id="SM"><circle class="cls-6" cx="206.25" cy="184.5" r="2"/></g><g id="VA"><circle class="cls-6" cx="200.25" cy="192.5" r="2"/></g><g id="MT"><circle class="cls-3" cx="216.25" cy="232.5" r="1"/></g><g id="CY"><polygon class="cls-2" points="318.25 234.5 315.25 236.5 316.25 237.5 310.25 240.5 306.25 238.5 309.25 235.5 314.25 235.5 317.25 233.5 318.25 234.5"/></g></g><g id="Asia"><g id="AF"><polygon class="cls-1" points="502.25 231.5 508.25 227.5 517.25 226.5 518.25 223.5 511.25 222.5 504.5 227 502.25 224.66 502.25 220.36 499.25 216.5 496.25 217.5 496.25 221.91 492.25 222.5 492.25 225.13 490.25 223.5 485.25 226.5 483.25 224.5 477.87 224 474.25 222.5 472.5 224 469.25 224.5 469.25 229.79 462.25 232.5 462.25 235.5 459.25 236.5 453.25 234.5 451.25 243.5 452.25 246.5 452.25 249.5 455.25 259.5 459.25 260.5 460.25 262.5 457.25 268.5 463.25 271.5 475.84 271.5 484.75 269.31 484.75 262.87 486.25 260.5 490.75 261 492.75 258 497.75 258 498.75 250 501.75 249 499.75 244 504.75 244 504.75 239 505.75 236 502.25 231.5"/></g><g id="TR"><path id="TR-2" data-name="TR" class="cls-1" d="M877,276l3,.52,4-2.52,7,1,1,3-12,.73L878,280l-1,4h4c.52,2.11,2.47,8.88,2,11l10.6,7,6.4,1,1-3,11,4,6.67-.5L920,300l8-1-1,4,3,3,1-6,21.5-2.88L971,298l-3-17-3.75-1.33L963,275l-5-4-6,1-6,3-15-2-11-5-14,1-4,5-11-1-5-4-5-1-2.5,2Z" transform="translate(-603.25 -73)"/></g><g id="GE"><polygon class="cls-1" points="339.75 187 342.75 186 350.75 188 359.75 192 365.75 191 369.75 195 373.75 196 372.75 198 374.75 201 368.75 199 366.75 200 358.18 200.74 354.75 198 348.75 199 349.75 196 346.75 191 341.75 189 339.75 187"/></g><g id="AZ"><polygon class="cls-1" points="387.75 217 388.75 213 389.75 206 391.84 206 391.84 204.6 389.75 204 382.75 197 380.75 200 377.75 200 373.75 196 372.75 198 374.75 201 368.75 199 366.75 200 369.75 203 368.75 204 372.5 206.5 370.75 208 375.75 211 375.75 214 381.75 210 384.75 211 384.36 214 383.75 214 387.75 217"/><polygon class="cls-1" points="364.75 208 370.75 210 372.75 214 369.75 213 364.75 208"/></g><g id="AM"><polygon class="cls-1" points="375.75 214 372.75 214 370.75 210 364.75 208 361 206.68 359.75 202 358.18 200.74 366.75 200 369.75 203 368.75 204 372.5 206.5 370.75 208 375.75 211 375.75 214"/></g><g id="PS"><polygon class="cls-2" points="324.75 254 322.75 253 321.75 254 321.75 258 323.75 258 321.75 259 321.75 261 324.75 259 324.75 254"/><polygon class="cls-2" points="319.25 258.5 320.25 260.5 319.25 261.5 318.25 260.5 319.25 258.5"/></g><g id="IL"><polygon class="cls-2" points="325.25 248.5 324.75 254 322.75 253 321.75 254 321.75 258 323.75 258 321.75 259 321.75 261 324.75 259 324.75 262.36 323.5 265.52 322.25 271.5 319.25 261.5 320.25 260.5 319.25 258.5 320.25 255.5 322.25 249.5 325.25 248.5"/></g><g id="JO"><polygon class="cls-2" points="324.93 252.04 326.69 252.04 330.25 254.5 340.25 248.5 343.25 254.5 344.25 255.5 338.25 257.5 333.25 259.5 338.25 265.5 336.25 266.5 335.25 268.5 332.25 269.5 330.25 272.5 328.25 273.5 322.25 271.5 323.5 265.52 324.75 262.36 324.75 259 324.75 254 324.93 252.04"/></g><g id="LB"><polygon class="cls-2" points="325.25 240.5 327.25 240.5 329.25 242.5 327.25 245.5 325.25 248.5 322.25 249.5 324.25 242.5 325.25 240.5"/></g><g id="SY"><polygon class="cls-2" points="323.75 230 325.25 240.5 327.25 240.5 329.25 242.5 325.25 248.5 324.93 252.04 326.69 252.04 330.25 254.5 340.25 248.5 351.25 241.5 352.62 233 351.25 229.5 356.25 226.5 356.44 224.46 349.25 224.12 327.75 227 326.75 233 323.75 230"/></g><g id="IQ"><polygon class="cls-1" points="367.75 225 376.25 233.5 377.25 237.5 374.25 241.5 375.25 245.5 379.25 250.5 388.25 257.5 388.25 262.21 392.25 268.5 386.25 268.5 383.25 274.5 373.75 273.5 355.25 259.5 350.25 256.5 344.25 255.5 343.25 254.5 340.25 248.5 351.25 241.5 352.62 233 351.25 229.5 356.25 226.5 356.44 224.46 367.75 225"/></g><g id="KW"><polygon class="cls-1" points="392.25 268.5 392.25 270.66 389.75 272 392.75 276 392.75 277.43 389 277.43 387.94 274.5 383.72 273.57 386.25 268.5 392.25 268.5"/></g><g id="SA"><polygon class="cls-1" points="392.75 277.43 395.75 281 395.75 282.95 398.75 284 402.75 289 402.75 292.54 406.75 298 407.75 301 410.75 301 411.75 304 416.75 311 430.75 313 434.75 317 432.75 324 431.75 329 415.75 335 401.75 337 395.75 341 391.75 347 389.75 347 387.75 345 381.75 345 373.75 346 371.75 344 369.75 346 370.75 349 368.75 351 365.75 346 359.75 337 356.75 330 350.75 327 347.75 323 346.75 315 344.25 308.07 339.75 304 337.75 303 335.75 300 336.75 299 329.75 287 323.75 280 321.75 281 322.75 277 322.25 271.5 328.25 273.5 330.25 272.5 332.25 269.5 335.25 268.5 336.25 266.5 338.25 265.5 333.25 259.5 338.25 257.5 344.25 255.5 350.25 256.5 355.25 259.5 373.75 273.5 383.25 274.5 383.72 273.57 387.94 274.5 389 277.43 392.75 277.43"/></g><g id="QA"><polygon class="cls-1" points="406.75 298 407.75 293 409.75 292 411.75 294 411.75 299.19 410.75 301 407.75 301 406.75 298"/></g><g id="BH"><circle class="cls-2" cx="405.75" cy="291" r="1.5"/></g><g id="AE"><polygon class="cls-1" points="433.75 294 434.75 296 436.75 296 436.25 299.5 435.25 300.5 434.25 299.5 434.25 302.5 435.25 304.45 432.25 305.5 430.75 313 416.75 311 412.5 305.06 415.75 305 416.75 304 424.75 304 433.75 294"/></g><g id="YE"><polygon class="cls-1" points="368.75 351 367.75 358 370.75 368 370.75 372 375.75 374 384.75 370 390.75 369 396.75 365 417.75 356 418.75 352 422.75 350 415.75 335 401.75 337 395.75 341 391.75 347 389.75 347 387.75 345 381.75 345 373.75 346 371.75 344 369.75 346 370.75 349 368.75 351"/><polygon class="cls-2" points="426.75 373 429.75 373 431.75 375 429.25 376.54 425.75 375 426.75 373"/></g><g id="OM"><polygon class="cls-1" points="436.25 299.5 441.75 305 449.75 307 453.75 313 455.75 314 455.75 318 450.75 324 449.75 327 447.75 326 446 331.05 446.75 336 441.75 337 440.75 341 436.25 342.42 433.75 344 433.75 347 431.75 348 427.84 348 422.75 350 415.75 335 431.75 329 432.75 324 434.75 317 430.57 313 432.25 305.5 435.25 304.45 434.25 302.5 434.25 299.5 435.25 300.5 436.25 299.5"/><polygon class="cls-1" points="433.75 294 436.75 290 436.75 296 434.75 296 433.75 294"/></g><g id="IR"><polygon class="cls-1" points="414.75 224 417.75 223 421.75 219 429.75 218 439.75 222 447.75 228 451.25 227.76 453.25 234.5 451.25 243.5 452.25 246.5 452.25 249.5 455.25 259.5 459.25 260.5 460.25 262.5 457.25 268.5 461.75 277 467.75 280 468.75 285 471.75 286 470.75 289 465.75 291 463.75 298 442.75 295 439.75 292 438.75 287 435.75 285 427.6 289.5 418.75 287 408.75 281 400.75 267 394.75 267 392.25 268.5 388.25 262.21 388.25 257.5 379.25 250.5 375.25 245.5 374.25 241.5 377.25 237.5 376.25 233.5 367.75 225 364.75 208 369.75 213 372.75 214 375.75 214 381.75 210 384.75 211 384.36 214 383.75 214 387.75 217 389.75 222 393.75 223 402.75 228 409.75 227 414.75 227 414.75 224"/></g><g id="PK"><polygon class="cls-1" points="517.44 225.93 522.75 226 526.75 229 527.75 233 536.75 235 527.75 241 519.75 240 518.75 241 521.75 250 528.75 254 528.75 255 525.75 257 525.75 262 523.75 267 517.44 276.3 514.75 281 509.75 282 507.75 280 503.75 287 507.75 289 507.75 294 510.75 295 513.75 302 511.75 304 510.75 302 507.3 304 500.75 303 500.75 305 498.75 306 495.75 306 493.75 300 490.75 300 488.75 295 479.75 297 476.75 296 463.75 298 465.75 291 470.75 289 471.75 286 468.75 285 467.75 280 461.75 277 457.25 268.5 463.25 271.5 475.84 271.5 484.75 269.31 484.75 262.87 486.25 260.5 490.75 261 492.75 258 497.75 258 498.75 250 501.75 249 499.75 244 504.75 244 504.75 239 505.75 236 502.25 231.5 508.25 227.5 517.25 226.5 517.44 225.93"/></g><g id="TJ"><polygon class="cls-1" points="492.75 202 495.75 207 489.75 206 488.75 211 510.11 211 512.75 216 517.75 216 521.75 223 518.25 223.5 511.25 222.5 504.5 227 502.25 224.66 502.25 220.36 499.25 216.5 496.25 217.5 496.25 221.91 492.25 222.5 492.25 225.13 490.25 223.5 485.25 226.5 483.25 224.5 485.75 219 483.42 214.5 478.75 212 479.75 210 484.75 210 484.75 206 488.75 203 492.75 202"/></g><g id="UZ"><polygon class="cls-1" points="493.75 194 490.75 198 495.75 200 497.75 198 505.75 203 500.25 206.69 494.85 205.49 492.75 202 488.75 203 484.75 206 484.75 210 479.75 210 478.75 212 483.42 214.5 485.75 219 483.26 224.5 477.88 224 476.75 219 470.75 218 454.75 208 448.75 200 440.75 199 438.53 194 435.75 194 431.75 191 428.75 193 428.75 194 425.75 195 424.75 197 425.75 200 420.44 200 415.75 178 427.75 174 440.75 181 445.75 186 459.75 186 460.75 185 465.75 190 467.75 190 468.75 195 471.75 196 473.75 200 479.75 200 480.75 203 483.75 204 482.75 202 490.75 195 493.75 194"/></g><g id="KG"><polygon class="cls-1" points="510.11 211 511.75 207 517.75 203 518.75 206 523.75 205 523.57 202 529.75 201 530.75 199 537.75 195 536.75 193.09 534.18 193.09 530.75 191 515.75 190 514.75 191 506.75 188 503.75 189 504.75 193 497 190.72 492.75 191 492.36 194.46 493.75 194 490.75 198 495.75 200 497.75 198 505.75 203 500.25 206.69 494.85 205.49 495.75 207 489.75 206 488.75 211 510.11 211"/></g><g id="TM"><polygon class="cls-1" points="474.25 222.5 472.5 224 469.25 224.5 469.25 229.79 462.25 232.5 462.25 235.5 459.25 236.5 453.25 234.5 451.25 227.76 447.75 228 439.75 222 429.75 218 421.75 219 417.75 223 414.75 224 412.75 214 407.75 211 409.75 208 405.3 207.75 405.75 202 408.75 203 412.75 202 413.75 200 410.75 199 409.75 196 405.75 197 406.75 199 403.75 200 400.75 196 406.75 193 411.75 194 417.75 200 425.75 200 424.75 197 425.75 195 428.75 194 428.75 193 431.75 191 435.75 194 438.53 194 440.75 199 448.75 200 454.75 208 470.75 218 476.75 219 477.88 224 474.25 222.5"/></g><g id="KZ"><polygon class="cls-1" points="402.43 195.16 402.05 191 395.75 189 387.75 180 392.75 179 392.75 175 402.75 176 407.75 177 405.87 174 399.75 173 399.75 166 394.75 167 389.75 165 380.75 170 374.75 161 369.75 161 366.75 155 367.75 145.04 373.75 149 374.75 148 373.75 144 382.75 137 400.75 143 409.75 141 431.75 144 432.75 140 425.75 136 426.75 131 430.75 130 430.75 129 426.75 128 424.75 125 442.75 122 456.75 116 466.75 117 470.75 123 482.75 125 482.75 127 486.75 127 495.75 121 496.75 125 518.75 142 520.75 140 526.75 143 535.75 142 546.75 150 551.75 149 555.18 151.75 555.18 156.18 550.75 157 553.75 165 551.75 166 541.75 164 541.75 174 543.75 176 538.75 176 530.75 178 533.75 180 538.75 188 536.75 193.09 534.18 193.09 530.75 191 515.75 190 514.75 191 506.75 188 503.75 189 504.75 193 497 190.72 492.75 191 492.36 194.46 490.75 195 482.75 202 483.75 204 480.75 203 479.75 200 473.75 200 471.75 196 468.75 195 467.75 190 465.75 190 460.75 185 459.75 186 445.75 186 440.75 181 427.75 174 415.75 178 420.44 200 417.75 200 411.75 194 406.75 193 402.43 195.16"/></g><g id="MN"><polygon class="cls-1" points="692.72 149.32 692.75 160 702.75 161 704.75 159 717.75 166 717.75 167.79 707.33 167.79 703.75 171 703.75 173 696.75 175 694.75 179 684.75 176 684.75 181.13 689.75 185 680.75 193 669.36 193 659.75 198 641.75 192 616.75 191 606.75 182 595.75 177 585.75 177 581.75 174 581.75 170.84 574.75 161 565.75 158 558.75 153 560.75 151 565.75 150 566.75 148 576.75 143 588.75 147 601.75 149 604.75 145 599.75 140 602.75 135 620.75 140 631.75 148 638.75 145 649.75 148 653.75 151 674.75 151 680.75 146 692.72 149.32"/></g><g id="CN"><polygon class="cls-1" points="536.75 235 539.75 240 544.75 242 545.75 247 549.75 252 547.75 254 543.75 253 547.75 261 548.75 260 561.75 268 563.12 265.96 581.75 277 599.75 281 602.75 280 604.75 284 609.75 278 617.75 281 618.75 282 622.75 282 625.75 276 628.75 276 631.75 272 635.75 274 639.75 272 642.75 276 641.75 278 647.75 279 647.75 277.79 651.75 279 653.75 283 655.75 284 656.75 293 652.75 301 653.75 306 658.75 304 661.75 310 664.75 311 663.75 316 667.75 317 669.75 320 673.75 319 673.75 321 677.75 322 676.75 317 675.75 315 678.75 315 679.75 313 692.75 312 691.75 310 693.75 309 697.75 312 701.75 312 702.75 313 701.75 314 704.75 318 710.75 320 714.75 319 716.75 321 719.75 320 719.75 324.42 721.75 327 724.56 327 724.75 326 722.75 323 728.75 320 737.75 317 752.75 311 762.75 301 766.75 292 770.75 279 772.75 279 772.75 273 772.75 269.01 768.75 267 763.75 268 766.75 265 770.75 263 768.75 261 767.75 260 768.75 259 767.75 257 761.75 252 754.75 242 748.75 239 749.75 234 754.75 227 757.75 226 759.75 227 759.75 223 749.75 221 745.75 223 745.75 225 741.75 225 740.75 223 740.75 220 737.75 219 737.03 219 730.75 217 730.75 212 733.75 213 737.27 212 736.75 209 740.75 207 741.75 201 749.75 205 746.75 210 748.75 212 748.75 215 756.75 208 760.75 209 763.75 203 766.75 202 767.75 197 773.75 199 775.75 199 773.75 195 776.75 195 779.75 193 778.75 190 781.75 191 785.75 189 777.75 178 779.75 176 786.75 176 784.75 160 780.75 157 771.75 161 766.75 161 761.75 155 743.75 150 721.75 130 697.75 129 694.75 132 701.75 132 703.75 147 698.75 151 692.72 149.32 692.75 160 702.75 161 704.75 159 717.75 166 717.75 167.79 707.33 167.79 703.75 171 703.75 173 696.75 175 694.75 179 684.75 176 684.75 181.13 689.75 185 680.75 193 669.36 193 659.75 198 641.75 192 616.75 191 606.75 182 595.75 177 585.75 177 581.75 174 581.75 170.84 574.75 161 565.75 158 558.75 153 556.75 153 555.18 151.75 555.18 156.18 550.75 157 553.75 165 551.75 166 541.75 164 541.75 174 543.75 176 538.75 176 530.75 178 533.75 180 538.75 188 536.75 193.09 537.75 195 530.75 199 529.75 201 523.57 202 523.75 205 518.75 206 517.75 203 511.75 207 510.11 211 512.75 216 517.75 216 521.75 223 518.25 223.5 517.44 225.93 522.75 226 526.75 229 527.75 233 536.75 235"/><polygon class="cls-1" points="718.75 330 726.75 329 727.75 331 725.75 334 724.75 338 721.75 340 716.75 339 715.75 333 718.75 330"/></g><g id="HK"><circle class="cls-6" cx="741.75" cy="315" r="3"/></g><g id="TW"><polygon class="cls-1" points="777.75 297 779.75 299 778.75 310 777.75 318 775.75 315 771.75 311 771.75 305 775.75 298 777.75 297"/></g><g id="KP"><polygon class="cls-1" points="783.75 193 781.75 191 778.75 190 779.75 193 776.75 195 773.75 195 775.75 199 773.75 199 767.75 197 766.75 202 763.75 203 760.75 209 766.75 211 768.75 216 767.75 219 772.75 222 773.75 220 777.75 221 779.75 218 784.75 218 784.75 215.75 778.75 212 777.75 209 782.75 205 784.75 200.75 782.75 198 783.75 193"/></g><g id="KR"><polygon class="cls-1" points="784.75 215.75 793.75 224 797.75 232 797.75 237.46 795.36 237.46 789.75 240 787.75 241 785.75 241 783.75 237 783.75 232 778.75 227 780.75 226 777.75 221 779.75 218 784.75 218 784.75 215.75"/></g><g id="JP"><polygon class="cls-1" points="827.75 242 828.75 246 827.75 248.61 825.75 247 822.75 249 823.75 252 819.75 250 817.75 247 819.75 244 825.41 242 827.75 242"/><polygon class="cls-1" points="807.75 245 814.75 247 817.75 251 817.75 259.45 814.75 262 811.75 260 810.75 256 811.88 253.5 808.75 249 807.75 252 802.75 248 807.75 245"/><polygon class="cls-1" points="827.75 175 847.75 184 848.75 181 849.75 184 853.75 188 847.75 190 846.75 196 837.75 191 835.75 193 832.75 192 832.75 193 838.75 197 835.21 197 834.75 199 831.75 195.64 829.75 193 829.12 187 833.75 188.3 831.75 182.48 827.75 175"/><polygon class="cls-1" points="835.75 201 840.75 200 844.75 205 850.75 213 850.75 217.4 848.75 219 851.75 224 851.75 229 855.75 234 852.75 239 850.75 235 844.75 240 839.78 240 836.75 239 838.62 242 836.75 244 835.75 247.31 831.18 245 830.75 240 825.75 239 816.05 242 816.05 244.45 808.75 242 815.75 235 826.75 233 827.75 234.78 830.75 234 829.75 231 831.36 228.37 830.83 223.66 832.25 222.78 833.75 227 840.23 223.66 841.75 212 836.75 207 835.75 201"/></g><g id="PH"><polygon class="cls-1" points="780.75 338 786.05 340 788.75 339 788.75 343.22 791.75 348 789.75 353 786.75 358.15 790.75 365 793.75 364 801.75 367 799.75 368 803.75 372 803.75 375 794.75 367 794.75 371 789.75 367 787.75 368 783.75 366 784.75 362 783.75 361 781.75 364 777.75 352 780.75 354 778.75 342 780.75 338"/><polygon class="cls-1" points="782.75 369 788.75 370 789.75 374 788.75 377 782.75 369"/><polygon class="cls-3" points="797.75 379 798.75 374 803.75 380 799.75 377 797.75 379"/><polygon class="cls-3" points="805.88 375 811.25 375.5 813.25 383.5 810.67 383.5 809.25 383.5 811.25 387.5 809.25 389.5 807.65 384.87 806.25 385.5 805.25 379.5 806.25 379.5 807.25 382.5 808.25 381.5 809.25 379.5 805.88 377.7 805.88 375"/><polygon class="cls-3" points="792.25 378.5 798.25 381.5 799.25 383.5 793.25 387.5 793.25 380.5 792.25 378.5"/><polygon class="cls-3" points="792.25 373.5 794.25 373.5 796.25 376.5 794.25 377.5 792.25 376.5 792.25 373.5"/><polygon class="cls-3" points="807.14 389.5 808.25 392.5 803.25 393.5 803.75 391.13 805.75 389.3 807.14 389.5"/><polygon class="cls-3" points="801.25 393.5 804.25 388.5 804.25 382.25 801.25 389.12 801.25 393.5"/><polygon class="cls-3" points="798.93 396.06 800.29 394.99 799.84 392.5 800.75 386.84 800.75 384.69 798.02 385.5 797.76 389.5 795.75 390.55 795.75 392.93 798.93 396.06"/><polygon class="cls-1" points="812.38 391.4 817.25 395.5 819.25 405.5 819.25 408.5 818.25 409.5 818.25 412.5 816.25 411.5 815.25 406.5 813.25 410.5 814.88 412.5 814.25 416.5 813.25 417.87 812.25 417.5 812.25 414.5 810.25 415.5 806.25 412.5 805.75 408.6 806.25 406.5 803.25 403.76 802.25 405.5 800.75 405.42 799.25 406.94 798.25 403.5 796.25 408.78 794.25 408.28 795.75 402.37 799.25 401.61 800.25 399.5 802.25 398.5 804.25 398.5 804.25 401.5 806.25 401.5 807.25 398.5 809.25 399.24 809.25 395.84 813.25 396.55 812.38 391.4"/><polygon class="cls-2" points="768.75 401 776.75 393 781.53 387.5 779.75 381 777.75 388 768.75 397.76 768.75 401"/><polygon class="cls-2" points="781.53 375.5 783.96 378.5 781.53 380 781.53 375.5"/></g><g id="MY"><polygon class="cls-1" points="753.25 423.5 747.25 432.5 739.25 434.5 737.25 441.5 730.25 438.5 731.25 442.5 735.25 445.5 743.25 444.42 743.25 441.5 747.25 441.5 751.25 443.5 757.25 441.5 760.25 432.5 762.25 424.5 770.25 424.5 772.25 426.5 778.25 425.5 775 421.55 781.25 419.5 768.75 408.06 767.25 410.5 766.25 408.5 760.25 421.5 753.25 423.5"/><polygon class="cls-1" points="677.75 411 681.25 412 682.75 417 686.75 416 688.75 413 694.75 419 696.75 425 696.75 433 701.75 442 696.75 443 685.75 434 684.75 432 678.75 420 677.75 411"/></g><g id="BN"><circle class="cls-6" cx="756.75" cy="422" r="3"/></g><g id="ID"><polygon class="cls-1" points="772.25 426.5 774.25 429.5 771.25 431.5 775.25 436.5 773.25 439.5 780.75 445 777.75 447 774.75 445 772.75 454 768.75 459 765.75 464 765.99 467.5 764.75 472 755.75 476.79 755.75 471.64 748.75 470 741.75 473 740.75 469 732.75 470 730.75 458 729.75 458 725.75 448 726.75 442 730.25 438.5 731.25 442.5 735.25 445.5 743.25 444.42 743.25 441.5 747.25 441.5 751.25 443.5 757.25 441.5 760.25 432.5 762.25 424.5 770.25 424.5 772.25 426.5"/><polygon class="cls-1" points="790.75 443 806.75 446 811.75 441 813.75 442 809.75 449 803.75 450 800.75 448 787.75 448 785.75 455 790.75 460 793.75 456 803.75 455 803.75 457 799.75 458.81 793.75 463 797.75 470 797.75 473 800.75 477 796.75 478 795.75 481 792.75 481 793.75 476 789.75 473 791.24 467 786.75 470 786.75 481 786.75 485 782.75 486 781.25 483.58 782.75 480 782.75 472 779.75 473 778.75 468 781.75 463 781.75 458 785.75 445 788.74 445.5 790.75 443"/><polygon class="cls-3" points="796.75 484 798.75 480 802.75 479 801.75 483 802.75 485 799.75 487 796.75 484"/><polygon class="cls-3" points="818.25 469.5 822.25 470.5 824.25 472.5 821.25 474.99 818.25 472.5 818.25 469.5"/><polygon class="cls-3" points="810.25 460.5 819.25 462.5 817.25 463.5 818.25 466.5 815.25 463.5 808.25 463.5 810.25 460.5"/><polygon class="cls-3" points="826.25 446.5 827.27 446.5 832.11 441 832.25 444.5 830.25 446.5 830.25 447.5 834.25 449.5 829.25 448.5 828.25 451.5 831.25 456.5 829.25 456.5 826.25 452.5 827.25 449.5 826.25 446.5"/><polygon class="cls-3" points="826.25 445.5 829.25 443.5 828.25 437.5 826.25 440.27 826.25 445.5"/><polygon class="cls-3" points="830.25 436.5 830.25 439.43 832.25 438.5 832.25 434.5 830.25 436.5"/><polygon class="cls-1" points="827.25 470.5 831.25 468.5 838.25 468.5 842.25 469.5 842.25 471.46 843.25 472.5 843.5 474.99 838.03 471.74 832.3 471.74 830.25 471.5 829.25 470.5 827.65 472.24 826.25 471.5 827.25 470.5"/><polygon class="cls-1" points="898.21 467 895.75 507 890.75 501 883.75 501 881.75 503 877.75 503 880.75 497 884.75 496 884.75 492 880.75 484 869.75 479 865.75 479 863.75 476 860.75 475 858.75 471 856.75 476 853.75 476 853.75 473 849.75 468 854.75 468 856.75 466 859.66 467 859.75 465 850.75 465 849.75 461.21 842.75 459 843.5 456.06 847.26 456.06 851.75 454 861.75 456 861.75 461 866.75 472 873.75 465 877.75 464 878.75 462 882.75 460 891.75 466 898.21 467"/><polygon class="cls-1" points="652.75 417 664.75 419 677.75 433 677.75 434.97 682.75 439 682.75 437 689.75 443 694.75 449 696.75 448 698.75 451 696.75 454 697.75 457 701.75 458 703.75 465 707.75 466 710.75 470 708.75 473 707.75 487 705.75 485 703.75 486 701.75 485 701.75 488 683.74 467.5 675.75 450 672.75 450 670.75 440 665.75 437 660.75 428 658.75 428 651.75 419 652.75 417"/><polygon class="cls-1" points="704.75 492 709.75 488 714.75 489 714.75 487 721.99 490 723.75 493 733.75 494 734.75 490 738.75 492 744.75 493 745.75 498 753.75 498 754.75 505 746.75 502 736.75 502 724.75 498 721.75 500 711.75 496 711.75 494 704.75 492"/><polygon class="cls-1" points="800.75 514 803.75 508 809.75 505 810.75 509 806.75 513 800.75 514"/><polygon class="cls-3" points="756.75 501 760.75 501 757.21 505.5 756.5 503.25 756.75 501"/><polygon class="cls-3" points="761.87 505 764.25 501.5 766.29 502 764.74 505.5 761.87 505"/><polygon class="cls-3" points="766.25 506.5 767.25 502.5 770.59 502.5 772.25 503.5 773.51 503.25 771.48 501 773.51 500.72 778.11 502 779.25 504.5 770.94 506.5 766.25 506.5"/><polygon class="cls-3" points="778.25 508.5 783.96 508.5 787.25 512.5 784.67 514 780.75 511.22 778.25 510.5 778.25 508.5"/><polygon class="cls-3" points="782.25 504.5 785.09 501.5 788.02 502 795.96 503.25 799.06 501 805.75 501.5 810.47 500.72 810.75 502 805.75 503.25 800.02 502.61 796.75 504.5 789.25 505.5 782.25 504.5"/><polygon class="cls-3" points="814.25 500.5 815.25 498.5 819.25 497.5 820.25 498.5 814.25 500.5"/></g><g id="SG"><circle class="cls-6" cx="700.25" cy="442.5" r="2.5"/></g><g id="TH"><polygon class="cls-1" points="688.75 413 685.25 409.5 678.25 405.5 675.25 394.5 672.41 394.5 671.25 389.5 675.25 377.5 674.75 369 679.12 369 679.75 374 683.75 374 688.75 377 686.83 369 690.75 364 699.75 363 700.75 364 702.75 362.39 702.75 354.42 697.75 350.66 696.75 345 691.75 339 687.75 339 685.75 342 681.75 341 676.75 345 676.75 333 675.75 331 671.75 332 672.05 329 670.26 327 666.94 327 663.75 330 659.75 331 656.75 339 665.75 352 663.75 359 668.75 366 669.75 373 671.75 379 667.75 390 666.75 402 669.75 401 677.75 411 681.25 412 682.75 417 686.75 416 688.75 413"/></g><g id="VN"><polygon class="cls-1" points="678.75 315 684.75 323 688.75 325 689.75 323 694.75 330 690.75 331 690.75 333 697.75 337 698.65 340 711.75 354 711.75 355 713.75 359 712.75 365 715.75 375.46 706.75 380 708.75 385 705.75 384 699.75 388 702.75 390.06 701.75 399 710.75 393 712.75 387 713.75 387 723.75 381 724.75 371 720.23 357 715.75 352 705.75 343 705.75 342 700.75 336 700.75 330 706.75 323 710.75 320 704.75 318 701.75 314 702.75 313 701.75 312 697.75 312 693.75 309 691.75 310 692.75 312 679.75 313 678.75 315"/></g><g id="KH"><polygon class="cls-1" points="700.75 364 705.75 366 705.75 363.46 707.75 362 709.66 364 713.03 363.29 712.75 365 715.75 375.46 706.75 380 708.75 385 705.75 384 699.75 388 692.75 385 688.75 377 686.83 369 690.75 364 699.75 363 700.75 364"/></g><g id="LA"><polygon class="cls-1" points="673.75 321 670.26 327 672.05 329 671.75 332 675.75 331 676.75 333 676.75 345 681.75 341 685.75 342 687.75 339 691.75 339 696.75 345 697.75 350.66 702.75 354.42 702.75 362.39 700.75 364 705.75 366 705.75 363.46 707.75 362 709.66 364 713.03 363.29 713.75 359 711.75 355 711.75 354 698.65 340 697.75 337 690.75 333 690.75 331 694.75 330 689.75 323 688.75 325 684.75 323 678.75 315 675.75 315 676.75 317 677.75 322 673.75 321"/></g><g id="MM"><polygon class="cls-1" points="647.75 279 645.75 285 642.75 285 637.75 290 635.75 306 631.75 305 630.75 317 628.75 317 627.75 324 635.75 331 642.75 344 641.75 353 648.43 355.58 654.75 350 654.75 345 659.75 353 662.75 365 666.75 374 668.6 387.66 671.75 379 669.75 373 668.75 366 663.75 359 665.75 352 656.75 339 659.75 331 663.75 330 666.94 327 670.26 327 673.75 321 673.75 319 669.75 320 667.75 317 663.75 316 664.75 311 661.75 310 658.75 304 653.75 306 652.75 301 656.75 293 655.75 284 653.75 283 651.75 279 647.75 277.79 647.75 279"/></g><g id="BT"><polygon class="cls-1" points="604.75 284 603.75 286 610.75 288 621.75 287 620.75 284 618.75 282 617.75 281 609.75 278 604.75 284"/></g><g id="NP"><polygon class="cls-1" points="599.75 281 600.75 289 595.75 290 579.75 284 574.75 284 556.75 275 559.74 266.76 561.75 268 563.12 265.96 581.75 277 599.75 281"/></g><g id="BD"><polygon class="cls-1" points="603.75 290.39 601.75 293 607.75 297 604.75 298.18 602.75 301 606.75 303 609.75 319 618.75 317 617.75 312 620.2 315 621.75 312.78 627.75 324 628.75 317 625.75 307 623.75 307 622.75 311 619.84 307.19 620.75 304 622.75 304 625.75 298 611.75 297 610.75 292 603.75 290.39"/></g><g id="LK"><polygon class="cls-1" points="569.75 393 567.75 403 568.75 411 571.75 415 578.75 412.36 578.75 405.91 573.25 393.97 569.75 393"/></g><g id="IN"><polygon class="cls-1" points="609.75 319 606.75 303 602.75 301 604.75 298.18 607.75 297 601.75 293 603.75 290.39 610.75 292 611.75 297 625.75 298 622.75 304 620.75 304 619.84 307.19 622.75 311 623.75 307 625.75 307 628.75 317 630.75 317 631.75 305 635.75 306 637.75 290 642.75 285 645.75 285 647.75 279 641.75 278 642.75 276 639.75 272 635.75 274 631.75 272 628.75 276 625.75 276 622.75 282 618.75 282 620.75 284 621.75 287 610.75 288 603.75 286 604.75 284 602.75 280 599.75 281 600.75 289 595.75 290 579.75 284 574.75 284 556.75 275 559.74 266.76 548.75 260 547.75 261 543.75 253 547.75 254 549.75 252 545.75 247 544.75 242 539.75 240 536.75 235 527.75 241 519.75 240 518.75 241 521.75 250 528.75 254 528.75 255 525.75 257 525.75 262 523.75 267 517.44 276.3 514.75 281 509.75 282 507.75 280 503.75 287 507.75 289 507.75 294 510.75 295 513.75 302 511.75 304 510.75 302 507.3 304 500.75 303 500.75 305 498.75 306 501.75 310 505.75 312 510.75 312 510.11 313.67 503.75 315 510.75 323 515.75 325 520.75 322 521.75 316 525.75 324 524.75 329 529.75 348 536.75 363.37 540.75 376 547.75 388 548.75 394 554.75 402 558.75 400 560.75 396 563.75 394 565.75 388 567.75 388.54 567.75 377 569.75 370 566.75 359 570.75 354 577.75 351 578.75 347 592.75 331 598.75 328 599.75 326 598.75 321 604.75 317 605.75 320 609.75 319"/></g><g id="TL"><polygon class="cls-1" points="809.75 505 813.75 503 822.75 502 818.25 505.91 810.75 509 809.75 505"/></g><g id="MV"><circle class="cls-2" cx="538.25" cy="418.5" r="3"/></g></g><g id="Africa"><g id="DZ"><polygon id="DZ-2" data-name="DZ" class="cls-1" points="132.25 237.5 147.25 230.5 167.25 226.5 170.25 227.5 186.23 226.5 184.75 229.04 185.25 238.5 181.25 243.5 182.25 248.5 188.75 255.28 191.25 267.5 190.25 268.5 193.25 271.5 193.25 289.05 190.25 291.5 193.25 295.85 195.25 302.5 198.25 301.5 202.25 303.5 204.25 308.5 178.25 325.5 172.25 332.5 157.25 335.5 158.25 329.5 153.25 327.5 151.25 327.5 147.25 324.5 146.25 322.5 97.25 285.5 97.25 276.5 106.25 270.5 108.25 270.5 123.25 262.5 122.25 258.5 128.25 255.5 137.25 255.5 137.25 253.5 134.25 249.5 134.25 239.5 132.25 237.5"/></g><g id="SC"><circle class="cls-2" cx="438.75" cy="480" r="2"/></g><g id="CV"><polygon class="cls-2" points="8.25 345.5 8.25 349.5 5.96 347.5 8.25 345.5"/><circle class="cls-3" cx="15.25" cy="359.5" r="1"/><circle class="cls-5" cx="19.25" cy="353.5" r="1"/><circle class="cls-5" cx="10.25" cy="360.5" r="1"/><circle class="cls-5" cx="11.75" cy="350" r="0.5"/><circle class="cls-5" cx="16.75" cy="358" r="0.5"/></g><g id="TN"><polygon class="cls-1" points="186.23 226.5 192.23 223.5 194.75 224 196.75 227 199.03 225.5 199.03 229 197.75 233 199.03 238.9 193.75 243 200.75 248 202.25 253.58 194.75 259 194.75 263 191.25 267.5 188.75 255.28 182.25 248.5 181.25 243.5 185.25 238.5 184.75 229.04 186.23 226.5"/></g><g id="AO"><polygon class="cls-1" points="206.75 488 209.75 487 229.15 487 233.75 500 243.6 500 244.79 493.5 250.53 493.5 250.75 495 257.75 495 256.75 509 260.75 519 268.75 518 268.75 530.09 257.75 530 256.75 550 264.75 558 253.75 561 240.75 560 237.75 556.12 235.75 557 215.75 557 210.75 554 208.75 556 202.75 556 206.75 536 208.75 529 214.75 522 209.75 506 210.75 504 207.75 493 206.75 488"/><polygon class="cls-1" points="208.75 478 209.75 480 205.75 486 204.75 482 208.75 478"/></g><g id="NG"><polygon class="cls-1" points="185.75 423 187.75 416 195.75 408 200.75 411 207.75 398 213.75 383 217.75 382 217.75 377.13 212.75 367 206.75 371 196.75 369 192.75 372 182.75 370 177.75 372 174.75 368 168.75 366 163.75 368 158.75 381 160.75 387 156.75 397 154.75 397 154.75 412.95 163.75 412 168.75 418 170.75 424 177.21 424 185.75 423"/></g><g id="NE"><polygon class="cls-1" points="163.66 334.22 162.75 352 159.75 357 141.75 360 142.75 368 146.75 369 146.75 372 152.71 377.01 155.75 376 159.27 379.66 163.75 368 168.75 366 174.75 368 177.75 372 182.75 370 192.75 372 196.75 369 206.75 371 212.75 367 212.75 363.52 222.75 349 223.75 331 225.75 328 222.75 323 219.75 311 215.75 313 209.75 309 204.25 308.5 178.25 325.5 172.25 332.5 163.66 334.22"/></g><g id="ML"><polygon class="cls-1" points="114.57 298.58 107.24 298.58 110.91 349.31 112.75 352 110.91 357.19 90.53 357.19 83.12 357.19 82.75 359 78.75 356 77.75 361 75.48 361 76.75 369 78.75 370 79.75 378 88.38 378 91.75 375 95.03 383.58 97.75 389 102.83 389 106.75 386 107.96 389 110.75 388 111.9 379.66 115.75 377 119.75 370 121.75 371 127.75 365 136.75 360 141.75 360 159.75 357 162.75 352 163.66 334.22 157.25 335.5 158.25 329.5 153.25 327.5 151.25 327.5 147.25 324.5 146.25 322.5 114.57 298.58"/></g><g id="MR"><polygon class="cls-1" points="97.25 285.5 96.75 293 79.06 293 77.75 308 72.75 311 72.75 320.9 50.75 321 55.75 329 53.75 333 55.75 340 52.75 353 61.75 350 68.91 353 75.48 361 77.75 361 78.75 356 82.75 359 83.12 357.19 110.91 357.19 112.75 352 110.91 349.31 107.24 298.58 114.57 298.58 97.25 285.5"/></g><g id="MA"><polygon class="cls-1" points="112.75 234 114.75 233 119.57 236.84 127.66 236.84 132.25 237.5 134.25 239.5 134.25 249.5 137.25 253.5 137.25 255.5 128.25 255.5 122.25 258.5 123.25 262.5 108.25 270.5 106.25 270.5 97.25 276.5 97.25 282.45 73.09 282.45 74.41 281 85.75 275 92.75 267 90.75 263 96.75 251 107.75 244 112.75 234"/></g><g id="EH"><polygon class="cls-1" points="97.25 282.45 73.09 282.45 71.75 287 65.75 291 62.75 302 57.75 306 50.75 321 72.75 320.9 72.75 311 77.75 308 79.06 293 96.75 293 97.25 285.5 97.25 282.45"/></g><g id="LY"><polygon class="cls-1" points="201.09 249.28 220.75 254 222.75 259 233.75 262 240.02 267.5 245.75 263 244.75 255 252.75 251 260.75 252 262.75 255.1 270.75 257 269.75 267.5 272.75 317 272.75 329.01 268.2 329.01 267.75 332 225.75 307.76 219.75 311 215.75 313 209.75 309 204.25 308.5 202.25 303.5 198.25 301.5 195.25 302.5 193.25 295.85 190.25 291.5 193.25 289.05 193.25 271.5 190.25 268.5 191.25 267.5 194.75 263 194.75 259 202.25 253.58 201.09 249.28"/></g><g id="EG"><polygon class="cls-1" points="317.75 261 322.75 271 320.25 281.97 314.75 278 310.75 269 309.75 271 316.25 281.97 328.75 305 327.75 311 319.25 319.1 314.75 317 272.75 317 269.75 267.5 270.75 257 282.25 259.64 291.75 264 297.75 260 306.75 259 310.75 262 317.75 261"/></g><g id="SD"><polygon class="cls-1" points="327.75 311 334.75 316 337.75 322 338.29 335.5 345.75 341 336.75 348.12 334.75 360 333.75 374 328.75 378.81 326.75 385 323.75 387 323.75 389.31 319.75 387 317.75 383 319.75 377 313.75 379 314.75 385 307.75 393 303.83 389.79 295.9 395 291.75 394 291.75 391.94 286.75 392 283.75 393 280.75 389 276.75 389 272.75 393.25 270.75 398 266.29 398 267.75 392 262.75 386 262.75 383.1 259.75 374 257.75 374 263.75 356 268.75 356 267.75 332 268.2 329.01 272.75 329.01 272.75 317 314.75 317 319.25 319.1 327.75 311"/></g><g id="SS"><polygon class="cls-1" points="323.75 389.31 322.75 400 318.7 400 316.75 403 321.75 405 327.75 411 329.75 418 332.75 419 332.75 423.46 324.75 423.46 322.75 427 312.75 429 305.21 429 298.75 423 291.75 425 287.75 420 284.75 416 275.75 404 269.75 401 269.75 398 270.75 398 272.75 393.25 276.75 389 280.75 389 283.75 393 286.75 392 291.75 391.94 291.75 394 295.9 395 303.83 389.79 307.75 393 314.75 385 313.75 379 319.75 377 317.75 383 319.75 387 323.75 389.31"/></g><g id="CD"><polygon class="cls-1" points="239.75 425 245.75 420 249.75 423 260.75 426 262.94 423 276.75 420 287.75 420 291.75 425 298.75 423 305.21 429 305.75 436 307.75 438 301.25 446.87 298.75 460 295.75 466 296.75 471 296.75 488 303.83 501.19 295.75 503 292.75 508 292.75 522 295.75 527 299.75 525 299.75 533 295.66 533 285.75 523 282.75 525 275.75 523 275.75 520 268.75 518 260.75 519 256.75 509 257.75 495 250.75 495 250.53 493.5 244.79 493.5 243.6 500 233.75 500 229.15 487 209.75 487 206.75 488 205.75 486 209.75 480 216.75 478 218.75 482 226.75 474 227.75 465 234.75 455 239.75 434 239.75 425"/></g><g id="CG"><polygon class="cls-1" points="199.75 475 203.75 472 202.75 465.6 207.75 463 215.47 467 217.75 455 214.75 453 214.75 449 217.75 446.61 215.75 443 210.75 444 211.75 438 225.75 440 228.75 430 239.75 429.19 239.75 434 234.75 455 227.75 465 226.75 474 218.75 482 216.75 478 209.75 480 208.75 478 204.75 482 199.75 475"/></g><g id="GA"><polygon class="cls-1" points="190.75 445 201 445 201 437.52 211.75 438 210.75 444 215.75 443 217.75 446.61 214.75 449 214.75 453 217.75 455 215.47 467 207.75 463 202.75 465.6 203.75 472 199.75 475 190.75 465 187.79 455.6 189.75 454 190.75 450 190.75 445"/></g><g id="GQ"><polygon class="cls-1" points="201 437.52 192.75 438 190.75 443 190.75 445 201 445 201 437.52"/><polygon class="cls-2" points="187.75 428 187.75 432 184.75 431 187.75 428"/></g><g id="CM"><polygon class="cls-1" points="215.2 371.96 217.75 371.46 221.25 378.5 221.25 386.5 223.25 390.5 217.25 390.5 215.2 392.54 222.25 399.5 223.25 405.5 217.75 414.57 219.75 424 227.35 434.67 225.75 440 211.75 438 201 437.52 192.75 438 192.75 431.52 192.25 426.5 185.75 423 187.75 416 195.75 408 200.75 411 207.75 398 213.75 383 217.75 382 217.75 377.13 215.2 371.96"/></g><g id="TG"><path class="cls-1" d="M744,457h4.4l-.4,4,2,2,2,8,1,15-3,1-3-2V473s-2-11.57-2-11.28-1-1.72-1-1.72Z" transform="translate(-603.25 -73)"/></g><g id="BJ"><polygon class="cls-1" points="152.71 377.01 152.71 380.42 147.75 382 145.15 384 144.75 388 146.75 390 148.75 398 149.75 413 154.75 412.95 154.75 397 156.75 397 160.75 387 158.75 381 159.27 379.66 155.75 376 152.71 377.01"/></g><g id="GN"><polygon class="cls-1" points="67.75 374 73.75 376 79.46 375.71 79.75 378 88.38 378 91.75 375 95.03 383.58 97.75 389 96.75 394 99.75 400 96.14 400 97.75 402 95.75 405 93.75 404 91.75 407 89.75 406 88.75 399 83.75 400 83.75 398 80.75 390 73.75 392 69.75 396 65.75 390 60.75 387 60.75 382.03 66.75 380 65.75 377 67.75 374"/></g><g id="GW"><polygon class="cls-1" points="67.75 374 57.75 374 51.75 376 52.75 379 57.75 379 57.75 382 60.75 385.13 60.75 382.03 66.75 380 65.75 377 67.75 374"/></g><g id="GH"><polygon id="GH-2" data-name="GH" class="cls-1" points="125.75 384 140.75 384 140.75 387 141.75 388.72 143.75 400 143.75 412 146.75 414 145.75 416 137.75 418 129.75 423 124.75 421 122.75 412 126.75 401 125.75 394 125.75 384"/></g><g id="BF"><polygon class="cls-1" points="110.75 388 116.75 393 118.75 391 122.75 391 125.75 392.54 125.75 384 140.75 384 145.15 384 147.75 382 152.71 380.42 152.71 377.01 146.75 372 146.75 369 142.75 368 141.75 360 136.75 360 127.75 365 121.75 371 119.75 370 115.75 377 111.9 379.66 110.75 388"/></g><g id="CI"><polygon class="cls-1" points="99.75 424.78 109.75 420 124.53 420 122.75 412 126.75 401 125.75 394 125.75 392.54 122.75 391 118.75 391 116.75 393 110.75 388 107.96 389 106.75 386 102.83 389 97.75 389 96.75 394 99.75 400 96.14 400 97.75 402 95.75 405 93.75 404 95.75 409 93.75 412 100.75 416 99.75 424.78"/></g><g id="LR"><polygon class="cls-1" points="77.75 409 83.75 400 88.75 399 89.75 406 91.75 407 93.75 404 95.75 409 93.75 412 100.75 416 99.75 424.78 89.25 419.7 77.75 409"/></g><g id="GM"><polygon class="cls-1" points="51.75 368 60.75 367 66.75 369 66.75 371 59.75 370 50.75 372 51.75 368"/></g><g id="SN"><polygon class="cls-1" points="52.75 353 49.75 360 47.75 361 51.75 368.03 60.75 367 66.75 369 66.75 371 59.75 370 50.75 372 51.75 376 57.75 374 67.75 374 73.75 376 79.46 375.71 78.75 370 76.75 369 75.48 361 68.91 353 61.75 350 52.75 353"/></g><g id="DJ"><polygon class="cls-1" points="370.75 374 372.75 378 367.75 381 371.72 381 370.25 383.58 363.75 385 363.75 380 366.75 375 370.75 374"/></g><g id="ER"><polygon class="cls-1" points="366.75 375 355.75 364 348.75 363 345.75 363 342.75 361 340.75 365 334.48 363.81 334.75 360 336.75 348.12 345.75 341 352.75 360 352.75 357 361.75 364 370.75 374 366.75 375"/></g><g id="SO"><polygon class="cls-1" points="371.72 381 376.75 387 380.75 388 384.85 385 389.75 386 392.75 383 402.75 383 408.91 381 410.75 378 414.75 379 412.75 389 411.75 396 406.75 403 400.75 419 387.75 436 373.75 448 363.75 461 360.75 456 360.75 434.33 366.75 426 376.75 421 381.75 421 396.75 403 389.75 402 375.75 396 368.75 387 370.25 383.58 371.72 381"/></g><g id="ET"><polygon class="cls-1" points="365.88 427.2 359.75 425 354.75 427 352.75 430 344.2 429 339.75 424 332.75 423.46 332.75 419 329.75 418 327.75 411 321.75 405 316.75 403 318.7 400 322.75 400 323.75 389.31 323.75 387 326.75 385 328.75 378.81 333.75 374 334.48 363.81 340.75 365 342.75 361 345.75 363 348.75 363 355.75 364 366.75 375 363.75 380 363.75 385 370.25 383.58 368.75 387 375.75 396 389.75 402 396.75 403 381.75 421 376.75 421 366.75 426 365.88 427.2"/></g><g id="KE"><polygon class="cls-1" points="363.75 461 356.75 468.42 351.75 480 342.75 473 342.75 470 322.75 458 323.75 455 327.75 452 323.06 452 322.75 449 328.75 442 327.75 436 325.75 431 322.75 427 324.75 423.46 332.75 423.46 339.75 424 344.2 429 352.75 430 354.75 427 359.75 425 365.88 427.2 360.75 434.33 360.75 456 363.75 461"/></g><g id="UG"><polygon class="cls-1" points="298.75 460 303.83 457.79 311.18 457.79 312.08 451.73 318.75 449 322.75 449 328.75 442 327.75 436 325.75 431 322.75 427 312.75 429 305.21 429 305.75 436 307.75 438 301.25 446.87 298.75 460"/></g><g id="RW"><polygon class="cls-1" points="295.75 466 298.75 469 301.75 466 305.75 466 305.75 461 303.83 457.79 298.75 460 295.75 466"/></g><g id="BI"><polygon class="cls-1" points="303.92 466 303.92 469.12 305.75 470 300.75 478.08 298.75 478 296.75 471 295.75 466 298.75 469 301.75 466 303.92 466"/></g><g id="YZ"><polygon class="cls-1" points="356.75 514.81 352.75 512 350.75 499 351.75 493 348.75 490 348.75 487 351.75 480 342.75 473 342.75 470 322.75 458 319.75 464 321.75 464 318.32 467.5 313.75 465.46 310.75 468 311.18 457.79 303.83 457.79 305.75 461 305.75 466 303.92 466 303.92 469.12 305.75 470 300.75 478.08 298.75 478 300.75 487 299.75 489 299.75 490 302.75 491 307.75 503 321.75 510 323.75 510 325.75 513 325.75 519 327.75 522.01 332.75 521 340.75 523 343.75 520 350.75 519 356.75 514.81"/></g><g id="MZ"><polygon class="cls-1" points="326.75 556 328.75 550 330.75 549 331.75 540 326.75 534 325.75 525 327.75 522.01 332.75 521 340.75 523 343.75 520 350.75 519 356.75 514.81 357.75 517 356.75 520.18 357.75 541 356.75 546 349.75 554 336.75 561 324.75 573 324.75 576.6 325.75 578 327.75 592 326.75 600 313.75 607 311.75 610 313.75 611 313.75 615 308.85 615 308.75 609 308.75 599 305.75 588 312.75 580 312.75 577 314.75 572 315.75 554 306.75 548 302.75 549 301.75 543 316.75 537 319.75 540 323.75 539 324.75 544 322.75 549 326.75 556"/></g><g id="MW"><polygon class="cls-1" points="316.56 507.4 316.75 510 319.75 514 319.75 516 318.75 518 317.75 525 319.75 527.1 316.75 528 314.75 534 316.75 537 319.75 540 323.75 539 324.75 544 322.75 549 326.75 556 328.75 550 330.75 549 331.75 540 329.11 536.83 328.75 539 324.75 535 323.25 532.48 323.25 514.27 321.75 510 316.56 507.4"/></g><g id="ZM"><polygon class="cls-1" points="303.83 501.19 303.83 503.46 306.75 505 307.75 503 316.56 507.4 316.75 510 319.75 514 319.75 516 318.75 518 317.75 525 319.75 527.1 316.75 528 314.75 534 316.75 537 301.75 543 302.38 546.75 297.75 546.75 293.75 549 292.75 553 288.75 554 282.75 561 274.75 560 272.75 558 264.75 558 256.75 550 257.75 530 268.75 530.09 268.75 518 275.75 520 275.75 523 282.75 525 285.75 523 295.66 533 299.75 533 299.75 525 295.75 527 292.75 522 292.75 508 295.75 503 303.83 501.19"/></g><g id="SL"><polygon class="cls-1" points="69.75 396 69.75 400 74.73 407 77.75 409 83.75 400 83.75 398 80.75 390 73.75 392 69.75 396"/></g><g id="ZW"><polygon class="cls-1" points="274.75 560 279.75 571 284.75 574 287.75 577 288.75 583 293.75 584 294.75 586 305.75 588 312.75 580 312.75 577 314.75 572 315.75 554 306.75 548 302.75 549 302.38 546.75 297.75 546.75 293.75 549 292.75 553 288.75 554 282.75 561 274.75 560"/></g><g id="NA"><polygon class="cls-1" points="274.75 560 268.75 561 265.75 564 264.05 561 251.75 564 251.75 585.33 246.81 585.33 245.75 624 241.75 628 231.75 626 231.75 623.57 229.75 622 227.75 625 223.75 622 220.75 616 217.75 600 217.75 588 209.75 574 206.75 566 203.75 563 202.75 556 208.75 556 210.75 554 215.75 557 235.75 557 237.75 556.12 240.75 560 253.75 561 264.75 558 272.75 558 274.75 560"/></g><g id="BW"><polygon class="cls-1" points="246.34 602.29 249.75 609 249.36 615 254.65 615 259.75 610 261.75 605 267.75 608 274.75 607.49 276.75 602 279.75 601 283.75 595 290.75 589 294.75 586 293.75 584 288.75 583 287.75 577 284.75 574 279.75 571 274.75 560 268.75 561 265.75 564 264.05 561 251.75 564 251.75 585.33 246.81 585.33 246.34 602.29"/></g><g id="ZA"><polygon class="cls-1" points="227.75 625 235.75 644.3 235.75 650 233.75 651 238.75 660 243.75 663 252.75 661 256.75 658.45 273.75 659 289.75 649 302.75 633 308.75 626 313.75 615 308.85 615 308.75 618 303.83 617.25 301.75 614 304.75 608 308.75 609 308.75 599 305.75 588 294.75 586 283.75 595 279.75 601 276.75 602 274.75 607.49 267.75 608 261.75 605 259.75 610 254.65 615 249.36 615 249.75 609 246.34 602.29 245.75 624 241.75 628 231.75 626 231.75 623.57 229.75 622 227.75 625"/></g><g id="LS"><polygon class="cls-1" points="308.75 609 308.85 615 308.75 618 303.83 617.25 301.75 614 304.75 608 308.75 609"/></g><g id="SZ"><polygon class="cls-6" points="290.75 625 294.75 629.34 291.75 634 288.25 635.34 286.75 638 283.75 637 281.33 631.5 285.75 627 290.75 625"/></g><g id="CF"><polygon class="cls-1" points="223.25 405.5 228.75 404 229.75 405 239.75 402.37 242.75 399 241.75 397 248.75 396 256.75 386 262.75 384.24 262.75 386 267.75 392 266.29 398 269.75 398 269.75 401 275.75 404 287.75 420 276.75 420 262.94 423 260.75 426 249.75 423 245.75 420 239.75 425 239.75 429.19 228.75 430 227.35 434.67 219.75 424 217.75 414.57 223.25 405.5"/></g><g id="TD"><polygon class="cls-1" points="223.25 405.5 228.75 404 229.75 405 239.75 402.37 242.75 399 241.75 397 248.75 396 256.75 386 262.75 384.24 262.75 383.1 259.75 374 257.75 374 263.75 356 268.75 356 267.75 332 225.75 307.76 219.75 311 222.75 323 225.75 328 223.75 331 222.75 349 212.75 363.52 212.75 367 215.2 371.96 217.75 371.46 221.25 378.5 221.25 386.5 223.25 390.5 217.25 390.5 215.2 392.54 222.25 399.5 223.25 405.5"/></g><g id="MG"><polygon class="cls-1" points="403.75 524 407.75 536 408.75 542 408.75 545.37 407.75 548 404.75 545 405.75 553 403.24 556 402.75 559 389.75 600 387.75 604 383.75 605 378.75 607 371.75 605 370.75 595 368.26 586 371.75 580 375.75 573 373.75 558 376.75 550 385.75 548 393.75 542 396.75 534 398.75 534 401.75 529 400.75 527 403.75 524"/></g><g id="ST"><circle class="cls-2" cx="175.75" cy="450" r="1.5"/><circle class="cls-2" cx="179.25" cy="441.5" r="1"/></g><g id="KM"><polygon class="cls-5" points="372.25 520.5 372.25 524.5 371.25 522.5 372.25 520.5"/><circle class="cls-5" cx="377.75" cy="526" r="0.5"/><circle class="cls-5" cx="381.25" cy="529.5" r="1"/><circle class="cls-5" cx="373.75" cy="526" r="0.5"/></g><g id="MU"><polygon class="cls-5" points="446.25 573.5 446.25 575.3 445.25 576.5 443.25 576.5 445.25 572.5 446.25 573.5"/></g></g></svg>
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        </div>
        
      </>
    );
  }