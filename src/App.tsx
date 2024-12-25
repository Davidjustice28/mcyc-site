import React, { createContext, useState } from 'react';
import { HomePage } from './pages/Homepage';
import { MainNavBar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { SnippetSearchPage } from './pages/SnippetSearchPage';
import { AboutPage } from './pages/Aboutpage';
import { SnippetUploadPage } from './pages/SnippetUploadPage';
import { Snippet } from './types/database/snippets.types';
import { mockSnippets } from './mocks/mockSnippets';
import { LoginPage } from './pages/LoginPage';
import { UserProfile } from './types/database/userProfiles.types';
import { UserVaultPage } from './pages/UserVaultPage';

export const SnippetsContext = createContext<Snippet[]>([]);
export const LoggedInUserContext = createContext<UserProfile|null>(null)


function App() {
  const [loggedInUser, ] = useState<UserProfile|null>(null)
  const [snippets, setSnippets] = useState<Array<Snippet>>(mockSnippets)

  // TODO: update to use actually axios or fetch calls when backend is created
  function uploadSnippet(snippet: Snippet): void {
    const updatedSnippets = [...snippets, snippet]
    setSnippets(updatedSnippets)
    console.log(`Snippet with id ${snippet.id} has been uploaded to DB`, {snippet})
  }


  return (
    <SnippetsContext.Provider value={snippets}>
      <LoggedInUserContext.Provider value={loggedInUser}>
        <div className="App">
          <MainNavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/snippets/search' element={<SnippetSearchPage snippets={snippets}/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/snippets/upload' element={<SnippetUploadPage snippets={snippets} uploadSnippetFunction={uploadSnippet}/>}/>
            <Route path='/vault/' element={<UserVaultPage/>}/>
          </Routes>
        </div>
      </LoggedInUserContext.Provider>
    </SnippetsContext.Provider>
  );
}

export default App;
