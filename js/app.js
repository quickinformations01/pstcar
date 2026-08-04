/* ==========================================
   PST CAR
   Version 0.1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const passengerBtn = document.getElementById("passengerBtn");
    const driverBtn = document.getElementById("driverBtn");
    const loginBtn = document.querySelector(".login-btn");

    if (passengerBtn) {
        passengerBtn.addEventListener("click", () => {
            alert("Passenger Registration - Coming Next");
        });
    }

    if (driverBtn) {
        driverBtn.addEventListener("click", () => {
            alert("Driver Registration - Coming Next");
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Login Page - Coming Next");
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // Sticky Header Shadow
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

        }

    });

});
