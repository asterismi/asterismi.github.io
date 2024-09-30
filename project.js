let text = document.querySelector("h1");

let stars = [
    {   title: "Schweizer Schule", pr: "01",
        color: "#aa0000", 
        year: "2023&ndash;24", commissioner: "CLIENT/S", client: "Scuola Svizzera Bergamo, Scuola Svizzera Roma", team: "", link: "",
        description: '<p>Inspired by pre-existing murals, the project resulted in the creation of a design system for Scuola Svizzera Bergamo and its application to documents, wayfinding and information plaques. </p> <p>The project found further development in 2024, with the design and illustration of the school diary for Scuola Svizzera Bergamo and Scuola Svizzera Roma; the illustrations pay homage to traditional Swiss papercraft, Scherenschnitte. </p> <br><br>',
        gallery: ["media/01-ssbg/01-ssbg-10.webp", "media/01-ssbg/01-ssbg-07.webp", "media/01-ssbg/01-ssbg-08.webp", "media/01-ssbg/01-ssbg-09.webp", "media/01-ssbg/01-ssbg-02.webp", "media/01-ssbg/01-ssbg-01.webp", "media/01-ssbg/01-ssbg-03.webp", "media/01-ssbg/01-ssbg-04.webp", "media/01-ssbg/01-ssbg-05.webp", "media/01-ssbg/01-ssbg-06.webp", "media/01-ssbg/01-ssbg-11.gif"]
    },
    {   title: "Le Vie del Sacro", pr: "02",
        color: "#60227c", type: "editorial",
        year: "2023&ndash;24", commissioner: "CLIENT/S", client: "Fondazione Adriano Bernareggi", team: "", link: '<a href="https://www.leviedelsacro.com/" target="_blank">Website</a> <a href="https://www.instagram.com/fab_fondazionebernareggi/" target="_blank">Instagram</a>',
        description: '<p>Redevelopment and application of the existing graphic identity for <i>Le Vie del Sacro</i>, a cultural project developed by Fondazione Adriano Bernareggi in the context of Bergamo Brescia Capitale della Cultura 2023.</p> <p>The project oversaw the creation of digital and print material for more than 500 events &ndash; including three major exhibits (<i>Sulle Vie di Carlo Ceresa, La terra è di chi la coltiva, Come luce nelle tenebre</i>), two maps, eight monthly event calendars, and an end-of-year report. The project and collaboration were renewed for 2024. </p>',
        gallery: ["media/02-lvds/02-lvds-12.webp", "media/02-lvds/02-lvds-06.webp", "media/02-lvds/02-lvds-07.webp", "media/02-lvds/02-lvds-10.webp", "media/02-lvds/02-lvds-01.webp", "media/02-lvds/02-lvds-01.gif", "media/02-lvds/02-lvds-02.webp", "media/02-lvds/02-lvds-03.webp", "media/02-lvds/02-lvds-04.webp", "media/02-lvds/02-lvds-05.webp", "media/02-lvds/02-lvds-11.webp", "media/02-lvds/02-lvds-13.webp", ]
    },
    {   title: "Destinazione Museo", pr: "03",
        color: "#aa8800", 
        year: "2023&ndash;24", commissioner: "CLIENT/S", client: "Fondazione Adriano Bernareggi", team: "", link: '<a href="https://www.fondazionebernareggi.it/it/cultura/iniziative/destinazione-museo-7022" target="_blank"> Destinazione Museo 2023 </a> <a href="https://www.fondazionebernareggi.it/it/cultura/iniziative/pace-a-voi-7250" target="_blank"> Pace a Voi! </a> <a href="https://www.fondazionebernareggi.it/it/cultura/iniziative/eccellenti-in-val-brembana-7413" target="_blank"> Eccellenti in Val Brembana </a>',
        description: '<p>Development and application of a design system for <i>Destinazione Museo</i>, a cycle of art exhibits anticipating and accompanying the future reopening of Museo Adriano Bernareggi.</p> <p>The first three exhibits (<i>Verso il Rinascimento, Lorenzo Lotto. Un originale e due copie, Artisti. Amici. Superstar.</i>) were developed in sync during summer 2023; a fourth event (<i>Pace a Voi!</i>) was added in April 2024 and a fifth event (<i>Eccellenti in Val Brembana</i>) is currently in development for October 2024.</p>',
        gallery: ["media/03-dest_museo/03-dest_museo-01.webp", "media/03-dest_museo/03-dest_museo-02.webp", "media/03-dest_museo/03-dest_museo-03.webp", "media/03-dest_museo/03-dest_museo-04.webp", "media/03-dest_museo/03-dest_museo-08.webp", "media/03-dest_museo/03-dest_museo-09.webp", "media/03-dest_museo/03-dest_museo-10.webp", "media/03-dest_museo/03-dest_museo-05.webp", "media/03-dest_museo/03-dest_museo-11.webp", "media/03-dest_museo/03-dest_museo-12.webp", "media/03-dest_museo/03-dest_museo-07.webp", "media/03-dest_museo/03-dest_museo-06.webp"]
    },
    {   title: "Freyə Beauty", pr: "04",
        color: "#9292a6", 
        year: "2022", commissioner: "COURSE + LECTURER", client: "BA Thesis @ Politecnico di Milano, Francesco Ermanno Guida", team: "Mara Castiglioni, Sara Gussoni, Patricia Teixeira, Gianluca Zoni", link: '<a href="http://fattididati.labsintesi-c1.info/projects/09FREYA.html" target="_blank"> FATTI DI DATI &ndash; Lab Sintesi C1 2022</a>',
        description: '<p>A speculative design project centered on data collection and the increasing impact of the beauty industry on everyday life.</p> <p>Imagining a future that sees beauty trends changing daily and cosmetic surgery available in the form of over-the-counter medication and kits, we developed the fictional trend-setting brand <i>Freyə Beauty</i> and its flagship product, the smart mirror <i>Gləre</i>.</p> <p>Through the mirror, users learn about the "face of today" displayed with the assistance of AR filters, and their adherence to the cosmetic parameters is measured via AI-powered facial recognition and ranked on a dedicating web platform, creating a conflicting sense of belonging and competition in the community.</p>',
        gallery: ["media/04-freya/04-freya-14.webp", "media/04-freya/04-freya-11.webp", "media/04-freya/04-freya-12.webp", "media/04-freya/04-freya-13.webp", "media/04-freya/04-freya-09.webp", "media/04-freya/04-freya-07.webp", "media/04-freya/04-freya-08.webp", "media/04-freya/04-freya-10.webp", "media/04-freya/04-freya-06.webp", "media/04-freya/04-freya-01.webp", "media/04-freya/04-freya-02.webp", "media/04-freya/04-freya-03.webp", "media/04-freya/04-freya-04.webp", "media/04-freya/04-freya-05.webp",]
    },
    {   title: "Sidhe Display", pr: "05",
        color: "#054238", 
        year: "2022", commissioner: "COURSE + LECTURER", client: "Type Design @ Politecnico di Milano, Alessandro Colizzi", team: "", link: '<a href="">Download the font</a>',
        description: '<p>A type design project mediating inspirations drawn from uncial letterforms, lombardic capitals and early 1900s Antiqua/Mediäval typefaces.</p> <p>The typeface features open, rounded letterforms and decorated serifs, as well as a number of historic alternates and ligatures, manicules, and fleurons. The name, Sidhe, is drawn from Gaelic folklore and references the collective name for faeries.</p> <p>A bolder, revised edition is currently in the works.</p>',
        gallery: ["media/05-sidhe/05-sidhe-02.webp", "media/05-sidhe/05-sidhe-03.webp", "media/05-sidhe/05-sidhe-04.webp", "media/05-sidhe/05-sidhe-05.webp", "media/05-sidhe/05-sidhe-06.webp", "media/05-sidhe/05-sidhe-07.webp", "media/05-sidhe/05-sidhe-08.webp", "media/05-sidhe/05-sidhe-10.webp", "media/05-sidhe/05-sidhe-11.webp", "media/05-sidhe/05-sidhe-09.webp"]
    },
    {   title: "Type Safari: Life After Death", pr: "06",
        color: "#bf3b63", 
        year: "2021", commissioner: "COURSE + LECTURER", client: "Typographic Design @ Politecnico di Milano, Andrea Braccaloni", team: "", link: '',
        description: ``,
        gallery: ["media/06-tssv/06-tssv-01.webp", "media/06-tssv/06-tssv-02.webp", "media/06-tssv/06-tssv-03.webp", "media/06-tssv/06-tssv-04.webp", "media/06-tssv/06-tssv-05.webp", ]
    },
    {   title: "Illustrating Tolkien", pr: "07",
        color: "#143611", 
        year: "2024", commissioner: "COURSE + LECTURER", client: "Storia dell'illustrazione @ ISIA Urbino, Silvana Sola", team: "", link: '',
        description: ``,
        gallery: ["media/07-tolkien/07-tolkien-01.webp", "media/07-tolkien/07-tolkien-02.webp","media/07-tolkien/07-tolkien-03.webp","media/07-tolkien/07-tolkien-05.webp","media/07-tolkien/07-tolkien-06.webp","media/07-tolkien/07-tolkien-07.webp","media/07-tolkien/07-tolkien-08.webp","media/07-tolkien/07-tolkien-04.webp"]
    },
    {   title: "Il Labirinto di HEKA", pr: "08",
        color: "#0a0a0a", 
        year: "2024", commissioner: "COURSE + LECTURER", client: "Tecniche fine arts @ ISIA Urbino, Cecilia Giampaoli", team: "", link: '<a href="https://il-labirinto-di-heka.github.io/project/" target="_blank">Project results (IT)</a>',
        description: `<p>Developed in the context of the 2024 edition of <i>Giornata Mondiale del Gioco</i> held in Urbino, the project aims to explore the expectations, approaches and preconceived notions we have towards games and the act of gaming.</p> <p>The prototype presents itself as a cryptic grimoire in search of decryption; through mysterious implements &ndash; archetypal board game staples such as a deck of playing cards, dice, and tokens &ndash; the players' goal is to come up with the missing rulebook of the game.</p>`,
        gallery: ["media/09-heka/09-heka-01.webp", "media/09-heka/09-heka-10.webp", "media/09-heka/09-heka-06.webp", "media/09-heka/09-heka-07.webp", "media/09-heka/09-heka-08.webp", "media/09-heka/09-heka-09.webp", "media/09-heka/09-heka-02.webp", "media/09-heka/09-heka-03.webp", "media/09-heka/09-heka-04.webp"]
    },
    {   title: "Il Profeta", pr: "09",
        color: "#00aaaa", 
        year: "2023", commissioner: "COURSE + LECTURER", client: "Illustrazione per l'editoria @ ISIA Urbino, Giuseppe Palumbo", team: "", link: '',
        description: `<p>An editorial illustration project, reimagining already published works of literature as illustrated books.</p> <p>The esoteric and poetic words of Kahlil Gibran's <i>The Prophet</i> are visually translated as a journey of light. From sunrise to sunset, a series of evocative scenes drawn from the titular character's speech accompany their last day on the land that welcomed them.</p>`,
        gallery: ["media/08-profeta/08-profeta-01.webp", "media/08-profeta/08-profeta-02.webp", "media/08-profeta/08-profeta-03.webp", "media/08-profeta/08-profeta-04.webp", "media/08-profeta/08-profeta-05.webp", "media/08-profeta/08-profeta-06.webp"]
    },
    {   title: "Calligraphy", pr: "10",
        color: "#6e1c11", 
        year: "2022", commissioner: "COURSE + LECTURE", client: "Calligrafia @ ISIA Urbino, Monica Dengo", team: "", link: '',
        description: `<p>A series of calligraphic explorations through various media and nuances, from studies of historical forms to pure experimentation.</p>`,
        gallery: ["media/10-calligrafia/10-calligrafia-01.webp", "media/10-calligrafia/10-calligrafia-02.webp", "media/10-calligrafia/10-calligrafia-03.webp", "media/10-calligrafia/10-calligrafia-04.webp", "media/10-calligrafia/10-calligrafia-09.webp", "media/10-calligrafia/10-calligrafia-05.webp", "media/10-calligrafia/10-calligrafia-06.webp", "media/10-calligrafia/10-calligrafia-07.webp", "media/10-calligrafia/10-calligrafia-08.webp", ]
    },
    {   title: "Otherwhere Atlas", pr: "11",
        color: "#83684b", 
        year: "2018&ndash;24", commissioner: "&ndash;", client: "personal projects + private commissions", team: "", link: '',
        description: `<p>A collection of maps and cartographic elements created over the years, both for personal projects and editorial work.</p> <p>The drawings, presented in chronological order: <br>
                        &ndash; <i>Treasure map</i>, academic project, 2018 <br>
                        &ndash; <i>Map of Erthalys</i>, commission, 2020 <br>
                        &ndash; <i>Greyfang, the Old World</i>, commission, 2022 <br>
                        &ndash; <i>Gawain's Journey</i>, academic project, 2023 <br>
                        &ndash; <i>A (non-exhaustive) map of the Underworlds</i>, <br> academic project, 2023 <br>
                        &ndash; <i>Fuscus quadrant sky chart</i>, personal project, 2023 <br>
        </p>`,
        gallery: ["media/11-maps/11-maps-01.webp", "media/11-maps/11-maps-02.webp", "media/11-maps/11-maps-03.webp", "media/11-maps/11-maps-04.webp", "media/11-maps/11-maps-05.webp", "media/11-maps/11-maps-06.webp", ]
    }
];

