import parseLink, { Links } from "parse-link-header";

const isLastPage = (pageLinks: Links) => {
  return (
    Object.keys(pageLinks).length === 2 && pageLinks.first && pageLinks.prev
  );
};

export const getPageCount = (linkHeader: any): number => {
  if (!linkHeader) {
    return 1;
  }

  const links = parseLink(linkHeader);

  if (links === null) {
    return 1;
  }

  if (isLastPage(links)) {
    return Number(links.prev.page);
  }

  if (links.last) {
    return Number(links.last.page);
  }

  return 1;
};
