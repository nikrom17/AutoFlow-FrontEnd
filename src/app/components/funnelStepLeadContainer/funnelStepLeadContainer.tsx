import * as React from 'react';
import { Card } from 'antd';

interface Props {
  children: React.ReactChild;
  funnelStepName: string;
}

const FunnelStepLeadContainer: React.FC<Props> = ({ children, funnelStepName }) => (
  <Card title={funnelStepName} style={{ minWidth: '300px' }}>
    {children}
  </Card>
);

export default FunnelStepLeadContainer;
