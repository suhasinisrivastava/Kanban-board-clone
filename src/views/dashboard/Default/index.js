import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import ProjectHeader from "./ProjectHeader";
import TabsContainer from "./TabsContainer";
import TodosContainer from "./TodosContainer";

import styles from "./MainContent.module.css";

import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
    <ProjectHeader />
    <TabsContainer />
    <TodosContainer />
  </div>
  );
};

export default Dashboard;
