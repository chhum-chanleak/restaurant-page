// Create main banner for content
type CreateMainBanner = (description: string) => HTMLElement;
export const createMainBanner: CreateMainBanner = (description) =>  {
  const MAIN_BANNER = document.createElement("div");

  MAIN_BANNER.setAttribute("class", ".main-banner");
  MAIN_BANNER.textContent = `${description}`;

  return MAIN_BANNER;
};