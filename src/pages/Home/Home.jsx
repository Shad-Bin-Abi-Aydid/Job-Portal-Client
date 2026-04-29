import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch("https://job-portal-server-sigma-rouge.vercel.app/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  const filteredJobs = jobs.filter(job => {
    const kw = keyword.toLowerCase().trim();
    const loc = location.toLowerCase().trim();

    const matchesKeyword =
      !kw ||
      job.title?.toLowerCase().includes(kw) ||
      job.company?.toLowerCase().includes(kw) ||
      job.category?.toLowerCase().includes(kw) ||
      job.requirements?.some(r => r.toLowerCase().includes(kw));

    const matchesLocation =
      !loc || job.location?.toLowerCase().includes(loc);

    return matchesKeyword && matchesLocation;
  });

  return (
    <div>
      <Banner
        keyword={keyword}
        setKeyword={setKeyword}
        location={location}
        setLocation={setLocation}
      />
      <HotJobs jobs={filteredJobs} keyword={keyword} location={location} />
    </div>
  );
};

export default Home;
