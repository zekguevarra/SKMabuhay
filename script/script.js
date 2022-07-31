// card section hover effect
$(document).ready(function(){
    $('.col-lg-4').hover(
        //tigger when mouse touch
        function(){
            $(this).animate({
                marginTop:"-=1%",
            },200)
        },

        // trigger when mouse out
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});

//datatables
$(document).ready(function () {
    $('#example').DataTable({
        scrollY: 300,
        scrollX: true,
    });
});
$(document).ready(function () {
    $('#example1').DataTable({
        scrollY: 300,
        scrollX: true,
    });
});

