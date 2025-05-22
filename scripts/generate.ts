import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { Redis } from "@upstash/redis";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astraDB";

async function generateEmbeddings() {
  // await Redis.fromEnv().flushdb();
  const vectorStore = await getVectorStore();

  //Delete all the existing embeddings stored in the vector dbs
  (await getEmbeddingsCollection()).deleteMany({});

  const loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  const docs = (await loader.load())
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });

  //   console.log(docs);

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
  const splitDocs = await splitter.splitDocuments(docs);

  //   console.log(splitDocs);
  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
