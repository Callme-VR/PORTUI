"use server";

import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";

const readFileCache = cache(async (filepath: string) => {
  return await fs.readFile(filepath, "utf-8");
});

export const getComponent = async (fileName: string | null, folder: string) => {
  const baseDir = path.join(process.cwd(), "components/portui");
  if (!fileName || fileName === "undefined") {
    const fullpath = path.join(baseDir, `${folder}.tsx`);
    return await readFileCache(fullpath);
  }
  const fullpath = path.join(baseDir, folder, `${fileName}.tsx`);
  return await readFileCache(fullpath);
};

export type CopyComponentState = {
  error: string;
  content: string;
  success: boolean;
};

export const copyComponent = async (
  prevState: CopyComponentState,
  formData: FormData
) => {
  try {
    const folder = formData.get("folder") as string;
    const fileName = formData.get("filename") as string;

    if (!folder || !fileName) {
      return {
        error: "Invalid folder or file name",
        content: prevState.content,
        success: false,
      };
    }

    const content = await getComponent(fileName, folder);

    if (!content) {
      return {
        error: "Component not found",
        content: "",
        success: false,
      };
    }

    return {
      error: "",
      content: content,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to copy the component",
      content: "",
      success: false,
    };
  }
};