//--------------------|
//  find project no.  |
//--------------------|

function getQueryStringParameter(paramToRetrieve) {
    var params =
    document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    };
};

let project = getQueryStringParameter("pr");
let projectNo = "";

for (let i = 0; i < stars.length; i++) {
    if (stars[i].pr == project) {
        projectNo = i;
    };
};

let currProj = stars[projectNo];

//----------------|
//  compile page  |
//----------------|

//  color
document.documentElement.style.setProperty("--bg-color", `${currProj.color}`);

//  title
document.querySelector(".title").innerHTML = currProj.title;

//  tags
if (currProj.year == "") {
    document.querySelector(".tag.year").style.setProperty("display", "none") ;
} else {
    document.querySelector(".info.year").innerHTML = currProj.year;
};

if (currProj.client == "") {
    document.querySelector(".tag.client").style.setProperty("display", "none") ;
} else {
    document.querySelector(".marker.client").innerHTML = currProj.commissioner;
    document.querySelector(".info.client").innerHTML = currProj.client;
};

if (currProj.team == "") {
    document.querySelector(".tag.team").style.setProperty("display", "none") ;
} else {
    document.querySelector(".info.team").innerHTML = currProj.team;
};

if (currProj.link == "") {
    document.querySelector(".tag.link").style.setProperty("display", "none") ;
} else {
    document.querySelector(".info.link").innerHTML = currProj.link;
};

