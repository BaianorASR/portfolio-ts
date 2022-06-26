interface IAttributes {
  name: string;
  svg: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface IDatum {
  id: number;
  attributes: IAttributes;
}

interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IMeta {
  pagination: IPagination;
}

export interface IStacksResponse {
  data: IDatum[];
  meta: IMeta;
}
