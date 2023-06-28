import { useParams } from "react-router-dom";



export default function TopicItem({contents}) {
  


    const params = useParams();
  const topic_id = params.topic_id;
  const selected_topic ={
    title:'sorry',
    description:'Not Found'
  }

  // 아직 데이터를 어떻게 가져와야할지 모르겠다. 

  // for(let i=0; contents.length; i++){
  //   if(contents[i].id === Number(topic_id)){
  //      selected_topic = contents[i];
  //     break;
  //   }
  // }
  console.log("params :", params, params.topic_id); 
  
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.description}</p>
    </div>
  );
}