import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const CommonPagination = ({ setPageNumber }) => {
   const [pageNo, setPageNo] = React.useState(1);
   const handleChange = (event, value) => {
      setPageNo(value);
      setPageNumber(value);
   };

   return (
      <Stack sx={{ marginTop: '30px', alignItems: 'center' }}>
         <Pagination
            count={10}
            page={pageNo}
            onChange={handleChange}
            shape='rounded' />
      </Stack>
   )
}

export default CommonPagination