const chatContainer = document.getElementById("chatContainer");
const buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", () => {
  const inputChat = document.getElementById("chat").value;
  const chat = document.createElement("span");

  chat.textContent = inputChat;

  chatContainer.appendChild(chat);
});
