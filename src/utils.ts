export const faviconImgProps = (baseUrl: string) => ({
  src: `https://www.google.com/s2/favicons?sz=32&domain_url=${baseUrl}`,
  // src: `${baseUrl}/favicon.ico`,
  onError: (e: any) => {
    e.target.src = `${baseUrl}/favicon.ico`;
  },
  onLoad: (e: any) => {
    if (e.target.offsetWidth === 16) {
      e.target.src = `${baseUrl}/favicon.ico`;
      e.target.classList.add("resize");
    }
  },
});

export const openUrl = (url: string) => window.open(url);

export const getBaseUrl = (url: string) => {
  return new URL(url).origin;
};
