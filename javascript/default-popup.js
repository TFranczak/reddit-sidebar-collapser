browser.browserAction.onClicked.addListener(handleClick);
browser.storage.local.set({barExpanded: true});
 
function handleClick() {
	toggleBarExpanded();
}

async function toggleBarExpanded() {
	await browser.storage.local.get('barExpanded').then(result => {
		browser.storage.local.set({barExpanded: !result.barExpanded});
	});
}