import { APIResource } from "./types";

const isAPIResourcePath = (resource: any): resource is APIResource => {
  return typeof resource === 'object' && typeof resource.url === 'string'
}

export const getAPIResourceID = (resource: any) => {
  if (!isAPIResourcePath(resource)) return null;

  const url = new URL(resource.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const path = pathParts[pathParts.length - 1];
  return path;
}
