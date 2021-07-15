export function SetLocalStorageItem(name, value) {
  localStorage.setItem(name, value);
}

export function GetLocalStorageItem(name) {
  return localStorage.getItem(name);
}
