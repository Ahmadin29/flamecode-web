import { lowerCase } from "lodash-es";
import beautify from 'js-beautify';

const BEAUTIFY_OPTIONS = {
  "indent_size": "2",
  "indent_char": " ",
  "max_preserve_newlines": "5",
  "preserve_newlines": true,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse,preserve-inline",
  "space_before_conditional": true,
  "unescape_strings": true,
  "jslint_happy": true,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": true,
  "e4x": true,
  "indent_empty_lines": true
}

export const transformJS = (code:string)=>{
  const regex = /\/\/GRID_START([\s\S]*?)\/\/GRID_END/;
  const htmltags = code?.match(regex);
  const component = htmltags?.[1];

  const parser = new DOMParser();
  const doc = parser.parseFromString(component as string, 'text/html');
  
  return doc;
};

export const componentExtractor = (element: any):any => {
  const tagName = lowerCase(element.tagName);
  const attributes = [...element.attributes].reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});

  let textContent = '';
  const children:any = [];

  element.childNodes.forEach((child:any) => {
    if (child.nodeType === Node.TEXT_NODE) {
      // Add text node content and trim whitespace
      textContent += child.textContent.trim();
    }
  });

  if (textContent.length > 0) {
    const id = `text-${Math.random().toString(36).slice(2,9)}`;

    children.push({
      id: id,
      tag: 'text',
      props: {},
      children: null,
      text: textContent,
    });
  }

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

export const formatHTML = (html:string) => {
  // Ensure self-closing tags have the proper format, like <img /> instead of <img>
  const selfClosingTags = ['img', 'br', 'input', 'hr', 'meta', 'link'];

  // Regex to find and replace tags that are missing a self-closing slash
  selfClosingTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
    html = html.replace(regex, `<${tag}$1/>`);
  });

  const formatted = html.replace(/(>)(<)(\/*)/g, '$1\n$2$3');

  let pad = 0;

  const rawBeautified = formatted.split('\n').map((line) => {
    let indent = 0;

    // Handle self-closing tags like <img />, <br />, <input />
    if (line.match(/<\w.*?\/>/)) {
      indent = 0;
    }
    // Handle closing tags
    else if (line.match(/^<\/\w/)) {
      pad -= 1;
    }
    // Handle opening tags
    else if (line.match(/^<\w[^>]*[^\/]>.*$/)) {
      indent = 1;
    }

    const padding = '  '.repeat(pad);
    pad += indent;
    return padding + line;
  }).join('\n')
  .replace(/class=/g, 'className=')
  .replace(/grid-cursor-pointer/g, '')
  return beautify.html(rawBeautified, BEAUTIFY_OPTIONS as any);
}