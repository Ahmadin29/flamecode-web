import { ALLOWED_EDIT_EXTENSIONS } from "@/consts/app/allowedEditExtensions";

export async function openDirectory(dirHandle:any,parent = '') {

  const entries = [];

  for await (const entry of dirHandle.values()) {
    if (entry.kind === 'file') {
      const fileHandle = await dirHandle.getFileHandle(entry.name);
      const file = await fileHandle.getFile();
      const content = await file.text();

      entries.push({
        path: `${parent}/${entry.name}`,
        name: entry.name,
        kind: entry.kind,
        content: content,
        fileHandle: fileHandle,
      });
    } else if (entry.kind === 'directory') {
      if (['node_modules','.git','.vscode','.next'].includes(entry.name)) {
        const directory = {
          path: `${parent}/${entry.name}`,
          name: entry.name,
          kind: entry.kind,
          ignored: true,
        };
  
        entries.push(directory);
      }else{
        const subDirHandle = await dirHandle.getDirectoryHandle(entry.name);
        const subEntries:any = await openDirectory(subDirHandle, `${parent}/${entry.name}`);

        const directory = {
          path: `${parent}/${entry.name}`,
          name: entry.name,
          kind: entry.kind,
          child: subEntries,
        };

        entries.push(directory);
      }
    }
  }

  return entries;
}

export function isEditableFile(fileName:string) {
  return ALLOWED_EDIT_EXTENSIONS.some(ending => fileName.endsWith(ending));
}

export async function getFileContent(item:any) {
  const file = await item.fileHandle.getFile();
  const content = await file.text();

  return content;
}