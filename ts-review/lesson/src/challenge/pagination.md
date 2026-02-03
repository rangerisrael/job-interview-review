<!-- pagination -->

pageSize = 5
totalDataLength = 100;
totalPage = totalDataLength / pageSize
currentPage = 1
page_start = 1
page end = 10

localhost:3000/photos?page=1&limit=10&id=1&userId=68;

data filter title='hello'

40/5

1-8
9-16
17-24
25-32

formula  
currentPage = 1
itemPerPage = 8
filterDataLength = 200

startIndex = (currentPage - 1) * itemPerPage
endIndex = startIndex + itemPerPage
totalPage = Math.ceil(filterDataLength / itemPerPage)
