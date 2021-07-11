import { APIResource, NamedResource } from "./types";

export const isNamedResource = (resource: any): resource is NamedResource => {
  return typeof resource === 'object' && typeof resource.name === 'string'
}

export const isAPIResourcePath = (resource: any): resource is APIResource => {
  return typeof resource === 'object' && typeof resource.url === 'string'
}

export const getAPIResourceID = (resource: any) => {
  if (!isAPIResourcePath(resource)) return null;

  const url = new URL(resource.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const path = pathParts[pathParts.length - 1];
  return path;
}
