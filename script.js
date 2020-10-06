const get_font_size = document.querySelector('#inputSize')
const get_font_family = document.querySelector('#selectFont')
const get_font_color = document.querySelector('#inputColor')
const get_bg_color = document.querySelector('#inputBGcolor')
const get_enter_text = document.querySelector('#enterText')

const display = document.querySelector('#dislay')

// font size
inputSize.addEventListener('input', handleInput)
function handleInput(){
    const fontSize = get_font_size.value    // get the font size:
    console.log(fontSize)
	display.style.fontSize = fontSize // Set the style  // not displaying
    showSize.innerHTML = fontSize   // Show the size
}

// font family
selectFont.addEventListener('input', handleInput1)
function handleInput1(){
    // get the font family:
    const fontFam = get_font_family.value
    console.log(fontFam)
	// Set the style 
	display.style.fontFamily = fontFam  // not displaying
	// // Show the family
    showFont.innerHTML = fontFam
}

// font color
inputColor.addEventListener('input', handleInput2)
function handleInput2(){
    // get the font color:
    const fontColor = get_font_color.value
    console.log(fontColor)
	// Set the style 
	display.style.color = fontColor  // not displaying
	// // Show the color
    showColor.innerHTML = fontColor
}

// background color
inputBGcolor.addEventListener('input', handleInput3)
function handleInput3(){
    // get the background color:
    const bgColor = get_bg_color.value
    console.log(bgColor)
	// Set the style 
	display.style.backgroundColor = bgColor  // not displaying
	// // Show the background color
    showBGcolor.innerHTML = bgColor
}

// enter text
enterText.addEventListener('input', addText)
function addText(){
    const text = get_enter_text.value
    display.innerHTML = text
}


// console.log(font_family)
// console.log(font_color)
// console.log(bg_color)
// console.log(enter_text)