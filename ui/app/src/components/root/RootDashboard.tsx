import React from 'react';
import { Workspace } from '../../models/workspace';

import { ResourceCardList } from '../shared/ResourceCardList';
import { Resource } from '../../models/resource';
import { PrimaryButton, Stack } from '@fluentui/react';
import { CreateResource } from '../shared/CreateUpdateResource/CreateResource';
import { ResourceType } from '../../models/resourceType';
import { useBoolean } from '@fluentui/react-hooks';

interface RootDashboardProps {
  selectWorkspace: (workspace: Workspace) => void,
  workspaces: Array<Workspace>,
  updateWorkspace: (w: Workspace) => void,
  removeWorkspace: (w: Workspace) => void
}

export const RootDashboard: React.FunctionComponent<RootDashboardProps> = (props: RootDashboardProps) => {
  const [createPanelOpen, { setTrue: createNew, setFalse: closeCreatePanel }] = useBoolean(false);

  return (
    <>
      <Stack horizontal horizontalAlign="space-between" style={{ padding: 10 }}>
        <Stack.Item><h1>Workspaces</h1></Stack.Item>
        <Stack.Item style={{width:200, textAlign: 'right'}}><PrimaryButton iconProps={{ iconName: 'Add' }} text="Create new" onClick={createNew}/></Stack.Item>
        
        <CreateResource isOpen={createPanelOpen} onClose={closeCreatePanel} resourceType={ResourceType.Workspace}/>
      </Stack>
      <ResourceCardList
        resources={props.workspaces}
        selectResource={(r: Resource) => props.selectWorkspace(r as Workspace)}
        updateResource={(r: Resource) => props.updateWorkspace(r as Workspace)}
        removeResource={(r: Resource) => props.removeWorkspace(r as Workspace)}
        emptyText="No workspaces to display. Create one to get started." />
    </>
  );
};
