let starMap = document.querySelector(".star-map");
let titleArea = document.querySelector(".project-title");
let imageArea = document.querySelector(".project-img");
let image = document.querySelector(".project-img > img");
let filterBox = document.querySelector(".filter-box");
let filterHandle = document.querySelector(".handle");
let filters = document.querySelectorAll(".filter");
let checkboxes = document.querySelectorAll(".checkbox");
let infoOpener = document.querySelector(".menu-item");
let cursorArea = document.querySelector(".cursor");

let date = new Date();

let starsInfo = [
    {   title: "Schweizer Schule", type: "*",
        link: "project.html?pr=01",
        x: 10, y: 10,
        color: "#aa0000", image: "media/01-ssbg/01-ssbg-00.webp",
        tags: ["branding", "illustration"]
    },
    {   title: "Le Vie del Sacro", type: "✧",
        link: "project.html?pr=02",
        x: 20, y: 45,
        color: "#60227c", image: "media/02-lvds/02-lvds-00.webp",
        tags: ["editorial"]
    },
    {   title: "Destinazione Museo", type: "✧",
        link: "project.html?pr=03",
        x: 30, y: 15,
        color: "#aa8800", image: "media/03-dest_museo/03-dest_museo-01.webp",
        tags: ["editorial", "branding"]
    },
    {   title: "Freya Beauty", type: "*",
        link: "project.html?pr=04",
        x: 40, y: 50,
        color: "#9292a6", image: "media/04-freya/04-freya-00.webp",
        tags: ["branding", "illustration", "editorial", "3d"]
    },
    {   title: "Sidhe Display", type: "✹",
        link: "project.html?pr=05",
        x: 25, y: 70,
        color: "#054238", image: "media/05-sidhe/05-sidhe-01.webp",
        tags: ["typography"]
    },
    {   title: "Type Safari", type: "✹",
        link: "project.html?pr=06",
        x: 35, y: 60,
        color: "#bf3b63", image: "media/06-tssv/06-tssv-00.webp",
        tags: ["typography", "editorial"]
    },
    {   title: "Illustrating Tolkien", type: "✧",
        link: "project.html?pr=07",
        x: 70, y: 20,
        color: "#1d4a1b", image: "media/07-tolkien/07-tolkien-01.webp",
        tags: ["editorial"]
    },
    {   title: "Il labirinto di Heka", type: "*",
        link: "project.html?pr=08",
        x: 65, y: 75,
        color: "#0a0a0a", image: "media/09-heka/09-heka-00.webp",
        tags: ["game", "illustration"]
    },
    {   title: "Il Profeta", type: "✶",
        link: "project.html?pr=09",
        x: 55, y: 30,
        color: "#00aaaa", image: "media/08-profeta/08-profeta-00.webp",
        tags: ["illustration"]
    },
    {   title: "Calligraphy", type: "✹",
        link: "project.html?pr=10",
        x: 80, y: 35,
        color: "#6e1c11", image: "media/10-calligrafia/10-calligrafia-00.webp",
        tags: ["typography", "illustration"]
    },
    {   title: "Otherwhere Atlas", type: "✶",
        link: "project.html?pr=11",
        x: 75, y: 80,
        color: "#83684b", image: "media/11-maps/11-maps-00.webp",
        tags: ["game", "illustration"]
    }
];

let timelineInfo = [
    {   date: "2024", dot: "big", 
        tag: `today! (${date.toDateString()})`,
        link: " "
    },
    {   date: " ", dot: "small", 
        tag: "Illustrating Tolkien",
        link: "project.html?pr=07"
    },
    {   date: " ", dot: "small", 
        tag: "Il labirinto di HEKA",
        link: "project.html?pr=08"
    },
    {   date: "2023", dot: "small", 
        tag: "Destinazione Museo",
        link: "project.html?pr=03"
    },
    {   date: " ", dot: "small", 
        tag: "Schweizer Schule",
        link: "project.html?pr=01"
    },
    {   date: " ", dot: "small", 
        tag: "Il Profeta",
        link: "project.html?pr=09"
    },
    {   date: " ", dot: "small", 
        tag: "Le Vie del Sacro",
        link: "project.html?pr=02"
    },
    {   date: "2022", dot: "small", 
        tag: "Calligraphy",
        link: "project.html?pr=10"
    },
    {   date: " ", dot: "small", 
        tag: "Otherwhere Atlas",
        link: "project.html?pr=11"
    },
    {   date: " ", dot: "big", 
        tag: "BA Design della Comunicazione @ Politecnico di Milano",
        link: " "
    },
    {   date: " ", dot: "small", 
        tag: "Freyə Beauty",
        link: "project.html?pr=04"
    },
    {   date: " ", dot: "small", 
        tag: "Sidhe Display",
        link: "project.html?pr=05"
    },
    {   date: "2021", dot: "small", 
        tag: "Type Safari: Life After Death",
        link: "project.html?pr=06"
    }
];

