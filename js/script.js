var scrollStrenght=0;

window.onload = function(){
    var element = document.getElementsByClassName("block");
    var width = window.getComputedStyle(element[0]).getPropertyValue("width");
    var marginLeft = window.getComputedStyle(element[0]).getPropertyValue("margin-left");
    var marginRight = window.getComputedStyle(element[0]).getPropertyValue("margin-right");
    var blockSize = (parseInt(getValue(width)) + parseInt(getValue(marginLeft)) + parseInt(getValue(marginRight)) + 5);

    var blocksOnScreen = window.innerWidth / blockSize;

    scrollStrenght = blockSize * parseInt(blocksOnScreen);
}

function OnSliderButtonClick(containerID, direction)
{
    var container = document.getElementById(containerID);
    var containerWidth = getValue(window.getComputedStyle(container).getPropertyValue("width"))*-1;
    var position = container.getAttribute('style');
    position = parseInt(getValue(position));

    const slideAnimationForward = [
        {
            left: position + "px"
        },
        {   
            left: (position - scrollStrenght) + "px"
        }
    ]

    const slideAnimationBackward = [
        {
            left: position + "px"
        },
        {   
            left: (position + scrollStrenght) + "px"
        }
    ]
    
    const slideAnimationOptions = {
        duration: 400,
        iterations: 1,
        fill: 'forwards',
    }

    switch(direction)
    {
        case "Right":
        case "right":
        case "R":
        case "r":
            if(position - scrollStrenght > containerWidth)
            {
                container.animate(slideAnimationForward, slideAnimationOptions);
                container.style.left = (position - scrollStrenght) + "px";
            }
            break;

        case "Left":
        case "left":
        case "L":
        case "l":
            if(position < 0)
            {
                container.animate(slideAnimationBackward, slideAnimationOptions);
                container.style.left = (position + scrollStrenght) + "px";
            }
            break;
    }
}

function getValue(string)
{
    var num="";

    for(var i=0; i < string.length; i++)
    {
        if(isNumber(string[i]))
        {
            num += string[i];
        }    
    }

    return num
}

function isNumber(char)
{
    return char == '0' || char == '1' || char == '2' || char == '3' || char == '4' || char == '5' || char == '6' || 
    char == '7' || char == '8' || char == '9' || char == '-' || char == '.';
}