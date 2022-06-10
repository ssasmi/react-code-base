import { useGlobalContext } from '../context/appContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from 'moment';
//import JobColumns from './JobColumns';
import { Box, Container } from '@mui/material';

const Jobs = () => {
  const { jobs, isLoading, deleteJob } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (jobs.length < 1) {
    return (
      <Box>
        <h5>
          Currently, you have no <span>JOBS </span>
          to display
        </h5>
      </Box>
    );
  }

  return (
    <>
      {/* <JobColumns /> */}
      <Container>
        {jobs.map((item) => {
          const { _id: id, company, position, status, createdAt } = item;
          let date = moment(createdAt);
          date = date.format('MMMM Do, YYYY');
          return (
            <article key={id} className='job'>
              <span className='icon'>{company.charAt(0)}</span>
              <span className='position'>{position.toLowerCase()}</span>
              <span className='company'>{company}</span>
              <span className='date'>{date}</span>
              <Box className='status' status={status}>
                {status}
              </Box>
              <div className='action-div'>
                <Link to={`/edit/${id}`} className='edit-btn' type='button'>
                  <FaEdit />
                </Link>
                <button
                  className=' delete-btn'
                  type='button'
                  onClick={() => deleteJob(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </Container>
    </>
  );
};

export default Jobs;
