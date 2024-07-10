import React, { useState } from 'react';

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }

  return (
    <div className='wrapper'>
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}  onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className='label'>
              {tabItem.label}
            </span>
          </div>
        ))}
      </div>
      <div className='content'>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content && (
          <div>
            <h2>This tabname is  {tabsContent[currentTabIndex].label}</h2>
            <div>
              {typeof tabsContent[currentTabIndex].content === 'string' ? (
                <p>{tabsContent[currentTabIndex].content}</p>
              ) : (
                tabsContent[currentTabIndex].content
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
