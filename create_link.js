const tabs = await chrome.tabs.query({
    url: [
        "https://commons.sejong.ac.kr/*"
    ],
});

const template = document.getElementById("li_template");
const elements = new Set();
for (const tab of tabs) {
    const element = template.content.firstElementChild.cloneNode(true);

    let newURL = new URL(tab.url)
    newURL.searchParams.set("per","100.0")
    newURL.searchParams.set("st","0.0")
    newURL.searchParams.set("et","9999.0")
    newURL.searchParams.set("github","zz3n")

    chrome.tabs.update(tab.id,{
        url: newURL.href
    })

    element.querySelector(".title").textContent = tab.title + " DONE QUICK";
    elements.add(element)
}

document.querySelector("ul").append(...elements);