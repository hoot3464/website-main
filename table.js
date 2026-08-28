const titles = [
    "Desert 1",
    "Desert 2",
    "Desert 3",
    "City 1",
    "City 2",
    "City 3",
    "Mines 1",
    "Mines 2",
    "Mines 3",
    "Fantasy 1",
    "Fantasy 2",
    "Fantasy 3"
  ];

const times = [
    "1:45:460",
    "1:38:980",
    "2:02:700",
    "1:53:950",
    "2:52:730",
    "1:40:860",
    "2:05:350",
    "2:41:860",
    "3:10:180",
    "1:56:810",
    "1:56:260",
    "2:30:850"
  ];
function validateAndCreateTableTransposed(titles, times) {
  if (titles.length !== times.length) {
    console.error("The lengths of the titles and times arrays are not equal.");
    return;
  }
}

function createTable(titles, times) {

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ["Track", ...titles];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    const timeRow = table.insertRow();
    timeRow.insertCell().appendChild(document.createTextNode("Time"));
    times.forEach(time => {
        timeRow.insertCell().appendChild(document.createTextNode(time));
    });

    const addLinks = table.insertRow();
    const ytLinksRow = table.insertRow();
    ytLinksRow.insertCell().appendChild(document.createTextNode("YT Links"));

    const links = [
      "https://www.youtube.com/watch?v=1afgG-5C4jQ&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=1&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=bz1oI8_cNQo&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=2&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=bi4Ug6cFttI&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=3&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=9F5ud4yDFgI&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=4&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=E73wFluk4xs&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=5&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=kiziWEfJdrc&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=6&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=mgYgpOpq1zg&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=7&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=BIJd-S9HsOs&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=8&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=ioGm_6N0Yfk&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=9&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=4lZZ7pduf7I&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=10&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=URcIN4x76pE&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=11&pp=gAQBiAQB",
      "https://www.youtube.com/watch?v=vqHj43cbrrw&list=PL3guWL9dpex0lcXDHEWC1pdDo-mKvyxTG&index=12&pp=gAQBiAQB"
    ];


    const linkTexts = [
        "Video 1",
        "Video 2",
        "Video 3",
        "Video 4",
        "Video 5",
        "Video 6",
        "Video 7",
        "Video 8",
        "Video 9",
        "Video 10",
        "Video 11",
        "Video 12"
    ];

    links.forEach((link, index) => {
      const ytLinkCell = ytLinksRow.insertCell();
      const ytLink = document.createElement('a');
      ytLink.href = link;
      ytLink.textContent = linkTexts[index];
      ytLink.target = "_blank";
      ytLinkCell.appendChild(ytLink);
      ytLinkCell.style.fontWeight = "bold";
      ytLinkCell.style.textAlign = "center";
      ytLink.style.color = "#00f0ff";
      ytLink.style.fontSize = "14px";

      // Update hover effects: change link color to green on hover and back to yellow on mouseout
      ytLink.addEventListener("mouseover", function() {
        ytLink.style.color = "#39ff14"; // green on hover
      });
      ytLink.addEventListener("mouseout", function() {
        ytLink.style.color = "#00f0ff"; // revert to yellow when not hovered
      });
    });

    // Add border, center all text in the table, and add spacing (padding) to the table cells
    table.style.border = "2px solid white";
    table.style.borderCollapse = "collapse";
    const cells = table.querySelectorAll("th, td");
    cells.forEach(cell => {
      cell.style.border = "1px solid white";
      cell.style.textAlign = "center";
      cell.style.padding = "10px";
    });

    document.body.appendChild(table);
    }


validateAndCreateTableTransposed(titles, times);

createTable(titles, times);

