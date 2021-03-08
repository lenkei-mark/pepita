window.addEventListener('load', (e) => {
    const searchBar = document.getElementById("search-bar");
    const searchDummy = document.getElementById("search-dummy");
    searchBar.addEventListener('focus', (event  => {
        searchDummy.style.display = "block";
    }))

    searchBar.addEventListener('blur', (event  => {
        searchDummy.style.display = "none";
    }))
});