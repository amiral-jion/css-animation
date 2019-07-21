
const anchors = document.querySelectorAll('.anchor-tooltip');

anchors.forEach(anchor => {
	const tooltipText = anchor.getAttribute('title');
	const toolTip = document.createElement('span');

	toolTip.className = 'title-tooltip';
	toolTip.innerText = tooltipText;
	anchor.appendChild(toolTip);
});
