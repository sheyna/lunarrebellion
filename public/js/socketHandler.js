window.onload = function() {
  // var socket = io.connect('http://localhost:3000/chatspace');
  var socket = io.connect('http://localhost:3000/game');
  var messages = document.getElementById("messages");
  // var formSubmit = document.getElementById("formSubmitBtn");

  $('form#chatBox').submit(function(){;
    console.log("inside the submit!");
    var mContent = document.getElementById("m").value;
    console.log(mContent);
    // chatspace.emit('chat message', mContent);
    socket.emit('chat message', mContent);
    $("#m").val('');
    return false;
  });

  socket.on('chat message', function(msg){
    let node = document.createElement("li");
    let textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    messages.appendChild(node);
  });

  localStorage.debug = '*';

  document.getElementById("colapseChatBtn").addEventListener('click', colapseChat);

  document.getElementById("expandChatBtn").addEventListener('click', expandChat);

  function colapseChat() {
    document.getElementById("chat").classList.add('colapse-chat');
  }

  function expandChat() {
    document.getElementById("chat").classList.remove('colapse-chat');
  }
}
