import type { Root } from "mdast";

/** Normalize the customary two full-width paragraph-leading spaces at render time. */
export function remarkNormalizeIndents() {
  return (tree: Root) => {
    for (const node of tree.children) {
      if (node.type !== "paragraph") continue;
      const first = node.children[0];
      if (first?.type === "text") first.value = first.value.replace(/^\u3000{1,2}/u, "");
    }
  };
}
