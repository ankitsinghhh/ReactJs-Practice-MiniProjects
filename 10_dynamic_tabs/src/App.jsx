import { useState } from 'react'

import './App.css'
import Tabs from './components/tabs'

function RandomComponent(){
  return <h1>Some Random Component</h1>
}

function App() {

  const tabs = [
    {
      label: 'Tab 1',
      content: 'This is the content of Tab 1. It contains some random text to fill up the space. It is important to ensure the content is exactly fifty words long to meet the requirement. Therefore, we need to be mindful while creating the content.',
    },
    {
      label: 'Tab 2',
      content: 'Here is the content for Tab 2. Like Tab 1, this tab also needs to have fifty words in its content. This helps in testing the tab functionality effectively. By maintaining the word count, we can ensure that the component is working as expected.',
    },
    {
      label: 'Tab 3',
      content: 'Welcome to Tab 3. This content serves as a placeholder to demonstrate the tab functionality. We need fifty words here as well to keep the consistency. Having the same word count across all tabs makes it easier to test and validate the functionality.',
    },
    {
      label: 'Tab 4',
      content: 'This is Tab 4 content. The goal is to have fifty words in each tab to ensure consistency. This helps in validating the tabs functionality effectively. Each tab content is designed to meet the word count requirement, making it easier to test.',
    },
    {
      label: 'Tab 5',
      content: 'Tab 5 content goes here. We are filling it with fifty words to match the other tabs. This consistency helps in testing and validation. Having the same word count across all tabs ensures that the component is functioning correctly and meets the requirements.',
    },
    {
      label: 'Tab 6',
      content: <RandomComponent />,
    },
  ];

function handleChange(currentTabIndex){
  console.log('Tab changed')
  console.log(currentTabIndex)
}
  

  return (
    <>
     <div className="mega-wrapper">

    <Tabs tabsContent={tabs} onChange={handleChange} />
    



     </div>

    </>
  )
}

export default App
