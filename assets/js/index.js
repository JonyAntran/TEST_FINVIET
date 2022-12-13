// Document
$(function () {
    $('.custom-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

});


// function signup() {


//     alert("da gui")
// }
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        location: document.getElementById("location").value,
        budget: document.getElementById("budget").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    // emailjs.send("service_ct0darb", "template_mklyy0u", params).then(function (res) {
    //     alert("success" + res.status)
    // })
    // const serviceID = "service_ct0darb";
    // const templateID = "template_mklyy0u";
    emailjs.send("service_ct0darb", "template_mklyy0u", params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("location").value = "";
                document.getElementById("budget").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                // console.log(res)
                alert("da gui thanh cong")
            }
        )



}
//     const serviceID = "service_ct0darb";
//     const templateID = "template_mklyy0u";
//     emailjs.sendMail(serviceID, templateID, params)
//         .then(
//             res => {
//                 document.getElementById("name").value = "";
//                 document.getElementById("email").value = "";
//                 document.getElementById("location").value = "";
//                 document.getElementById("budget").value = "";
//                 document.getElementById("subject").value = "";
//                 document.getElementById("message").value = "";
//                 // console.log(res);
//                 alert("da gui thanh cong")
//             }
//         )
//         .catch (
// err => console.log(err)
//         );
