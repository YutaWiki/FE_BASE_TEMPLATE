export interface IMenu {
    id: string;
    code: string;
    name: string;
    url: string;
    icon: string;
    childId: IMenu[];
    parentId: string | null;
    orderBy: number;
    type: string;
}
