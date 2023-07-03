import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Space, Rate, Button } from 'antd';
import { getProjectById } from "../helper";
import {headerStyle, contentStyle, textStyles, siderStyles} from "../styles/mainTheme.js"
import FeedbackBox from "../components/project/feedbackBox";

export default function Project({token, clientID}) {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const { Header, Content, Sider } = Layout;

  useEffect(() => {
    (async () => {
      const project = await getProjectById({ token, id });
      setCurrentProject(project);
    })();
  }, [clientID, token, id]);
  
  const { project, vico, raiting } = currentProject || {};

  return (
    <Space
      direction="vertical"
      style={{width: '100%',}}
      size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>{project?.title}</Header>
      <Layout hasSider>
        <Sider style={siderStyles}>
          <p>{vico?.name}</p>
          <span>
            <Rate disabled value={raiting?.overall_satisfication_rate} />
          </span>
          <FeedbackBox currentProject={currentProject}/>

        </Sider>
        <Content style={contentStyle}>
          <div style={textStyles}>
            Project information Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make .
          </div>
        </Content>

      </Layout>
    </Layout>
  </Space>
  )
}