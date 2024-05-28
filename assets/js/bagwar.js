// bagwar.js

var show_msg = '';
if (show_msg !== '0') {
    var options = {
        view_src: "You can't view the source.",
        inspect_elem: "Inspecting elements isn't available.",
        right_click: "Right-clicking is disabled.",
        copy_cut_paste_content: "Copying, cutting, and pasting are disabled.",
        image_drop: "You can't drag and drop images.",
        download_disabled: "Downloading is disabled.",
        print_disabled: "Printing is disabled.",
    }
} else {
    var options = '';
}

function nocontextmenu(e) {
    return false;
}
document.oncontextmenu = nocontextmenu;
document.ondragstart = function () {
    return false;
}

document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 123) {
        if (show_msg !== '0') {
            show_toast('inspect_elem');
        }
        return false;
    }
}

document.onkeydown = function (event) {
    event = (event || window.event);
    // Disable Ctrl + S (83)
    if (event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        show_toast('download_disabled');
        return false;
    }
    // Disable Ctrl + P (80)
    if (event.ctrlKey && event.keyCode === 80) {
        event.preventDefault();
        show_toast('print_disabled');
        return false;
    }
    if (event.ctrlKey && event.keyCode === 85) {
        if (show_msg !== '0') {
            show_toast('view_src');
        }
        return false;
    }

    // Disable Ctrl + Shift + C (67/99)
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 67 || event.keyCode === 99)) {
        if (show_msg !== '0') {
            show_toast('inspect_elem');
        }
        return false;
    }
}

document.addEventListener("keydown", function (event) {
    // Check if Ctrl + Shift + I is pressed
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault(); // Prevent default behavior
        show_toast('inspect_elem'); // Show toast message indicating that inspecting elements is disabled
    }
});


// Redirect to about:blank if the URL starts with view-source:
function redirectViewSource() {
    if (window.location.href.startsWith("view-source:")) {
        window.location.href = "about:blank";
    }
}

// Call the function to redirect view-source protocol
redirectViewSource();

function addMultiEventListener(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], function (e) {
            e.preventDefault();
            if (show_msg !== '0') {
                show_toast(listener);
            }
        });
    }
}
addMultiEventListener(document, 'contextmenu', 'right_click');
addMultiEventListener(document, 'cut copy paste print', 'copy_cut_paste_content');
addMultiEventListener(document, 'drag drop', 'image_drop');

function show_toast(text) {
    var x = document.getElementById("amm_drcfw_toast_msg");
    x.innerHTML = eval('options.' + text);
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "")
    }, 3000);
}


document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode == 44) {
        stopPrntScr();
    }
});

document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);





// // bagwar.js

// var show_msg = '';
// if (show_msg !== '0') {
//     var options = {
//         view_src: "View Source is disabled!",
//         inspect_elem: "Inspect Element is disabled!",
//         right_click: "Right click is disabled!",
//         copy_cut_paste_content: "Cut-Copy-Paste is disabled!",
//         image_drop: "Image Drag-n-Drop is disabled!",
//         download_disabled: "Download is Disabled",
//         screenshot_disabled: "Screenshots are not allowed!"
//     }
// } else {
//     var options = '';
// }

// function nocontextmenu(e) {
//     return false;
// }
// document.oncontextmenu = nocontextmenu;
// document.ondragstart = function () {
//     return false;
// }

// document.onmousedown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode === 123) {
//         if (show_msg !== '0') {
//             show_toast('inspect_elem');
//         }
//         return false;
//     }
// }

// document.onkeydown = function (event) {
//     event = (event || window.event);
//     // Disable Ctrl + S (83)
//     if (event.ctrlKey && event.keyCode === 83) {
//         event.preventDefault();
//         show_toast('download_disabled');
//         return false;
//     }
//     if (event.ctrlKey && event.keyCode === 85) {
//         if (show_msg !== '0') {
//             show_toast('view_src');
//         }
//         return false;
//     }

//     // Disable Ctrl + Shift + C (67/99)
//     if (event.ctrlKey && event.shiftKey && (event.keyCode === 67 || event.keyCode === 99)) {
//         if (show_msg !== '0') {
//             show_toast('inspect_elem');
//         }
//         return false;
//     }

//     // Show message when user tries to take a screenshot
//     if (event.keyCode === 44 || // PrintScreen key code
//         ((event.keyCode === 83 || event.keyCode === 115) && event.shiftKey && event.metaKey)) { // Windows key + Shift + S
//         show_toast('screenshot_disabled');
//         return false;
//     }

// }

// // Redirect to about:blank if the URL starts with view-source:
// function redirectViewSource() {
//     if (window.location.href.startsWith("view-source:")) {
//         window.location.href = "about:blank";
//     }
// }

// // Call the function to redirect view-source protocol
// redirectViewSource();

// // Overlay a transparent div to prevent screenshots
// function overlayTransparentDiv() {
//     var overlayDiv = document.createElement('div');
//     overlayDiv.style.position = 'fixed';
//     overlayDiv.style.top = '0';
//     overlayDiv.style.left = '0';
//     overlayDiv.style.width = '100%';
//     overlayDiv.style.height = '100%';
//     overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Transparent background
//     overlayDiv.style.zIndex = '9999'; // Ensure it's on top
//     document.body.appendChild(overlayDiv);
// }

// // Call the function to overlay the transparent div
// overlayTransparentDiv();

// function addMultiEventListener(element, eventNames, listener) {
//     var events = eventNames.split(' ');
//     for (var i = 0, iLen = events.length; i < iLen; i++) {
//         element.addEventListener(events[i], function (e) {
//             e.preventDefault();
//             if (show_msg !== '0') {
//                 show_toast(listener);
//             }
//         });
//     }
// }
// addMultiEventListener(document, 'contextmenu', 'right_click');
// addMultiEventListener(document, 'cut copy paste print', 'copy_cut_paste_content');
// addMultiEventListener(document, 'drag drop', 'image_drop');

// function show_toast(text) {
//     var x = document.getElementById("amm_drcfw_toast_msg");
//     x.innerHTML = eval('options.' + text);
//     x.className = "show";
//     setTimeout(function () {
//         x.className = x.className.replace("show", "")
//     }, 3000);
// }

