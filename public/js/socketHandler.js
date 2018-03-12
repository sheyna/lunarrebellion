window.onload = function() {
  var socket = io();
  var messages = document.getElementById("messages");
  // var formSubmit = document.getElementById("formSubmitBtn");

  // formSubmit.addEventListener('click', function() {
  $('form').submit(function(){
    // var mContent = document.getElementById("m").value;
    // socket.emit('chat message', mContent);
    socket.emit('chat message', $("#m").val());
    $("#m").val('');
    // m.value = '';
    return false;
  });

  socket.on('chat message', function(msg){
    let node = document.createElement("li");
    let textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    messages.appendChild(node);
  });
}
