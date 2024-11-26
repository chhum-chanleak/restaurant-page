// Create main banner for content
type CreateMainBanner = (description: string) => HTMLElement;
export const createMainBanner: CreateMainBanner = (description) =>  {
  const MAIN_BANNER = document.createElement("div");

  MAIN_BANNER.setAttribute("class", ".main-banner");
  MAIN_BANNER.textContent = `${description}`;

  return MAIN_BANNER;
};

// Append a list of child elements to a parent element
type AppendChildNodes = (parent: HTMLElement, ...childNodes: HTMLElement[]) => void;
export const appendChildNodes: AppendChildNodes = (parent, ...childNodes) => {
  for (let i = 0; i < childNodes.length; i += 1) {
    parent.appendChild(childNodes[i]);
  }
};