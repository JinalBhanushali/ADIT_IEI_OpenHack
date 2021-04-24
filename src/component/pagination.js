import React from 'react';

 const Pagination = ({ postsPerPage, totalPosts, paginate, setsearch }) => {
 const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
   <div className="">
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() =>{ paginate(number); setsearch("");}} href='#' className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>

    </nav>
   </div>
  );
};

export default Pagination;