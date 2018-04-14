import React from 'react'
import UserInfoContainer from './user/UserInfoContainer'
import AboutDialog from './dialogs/AboutDialog'
import DeleteDialog from './dialogs/DeleteDialog'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { FiltersLink } from './filters/FiltersLink';

export const AppBarContainer = (props) => {
  const appBarStyle = { height: '10%', maxHeight: '60px', backgroundColor: 'white' };
  const showingDialog = props.dialogState.modalProps.open;

  return (
    <Toolbar style={appBarStyle}>
      <ToolbarGroup >
        <ToolbarTitle text="Find Swim" />
        <AboutDialog />
        {showingDialog && <DeleteDialog {...props.dialogState} onConfirm={props.deleteCard} hideDeleteDialog={props.hideDeleteDialog} />}
      </ToolbarGroup>
      <ToolbarGroup>
        <FiltersLink {...props}/>
        <UserInfoContainer auth={props.auth} profile={props.profile} firebase={props.firebase} />
      </ToolbarGroup>
    </Toolbar>
  );
};
