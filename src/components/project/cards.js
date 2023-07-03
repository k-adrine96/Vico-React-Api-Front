import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { getProjectById } from '../../helper';

const Cards = ({projects}) => {
  const navigate = useNavigate(); 

return (
  <Row gutter={16}>
    {projects && projects.map(({title, id}) => {
        return (<Col span={6} key={id}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            onClick={() => navigate(`/projects/${id}`)}
          >
          <Card.Meta title={title} />
          </Card>
        </Col>)
      })
    }
  </Row>)
};

export default Cards;