//------------------|
//  generate stars  |
//------------------|

starsInfo.forEach(starData => {
    let starLink = document.createElement("a");
    starLink.href = starData.link;
    let star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("filtered");
    star.innerHTML = starData.type;

    for (i = 0; i < starData.tags.length; i++) {
        star.classList.add(`${starData.tags[i]}`);
    };
    
    let starTag = document.createElement("div");
    starTag.classList.add("star-tag");
    starTag.innerHTML = starData.title;

    star.style.left = `${starData.x}%`;
    star.style.top = `${starData.y}%`;

    star.addEventListener("mouseenter", () => {
        document.documentElement.style.setProperty("--color", `${starData.color}`);
        titleArea.innerHTML = starData.title;
        image.src = starData.image;
        imageArea.style.top = `${150 - starData.y}px`;
        if (starData.x < 50) {
            imageArea.classList.add("img-l");
        } else {
            imageArea.classList.add("img-r");
        };
        titleArea.style.setProperty("visibility", "visible");
        imageArea.style.setProperty("visibility", "visible");
    })
    star.addEventListener("mouseleave", () => {
        document.documentElement.style.setProperty("--color", "#243853");
        imageArea.classList.remove("img-l");
        imageArea.classList.remove("img-r");
        titleArea.style.setProperty("visibility", "hidden");
        imageArea.style.setProperty("visibility", "hidden");
    });

    star.appendChild(starTag);
    starLink.appendChild(star);
    starMap.appendChild(starLink);
});

let stars = document.querySelectorAll(".star");

//---------------------|
//  generate timeline  |
//---------------------|

timelineInfo.forEach(timelineData => {
    let timeRow = document.createElement("div");
    timeRow.classList.add("time-row");
    timeRow.style.height = `${100 / timelineInfo.length}%`

    let timeDate = document.createElement("div");
    timeDate.classList.add("time-date");
    timeDate.innerHTML = timelineData.date;

    let timeDot = document.createElement("div");
    if (timelineData.dot == "big") {
        timeDot.classList.add("time-dot-l");
    } else {
        timeDot.classList.add("time-dot-s");
    };

    let timeTag = document.createElement("div");
    timeTag.classList.add("time-tag");
    if (timelineData.link == " ") {
        timeTag.innerHTML = timelineData.tag;
        timeTag.style.setProperty("font-style", "italic");
    } else {
        let timeA = document.createElement("a");
        timeA.href = timelineData.link;
        timeA.innerHTML = timelineData.tag;
        timeTag.appendChild(timeA);
    };

    timeRow.appendChild(timeDate);
    timeRow.appendChild(timeDot);
    timeRow.appendChild(timeTag);
    document.querySelector(".info-timeline").appendChild(timeRow);
});


//------------|
//  cursor    |
//------------|

window.addEventListener("mousemove", function(e) {
    cursorArea.style.top = (e.pageY - 25) + "px";
    cursorArea.style.left = (e.pageX - 25) + "px";
});

//--------------------------|
//  draggable filter box    |
//--------------------------|

let offsetX, offsetY, filterMove;

function calcPos(e) {
    offsetX = e.clientX - filterBox.offsetLeft;
    offsetY = e.clientY - filterBox.offsetTop;

    document.addEventListener("mousemove", updatePos);
};
function updatePos(e) {
    filterBox.style.bottom = "auto";
    filterBox.style.right = "auto";
    filterBox.style.left = `${e.clientX - offsetX}px`;
    filterBox.style.top = `${e.clientY - offsetY}px`;
};
function stopPos() {
    document.removeEventListener("mousemove", updatePos);;
};

