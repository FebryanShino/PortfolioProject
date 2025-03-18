export type SortDirectionType = 'ASC' | 'DESC';

export class DataUtil {
  static searchData<T>(data: T[], keywords: string, searchKey: string): T[] {
    return data.filter((item: any) =>
      item[searchKey].toLowerCase().includes(keywords.toLowerCase()),
    );
  }

  static sortData(data: any[], sortDirection: SortDirectionType): any[] {
    const isAscending = sortDirection === 'ASC';
    const currentData = data;

    if (isAscending) {
      currentData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      currentData.sort((a, b) => b.name.localeCompare(a.name));
    }
    return currentData;
  }

  static paginate(array: any, pageSize: number, pageNumber: number): any[] {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
}
