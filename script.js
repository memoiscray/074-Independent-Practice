
$(".inputBox").click(function() {
    let review = $(".answer-one").val();
    alert(review);
    $(".reviews").text(review);
 
});

$(".inputBoxTwo").click(function() {
    let review = $(".answer-two").val();
    alert(review);
    $(".reviewsTwo").text(review);
 
});

