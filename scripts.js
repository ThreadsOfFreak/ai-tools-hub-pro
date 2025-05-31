document.addEventListener("DOMContentLoaded", () => {
  const tools = [
    { name: "ChatGPT", desc: "AI chatbot by OpenAI", link: "https://chat.openai.com" },
    { name: "Grammarly", desc: "Writing assistant", link: "https://grammarly.com" },
    { name: "DALL·E", desc: "Text-to-image AI", link: "https://openai.com/dall-e" },
    { name: "Runway ML", desc: "AI video and creative tools", link: "https://runwayml.com" }
  ];

  const toolCards = document.getElementById("toolCards");
  const searchInput = document.getElementById("searchInput");

  const renderTools = (filter = "") => {
    toolCards.innerHTML = "";
    tools.filter(tool => tool.name.toLowerCase().includes(filter.toLowerCase()))
         .forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `<h3>${tool.name}</h3><p>${tool.desc}</p><a href="${tool.link}" target="_blank">Visit</a>`;
      toolCards.appendChild(card);
    });
  };

  searchInput.addEventListener("input", e => renderTools(e.target.value));
  renderTools();
});
