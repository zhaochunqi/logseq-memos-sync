export type Resource = {
  id: number
  filename: string,
  externalLink: string;
}

export type Memo = {
  content: string;
  id: number;
  rowStatus: string;
  updatedTs: number;
  visibility: string;
  displayTs: number;
  createdTs: number;
  resourceList: Resource[];
};

export type ListMemo = {
  data: Memo[];
};

export type SingleMemo = {
  data: Memo;
  message: string;
};