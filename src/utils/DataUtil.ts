type SortDirectionType = 'ASC' | 'DESC';

export class DataUtil {
  static searchData(data: any[], keywords: string): any[] {
    return data.filter((item: any) =>
      item.name.toLowerCase().includes(keywords.toLowerCase()),
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
