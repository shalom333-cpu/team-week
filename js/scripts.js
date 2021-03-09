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


$("button#book-now").click(function() {
    $(".description").hide();
    $(".description-2").hide();
    $(".description-3").hide();
    $(".description-4").hide();
    $(".description-5").hide();
    $(".description-6").hide();
    $(".description-7").hide();
    $(".description-8").hide();
    $(".description-9").hide();
    $(".description-10").hide();
    $(".form-book").show();
    
});



const forms = document.getElementsByClassName("book-form"); //gets a list of elements with the class name
for (let i = 0; i < forms.length; i++) { //for loop - loops through the list
    const form = forms.item(i); // gets form from the list
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
});