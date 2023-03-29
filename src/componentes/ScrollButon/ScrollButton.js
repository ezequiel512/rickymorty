import './ScrollButton.css';

const ScrollButon = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        let miboton = document.getElementById("miboton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            miboton.style.display = "block";
        } else {
            miboton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <button onClick={topFunction} id="miboton">⇑</button>
    )

}

export default ScrollButon;