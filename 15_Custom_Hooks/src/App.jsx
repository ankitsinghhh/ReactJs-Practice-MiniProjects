import './App.css';
import UseFetchHookTest from './useFetchHook/test';
import UseOnClickOutsideTest from './use-outside-click/test';
import UseWindowResizeTest from './use-window-resize/test';

function App() {
  return (
    <>


    <div className="wrapper">
    <div className='fetch'>
<UseFetchHookTest />
</div>

<div className='click-outside'>

  <h1>Click Outside Hook</h1>

  
<UseOnClickOutsideTest />
</div>

<div className='resize'>
<UseWindowResizeTest />
</div>
    </div>

    
    </>
  );
}

export default App;
