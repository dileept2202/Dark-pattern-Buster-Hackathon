
function autoHighlightText() 
{
  let textToHighlight = "[%]|Deal of the day|Coupon|FREE delivery|Thursday, |15 February.|Order within |21 hrs|34 mins|Add gift options|ratings|offers|bought in past month|Limited time deal"; // Specify the text to highlight
  let regex = new RegExp(textToHighlight, "gi");
  
  document.body.querySelectorAll('*').forEach(node => 
  {
    node.childNodes.forEach(childNode => 
    {
      if (childNode.nodeType === Node.TEXT_NODE) 
      {
        let textContent = childNode.textContent;
        let matches = textContent.match(regex);
        if (matches) 
        {
          let span = document.createElement('span');
          span.style.backgroundColor = 'yellow'; 
          textContent = textContent.replace(regex, match => `<span style="background-color: yellow">${match}</span>`);
          
          span.innerHTML = textContent;
          childNode.parentNode.replaceChild(span, childNode);
        }
      }
    });
  });
} 

autoHighlightText();
  