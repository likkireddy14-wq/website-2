/* =====================================================
   LIKHITHA'S BAKERY
   JAVASCRIPT
===================================================== */


/* ================================
   MOBILE MENU
================================ */

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (nav) {

        nav.classList.toggle("active");

    }

}


/* ================================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll("#mainNav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("mainNav");

        if (nav) {

            nav.classList.remove("active");

        }

    });

});


/* ================================
   ORDER FORM
================================ */

function placeOrder(event) {

    event.preventDefault();

    alert(
        "Thank you for choosing Likhitha's Bakery! ❤️\n\n" +
        "Your order request has been received.\n" +
        "We will contact you shortly."
    );

    event.target.reset();

}