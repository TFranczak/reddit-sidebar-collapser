var sidebar = document.querySelector(".side");

browser.storage.onChanged.addListener((changes, area) => {
	if (area === 'local' && 'barExpanded' in changes) {
		sidebar.style.display = changes.barExpanded.newValue ? null : "none";
	}
});