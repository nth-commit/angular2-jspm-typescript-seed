export function removeTrailingSlash(path: string) {
  path = path.replace(/\/$/, ""); // forward slash
  path = path.replace(/\\$/, ""); // backward slash
  return path;
}
