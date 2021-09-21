import React from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import DirView from "./scenes/dir-view/dir-view.scene";
import FileView from "./scenes/file-view/file-view.scene";

const Dashboard = props => {
  const isDir = Array.isArray(props.ghData);
  return(
    <>
      <NavbarComponent/>
      {
        isDir ? (
          <DirView {...props} />
        ) : (
          <FileView {...props} />
        )
      }
    </>
  );
};

export default Dashboard;
