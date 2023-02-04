(() => {
    const YOUTUBE_SHORT = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer")

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {test, tabId} = obj;
        if (test && tabId) {
            for (let index = 0; index < YOUTUBE_SHORT.length; index++) {
                console.log("removing");
                const element = YOUTUBE_SHORT[index];
                element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
            }
        }
    })
})();