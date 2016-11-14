// footlist alphapetisch ordnen
function sortUL(selector) {
    $(selector).children("input").sort(function(a, b) {
        var upA = $(a).attr("value").toUpperCase();
        var upB = $(b).attr("value").toUpperCase();
        return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
    }).appendTo(selector);
}

// Filter auf die Liste
 $(function(){ 
    $('#myinput').live('keyup',function(){
        var text = $(this).val();
             $('#mylist input').each(function(){
             if($(this).attr("value").search(new RegExp(text, 'i')) == -1)
                 $(this).hide();               
             else
                $(this).show();
 
        });
    });
});

// function clone
function clone(i) {
  // var clone = $('.listitem').clone().appendTo('#liste'+i);
   var clone = $('.listitem').clone();
   $('#liste'+i).prepend(clone);
   clone.attr('class', 'item');
   clone.find('.foot').attr("value",text);
   clone.show();
      $('#mylist input').each(function(){
      $(this).show();
    });
    $('#myinput').val('');
    $('#mylist').hide();
}

// function cloneMyList
function cloneMyList() {
  var cloneMylist = $('#mylist').children().clone();
  $("#editMyList").empty();
  $('#editMyList').append(cloneMylist);
  //$('#editMyList').children().replaceWith(cloneMylist);
}

function cloneEditMyList() {
  var cloneMylist = $('#editMyList').children().clone();
  $('#mylist').children().replaceWith(cloneMylist);
}

/*-- weiß noch nicht ob das kommt

function fcAddInput() {
input = document.getElementById("last").cloneNode(true);
$('#last .delete').show();
document.getElementById('last').id='okay';
document.getElementById('liste').appendChild(input);
} */

function saveContents(i) {
   $('#liste'+i+' .localStore').each(function(){
   text = $(this).val();
   $(this).attr("value",text);
   });
   var listeVar = $('#liste'+i).html();
   localStorage['listeLS'+i] = listeVar;

   var listName = $('#listName'+i).val();
   localStorage['listName'+i] = listName;
   
   var mylist = $('#mylist').html();
   localStorage['mylist'] = mylist;
   
   var activepage = $('.active').val();
   localStorage['activepage'] = activepage;
   
   var design = $('#page'+i).css('background-image');
   localStorage['design'+i] = design;
}

function restoreContents(j) {
var myList = localStorage['mylist'];
for (var i = 1; i <= j; i++) {
  var listeVar = localStorage['listeLS'+i];
  var listName = localStorage['listName'+i];
  var design = localStorage['design'+i];
  
  if (listeVar != undefined) {
    $('#liste'+i).html(listeVar);
  }
  $('#listName'+i).val(listName);
  $('#page'+i).css('background-image', design);

  }
  $('#mylist').html(myList);

}    

function resetContent(i) {
if(confirm('Delete List?')){
   localStorage.removeItem('listeLS'+i);
   //localStorage.clear();
   window.location.reload();
   }
}

function resetAll() {
if(confirm('Delete List?')){
   localStorage.clear();
   window.location.reload();
   }
}

function showPage(pagenr) {
  // alles schliessen und deaktivieren
        $('.page').hide();
   	$('#selectPage input[type="image"]').attr("src", "./img/selectList.png");
   	$('#selectPage input[type="image"]').removeClass("active");
   	page = "#page" + pagenr;
   	$(page).show();
   	isPageShow = $('.page:visible').attr('id');
   	idbtpage = "#bt"+isPageShow;
   	$(idbtpage).attr("src", "./img/selectListActive.png");
	$(idbtpage).addClass("active");
	saveContents(pagenr);    
}