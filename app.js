const panels = document.querySelectorAll('.container .panel');

panels.forEach(
        panel => {
            panel.addEventListener('click', () => activatePanel(panel))
        }
)

function deactivatePanels(panels)
{
    panels.forEach
        (
            panel => {
                panel.classList.remove('active')
        }
    )
}


// function deactivatePanels
// {
//     return "hello world"
// }

function activatePanel(panel) {
    deactivatePanels(panels)
    panel.classList.add('active')
}