//  description
document.querySelector(".project-text").innerHTML = currProj.description;

//  images
for (let i = 0; i < currProj.gallery.length; i++) {
    let image = document.createElement("img");
    image.src = currProj.gallery[i];
    document.querySelector(".gallery").appendChild(image);
};

//----------------|
//  image scroll  |
//----------------|

let galleryHeight = document.querySelector(".gallery").clientHeight;
let galleryScroll = 0;
let galleryImgs = document.querySelectorAll(".gallery img");

let maxGalleryScroll = galleryHeight - window.innerHeight;

document.documentElement.addEventListener("wheel", (e) => {
    galleryHeight = document.querySelector(".gallery").clientHeight;
    maxGalleryScroll = galleryHeight - window.innerHeight;

    galleryScroll += e.deltaY;
    galleryScroll = Math.max (0, galleryScroll);
    galleryScroll = Math.min (maxGalleryScroll, galleryScroll);

    if (window.innerWidth > 800) {
        document.querySelector(".gallery-container").scrollTop = galleryScroll;
    };
    
    console.log(galleryHeight + " " + `${document.querySelector(".gallery").clientHeight}` + " " + galleryScroll);
});

window.addEventListener("resize", () => {
    maxGalleryScroll = galleryHeight - window.innerHeight;
});
