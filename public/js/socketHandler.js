window.onload = function() {


  // CHAT CLIENT CODE:

  // var socket = io.connect('http://localhost:3000/chatspace');
  var socket = io.connect('http://localhost:3000/game');
  var messages = document.getElementById("messages");

  // chat code is failing on the .emit(). Still working to get it
  // to work on separate chat space but on the same page as /game:

  $('form#chatBox').submit(function(){;
    console.log("inside the submit!");
    var mContent = document.getElementById("m").value;
    console.log(mContent); // <= this is logging correctly
    // chatspace.emit('chat message', mContent);
    socket.emit('chat message', mContent);
    $("#m").val('');
    return false;
  });

  // Add chat message to the DOM:
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
