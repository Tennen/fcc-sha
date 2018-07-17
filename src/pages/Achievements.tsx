import * as React from 'react';
import ActivityCard from '@Components/ActivityCard';
import Payload from '@/config/achievements.config';
import Card from 'antd/es/card';

const element = Payload.map((item, index) => {
    return <ActivityCard key={index} title={item.title} content={item.content} img={item.img}/>
});

export default () => (
    <div className="sha-achievements"> {element}
        <Card>
            <p style={{textAlign: "center"}}>... 更多活动 ...</p>
        </Card>
    </div>
)