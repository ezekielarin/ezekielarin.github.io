var staffRecords = [
    {"employedBy": "Alice","staff_name": "James Matthews","address":"elington street", "index":1 },
    {"employedBy": "Bob","staff_name": "Mark Hanson","address":"anderson drive", "index":2},
    {"employedBy": "Carol","staff_name": "Thomas Cook","address":"north dakota" "index":3}
  ];


function renderEmployees() {
  staffRecords = staffRecords.sort(function(a,b){return b.votes-a.votes})
  var template = $('#template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, {staffRecords});
  $('#memeBody').html(rendered);
}

window.addEventListener('load', async () => {
  renderMemes();
});

jQuery("#memeBody").on("click", ".voteBtn", async function(event){
  const value = $(this).siblings('input').val();
  const dataIndex = event.target.id;
  const foundIndex = staffRecords.findIndex(meme => meme.index == dataIndex);
  staffRecords[foundIndex].votes += parseInt(value, 10);
  renderMemes();
});

$('#registerBtn').click(async function(){
  var name = ($('#regName').val()),
      url = ($('#regUrl').val());

  staffRecords.push({
    creatorName: name,
    memeUrl: url,
    index: staffRecords.length+1,
    votes: 0
  })
  renderMemes();
});