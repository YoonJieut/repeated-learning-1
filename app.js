

export default function(tagName, styleObject) {
  const element = document.createElement(tagName);
  let styleObjectKeyArray = Object .keys(styleObject);
  styleObjectKeyArray.forEach((key)=>{
    element.style[key] = styleObject[key];
  });
  return element;
}