export const transformJS = (code:string)=>{
  const regex = /\/\/GRID_START([\s\S]*?)\/\/GRID_END/;
  const htmltags = code?.match(regex);
  const component = htmltags?.[1];

  const parser = new DOMParser();
  const doc = parser.parseFromString(component as string, 'text/html');
  
  return doc;
};

export const componentExtractor = (element: any):any => {
  const tagName = element.tagName.toLowerCase();
  const attributes = [...element.attributes].reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});

  let textContent = '';
  element.childNodes.forEach((child:any) => {
    if (child.nodeType === Node.TEXT_NODE) {
      // Add text node content and trim whitespace
      textContent += child.textContent.trim();
    }
  });

  const children:any = [];
  element.childNodes.forEach((child:any) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      children.push(componentExtractor(child));
    }
  });

  if (!tagName) {
    return;
  }

  const id = attributes.id || `${tagName}-${Math.random().toString(36).slice(2,9)}`;

  return {
    id: id,
    tag: tagName,
    props: attributes,
    text: textContent,
    children: children.length ? children : null,
  };
}

export const componentSerializer = (doc: any):any => {
  const result:any = [];

  doc.body.childNodes.forEach((child:any) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      result.push(componentExtractor(child));
    }
  });

  return result;
}