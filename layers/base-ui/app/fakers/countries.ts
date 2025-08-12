import _ from "lodash";

export interface Country {
  name: string;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/assets/images/flags/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeCountries() {
    const countries: Array<Country> = [
      {
        name: "French Polynesia",
        image: imageAssets["/assets/images/flags/pf.svg"].default,
      },
      {
        name: "Saint Martin",
        image: imageAssets["/assets/images/flags/mf.svg"].default,
      },
      {
        name: "Venezuela",
        image: imageAssets["/assets/images/flags/ve.svg"].default,
      },
      {
        name: "Réunion",
        image: imageAssets["/assets/images/flags/re.svg"].default,
      },
      {
        name: "El Salvador",
        image: imageAssets["/assets/images/flags/sv.svg"].default,
      },
      {
        name: "Dominica",
        image: imageAssets["/assets/images/flags/dm.svg"].default,
      },
      {
        name: "Gibraltar",
        image: imageAssets["/assets/images/flags/gi.svg"].default,
      },
      {
        name: "Kenya",
        image: imageAssets["/assets/images/flags/ke.svg"].default,
      },
      {
        name: "Brazil",
        image: imageAssets["/assets/images/flags/br.svg"].default,
      },
      {
        name: "Maldives",
        image: imageAssets["/assets/images/flags/mv.svg"].default,
      },
      {
        name: "United States",
        image: imageAssets["/assets/images/flags/us.svg"].default,
      },
      {
        name: "Cook Islands",
        image: imageAssets["/assets/images/flags/ck.svg"].default,
      },
      {
        name: "Niue",
        image: imageAssets["/assets/images/flags/nu.svg"].default,
      },
      {
        name: "Seychelles",
        image: imageAssets["/assets/images/flags/sc.svg"].default,
      },
      {
        name: "Central African Republic",
        image: imageAssets["/assets/images/flags/cf.svg"].default,
      },
      {
        name: "Tokelau",
        image: imageAssets["/assets/images/flags/tk.svg"].default,
      },
      {
        name: "Vanuatu",
        image: imageAssets["/assets/images/flags/vu.svg"].default,
      },
      {
        name: "Gambia",
        image: imageAssets["/assets/images/flags/gm.svg"].default,
      },
      {
        name: "Guyana",
        image: imageAssets["/assets/images/flags/gy.svg"].default,
      },
      {
        name: "Falkland Islands",
        image: imageAssets["/assets/images/flags/fk.svg"].default,
      },
      {
        name: "Belgium",
        image: imageAssets["/assets/images/flags/be.svg"].default,
      },
      {
        name: "Western Sahara",
        image: imageAssets["/assets/images/flags/eh.svg"].default,
      },
      {
        name: "Turkey",
        image: imageAssets["/assets/images/flags/tr.svg"].default,
      },
      {
        name: "Saint Vincent and the Grenadines",
        image: imageAssets["/assets/images/flags/vc.svg"].default,
      },
      {
        name: "Pakistan",
        image: imageAssets["/assets/images/flags/pk.svg"].default,
      },
      {
        name: "Åland Islands",
        image: imageAssets["/assets/images/flags/ax.svg"].default,
      },
      {
        name: "Iran",
        image: imageAssets["/assets/images/flags/ir.svg"].default,
      },
      {
        name: "Indonesia",
        image: imageAssets["/assets/images/flags/id.svg"].default,
      },
      {
        name: "New Zealand",
        image: imageAssets["/assets/images/flags/nz.svg"].default,
      },
      {
        name: "Afghanistan",
        image:
          imageAssets["/assets/images/flags/Flag_of_the_Taliban.svg"]
            .default,
      },
      {
        name: "Guam",
        image: imageAssets["/assets/images/flags/gu.svg"].default,
      },
      {
        name: "Albania",
        image: imageAssets["/assets/images/flags/al.svg"].default,
      },
      {
        name: "DR Congo",
        image: imageAssets["/assets/images/flags/cd.svg"].default,
      },
      {
        name: "Ivory Coast",
        image: imageAssets["/assets/images/flags/ci.svg"].default,
      },
      {
        name: "Sudan",
        image: imageAssets["/assets/images/flags/sd.svg"].default,
      },
      {
        name: "Timor-Leste",
        image: imageAssets["/assets/images/flags/tl.svg"].default,
      },
      {
        name: "Luxembourg",
        image: imageAssets["/assets/images/flags/lu.svg"].default,
      },
      {
        name: "Saudi Arabia",
        image: imageAssets["/assets/images/flags/sa.svg"].default,
      },
      {
        name: "Cambodia",
        image: imageAssets["/assets/images/flags/kh.svg"].default,
      },
      {
        name: "Nepal",
        image: imageAssets["/assets/images/flags/np.svg"].default,
      },
      {
        name: "French Guiana",
        image: imageAssets["/assets/images/flags/gf.svg"].default,
      },
      {
        name: "Malaysia",
        image: imageAssets["/assets/images/flags/my.svg"].default,
      },
      {
        name: "Rwanda",
        image: imageAssets["/assets/images/flags/rw.svg"].default,
      },
      {
        name: "Thailand",
        image: imageAssets["/assets/images/flags/th.svg"].default,
      },
      {
        name: "Antarctica",
        image: imageAssets["/assets/images/flags/aq.svg"].default,
      },
      {
        name: "Jordan",
        image: imageAssets["/assets/images/flags/jo.svg"].default,
      },
      {
        name: "Switzerland",
        image: imageAssets["/assets/images/flags/ch.svg"].default,
      },
      {
        name: "Comoros",
        image: imageAssets["/assets/images/flags/km.svg"].default,
      },
      {
        name: "Kosovo",
        image: imageAssets["/assets/images/flags/xk.svg"].default,
      },
      {
        name: "Isle of Man",
        image: imageAssets["/assets/images/flags/im.svg"].default,
      },
      {
        name: "Montenegro",
        image: imageAssets["/assets/images/flags/me.svg"].default,
      },
      {
        name: "Hong Kong",
        image: imageAssets["/assets/images/flags/hk.svg"].default,
      },
      {
        name: "Jersey",
        image: imageAssets["/assets/images/flags/je.svg"].default,
      },
      {
        name: "Tajikistan",
        image: imageAssets["/assets/images/flags/tj.svg"].default,
      },
      {
        name: "Bulgaria",
        image: imageAssets["/assets/images/flags/bg.svg"].default,
      },
      {
        name: "Egypt",
        image: imageAssets["/assets/images/flags/eg.svg"].default,
      },
      {
        name: "Malawi",
        image: imageAssets["/assets/images/flags/mw.svg"].default,
      },
      {
        name: "Cape Verde",
        image: imageAssets["/assets/images/flags/cv.svg"].default,
      },
      {
        name: "Benin",
        image: imageAssets["/assets/images/flags/bj.svg"].default,
      },
      {
        name: "Morocco",
        image: imageAssets["/assets/images/flags/ma.svg"].default,
      },
      {
        name: "Ireland",
        image: imageAssets["/assets/images/flags/ie.svg"].default,
      },
      {
        name: "Moldova",
        image: imageAssets["/assets/images/flags/md.svg"].default,
      },
      {
        name: "Denmark",
        image: imageAssets["/assets/images/flags/dk.svg"].default,
      },
      {
        name: "Turkmenistan",
        image: imageAssets["/assets/images/flags/tm.svg"].default,
      },
      {
        name: "Micronesia",
        image: imageAssets["/assets/images/flags/fm.svg"].default,
      },
      {
        name: "Monaco",
        image: imageAssets["/assets/images/flags/mc.svg"].default,
      },
      {
        name: "Barbados",
        image: imageAssets["/assets/images/flags/bb.svg"].default,
      },
      {
        name: "Algeria",
        image: imageAssets["/assets/images/flags/dz.svg"].default,
      },
      {
        name: "French Southern and Antarctic Lands",
        image: imageAssets["/assets/images/flags/tf.svg"].default,
      },
      {
        name: "Eritrea",
        image: imageAssets["/assets/images/flags/er.svg"].default,
      },
      {
        name: "Lesotho",
        image: imageAssets["/assets/images/flags/ls.svg"].default,
      },
      {
        name: "Tanzania",
        image: imageAssets["/assets/images/flags/tz.svg"].default,
      },
      {
        name: "Mali",
        image: imageAssets["/assets/images/flags/ml.svg"].default,
      },
      {
        name: "Niger",
        image: imageAssets["/assets/images/flags/ne.svg"].default,
      },
      {
        name: "Andorra",
        image: imageAssets["/assets/images/flags/ad.svg"].default,
      },
      {
        name: "United Kingdom",
        image: imageAssets["/assets/images/flags/gb.svg"].default,
      },
      {
        name: "Germany",
        image: imageAssets["/assets/images/flags/de.svg"].default,
      },
      {
        name: "United States Virgin Islands",
        image: imageAssets["/assets/images/flags/vi.svg"].default,
      },
      {
        name: "Somalia",
        image: imageAssets["/assets/images/flags/so.svg"].default,
      },
      {
        name: "Sint Maarten",
        image: imageAssets["/assets/images/flags/sx.svg"].default,
      },
      {
        name: "Cameroon",
        image: imageAssets["/assets/images/flags/cm.svg"].default,
      },
      {
        name: "Dominican Republic",
        image: imageAssets["/assets/images/flags/do.svg"].default,
      },
      {
        name: "Guinea",
        image: imageAssets["/assets/images/flags/gn.svg"].default,
      },
      {
        name: "Namibia",
        image: imageAssets["/assets/images/flags/na.svg"].default,
      },
      {
        name: "Montserrat",
        image: imageAssets["/assets/images/flags/ms.svg"].default,
      },
      {
        name: "South Georgia",
        image: imageAssets["/assets/images/flags/gs.svg"].default,
      },
      {
        name: "Senegal",
        image: imageAssets["/assets/images/flags/sn.svg"].default,
      },
      {
        name: "Bouvet Island",
        image: imageAssets["/assets/images/flags/bv.svg"].default,
      },
      {
        name: "Solomon Islands",
        image: imageAssets["/assets/images/flags/sb.svg"].default,
      },
      {
        name: "France",
        image: imageAssets["/assets/images/flags/fr.svg"].default,
      },
      {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        image: imageAssets["/assets/images/flags/sh.svg"].default,
      },
      {
        name: "Macau",
        image: imageAssets["/assets/images/flags/mo.svg"].default,
      },
      {
        name: "Argentina",
        image: imageAssets["/assets/images/flags/ar.svg"].default,
      },
      {
        name: "Bosnia and Herzegovina",
        image: imageAssets["/assets/images/flags/ba.svg"].default,
      },
      {
        name: "Anguilla",
        image: imageAssets["/assets/images/flags/ai.svg"].default,
      },
      {
        name: "Guernsey",
        image: imageAssets["/assets/images/flags/gg.svg"].default,
      },
      {
        name: "Djibouti",
        image: imageAssets["/assets/images/flags/dj.svg"].default,
      },
      {
        name: "Saint Kitts and Nevis",
        image: imageAssets["/assets/images/flags/kn.svg"].default,
      },
      {
        name: "Syria",
        image: imageAssets["/assets/images/flags/sy.svg"].default,
      },
      {
        name: "Puerto Rico",
        image: imageAssets["/assets/images/flags/pr.svg"].default,
      },
      {
        name: "Peru",
        image: imageAssets["/assets/images/flags/pe.svg"].default,
      },
      {
        name: "San Marino",
        image: imageAssets["/assets/images/flags/sm.svg"].default,
      },
      {
        name: "Australia",
        image: imageAssets["/assets/images/flags/au.svg"].default,
      },
      {
        name: "New Caledonia",
        image: imageAssets["/assets/images/flags/nc.svg"].default,
      },
      {
        name: "Jamaica",
        image: imageAssets["/assets/images/flags/jm.svg"].default,
      },
      {
        name: "Kazakhstan",
        image: imageAssets["/assets/images/flags/kz.svg"].default,
      },
      {
        name: "Sierra Leone",
        image: imageAssets["/assets/images/flags/sl.svg"].default,
      },
      {
        name: "Palau",
        image: imageAssets["/assets/images/flags/pw.svg"].default,
      },
      {
        name: "South Korea",
        image: imageAssets["/assets/images/flags/kr.svg"].default,
      },
      {
        name: "Saint Pierre and Miquelon",
        image: imageAssets["/assets/images/flags/pm.svg"].default,
      },
      {
        name: "Belize",
        image: imageAssets["/assets/images/flags/bz.svg"].default,
      },
      {
        name: "Papua New Guinea",
        image: imageAssets["/assets/images/flags/pg.svg"].default,
      },
      {
        name: "Iceland",
        image: imageAssets["/assets/images/flags/is.svg"].default,
      },
      {
        name: "American Samoa",
        image: imageAssets["/assets/images/flags/as.svg"].default,
      },
      {
        name: "Burkina Faso",
        image: imageAssets["/assets/images/flags/bf.svg"].default,
      },
      {
        name: "Portugal",
        image: imageAssets["/assets/images/flags/pt.svg"].default,
      },
      {
        name: "Taiwan",
        image: imageAssets["/assets/images/flags/tw.svg"].default,
      },
      {
        name: "Japan",
        image: imageAssets["/assets/images/flags/jp.svg"].default,
      },
      {
        name: "China",
        image: imageAssets["/assets/images/flags/cn.svg"].default,
      },
      {
        name: "Lebanon",
        image: imageAssets["/assets/images/flags/lb.svg"].default,
      },
      {
        name: "Sri Lanka",
        image: imageAssets["/assets/images/flags/lk.svg"].default,
      },
      {
        name: "Guatemala",
        image: imageAssets["/assets/images/flags/gt.svg"].default,
      },
      {
        name: "Serbia",
        image: imageAssets["/assets/images/flags/rs.svg"].default,
      },
      {
        name: "Madagascar",
        image: imageAssets["/assets/images/flags/mg.svg"].default,
      },
      {
        name: "Eswatini",
        image: imageAssets["/assets/images/flags/sz.svg"].default,
      },
      {
        name: "Romania",
        image: imageAssets["/assets/images/flags/ro.svg"].default,
      },
      {
        name: "Antigua and Barbuda",
        image: imageAssets["/assets/images/flags/ag.svg"].default,
      },
      {
        name: "Curaçao",
        image: imageAssets["/assets/images/flags/cw.svg"].default,
      },
      {
        name: "Zambia",
        image: imageAssets["/assets/images/flags/zm.svg"].default,
      },
      {
        name: "Zimbabwe",
        image: imageAssets["/assets/images/flags/zw.svg"].default,
      },
      {
        name: "Tunisia",
        image: imageAssets["/assets/images/flags/tn.svg"].default,
      },
      {
        name: "United Arab Emirates",
        image: imageAssets["/assets/images/flags/ae.svg"].default,
      },
      {
        name: "Mongolia",
        image: imageAssets["/assets/images/flags/mn.svg"].default,
      },
      {
        name: "Norway",
        image: imageAssets["/assets/images/flags/no.svg"].default,
      },
      {
        name: "Greenland",
        image: imageAssets["/assets/images/flags/gl.svg"].default,
      },
      {
        name: "Uruguay",
        image: imageAssets["/assets/images/flags/uy.svg"].default,
      },
      {
        name: "Bahamas",
        image: imageAssets["/assets/images/flags/bs.svg"].default,
      },
      {
        name: "Russia",
        image: imageAssets["/assets/images/flags/ru.svg"].default,
      },
      {
        name: "British Virgin Islands",
        image: imageAssets["/assets/images/flags/vg.svg"].default,
      },
      {
        name: "Wallis and Futuna",
        image: imageAssets["/assets/images/flags/wf.svg"].default,
      },
      {
        name: "Chad",
        image: imageAssets["/assets/images/flags/td.svg"].default,
      },
      {
        name: "Saint Lucia",
        image: imageAssets["/assets/images/flags/lc.svg"].default,
      },
      {
        name: "Yemen",
        image: imageAssets["/assets/images/flags/ye.svg"].default,
      },
      {
        name: "United States Minor Outlying Islands",
        image: imageAssets["/assets/images/flags/um.svg"].default,
      },
      {
        name: "Sweden",
        image: imageAssets["/assets/images/flags/se.svg"].default,
      },
      {
        name: "Svalbard and Jan Mayen",
        image: imageAssets["/assets/images/flags/sj.svg"].default,
      },
      {
        name: "Laos",
        image: imageAssets["/assets/images/flags/la.svg"].default,
      },
      {
        name: "Latvia",
        image: imageAssets["/assets/images/flags/lv.svg"].default,
      },
      {
        name: "Colombia",
        image: imageAssets["/assets/images/flags/co.svg"].default,
      },
      {
        name: "Grenada",
        image: imageAssets["/assets/images/flags/gd.svg"].default,
      },
      {
        name: "Saint Barthélemy",
        image: imageAssets["/assets/images/flags/bl.svg"].default,
      },
      {
        name: "Canada",
        image: imageAssets["/assets/images/flags/ca.svg"].default,
      },
      {
        name: "Heard Island and McDonald Islands",
        image: imageAssets["/assets/images/flags/hm.svg"].default,
      },
      {
        name: "India",
        image: imageAssets["/assets/images/flags/in.svg"].default,
      },
      {
        name: "Guinea-Bissau",
        image: imageAssets["/assets/images/flags/gw.svg"].default,
      },
      {
        name: "North Macedonia",
        image: imageAssets["/assets/images/flags/mk.svg"].default,
      },
      {
        name: "Paraguay",
        image: imageAssets["/assets/images/flags/py.svg"].default,
      },
      {
        name: "Croatia",
        image: imageAssets["/assets/images/flags/hr.svg"].default,
      },
      {
        name: "Costa Rica",
        image: imageAssets["/assets/images/flags/cr.svg"].default,
      },
      {
        name: "Uganda",
        image: imageAssets["/assets/images/flags/ug.svg"].default,
      },
      {
        name: "Caribbean Netherlands",
        image: imageAssets["/assets/images/flags/bq.svg"].default,
      },
      {
        name: "Bolivia",
        image: imageAssets["/assets/images/flags/bo.svg"].default,
      },
      {
        name: "Togo",
        image: imageAssets["/assets/images/flags/tg.svg"].default,
      },
      {
        name: "Mayotte",
        image: imageAssets["/assets/images/flags/yt.svg"].default,
      },
      {
        name: "Marshall Islands",
        image: imageAssets["/assets/images/flags/mh.svg"].default,
      },
      {
        name: "North Korea",
        image: imageAssets["/assets/images/flags/kp.svg"].default,
      },
      {
        name: "Netherlands",
        image: imageAssets["/assets/images/flags/nl.svg"].default,
      },
      {
        name: "British Indian Ocean Territory",
        image: imageAssets["/assets/images/flags/io.svg"].default,
      },
      {
        name: "Malta",
        image: imageAssets["/assets/images/flags/mt.svg"].default,
      },
      {
        name: "Mauritius",
        image: imageAssets["/assets/images/flags/mu.svg"].default,
      },
      {
        name: "Norfolk Island",
        image: imageAssets["/assets/images/flags/nf.svg"].default,
      },
      {
        name: "Honduras",
        image: imageAssets["/assets/images/flags/hn.svg"].default,
      },
      {
        name: "Spain",
        image: imageAssets["/assets/images/flags/es.svg"].default,
      },
      {
        name: "Estonia",
        image: imageAssets["/assets/images/flags/ee.svg"].default,
      },
      {
        name: "Kyrgyzstan",
        image: imageAssets["/assets/images/flags/kg.svg"].default,
      },
      {
        name: "Chile",
        image: imageAssets["/assets/images/flags/cl.svg"].default,
      },
      {
        name: "Bermuda",
        image: imageAssets["/assets/images/flags/bm.svg"].default,
      },
      {
        name: "Equatorial Guinea",
        image: imageAssets["/assets/images/flags/gq.svg"].default,
      },
      {
        name: "Liberia",
        image: imageAssets["/assets/images/flags/lr.svg"].default,
      },
      {
        name: "Pitcairn Islands",
        image: imageAssets["/assets/images/flags/pn.svg"].default,
      },
      {
        name: "Libya",
        image: imageAssets["/assets/images/flags/ly.svg"].default,
      },
      {
        name: "Liechtenstein",
        image: imageAssets["/assets/images/flags/li.svg"].default,
      },
      {
        name: "Vatican City",
        image: imageAssets["/assets/images/flags/va.svg"].default,
      },
      {
        name: "Christmas Island",
        image: imageAssets["/assets/images/flags/cx.svg"].default,
      },
      {
        name: "Oman",
        image: imageAssets["/assets/images/flags/om.svg"].default,
      },
      {
        name: "Philippines",
        image: imageAssets["/assets/images/flags/ph.svg"].default,
      },
      {
        name: "Poland",
        image: imageAssets["/assets/images/flags/pl.svg"].default,
      },
      {
        name: "Faroe Islands",
        image: imageAssets["/assets/images/flags/fo.svg"].default,
      },
      {
        name: "Bahrain",
        image: imageAssets["/assets/images/flags/bh.svg"].default,
      },
      {
        name: "Belarus",
        image: imageAssets["/assets/images/flags/by.svg"].default,
      },
      {
        name: "Slovenia",
        image: imageAssets["/assets/images/flags/si.svg"].default,
      },
      {
        name: "Guadeloupe",
        image: imageAssets["/assets/images/flags/gp.svg"].default,
      },
      {
        name: "Qatar",
        image: imageAssets["/assets/images/flags/qa.svg"].default,
      },
      {
        name: "Vietnam",
        image: imageAssets["/assets/images/flags/vn.svg"].default,
      },
      {
        name: "Mauritania",
        image: imageAssets["/assets/images/flags/mr.svg"].default,
      },
      {
        name: "Singapore",
        image: imageAssets["/assets/images/flags/sg.svg"].default,
      },
      {
        name: "Georgia",
        image: imageAssets["/assets/images/flags/ge.svg"].default,
      },
      {
        name: "Burundi",
        image: imageAssets["/assets/images/flags/bi.svg"].default,
      },
      {
        name: "Nauru",
        image: imageAssets["/assets/images/flags/nr.svg"].default,
      },
      {
        name: "South Sudan",
        image: imageAssets["/assets/images/flags/ss.svg"].default,
      },
      {
        name: "Samoa",
        image: imageAssets["/assets/images/flags/ws.svg"].default,
      },
      {
        name: "Cocos (Keeling) Islands",
        image: imageAssets["/assets/images/flags/cc.svg"].default,
      },
      {
        name: "Republic of the Congo",
        image: imageAssets["/assets/images/flags/cg.svg"].default,
      },
      {
        name: "Cyprus",
        image: imageAssets["/assets/images/flags/cy.svg"].default,
      },
      {
        name: "Kuwait",
        image: imageAssets["/assets/images/flags/kw.svg"].default,
      },
      {
        name: "Trinidad and Tobago",
        image: imageAssets["/assets/images/flags/tt.svg"].default,
      },
      {
        name: "Tuvalu",
        image: imageAssets["/assets/images/flags/tv.svg"].default,
      },
      {
        name: "Angola",
        image: imageAssets["/assets/images/flags/ao.svg"].default,
      },
      {
        name: "Tonga",
        image: imageAssets["/assets/images/flags/to.svg"].default,
      },
      {
        name: "Greece",
        image: imageAssets["/assets/images/flags/gr.svg"].default,
      },
      {
        name: "Mozambique",
        image: imageAssets["/assets/images/flags/mz.svg"].default,
      },
      {
        name: "Myanmar",
        image: imageAssets["/assets/images/flags/mm.svg"].default,
      },
      {
        name: "Austria",
        image: imageAssets["/assets/images/flags/at.svg"].default,
      },
      {
        name: "Ethiopia",
        image: imageAssets["/assets/images/flags/et.svg"].default,
      },
      {
        name: "Martinique",
        image: imageAssets["/assets/images/flags/mq.svg"].default,
      },
      {
        name: "Azerbaijan",
        image: imageAssets["/assets/images/flags/az.svg"].default,
      },
      {
        name: "Uzbekistan",
        image: imageAssets["/assets/images/flags/uz.svg"].default,
      },
      {
        name: "Bangladesh",
        image: imageAssets["/assets/images/flags/bd.svg"].default,
      },
      {
        name: "Armenia",
        image: imageAssets["/assets/images/flags/am.svg"].default,
      },
      {
        name: "Nigeria",
        image: imageAssets["/assets/images/flags/ng.svg"].default,
      },
      {
        name: "South Africa",
        image: imageAssets["/assets/images/flags/za.svg"].default,
      },
      {
        name: "Brunei",
        image: imageAssets["/assets/images/flags/bn.svg"].default,
      },
      {
        name: "Italy",
        image: imageAssets["/assets/images/flags/it.svg"].default,
      },
      {
        name: "Finland",
        image: imageAssets["/assets/images/flags/fi.svg"].default,
      },
      {
        name: "Israel",
        image: imageAssets["/assets/images/flags/il.svg"].default,
      },
      {
        name: "Aruba",
        image: imageAssets["/assets/images/flags/aw.svg"].default,
      },
      {
        name: "Nicaragua",
        image: imageAssets["/assets/images/flags/ni.svg"].default,
      },
      {
        name: "Haiti",
        image: imageAssets["/assets/images/flags/ht.svg"].default,
      },
      {
        name: "Kiribati",
        image: imageAssets["/assets/images/flags/ki.svg"].default,
      },
      {
        name: "Turks and Caicos Islands",
        image: imageAssets["/assets/images/flags/tc.svg"].default,
      },
      {
        name: "Cayman Islands",
        image: imageAssets["/assets/images/flags/ky.svg"].default,
      },
      {
        name: "Ukraine",
        image: imageAssets["/assets/images/flags/ua.svg"].default,
      },
      {
        name: "Mexico",
        image: imageAssets["/assets/images/flags/mx.svg"].default,
      },
      {
        name: "Palestine",
        image: imageAssets["/assets/images/flags/ps.svg"].default,
      },
      {
        name: "Fiji",
        image: imageAssets["/assets/images/flags/fj.svg"].default,
      },
      {
        name: "Slovakia",
        image: imageAssets["/assets/images/flags/sk.svg"].default,
      },
      {
        name: "Ghana",
        image: imageAssets["/assets/images/flags/gh.svg"].default,
      },
      {
        name: "Suriname",
        image: imageAssets["/assets/images/flags/sr.svg"].default,
      },
      {
        name: "Cuba",
        image: imageAssets["/assets/images/flags/cu.svg"].default,
      },
      {
        name: "Bhutan",
        image: imageAssets["/assets/images/flags/bt.svg"].default,
      },
      {
        name: "Hungary",
        image: imageAssets["/assets/images/flags/hu.svg"].default,
      },
      {
        name: "São Tomé and Príncipe",
        image: imageAssets["/assets/images/flags/st.svg"].default,
      },
      {
        name: "Iraq",
        image: imageAssets["/assets/images/flags/iq.svg"].default,
      },
      {
        name: "Czechia",
        image: imageAssets["/assets/images/flags/cz.svg"].default,
      },
      {
        name: "Lithuania",
        image: imageAssets["/assets/images/flags/lt.svg"].default,
      },
      {
        name: "Northern Mariana Islands",
        image: imageAssets["/assets/images/flags/mp.svg"].default,
      },
      {
        name: "Botswana",
        image: imageAssets["/assets/images/flags/bw.svg"].default,
      },
      {
        name: "Panama",
        image: imageAssets["/assets/images/flags/pa.svg"].default,
      },
      {
        name: "Gabon",
        image: imageAssets["/assets/images/flags/ga.svg"].default,
      },
      {
        name: "Ecuador",
        image: imageAssets["/assets/images/flags/ec.svg"].default,
      },
    ];

    return _.shuffle(countries);
  },
};

export default fakers;
