import { useEffect, useState } from 'react';
import { Layout, Space } from 'antd';
import { useLocation } from 'react-router-dom';
import Cards from "../components/project/cards";
import { getProjectListByClientID } from "../helper";
import "../styles/css/projects.css"
import {headerStyle, contentStyle} from "../styles/mainTheme.js"

export default function ProjectListPage({token, clientID}) {
  const { Header, Content } = Layout;
  // const { state: { token = null, clientID = null } } = location;

  const [project, setProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const projects = await getProjectListByClientID({ token, clientID });
      setProjects(projects);
      // console.log('looping?');
    })();
  }, [clientID, token]);

  return (
    <Space
    direction="vertical"
    style={{width: '100%',}}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>Project List</Header>
      <Content style={contentStyle}>
        <Cards projects={project} />
      </Content>
    </Layout>
  </Space>
  )
}