window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loading-progress");
    const main = document.getElementById("main-content");

    let width = 0;

    const timer = setInterval(function () {

        width += 2;

        progress.style.width = width + "%";

        if (width >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                loader.style.opacity = "0";

                setTimeout(function () {

                    loader.style.display = "none";
                    main.style.display = "block";

                }, 800);

            }, 300);

        }

    }, 20);

});