const ol = document.querySelector("ol");
const topThreeFavMovies = [
    {
        name: "Cars 1",
        year: 2006,
        director: "John Lasseter",
        imgURL: '<img src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"height="400">'
    },
    {
        name: "Kung Fu Panda",
        year: 2008,
        director: "Mark Osborne",
        imgURL: '<img src="https://static.wikia.nocookie.net/kungfupanda/images/7/79/KFPDVDCover.jpg/revision/latest?cb=20101121161444"height="400">'
    },
    {
        name: "Moana",
        year: 2016,
        director: "John Musker",
        imgURL: '<img src="https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg?region=0%2C0%2C540%2C810"height="400">'
    },
]
const li = `
    <li>
        <p>Name: ${topThreeFavMovies.name}
        <p>Year: ${topThreeFavMovies.year}
        <p>Director: ${topThreeFavMovies.director}
        <p>imgURL: ${topThreeFavMovies.imgURL}
    </li>
`
const template = topThreeFavMovies.map(topThreeFavMovies => `
<li>
    <p>Name: ${topThreeFavMovies.name}
    <p>Year: ${topThreeFavMovies.year}
    <p>Director: ${topThreeFavMovies.director}
    <p>${topThreeFavMovies.imgURL}
</li>
`);
ol.innerHTML = template.join('');



//<img src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"height="400">