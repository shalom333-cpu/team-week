$(document).ready(function() {
    $("#contact").submit(function(e) {
        e.preventDefault();

        function reset() {
            $("#f-name").val("");
            $("#l-name").val("");
            $("#email").val("");
            $("#message").val("");
        }

        var name = $("#f-name").val();
        alert("Thank you " + name + "\nWe have received your response. 😁");

        reset();
    });
});
