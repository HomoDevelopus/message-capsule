import { useState } from 'react';
import Login from './Login';
import CreateCapsule from './CreateCapsule';
import WriteMessage from './WriteMessage';
import OpenResult from './OpenResult';
import './App.css';

function App() {
  const [page, setPage] = useState('login'); // 'login' | 'create' | 'write' | 'result'

  // 임시 페이지 전환 (나중에 라우터로 교체)
  if (page === 'login') {
    return <Login onLogin={() => setPage('create')} />;
  }

  if (page === 'create') {
    return <CreateCapsule onNext={() => setPage('write')} />;
  }

  if (page === 'write') {
    return <WriteMessage capsuleTitle="2026 새해 덕담함" onNext={() => setPage('result')} />;
  }

  if (page === 'result') {
    return <OpenResult capsuleTitle="2026 새해 덕담함" />;
  }

  return <CreateCapsule />;
}

export default App;

