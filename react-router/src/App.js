import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import "./styles/style.css";
import Topic from './pages/Topic';
import TopicItem from './pages/TopicItem';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" exact element={<Home />} />
      {/* path="/" 는  사용자가 웹사이트에 아무런 path를 지정하지 않고 들어왔을 때 라우팅 되는 것 */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/topic/*" element={<Topic />} >
        <Route path=":topic_id" element={<TopicItem />} />
      </Route>
      {/* Topic 내에 작성된 네비게이션을 클릭하면 Topic의 내용 자체가 전부 사라지게 되는데, 이를 막기 위해 여러 라우팅을 매칭하고 싶을 경우
          function App 내에서 <Route path='/topic/*' element={<Topics />}></Route>
        이렇게 path 뒤에 *을 붙여주면 잘 작동합니다! */}
      <Route path="/*" element={<NotFound />} />
      {/* 여기서 *는 '와일드카드문자'로써 '전체'를 의미, 즉, path가 정해져 있지 않은 경로를 입력하면 모두 NotFound 페이지 나타남 */}
      

        

      </Routes> 
    </Router>
  );
}

export default App;