filterHandle.addEventListener("mousedown", calcPos);
document.addEventListener("mouseup", stopPos);

//--------------------------|
//  hide/show filter box    |
//--------------------------|

let arrow = document.querySelector(".arrow");
let filterContainer = document.querySelector(".filters");
let displayCheck = window.getComputedStyle(filterContainer).getPropertyValue("display");

arrow.addEventListener("click", () => {
    if (displayCheck == "none") {
        arrow.style.removeProperty("transform");
        filterContainer.style.display = "flex";
    } else {
        arrow.style.setProperty("transform", "scaleY(-1)");
        filterContainer.style.display = "none";
    };
    displayCheck = window.getComputedStyle(filterContainer).getPropertyValue("display");
});

//---------------------|
//  filter checkbox    |
//---------------------|

let checker = true;

for (let i = 0; i < filters.length; i++) {
    let filter = filters[i];
    let tagList = ["all", "editorial", "illustration", "typography", "branding", "game", "web"];
    let fAllCond = filter.classList.contains("filter-all");
    let fActCond = filter.classList.contains("filter-active");

    function updateCond() {
        fAllCond = filter.classList.contains("filter-all");
        fActCond = filter.classList.contains("filter-active");
    };

    filter.addEventListener("click", () => {
        updateCond();
        console.log("one" + checker);
        if (checker == true) {
            checker = false;
            stars.forEach(obj => {
                obj.classList.remove("filtered");
            });
        };
        console.log("two" + checker);
        if (fAllCond) {
            checker = true;
            for (let l = 0; l < filters.length; l++) {
                filters[l].classList.remove("filter-active");
                checkboxes[l].classList.remove("checkbox-active");
            };
            filters[0].classList.add("filter-active");
            checkboxes[0].classList.add("checkbox-active");
            stars.forEach(obj => {
                obj.classList.add("filtered");
            });
        } else if (fActCond) {
            filter.classList.remove("filter-active");
            checkboxes[i].classList.remove("checkbox-active");
            stars.forEach(obj => {
                if (obj.classList.contains(tagList[i])) {
                    obj.classList.remove("filtered");
                };                
            });
        } else {
            filters[0].classList.remove("filter-active");
            checkboxes[0].classList.remove("checkbox-active");
            filter.classList.add("filter-active");
            checkboxes[i].classList.add("checkbox-active");
            stars.forEach(obj => {
                if (obj.classList.contains(tagList[i])) {
                    obj.classList.add("filtered");
                };                
            });
        };
    });
};

//---------------------|
//  animate infobox    |
//---------------------|

let infoOpen = false;

infoOpener.addEventListener("mouseenter", () => {
    if (infoOpen == false) {
        document.querySelector(".info-backdrop").classList.add("info-backdrop-hover");
        document.querySelector(".menu-bar").classList.add("white");
        cursorArea.style.setProperty("border", "1px solid var(--bg-color)");
    };
});
infoOpener.addEventListener("mouseleave", () => {
    if (infoOpen == false) {
        document.querySelector(".info-backdrop").classList.remove("info-backdrop-hover");
        document.querySelector(".menu-bar").classList.remove("white");
        cursorArea.style.setProperty("border", "1px solid var(--color)");
    };
});
infoOpener.addEventListener("click", () => {
    if (infoOpen == false) {
        infoOpen = true;
        document.querySelector(".info-backdrop").classList.add("info-backdrop-open");
        document.querySelector(".menu-bar").classList.add("white");
        cursorArea.style.setProperty("border", "1px solid var(--bg-color)");
        document.querySelector(".info-container").style.setProperty("display", "grid");
        setTimeout(function(){
            document.querySelector(".info-container").classList.remove("info-hidden");
        }, 200);
    } else {
        infoOpen = false;
        document.querySelector(".info-backdrop").classList.remove("info-backdrop-open");
        document.querySelector(".info-container").style.setProperty("display", "none");
        document.querySelector(".info-container").classList.add("info-hidden");
        // document.querySelector(".menu-bar").classList.remove("menu-bar-white");
    };
});
