import React from "react";
import DashboardScene from "../src/scenes/dashboard/dashboard.scene";

const Dashboard = props => <DashboardScene {...props} />;

Dashboard.getInitialProps = async (props) => {
  const { asPath: path } = props;
  const res = await fetch(`${process.env.BACKEND_URL}/github${path}`);
  const ghData = await res.json();
  const dirPath = path.split('/').slice(2).join('/');
  return { path, ghData, dirPath };
};

export default Dashboard;
