//total 5000

import { isNull } from "lodash";

const apiPhotosMock = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

// get type from object
type IApiResponsePhoto = ReturnType<() => typeof apiPhotosMock>;

type IPageSearchTerm = {
  currentPage: number;
  itemPerPage: number;
};

type IFilteSearchTerm = Partial<IApiResponsePhoto>;

interface IFilterResponseTerm extends IPageSearchTerm {
  photos: IApiResponsePhoto[];
  totalPage: number;
}

const apiPhotos = "https://jsonplaceholder.typicode.com/photos";

const fetchPhotos = async (): Promise<IApiResponsePhoto[] | string> => {
  try {
    const req = await fetch(apiPhotos);

    const response: IApiResponsePhoto[] = await req.json();

    return response;
  } catch (error: unknown) {
    return "Error" + error;
  }
};

const fetchDatawithPaginationSearchTerm = async (
  page: Partial<IPageSearchTerm>,
  filterKey: IFilteSearchTerm,
): Promise<IApiResponsePhoto[] | string | Partial<IFilterResponseTerm>> => {
  const getPhotosRequest = await fetchPhotos();

  if (typeof getPhotosRequest == "object") {
    //array of data
    //filter
    const getPhotos: IApiResponsePhoto[] = getPhotosRequest;

    const getFilteredData = getPhotos.filter(
      (photo: { [key: string]: string | number | object | boolean }) => {
        return Object.entries(filterKey).every(([key, value]) => {
          return typeof value == "string"
            ? photo[key].toString().toLowerCase().includes(value)
            : photo[key] == value;
        });
      },
    );

    // current page
    // total page
    // item per page
    if (
      typeof page !== "undefined" &&
      typeof page == "object" &&
      page.currentPage &&
      page.itemPerPage
    ) {
      const { currentPage, itemPerPage } = page;
      let startIndex = (currentPage - 1) * itemPerPage;
      let endIndex = startIndex + itemPerPage;
      let totalPage = Math.ceil(getFilteredData.length / itemPerPage);

      const filterDataPerPage = getFilteredData.slice(startIndex, endIndex);

      return { photos: filterDataPerPage, totalPage, itemPerPage, currentPage };
    } else {
      return { photos: getFilteredData, totalPage: getFilteredData.length };
    }
  } else {
    return "Error" + getPhotosRequest;
  }
};

fetchDatawithPaginationSearchTerm(
  {
    currentPage: 3,
    itemPerPage: 8,
  },
  {
    title: "accusamus",
  },
).then((res) => {
  if (typeof res == "object" && !isNull(res) && "photos" in res) {
    console.table(res.photos);
  }
});
