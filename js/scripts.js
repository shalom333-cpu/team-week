$("#hotel-1").click(function() {
    $(".description").toggle("slow");
});

$("#hotel-2").click(function() {
    $(".description-2").toggle("slow");
});

$("#hotel-3").click(function() {
    $(".description-3").toggle("slow");
});

$("#hotel-4").click(function() {
    $(".description-4").toggle("slow");
});

$("#hotel-5").click(function() {
    $(".description-5").toggle("slow");
});

$("#hotel-6").click(function() {
    $(".description-6").toggle("slow");
});

$("#hotel-7").click(function() {
    $(".description-7").toggle("slow");
});

$("#hotel-8").click(function() {
    $(".description-8").toggle("slow");
});

$("#hotel-9").click(function() {
    $(".description-9").toggle("slow");
});

$("#hotel-10").click(function() {
    $(".description-10").toggle("slow");
});

//Booking Form

$("button#book-now").click(function() {
    $(".description").hide();
    $(".form-book").show();
});

$("button#book-now-2").click(function() {
    $(".description-2").hide();
    $(".form-book-2").show();
});

$("button#book-now-3").click(function() {
    $(".description-3").hide();
    $(".form-book-3").show();
});

$("button#book-now-4").click(function() {
    $(".description-4").hide();
    $(".form-book-4").show();
});

$("button#book-now-5").click(function() {
    $(".description-5").hide();
    $(".form-book-5").show();
});

$("button#book-now-6").click(function() {
    $(".description-6").hide();
    $(".form-book-6").show();
});

$("button#book-now-7").click(function() {
    $(".description-7").hide();
    $(".form-book-7").show();
});

$("button#book-now-8").click(function() {
    $(".description-8").hide();
    $(".form-book-8").show();
});

$("button#book-now-9").click(function() {
    $(".description-9").hide();
    $(".form-book-9").show();
});

$("button#book-now-10").click(function() {
    $(".description-10").hide();
    $(".form-book-10").show();
});


const forms = document.getElementsByClassName("book-form"); 
for (let i = 0; i < forms.length; i++) { 
    const form = forms.item(i);
    form.addEventListener("submit",(e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        var checkIn = new Date(formData.get("check_in")); 
        var checkOut = new Date(formData.get("check_out")); 
        var price = formData.get("price");

        var userName = $("input#name").val();
        
        var days = (checkOut.getTime() - checkIn.getTime()) / (24 * 3600 * 1000);

        alert("Hello " + userName + "Your Booking reservation is confirmed. The total amount ypu will pay is: " + days * price);

    });
}
$("button#full").click(function() {
    $(".form-book").hide();
    $(".form-book-2").hide();
    $(".form-book-3").hide();
    $(".form-book-4").hide();
    $(".form-book-5").hide();
    $(".form-book-6").hide();
    $(".form-book-7").hide();
    $(".form-book-8").hide();
    $(".form-book-9").hide();
    $(".form-book-10").hide();
});