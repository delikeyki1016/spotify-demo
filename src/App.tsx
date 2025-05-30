import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Loading from './common/components/Loading';
// lazy loading : 컴포넌트 호출 시에 들고 오겠다.
const AppLayout = React.lazy(()=> import('./layout/AppLayout'))
const HomePage = React.lazy(()=> import('./pages/HomePage/HomePage'))
const SearchPage = React.lazy(()=> import('./pages/SearchPage/SearchPage'))
const SearchWithKeywordPage = React.lazy(()=> import('./pages/SearchPage/SearchWithKeywordPage'))
const PlaylistDetailPage = React.lazy(()=> import('./pages/Playlist/PlaylistDetailPage'))
const PlaylistPage = React.lazy(()=> import('./pages/Playlist/PlaylistPage'))

// 0. sidebar (playlist, menu)
// 1. 홈페이지 / 
// 2. 검색페이지 /search
// 3. 검색결과 /search/:keyword
// 4. 플레이 리스트 상세 /playlist/:id
// 5. mobile : playlist view /playlist
function App() {
  return (
    // Suspense : 컴포넌트 호출 시에 로딩 중 표시
    <Suspense fallback={<Loading />}> 
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
        <Route path="playlist/:id" element={<PlaylistDetailPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
