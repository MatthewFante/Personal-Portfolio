// Populate Navbar, Contact Modal, and Footer Content
function fillNav(){
    let html='<nav class="bg-warning navbar navbar-expand-lg navbar-light"><a class=navbar-brand href=index.html>Matthew Fante</a> <button class=navbar-toggler data-target=#navbarNav data-toggle=collapse type=button aria-controls=navbarNav aria-expanded=false aria-label="Toggle navigation"><span class=navbar-toggler-icon></span></button><div class="collapse navbar-collapse"id=navbarNav><ul class="ml-auto navbar-nav"><li class="mx-auto nav-item"><a class="nav-link text-dark"href=index.html>Home</a><li class="mx-auto nav-item"><a class="nav-link text-dark"href=portfolio.html>Portfolio</a><li class="mx-auto nav-item"><button class="btn btn-outline-dark"data-target=#contactModal data-toggle=modal type=button>Contact</button></ul></div></nav>';
    return html;
}
$('header').html(fillNav());

function fillContactModal(){
    let html='<div class="fade modal"role=dialog aria-hidden=true aria-labelledby=contactModalTitle id=contactModal tabindex=-1><div class="modal-dialog modal-dialog-centered"role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=contactModalTitle>Contact Me!</h5><button aria-label=Close class=close data-dismiss=modal type=button><span aria-hidden=true>×</span></button></div><div class="centered contactModal modal-body mx-auto"><a href=https://www.facebook.com/matt.fante target=_blank><img alt=Facebook class=px-3 src=img/facebook.svg></a><a href=https://github.com/MatthewFante target=_blank><img alt=GitHub class=px-3 src=img/github.svg></a><br><br><a href=https://www.linkedin.com/in/matthewfante/ target=_blank><img alt=LinkedIn class=px-3 src=img/linkedin.svg></a><a href=https://twitter.com/matthew_fante target=_blank><img alt=Twitter class=px-3 src=img/twitter.svg></a><br><br><a href=mailto:matthew.fante@gmail.com class=contactLink>matthew.fante@gmail.com</a><br></div></div></div></div>';
    return html;
}
$('.contactModalBlank').html(fillContactModal());

function fillFooter(){
    let html = '<div class=container><div class=row><div class="mx-auto py-2"><div class=text-muted><small><a href=index.html>© Matthew Fante 2019</small></div></div></div>'
    return html;
}
$('footer').html(fillFooter());

function fillConsultationModal(){
    let html='<div class="fade modal"role=dialog aria-hidden=true aria-labelledby=consultationModalTitle id=consultationModal tabindex=-1><div class="modal-dialog modal-dialog-centered"role=document><div class=modal-content><div class=modal-header><h5 class=modal-title id=consultationModalTitle>Consultation Request</h5><button class=close type=button aria-label=Close data-dismiss=modal><span aria-hidden=true>×</span></button></div><div class="modal-body mx-auto"><form action=confirmation.html><div class=form-row><div class=col><label class=sr-only for=consultFirstName>First Name</label> <input class=form-control name=consultFirstName placeholder="First name"required></div><div class=col><label class=sr-only for=consultLastName>Last Name</label> <input class=form-control name=consultLastName placeholder="Last name"required></div></div><div class="form-row mt-3"><div class=col><label class=sr-only for=consultEmail>Email Address</label> <input class=form-control name=consultEmail placeholder="Email Address"required type=email></div></div><div class="form-row mt-3"><div class=col><label class=sr-only for=consultCompany>Company Name</label> <input class=form-control name=consultCompany placeholder="Company Name"></div></div><div class="form-row mt-3"><label class=sr-only for=consultDescription>Description</label> <textarea class=form-control name=consultDescription placeholder="Please provide a brief description of your development needs..."rows=5></textarea></div><button class="mt-3 btn btn-primary"type=submit>Submit Request</button></form></div></div></div></div>';
    return html;
}
$('.consultationModalBlank').html(fillConsultationModal());



// Parse parameters passed from the booking form and create a confirmation message with it

// Create a variable and store the url parameters in in
let searchParams = new URLSearchParams(window.location.search); 

// Extract the info needed for the confirmation
let consultFirstName = searchParams.get('consultFirstName');
let consultEmail = searchParams.get('consultEmail');

//Create the HTML content for the confirmation and place in on the page
function fillConfirmation(){
    var html = "";
    html += "Thank you, " + consultFirstName + ", I will be in touch with you shortly.<br />";
    return html;
};
$('.confirmation').html(fillConfirmation());