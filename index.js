const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;

function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';

    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('.single-entry');
        for (let index = 0; index < allEntries.length; index++) {
            allEntries[index].style.display = 'none';
        }
        entryDiv.style.display = 'block';
    })

    count++
}

entryForm.addEventListener('submit', addEntryToDom)

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#btnpause");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
});


pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
    } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }
})