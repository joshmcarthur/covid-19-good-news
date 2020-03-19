import React from "react";
import TopAppBar, {
  TopAppBarFixedAdjust, 
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';

export default ({children}) => {
  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align='start'>     
            <TopAppBarTitle>Only Good News</TopAppBarTitle>
          </TopAppBarSection>
      
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust>
        {children}
      </TopAppBarFixedAdjust>
      </>
  );
}