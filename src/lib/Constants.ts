import toHash from 'tohash';

export const EXPORT_SIZES = [
  { id: '1x', name: '1x', value: 1 },
  { id: '2x', name: '2x', value: 2 },
  { id: '3x', name: '3x', value: 3 },
  { id: '4x', name: '4x', value: 4 },
];
export const EXPORT_SIZES_HASH = toHash(EXPORT_SIZES);
export const DEFAULT_EXPORT_SIZE = EXPORT_SIZES_HASH['2x'];

/**
 * @description Basic code snippet that shows up when page loads by default.
 */
export const EXAMPLE_CODE = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}`;
